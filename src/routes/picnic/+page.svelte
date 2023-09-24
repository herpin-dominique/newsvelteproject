<script lang="ts">
	import { createCart } from '$lib/stores/Cart';
	import type { Product } from '$lib/server/Products';
	export let data;

	let cart = createCart();

	async function addArticle(product: Product) {
		const response = await fetch('/api/cart/add', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(product)
		});

		if (response.status === 200) cart.addProduct(product);
	}

	async function removeArticle(product: Product) {
		const response = await fetch('/api/cart/remove', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(product)
		});

		if (response.status === 200) cart.addProduct(product);
	}

	function getProductName(id: number) {
		return data.Products.find((product) => product.id === id)?.name;
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
	<div>
		{#if $cart.items.length > 0}
			{#each $cart.summary.items as item}
				<div>
					<span>{getProductName(item.productId)}</span>
					<span>x{item.number}</span>
				</div>
			{/each}
			<div>
				<span>Total: {$cart.summary.total.toFixed(2)}€</span>
			</div>
		{:else}
			<div>empty cart</div>
		{/if}
		<!-- <span>total: {$cart.summary.items}€</span> -->
	</div>
	<div class="aliments-list">
		{#each data.Products as product (product.id)}
			<div class="aliment-card">
				<img class="aliments-image" src={product.image} alt={product.name} />
				<h2 class="aliment-name">{product.name}</h2>
				<p class="aliment-price">Prix : {product.price} €</p>
				<!-- <p>Quantité : {itemCounts[aliment.id] || 0}</p> -->
				<button on:click={() => addArticle(product)}>Ajouter</button>
			</div>
		{/each}
	</div>
	<!-- <p>Total : {picnicTotal()} €</p> -->
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
		color: #3e202050;
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
