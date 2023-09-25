import { json } from '@sveltejs/kit';
import { removeProduct } from '$lib/server/Cart';

export async function POST({ request, locals }) {
	const product = await request.json();
	//console.log('Article retiré du panier: ' + locals.session.anonyme);
	const cart = removeProduct(locals.session.anonyme, product);
	if (cart) {
		//console.log(JSON.stringify(cart));
		// Renvoyer le panier mis à jour
		return json({ cart });
	} else {
		// Si le panier n'existe pas ou l'article n'a pas été trouvé, renvoyer une réponse appropriée
		return json({ error: 'Article non trouvé dans le panier' }, { status: 400 });
	}
}
