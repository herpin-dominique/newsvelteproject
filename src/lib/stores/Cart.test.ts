import { get } from 'svelte/store';
import type { Product } from '$lib/server/Products';
import { createCart, type Cart } from './Cart';

describe('cart store', () => {
	const product: Product = {
		id: 1,
		category: 'test',
		image: 'tbd',
		name: 'test',
		price: 42
	};

	it('should be able to initialize a new cart', () => {
		const cart = createCart();
		const state = get<Cart>(cart);
		expect(state.items).toHaveLength(0);
	});

	it('should be able to add a product', () => {
		const cart = createCart();
		cart.addProduct(product);

		const state = get<Cart>(cart);
		expect(state.items[0]).toBe(product);
	});

	it('should add multiple product', () => {
		const cart = createCart();
		cart.addProduct(product, 2);

		const state = get<Cart>(cart);
		expect(state.items).toHaveLength(2);
		expect(state.items[1]).toBe(product);
	});

	it('should be able to initialize and retrieve items svelte style', () => {
		const cart = createCart([product]);
		const state = get<Cart>(cart);
		expect(state.items).toHaveLength(1);
		expect(state.items[0].name).toBe('test');
	});

	it('should be able to remove a products', () => {
		const cart = createCart([product]);
		cart.removeProduct(product);

		const state = get<Cart>(cart);
		expect(state.items).toHaveLength(0);
	});

	it('should show a summary', () => {
		const cart = createCart([product, product, product]);

		const state = get<Cart>(cart);
		expect(state.summary).toStrictEqual({
			items: [
				{
					productId: product.id,
					number: 3
				}
			]
		});
	});

	it('should update summary after a product is added', () => {
		const cart = createCart();

		let state = get<Cart>(cart);
		expect(state.summary).toStrictEqual({
			items: []
		});

		cart.addProduct(product);
		state = get<Cart>(cart);
		expect(state.summary).toStrictEqual({
			items: [
				{
					productId: product.id,
					number: 1
				}
			]
		});
	});

	it('should update summary after a product is removed', () => {
		const cart = createCart([product, product, product]);
		cart.removeProduct(product);

		let state = get<Cart>(cart);
		expect(state.summary).toStrictEqual({
			items: [
				{
					productId: product.id,
					number: 2
				}
			]
		});
	});
});
