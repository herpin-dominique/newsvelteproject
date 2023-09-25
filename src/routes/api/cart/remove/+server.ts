import { json } from '@sveltejs/kit';

export async function POST({ request, locals }) {
	const product = await request.json();

	// renvoyer le panier
	return json({ cart });
}
