// calcul.ts
import { velos } from '../api/velos';

export function calculateTotal(selectedBikes: { [key: number]: number }) {
	let total = 0;
	for (const bikeId in selectedBikes) {
		const bike = velos.find((v) => v.id === +bikeId); // Convertir l'ID en nombre
		if (bike) {
			total += bike.price * selectedBikes[bikeId];
		}
	}
	return total;
}
