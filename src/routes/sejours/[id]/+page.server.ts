import { getSejourById } from '$lib/server/Sejours';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const id = parseInt(params.id);
	const sejour = getSejourById(id);

	if (!sejour) {
		throw error(404, 'Séjour introuvable');
	}

	return { sejour };
}
