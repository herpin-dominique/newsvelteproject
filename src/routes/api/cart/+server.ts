import { json } from '@sveltejs/kit';
import type { Product } from '$lib/server/Products';

export interface Cart {
	anonymousSession: string;
	items: {
		product: Product;
		number: number;
	}[];
}

// variable global
let carts: Cart[] = [];
console.log({ carts });

export async function POST({ request, locals }) {
	const product = await request.json();
	console.log('article ajouter au panier: ' + locals.session.anonyme);

	// initialise un panier vide
	if (carts.map((cart) => cart.anonymousSession).indexOf(locals.session.anonyme) < 0) {
		carts = [
			...carts,
			{
				anonymousSession: locals.session.anonyme,
				items: []
			}
		];
		console.log('panier créer');
	}

	console.log({ carts });

	// récupérer le panier
	let cart = carts.find((cart) => cart.anonymousSession === locals.session.anonyme)!;

	// ajoute le produit dans le panier
	cart.items = [...cart.items, { product, number: 1 }];

	// mettre à jour dans la mémoire
	carts = [...carts.filter((cart) => cart.anonymousSession === locals.session.anonyme), cart];

	console.log(cart);

	// renvoyer le panier
	return json({ cart });
}

//export async function DEL({ request, params, locals }) {
//const productId = params.productId;
//	const cartIndex = carts.findIndex((cart) => cart.anonymousSession === locals.session.anonyme);

//	if (cartIndex >= 0) {
//	const cart = carts[cartIndex];

// Recherchez l'indice du produit dans le panier
//	const productIndex = cart.items.findIndex((item) => item.product.id === productId);

//if (productIndex >= 0) {
// Supprimez le produit du panier
//	cart.items.splice(productIndex, 1);

// Mettez à jour le panier dans la mémoire
//	carts[cartIndex] = cart;

//		console.log('Produit supprimé du panier');
//	}
//	}

//	return json({ success: true });
//}
