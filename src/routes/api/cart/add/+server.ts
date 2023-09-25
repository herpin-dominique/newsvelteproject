import { json } from '@sveltejs/kit';
import type { Product } from '$lib/server/Products';
import type { Cart } from '$lib/server/Cart';
import { addProduct } from '$lib/server/Cart';
import util from 'util';

export async function POST({ request, locals }) {
	const product = await request.json();
	//console.log('article ajouter au panier: ' + locals.session.anonyme);

	const cart = addProduct(locals.session.anonyme, product);

	//console.log(JSON.stringify(cart));

	// renvoyer le panier
	return json({ cart });
}
