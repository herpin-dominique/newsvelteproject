import { Products } from '$lib/server/Products';

export async function load() {
	return {
		Products: Products.filter((product) => product.category === 'journey')
	};
}
export interface Stay {
	name: string;
	address: string;
	startDate: Date;
	endDate: Date;
	numberOfPeople: number;
}
