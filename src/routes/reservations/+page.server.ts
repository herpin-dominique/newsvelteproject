import { Products } from '$lib/server/Products';

export async function load() {
	return {
		Products: Products.filter((product) => product.category === 'velo')
	};
}
