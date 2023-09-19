<script>
	// Importez vos données aliments
	import { food } from '../api/food';

	let itemCounts = {};

	function incrementCount(id) {
		if (!itemCounts[id]) {
			itemCounts[id] = 1;
		} else {
			itemCounts[id]++;
		}
	}
	function picnicTotal() {
		let total = 0;
		for (const id in itemCounts) {
			const aliment = food.find((item) => item.id === id);
			if (aliment) {
				total += aliment.price * itemCounts[id];
			}
		}
		return total;
	}
</script>

<svelte:head>
	<title>Pic-nique</title>
</svelte:head>
<main>
	<h1>Pic-nique</h1>

	<p>
		Envie d'un pique-nique 100% normand ? Nous vous proposons avec nos partenaires locaux de quoi
		festoyer après votre journée de ballade
	</p>
	<div class="background-image" />
	<div class="aliments-list">
		{#each food as aliment (aliment.id)}
			<div class="aliment-card">
				<img class="aliments-image" src={aliment.image} alt={aliment.name} />
				<h2 class="aliment-name">{aliment.name}</h2>
				<p class="aliment-price">Prix : {aliment.price} €</p>
				<p>Quantité : {itemCounts[aliment.id] || 0}</p>
				<button on:click={() => incrementCount(aliment.id)}>Ajouter</button>
			</div>
		{/each}
	</div>
	<p>Total : {picnicTotal()} €</p>
</main>

<style>
	/* Styles généraux */
	main {
		font-family: Arial, sans-serif;
		padding: 20px;
	}

	h1 {
		font-size: 36px;
		margin-bottom: 10px;
		color: #333;
	}

	p {
		font-size: 16px;
		color: #777;
	}

	/* Styles pour la liste d'aliments */
	.background-image {
		background-image: url('../images/plancheApero.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		height: 300px; /* Ajustez la hauteur en fonction de vos besoins */
	}

	.aliments-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 20px;
	}
	/* Styles pour chaque carte d'aliment */
	.aliment-card {
		width: calc(25% - 20px);
		margin: 10px;
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 8px;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
		background-color: #fff;
		text-align: center;
		transition: transform 0.2s;
	}

	.aliment-card:hover {
		transform: scale(1.05);
	}

	.aliments-image {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
	}

	.aliment-name {
		font-size: 18px;
		margin-top: 10px;
		color: #333;
	}

	.aliment-price {
		font-size: 16px;
		color: #ff5733;
		margin-top: 10px;
	}
</style>
