import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
	return json({ success: true });
}
