export async function handle({ event, resolve }) {
	const { cookies } = event;
	let anonymeSession = cookies.get('anonymeSession');
	if (!anonymeSession) {
		anonymeSession = crypto.randomUUID();
		cookies.set('anonymeSession', anonymeSession);
	}

	return resolve({ ...event, locals: { session: { anonyme: anonymeSession } } });
}
