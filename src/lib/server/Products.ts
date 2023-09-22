export interface Product {
	id: number;
	category: string;
	name: string;
	price: number;
	image: string;
}

export const Products: Product[] = [
	{
		id: 1,
		category: 'velo',
		name: 'cargo',
		price: 25,
		image: '/images/velocargo-longtail-chargement-arriere-r500-electrique.avif'
	},
	{
		id: 2,
		category: 'velo',
		name: 'velo tout terrain',
		price: 26,
		image: '/images/vélotoutterraingrospneu.webp'
	},
	{
		id: 3,
		category: 'velo',
		name: 'vélo enfant',
		price: 18,
		image: '/images/VTT+ELECTRIQUE+ENFANT+ROCKRIDER+E+ST+500+26+POUCES+9+12+ans.avif'
	},
	{
		id: 4,
		category: 'velo',
		name: 'vélo homme vtc electrique',
		price: 22,
		image: '/images/vtt homme ballade.webp'
	},
	{
		id: 28,
		category: 'velo',
		name: 'vélo femme electrique',
		price: 18,
		image: '/images/véloRouteFemmeelec.webp'
	},
	{
		id: 29,
		category: 'velo',
		name: 'vélo fun elctrique',
		price: 22,
		image: '/images/velomotofun.jpg'
	},

	{
		id: 5,
		category: 'pic-nique',
		name: 'pain',
		price: 1.3,
		image: '/images/paintradition.jpg'
	},
	{
		id: 6,
		category: 'pic-nique',
		name: 'saucisson',
		price: 4,
		image: '/images/Saucisson-sec.jpg'
	},
	{
		id: 7,
		category: 'pic-nique',
		name: 'vin rouge',
		price: 20,
		image: '/images/vinBordeaux.jpg'
	},
	{
		id: 8,
		category: 'pic-nique',
		name: 'teurgoule',
		price: 5,
		image: '/images/teurgoule.jpg'
	},
	{
		id: 9,
		category: 'pic-nique',
		name: 'fallue',
		price: 6,
		image: '/images/fallueBrioche.jpg'
	},
	{
		id: 10,
		category: 'pic-nique',
		name: 'caramel beurre salé',
		price: 3,
		image: '/images/caramel beurre salé.jpg'
	},
	{
		id: 11,
		category: 'pic-nique',
		name: 'sablé normand',
		price: 7,
		image: '/images/sablé normands.jpg'
	},
	{
		id: 12,
		category: 'pic-nique',
		name: 'cidre normand',
		price: 10,
		image: '/images/cidre normand.jpg'
	},
	{
		id: 13,
		category: 'pic-nique',
		name: 'tarte normande',
		price: 15,
		image: '/images/tarte normande.jpg'
	},
	{
		id: 14,
		category: 'equipment',
		name: 'sac de couchage',
		price: 10,
		image: '/images/sac de couchage.jpg'
	},
	{
		id: 32,
		category: 'equipment',
		name: 'siège enfant ',
		price: 85,
		image: '/images/siège enfant vélo.jpg'
	},
	{
		id: 33,
		category: 'equipment',
		name: 'casque ',
		price: 85,
		image: '/images/casque vélo.jpg'
	},
	{
		id: 34,
		category: 'equipment',
		name: 'matelas ',
		price: 85,
		image: '/images/matelas de camping.jpg'
	},
	{
		id: 35,
		category: 'equipment',
		name: 'poncho vélo imperméable',
		price: 85,
		image: '/images/poncho.jpg'
	},
	{
		id: 36,
		category: 'equipment',
		name: 'remorque vélo',
		price: 85,
		image: '/images/remorque vélo.jpg'
	},
	{
		id: 37,
		category: 'equipment',
		name: 'popotte',
		price: 85,
		image: '/images/popotte camping.jpg'
	},

	{
		id: 15,
		category: 'equipment',
		name: 'lampe torche',
		price: 15,
		image: '/images/lampe torche.jpg'
	},
	{
		id: 16,
		category: 'equipment',
		name: 'rechaud à gaz',
		price: 5,
		image: '/images/rechaud à gaz.jpg'
	},
	{
		id: 17,
		category: 'equipment',
		name: 'sacoches',
		price: 11,
		image: '/images/sacoches.jpg'
	},
	{
		id: 18,
		category: 'journey',
		name: 'pack 2 jours debarquement',
		price: 300,
		image: '/images/sejour pack débarquement.jpg'
	},
	{
		id: 19,
		category: 'journey',
		name: 'pack  weekend balade gourmande',
		price: 500,
		image: '/images/balade gourmande.jpg'
	},
	{
		id: 20,
		category: 'journey',
		name: '/images/semaine folle velofrancette-abbaye-hommes.1462911.jpg ',
		price: 1200,
		image: ''
	},
	{
		id: 21,
		category: 'journey',
		name: 'pack salut les copains',
		price: 450,
		image: '/images/semaine entre copains.jpg'
	},
	{
		id: 22,
		category: 'housing',
		name: 'tente canadienne 2 places',
		price: 25,
		image: '/images/tente canadienne 2 places.jpg'
	},
	{
		id: 23,
		category: 'housing',
		name: "chambre d'hotel",
		price: 100,
		image: '/images/chambre hotel arromanches.jpg'
	},
	{
		id: 24,
		category: 'housing',
		name: 'tipee',
		price: 80,
		image: '/images/tepee normandie.jpg'
	},
	{ id: 25, category: 'housing', name: 'bulle', price: 120, image: '/images/bulle normandie.jpg' },
	{
		id: 26,
		category: 'housing',
		name: 'cabane dans les arbres',
		price: 120,
		image: '/images/cabane dans les arbres normandie.jpg'
	},
	{
		id: 30,
		category: 'housing',
		name: 'tente de luxe ',
		price: 85,
		image: '/images/tente luxe normandie.jpg'
	},
	{
		id: 31,
		category: 'housing',
		name: 'roulotte ',
		price: 85,
		image: '/images/roulotte normandie.jpg'
	}
];
