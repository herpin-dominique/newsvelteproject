export interface ProgramDay {
	day: number;
	title: string;
	description: string;
	distance?: string;
}

export interface Sejour {
	id: number;
	name: string;
	category: string;
	description: string;
	fullDescription: string;
	duration: string;
	days: number;
	distance: string;
	difficulty: string;
	price: number;
	image: string;
	highlights: string[];
	accommodation: string;
	program: ProgramDay[];
	included: string[];
	notIncluded: string[];
	meetingPoint: string;
	maxPeople: number;
}

export const sejours: Sejour[] = [
	{
		id: 1,
		name: 'Plages du Débarquement',
		category: 'histoire',
		description: 'Parcourez les sites historiques du D-Day à vélo, de Utah Beach à Sword Beach.',
		fullDescription:
			'Plongez dans l\'histoire du 6 juin 1944 le long du littoral normand. Ce circuit de 3 jours vous emmène sur les traces des soldats alliés, de Utah Beach à Sword Beach, en passant par les cimetières militaires, les batteries allemandes et les musées incontournables. Le vélo est le meilleur moyen de relier ces sites chargés d\'émotion, à votre propre rythme.',
		duration: '3 jours',
		days: 3,
		distance: '85 km',
		difficulty: 'Facile',
		price: 450,
		image: '/images/plage-debarquement.jpg',
		highlights: ['Musée du Débarquement', 'Cimetière américain', 'Pointe du Hoc'],
		accommodation: "Chambre d'hôtes",
		maxPeople: 10,
		meetingPoint: 'Gare de Bayeux — 9h00',
		program: [
			{
				day: 1,
				title: 'Bayeux → Utah Beach',
				description:
					'Départ de Bayeux, visite de la Tapisserie de Bayeux le matin. Route vers le Mémorial de Caen puis cap à l\'ouest vers Utah Beach. Découverte du Musée du Débarquement Utah Beach.',
				distance: '32 km'
			},
			{
				day: 2,
				title: 'Omaha Beach → Pointe du Hoc',
				description:
					'Étape chargée d\'émotion sur la plage d\'Omaha Beach et le Cimetière américain de Colleville-sur-Mer. Visite de la Pointe du Hoc et ses vestiges de blockhaus. Nuit à Port-en-Bessin.',
				distance: '28 km'
			},
			{
				day: 3,
				title: 'Gold, Juno & Sword Beach',
				description:
					'Dernier tronçon vers les plages britanniques et canadiennes. Arrêt à Arromanches et son célèbre Musée du Débarquement. Retour à Bayeux en fin d\'après-midi.',
				distance: '25 km'
			}
		],
		included: [
			'Location vélo électrique 3 jours',
			'2 nuits en chambre d\'hôtes (petit-déjeuner inclus)',
			'Carte GPS du parcours',
			'Entrées musées (Mémorial de Caen, Utah Beach)',
			'Pique-nique du midi J2'
		],
		notIncluded: [
			'Transport jusqu\'au point de départ',
			'Repas du soir (hors J1)',
			'Assurance annulation'
		]
	},
	{
		id: 2,
		name: 'Suisse Normande',
		category: 'nature',
		description:
			'Découvrez les paysages vallonnés et les gorges spectaculaires de la Suisse Normande.',
		fullDescription:
			'La Suisse Normande surprend par ses reliefs inattendus : gorges encaissées, roches à pic et rivières turbulentes tranchent avec l\'image plate de la Normandie. Cinq jours de vélo sportif au cœur du bocage et des falaises calcaires, avec des nuits dans des hébergements insolites au bord de l\'Orne.',
		duration: '5 jours',
		days: 5,
		distance: '120 km',
		difficulty: 'Sportif',
		price: 680,
		image: '/images/visuelcartevoievertedelasuissenormande.jpg',
		highlights: ["Roche d'Oëtre", 'Clécy', "Pont-d'Ouilly"],
		accommodation: 'Bulle transparente',
		maxPeople: 8,
		meetingPoint: 'Gare de Caen — 8h30',
		program: [
			{
				day: 1,
				title: 'Caen → Thury-Harcourt',
				description:
					'Départ de Caen, remontée de la vallée de l\'Orne. Paysages doucement vallonnés avant les premières gorges. Installation dans les bulles au bord de la rivière.',
				distance: '28 km'
			},
			{
				day: 2,
				title: 'Thury-Harcourt → Clécy',
				description:
					'Montée progressive vers Clécy, "capitale" de la Suisse Normande. Panoramas sur les méandres de l\'Orne depuis les belvédères. Vélo VTT recommandé sur ce tronçon.',
				distance: '22 km'
			},
			{
				day: 3,
				title: 'Roche d\'Oëtre',
				description:
					'Journée phare du circuit : ascension jusqu\'à la Roche d\'Oëtre (118m de surplomb), point de vue le plus spectaculaire de Normandie. Descente vers Pont-d\'Ouilly.',
				distance: '18 km'
			},
			{
				day: 4,
				title: 'Pont-d\'Ouilly → Putanges',
				description:
					'Traversée des gorges de Saint-Aubert et du lac de Rabodanges. Baignade possible. Étape la plus technique du circuit avec deux cols.',
				distance: '30 km'
			},
			{
				day: 5,
				title: 'Retour vers Caen',
				description:
					'Dernière étape sur la voie verte de la Suisse Normande. Descente progressive jusqu\'à la vallée. Retour en navette depuis Argentan.',
				distance: '22 km'
			}
		],
		included: [
			'Location vélo VTT électrique 5 jours',
			'4 nuits en bulle transparente (petit-déjeuner inclus)',
			'Navette retour depuis Argentan',
			'Guide numérique GPX',
			'Picnic J3 au sommet de la Roche d\'Oëtre'
		],
		notIncluded: [
			'Transport jusqu\'au point de départ',
			'Repas du soir',
			'Assurance annulation'
		]
	},
	{
		id: 3,
		name: 'Côte Fleurie',
		category: 'gastronomie',
		description: 'De Honfleur à Cabourg, savourez les trésors de la côte normande.',
		fullDescription:
			'La Côte Fleurie est le joyau de la Normandie balnéaire : des falaises d\'Étretat jusqu\'aux élégantes plages de Deauville, en passant par le charme maritime de Honfleur. Ce circuit gastronome de 4 jours mêle balades côtières, haltes gourmandes et nuits en roulotte.',
		duration: '4 jours',
		days: 4,
		distance: '90 km',
		difficulty: 'Facile',
		price: 590,
		image: '/images/ASNELLESPLAGE.jpg',
		highlights: ['Honfleur', 'Deauville', 'Fromages AOP'],
		accommodation: 'Roulotte',
		maxPeople: 10,
		meetingPoint: 'Vieux-Port de Honfleur — 10h00',
		program: [
			{
				day: 1,
				title: 'Honfleur → Trouville',
				description:
					'Départ du Vieux-Port de Honfleur, classé parmi les plus beaux ports de France. Route littorale vers Trouville, doyenne des stations balnéaires. Dîner aux poissonneries du bord de mer.',
				distance: '20 km'
			},
			{
				day: 2,
				title: 'Trouville ↔ Deauville',
				description:
					'Journée à Deauville et ses célèbres planches. Visite du marché dominical, dégustation de camembert et livarot AOP. Après-midi libre sur la plage.',
				distance: '15 km'
			},
			{
				day: 3,
				title: 'Houlgate → Dives-sur-Mer',
				description:
					'Traversée de la station balnéaire de Houlgate et ses villas Belle Époque. Arrêt au château de Guillaume le Conquérant à Dives-sur-Mer. Dégustation de cidre en cidrerie.',
				distance: '28 km'
			},
			{
				day: 4,
				title: 'Dives-sur-Mer → Cabourg',
				description:
					'Arrivée à Cabourg, la "ville de Proust". Visite du Grand Hôtel et dernière balade sur la digue. Retour en navette vers Honfleur.',
				distance: '27 km'
			}
		],
		included: [
			'Location vélo électrique 4 jours',
			'3 nuits en roulotte (petit-déjeuner normand inclus)',
			'Dégustation fromages & cidres J2',
			'Carte IGN du parcours',
			'Navette retour depuis Cabourg'
		],
		notIncluded: [
			'Transport jusqu\'à Honfleur',
			'Repas du midi et du soir (sauf dégustation J2)',
			'Assurance annulation'
		]
	},
	{
		id: 4,
		name: 'Escapade en Famille',
		category: 'famille',
		description:
			'Un séjour adapté aux familles avec des étapes courtes et des activités ludiques.',
		fullDescription:
			'Ce séjour a été pensé entièrement pour les familles avec enfants : étapes courtes, terrains plats, activités ludiques à chaque halte. Les enfants sont rois, avec une ferme pédagogique, des ateliers de découverte et une nuit en cabane dans les arbres qui fera des souvenirs inoubliables.',
		duration: '3 jours',
		days: 3,
		distance: '45 km',
		difficulty: 'Très facile',
		price: 520,
		image: '/images/VELOENFANTELECTRIQUE.jpg',
		highlights: ['Parcours sécurisé', 'Ferme pédagogique', 'Plage'],
		accommodation: 'Cabane dans les arbres',
		maxPeople: 12,
		meetingPoint: 'Office de Tourisme de Courseulles-sur-Mer — 9h30',
		program: [
			{
				day: 1,
				title: 'Courseulles → Arromanches',
				description:
					'Départ depuis la plage de Courseulles, idéale pour les enfants. Piste cyclable sécurisée longeant la côte. Arrêt à Arromanches et visite ludique du Musée du Débarquement format "jeune public".',
				distance: '16 km'
			},
			{
				day: 2,
				title: 'Ferme pédagogique & nature',
				description:
					'Journée à la ferme : rencontre avec les animaux, atelier fabrication de beurre, cueillette de pommes (saison). Après-midi baignade sur la plage. Nuit en cabane dans les arbres.',
				distance: '12 km'
			},
			{
				day: 3,
				title: 'Retour par les voies vertes',
				description:
					'Retour tranquille via les voies vertes protégées, sans croisement routier. Pique-nique en forêt. Arrivée à Ver-sur-Mer et retour en navette.',
				distance: '17 km'
			}
		],
		included: [
			'Location vélo enfant + siège bébé si besoin',
			'Location vélo électrique adulte',
			'2 nuits (cabane dans les arbres + chambre d\'hôtes)',
			'Petits-déjeuners inclus',
			'Entrée ferme pédagogique',
			'Pique-nique J3',
			'Navette retour'
		],
		notIncluded: [
			'Transport jusqu\'au point de départ',
			'Repas du soir',
			'Assurance annulation'
		]
	},
	{
		id: 5,
		name: 'Route du Camembert',
		category: 'gastronomie',
		description: "Traversez le Pays d'Auge et ses vergers, dégustez cidre et fromages.",
		fullDescription:
			'Le Pays d\'Auge est le berceau des plus grandes spécialités normandes : camembert, livarot, pont-l\'évêque, calvados, cidre bouché. Ce circuit de 4 jours à travers les vergers et les manoirs à colombages est une invitation à la gourmandise, avec des étapes chez les producteurs et des nuits en tipi au cœur des pommiers.',
		duration: '4 jours',
		days: 4,
		distance: '100 km',
		difficulty: 'Modéré',
		price: 620,
		image: '/images/destinationNormandie.jpg',
		highlights: ['Fromageries', 'Cidreries', 'Manoirs normands'],
		accommodation: 'Tipi',
		maxPeople: 8,
		meetingPoint: 'Gare de Lisieux — 9h00',
		program: [
			{
				day: 1,
				title: 'Lisieux → Vimoutiers',
				description:
					'Départ de Lisieux, traversée du bocage augeron. Visite de la Fromagerie Graindorge à Livarot. Découverte du musée du Camembert à Vimoutiers. Nuit en tipi au milieu des pommiers.',
				distance: '28 km'
			},
			{
				day: 2,
				title: 'Camembert → Beuvron-en-Auge',
				description:
					'Passage par le village de Camembert, berceau du célèbre fromage. Route des manoirs normands à colombages. Dégustation chez un producteur de calvados. Beuvron-en-Auge, l\'un des plus beaux villages de France.',
				distance: '25 km'
			},
			{
				day: 3,
				title: 'Pays de Cider',
				description:
					'Journée dédiée à la Route du Cidre : 10 cidreries jalonnent le parcours. Dégustation comparative de cidres bruts, demi-secs et pommeau. Pique-nique dans les vergers en fleurs.',
				distance: '22 km'
			},
			{
				day: 4,
				title: 'Retour vers Lisieux',
				description:
					'Dernière étape dans les collines du Pays d\'Auge. Arrêt au Château de Saint-Germain-de-Livet. Retour à Lisieux en fin d\'après-midi avec votre plateau de fromages souvenir.',
				distance: '25 km'
			}
		],
		included: [
			'Location vélo électrique 4 jours',
			'3 nuits en tipi (petit-déjeuner normand inclus)',
			'Visites fromageries + cidreries',
			'Plateau de fromages souvenir',
			'Carte IGN et guide gastronomique'
		],
		notIncluded: [
			'Transport jusqu\'à Lisieux',
			'Repas du midi et du soir',
			'Assurance annulation'
		]
	},
	{
		id: 6,
		name: 'Aventure Bocage',
		category: 'nature',
		description: 'Immersion totale dans le bocage normand, entre haies et chemins creux.',
		fullDescription:
			'Le bocage normand est un réseau de haies séculaires, de chemins creux et de prairies humides que seul le vélo permet de vraiment explorer. Six jours de circuit sportif au cœur de la Normandie profonde, loin des côtes touristiques, avec des nuits en tente de luxe sous les étoiles et des rencontres avec des agriculteurs locaux.',
		duration: '6 jours',
		days: 6,
		distance: '150 km',
		difficulty: 'Sportif',
		price: 780,
		image: '/images/destinationsbois.jpg',
		highlights: ['Chemins ruraux', 'Faune sauvage', 'Villages authentiques'],
		accommodation: 'Tente de luxe',
		maxPeople: 8,
		meetingPoint: 'Gare de Flers — 9h00',
		program: [
			{
				day: 1,
				title: 'Flers → Vire',
				description:
					'Entrée dans le bocage virois, paysage de haies bocagères et de prairies émeraude. Première nuit en tente de luxe sur une ferme bio avec dîner à la ferme.',
				distance: '28 km'
			},
			{
				day: 2,
				title: 'Vire → Saint-Lô',
				description:
					'Traversée des chemins creux du bocage, certains passages hors-sentiers battus. Observation de la faune : buse, chevreuil, vipère aspic. Saint-Lô, ville reconstruite après guerre.',
				distance: '30 km'
			},
			{
				day: 3,
				title: 'Saint-Lô → Coutances',
				description:
					'Étape vers la Manche intérieure. Bocage plus ouvert, vent dans les cheveux. Visite de la cathédrale gothique de Coutances, chef-d\'œuvre normand.',
				distance: '22 km'
			},
			{
				day: 4,
				title: 'Coutances → Gavray',
				description:
					'Remontée vers le cœur du bocage. Rencontre avec un éleveur de vaches normandes. Atelier fabrication de beurre artisanal. Bivouac en prairie.',
				distance: '25 km'
			},
			{
				day: 5,
				title: 'Gavray → Villedieu-les-Poêles',
				description:
					'Villedieu-les-Poêles, capitale de la cuivrerie. Visite des ateliers de fonderie de cloches. Étape technique avec 600m de dénivelé cumulé.',
				distance: '27 km'
			},
			{
				day: 6,
				title: 'Retour vers Flers',
				description:
					'Dernière étape de boucle, retour vers Flers par les hauteurs du bocage. Dernier panorama sur la Normandie profonde. Pot de fin de séjour avec les producteurs.',
				distance: '18 km'
			}
		],
		included: [
			'Location vélo VTT électrique 6 jours',
			'5 nuits en tente de luxe (literie, électricité)',
			'5 petits-déjeuners',
			'2 dîners à la ferme (J1 et J4)',
			'Guide accompagnateur J3 et J5',
			'Carte IGN et carnet de route'
		],
		notIncluded: [
			'Transport jusqu\'à Flers',
			'Repas non mentionnés ci-dessus',
			'Assurance annulation'
		]
	}
];

export function getSejourById(id: number): Sejour | undefined {
	return sejours.find((s) => s.id === id);
}
