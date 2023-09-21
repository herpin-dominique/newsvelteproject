// Importez les modules nécessaires
import { ServerFunction } from '@sveltejs/kit/types/endpoint';
import * as db from 'lib/server/database';
import { v4 as uuidv4 } from 'https://deno.land/std/uuid/mod.ts';

interface SessionUser {
	id: string;
	username: string;
	email: string;
	loggedIn: boolean; // Indique si l'utilisateur est connecté ou non
}

export const load: ServerFunction = async ({ request, context }) => {
	const cookies = context.cookies;
	const id = cookies.get('userid');

	if (!id) {
		const newUserId = uuidv4.generate();
		cookies.set('userid', newUserId, { path: '/' });
	}

	return {
		props: {
			todos: db.getTodos(id) || []
		}
	};
};

export const post: ServerFunction = async ({ request, context }) => {
	const cookies = context.cookies;
	const data = new URLSearchParams(await request.text());
	const description = data.get('description');

	if (description) {
		db.createTodo(cookies.get('userid'), description);
	}

	return {
		status: 200
	};
};
