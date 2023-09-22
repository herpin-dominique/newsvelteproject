<script lang="ts">
	export let data;

	let itemCounts = {};
	//import { Products } from 'lib/server/Products';

	//import { bikes } from '../api/bikes';
	//import { calculateTotal } from './calcul';

	//let selectedBikes = {};
	//function updateTotal() {
	//	return calculateTotal(selectedBikes);
	//}

	//function reserveBike(bikeId) {
	// Mettez à jour selectedBikes ici, par exemple, en augmentant la quantité
	//	selectedBikes = { ...selectedBikes, [bikeId]: (selectedBikes[bikeId] || 0) + 1 };
	//	}
</script>

<svelte:head>
	<title>Réservations</title>
</svelte:head>
<!-- Ajout du bandeau ici -->
<div class="banner">
	<h1>Location de Vélos</h1>
	<p>Voici les vélos disponibles à la réservation</p>
	<p>
		Nous sommes fiers de vous offrir une gamme complète et diversifiée de vélos et d'accessoires
		pour répondre à vos besoins spécifiques lors de votre expérience de location. Que vous
		souhaitiez explorer la ville en toute décontraction avec nos vélos tout-terrain (VTC), défier
		les sentiers accidentés avec nos VTT robustes, ou encore profiter de l'assistance électrique
		avec nos vélos électriques pour une aventure sans effort, nous avons le vélo parfait pour vous.
		De plus, notre sélection comprend également des remorques pratiques pour que vous puissiez
		partager l'expérience avec vos proches, même les plus jeunes. Chaque vélo est régulièrement
		entretenu et inspecté pour garantir votre sécurité et votre confort, vous permettant ainsi de
		vous concentrer pleinement sur la découverte et le plaisir de votre parcours. Faites votre choix
		parmi notre assortiment varié et préparez-vous à vivre une expérience de location inoubliable.
	</p>
	<a href="#availability" class="btn">Vérifier la disponibilité</a>
</div>
<main>
	<div class="background-image" />
	<div class="bike-list">
		{#each data.Products as bike (bike.id)}
			<div class="bike-card">
				<img class="bike-image" src={bike.image} alt={bike.name} />
				<h2 class="bike-name">{bike.name}</h2>
				<p class="bike-price">Prix par jour : {bike.price} €</p>
				<!-- <input
					class="bike-input"
					type="number"
					value={selectedBikes[bike.id] || 0}
					on:input={(event) => {
						selectedBikes = { ...selectedBikes, [bike.id]: +event.target.value };
					}}
					min="0"
				/> -->
				<!-- Ajout du bouton de réservation -->
				<button class="reserve-button" on:click={() => {}}> Réserver </button>
			</div>
		{/each}
	</div>
	<!-- <div class="total">
		<h3>Total à payer : {updateTotal()} €</h3>
	</div> -->
</main>

<style>
	/* Styles pour le bandeau */
	.banner {
		background-color: #333; /* Couleur de fond du bandeau */
		color: #fff; /* Couleur du texte du bandeau */
		padding: 16px; /* Espace autour du contenu du bandeau */
		text-align: center; /* Centrer le texte horizontalement */
	}

	.banner h1 {
		font-size: 24px; /* Taille de la police pour le titre */
	}

	.banner p {
		font-size: 16px; /* Taille de la police pour le texte descriptif */
	}
	.btn {
		color: #ff5733; /* Changer la couleur du texte en rouge (#ff5733) ou une autre couleur de votre choix */
	}
	/* Styles pour la page principale */
	main {
		background-image: url('/images/tenteLuxe.jpg'); /* Remplacez 'chemin/vers/votre/image.jpg' par le chemin de votre image */
		background-size: cover; /* Assurez-vous que l'image couvre tout l'arrière-plan */
		background-repeat: no-repeat; /* Empêchez l'image de se répéter */
		background-attachment: fixed; /* Fixez l'image pour qu'elle reste en arrière-plan lorsque vous faites défiler la page */
	}

	/* Styles pour la carte de vélo */
	.bike-list {
		display: flex;
		flex-wrap: wrap; /* Les cartes s'enrouleront sur la ligne suivante */
		justify-content: space-between; /* Répartir l'espace entre les cartes */
		margin: -8px; /* Supprimer la marge extérieure ajoutée précédemment et réduire l'espace entre les cartes */
	}

	.bike-card {
		background-color: rgba(144, 238, 144, 0.2);
		flex: 0 0 calc(25% - 16px); /* Largeur de 25% avec une marge de 8px de chaque côté */
		margin: 8px; /* Marge autour de chaque carte */
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		padding: 16px;
		box-shadow: 0px 4px 6px rgba(206, 12, 12, 0.427);
		transition: transform 0.2s;
		display: flex;
		flex-direction: column; /* Empiler le contenu verticalement */
		align-items: center; /* Centrer le contenu horizontalement */
		text-align: center; /* Centrer le texte horizontalement */
	}

	/* Styles pour l'image du vélo */
	.bike-image {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
	}

	/* Styles pour le nom du vélo */
	.bike-name {
		font-size: 18px;
		font-weight: bold;
		color: #ff5733;
		margin: 12px 0;
	}

	/* Styles pour le prix du vélo */
	.bike-price {
		font-size: 16px;
		color: #00ec53; /* Couleur du prix */
		margin-bottom: 12px;
	}

	/* Styles pour le bouton de réserver */
	.reserve-button {
		display: block;
		background-color: #ff5733; /* Couleur du bouton */
		color: #fff;
		text-align: center;
		padding: 8px 16px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 16px;
		transition: background-color 0.2s;
		text-decoration: none;
		margin-top: 12px;
	}

	.reserve-button:hover {
		background-color: #e63c12; /* Couleur au survol du bouton */
	}
	/* Media query pour smartphone (largeur d'écran jusqu'à 480px) */
	@media screen and (max-width: 480px) {
		.bike-list {
			flex-direction: column; /* Cartes en colonne sur les smartphones */
			margin: 0 auto;
		}

		.bike-card {
			width: 100%; /* Utiliser la largeur complète de l'écran */
			margin: 8px 0; /* Marge en haut et en bas pour espacer les cartes */
		}

		/* Media query pour tablette (largeur d'écran jusqu'à 768px) */
		@media screen and (max-width: 768px) {
			.bike-list {
				flex-wrap: wrap; /* Permettre aux cartes de passer à la ligne */
				justify-content: space-between; /* Répartir l'espace entre les cartes */
			}

			.bike-card {
				width: calc(50% - 16px); /* Largeur de 50% avec une marge de 8px de chaque côté */
				margin: 8px; /* Marge autour de chaque carte */
			}
		}
		/* Media query pour Nest Hub Max (1280x800) */
		@media screen and (max-width: 1280px) and (max-height: 800px) {
			/* Styles spécifiques pour le Nest Hub Max ici */
			.bike-list {
				flex-wrap: wrap;
				justify-content: space-between;
			}
		}
	}
</style>
