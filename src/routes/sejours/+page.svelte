<script lang="ts">
	export let data: { Products: any[] };
</script>

<svelte:head>
	<title>séjours</title>
</svelte:head>
<main>
	<h1>séjours</h1>

	<p>voici quelques séjours tout compris que nous pouvons vous proposer</p>
	<div class="background-image" />
	<div class="journeys-list">
		{#each data.Products as journey (journey.id)}
			<div class="journey-card">
				<img class="journeys-image" src={journey.image} alt={journey.name} />
				<h2 class="journey-name">{journey.name}</h2>
				<p class="journey-price">Prix : {journey.price} €</p>
			</div>
		{/each}
	</div>
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

	/* Styles pour la liste d'journeys */
	.background-image {
		background-image: url('/static/images/baladde\ vélo\ plage\ débarquement.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		height: 300px; /* Ajustez la hauteur en fonction de vos besoins */
	}

	.journeys-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 20px;
	}
	/* Styles pour chaque carte d'journey */
	.journey-card {
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

	.journey-card:hover {
		transform: scale(1.05);
	}

	.journeys-image {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
	}

	.journey-name {
		font-size: 18px;
		margin-top: 10px;
		color: #333;
	}

	.journey-price {
		font-size: 16px;
		color: #ff5733;
		margin-top: 10px;
	}
</style>
