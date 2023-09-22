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
