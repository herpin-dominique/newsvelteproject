<script lang="ts">
	import type { Cart } from 'routes/api/cart/+server';
	import type { Product } from '$lib/server/Products';
	export let data;

	interface UserCart extends Cart {
		total: number;
	}

	let userCart: UserCart;
	let userAddedItems: Product[] = [];

	async function addArticle(product: Product) {
		const response = await fetch('/api/cart', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(product)
		});

		userCart = (await response.json()).cart;
		userAddedItems.push(product);
	}

	$: if (userCart) {
		userCart = {
			...userCart,
			total: userCart.items
				.map((item) => item.product.price * item.number)
				.reduce((partialSum, value) => partialSum + value, 0)
		};
		console.log(userCart);
	}
</script>

<svelte:head>
	<title>Matériels</title>
</svelte:head>
<body>
	<h1>matériels de camping</h1>
	<main>
		<p>
			Nous nous attachons à vous proposer le materiel indispensable pour vivre une experience
			inoubliable !
		</p>
		<div class="background-image" />
		<div class="shopping-cart">
			<div class="cart-window">
				<div>
					<span>Nombre d'articles dans le panier : {userCart ? userCart.items.length : 0}</span>

					<span>total dans le panier: {userCart ? userCart.total.toFixed(2) : 0}€</span>
				</div>
				<div class="equipment-list">
					{#each data.Products as product (product.id)}
						<div class="equipment-card">
							<img class="equipments-image" src={product.image} alt={product.name} />
							<h2 class="equipment-name">{product.name}</h2>
							<p class="equipment-price">Prix : {product.price} €</p>
							<!-- <p>Quantité : {itemCounts[aliment.id] || 0}</p> -->
							<button on:click={() => addArticle(product)}>Ajouter</button>
						</div>
					{/each}
				</div>

				<!-- <p>Total : {picnicTotal()} €</p> -->
			</div>
		</div>
	</main>
</body>

<style>
	/* Réinitialisez quelques styles par défaut */
	body,
	h1,
	p {
		margin: 0;
		padding: 0;
	}

	body {
		font-family: Arial, sans-serif;
		background-color: #f0f0f0;
		color: #333;
	}

	h1 {
		text-align: center;
		margin: 20px 0;
		font-size: 36px;
	}

	main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.background-image {
		background-image: url('votre-url-image.jpg');
		background-size: cover;
		height: 300px;
		margin-bottom: 20px;
	}

	.equipment-card {
		background-color: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		padding: 20px;
		margin-bottom: 20px;
	}

	.equipments-image {
		max-width: 100%;
		height: auto;
	}

	.equipment-name {
		font-size: 20px;
		margin-top: 10px;
	}

	.equipment-price {
		font-size: 16px;
		color: #ff5733;
		margin-top: 10px;
	}

	button {
		background-color: #007bff;
		color: #fff;
		border: none;
		border-radius: 5px;
		padding: 10px 20px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	button:hover {
		background-color: #0056b3;
	}

	/* Conception responsive */
	@media screen and (max-width: 768px) {
		h1 {
			font-size: 24px;
		}

		.background-image {
			height: 200px;
		}

		main {
			padding: 10px;
		}

		.equipment-card {
			padding: 10px;
		}
	}

	.shopping-cart {
		position: fixed;
		top: 20px;
		right: 20px;
		z-index: 999;
	}

	.cart-window {
		background-color: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		padding: 10px;
	}

	.cart-window span {
		display: block;
		margin-bottom: 10px;
	}
</style>
