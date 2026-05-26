export async function handle({ event, resolve }) {
	const { cookies } = event;
	let anonymeSession = cookies.get('anonymeSession');
	if (!anonymeSession) {
		anonymeSession = crypto.randomUUID();
		cookies.set('anonymeSession', anonymeSession, { path: '/' });
	}

	event.locals.session = { anonyme: anonymeSession };
	return resolve(event);
}
