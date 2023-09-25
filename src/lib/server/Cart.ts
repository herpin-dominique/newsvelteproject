import type { Product } from '$lib/server/Products';

export interface Cart {
	anonymousSession: string;
	items: {
		product: Product;
		number: number;
	}[];
}

let carts: Cart[] = [];

export function addProduct(anonymousSession: string, product: Product) {
	// initialise un panier vide
	if (carts.map((cart) => cart.anonymousSession).indexOf(anonymousSession) < 0) {
		carts = [
			...carts,
			{
				anonymousSession,
				items: []
			}
		];
	}

	let cart = carts.find((cart) => cart.anonymousSession === anonymousSession)!;

	// ajoute le produit dans le panier
	cart.items = [...cart.items, { product, number: 1 }];

	// mettre à jour dans la mémoire
	carts = [...carts.filter((cart) => cart.anonymousSession === anonymousSession), cart];

	return cart;
}

export function removeProduct(anonymousSession: string, product: Product) {
	const cart = carts.find((cart) => cart.anonymousSession === anonymousSession);

	if (!cart) {
		return null; // Le panier n'existe pas, rien à retirer
	}

	// Recherche de l'index de l'article dans le panier
	const index = cart.items.findIndex((item) => item.product.id === product.id);

	if (index !== -1) {
		// Si l'article est trouvé dans le panier, retirez-le
		cart.items.splice(index, 1);
	}

	return cart;
}
