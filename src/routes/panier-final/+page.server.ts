import { getCart } from '$lib/server/Cart';
import { Products } from '$lib/server/Products';
import { fail } from '@sveltejs/kit';

export async function load({ locals }) {
	const serverCart = getCart(locals.session.anonyme);
	return {
		serverCartItems: serverCart?.items ?? [],
		Products
	};
}

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const nom = data.get('nom')?.toString().trim();
		const email = data.get('email')?.toString().trim();
		const telephone = data.get('telephone')?.toString().trim();
		const date = data.get('date')?.toString().trim();

		if (!nom || !email || !date) {
			return fail(400, { error: 'Veuillez remplir tous les champs obligatoires.' });
		}

		const serverCart = getCart(locals.session.anonyme);
		if (!serverCart || serverCart.items.length === 0) {
			return fail(400, { error: 'Votre panier est vide.' });
		}

		// Ici vous pouvez envoyer un email ou sauvegarder en base de données
		console.log('Nouvelle commande:', { nom, email, telephone, date, items: serverCart.items });

		return { success: true, nom };
	}
};
