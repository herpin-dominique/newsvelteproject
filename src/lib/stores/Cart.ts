import type { Product } from '$lib/server/Products';
import { writable } from 'svelte/store';
import { get } from 'svelte/store';

export interface Cart {
	items: Product[];
	summary: {
		items: {
			productId: number;
			number: number;
		}[];
		total: number;
	};
}

export function createCart(initialItems: Product[] = []) {
	const store = writable<Cart>({ items: initialItems, summary: { items: [], total: 0 } });

	function addProduct(product: Product, quantity: number = 1) {
		const currentState = get(store);
		store.set({
			...currentState,
			items: [...currentState.items, ...Array(quantity).fill(product)]
		});
		updateSummary();
	}

	function removeProduct(product: Product) {
		const currentState = get(store);
		const index = currentState.items.indexOf(product);
		currentState.items.splice(index, 1);

		store.set({
			...currentState,
			items: currentState.items
		});
		updateSummary();
	}

	function updateSummary() {
		// construire le summary
		store.update((cart) => {
			const productIds = Array.from(new Set(cart.items.map((product) => product.id)));
			const summary = {
				items: productIds.map((productId) => {
					const number = cart.items.filter((product) => product.id === productId).length;
					return {
						productId,
						number
					};
				}),
				total: productIds.reduce((partialSum, productId) => {
					const products = cart.items.filter((product) => product.id === productId);
					const subTotal = products.length * products[0].price;
					return partialSum + subTotal;
				}, 0)
			};

			return { ...cart, summary };
		});
	}

	updateSummary();

	return {
		...store,
		addProduct,
		removeProduct
	};
}
