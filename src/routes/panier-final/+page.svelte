<script lang="ts">
	import { enhance } from '$app/forms';
	import { cartStore } from '$lib/stores/Cart';

	export let data: {
		serverCartItems: { product: { id: number; name: string; price: number; image: string }; number: number }[];
		Products: { id: number; name: string; price: number; image: string; category: string }[];
	};
	export let form: { error?: string; success?: boolean; nom?: string } | null = null;

	function getProductById(id: number) {
		return data.Products.find((p) => p.id === id);
	}

	// Use server cart items for SSR, client store for reactivity
	$: displayItems = $cartStore.summary.items.length > 0
		? $cartStore.summary.items.map((item) => ({
				product: getProductById(item.productId),
				number: item.number
			})).filter((i) => i.product)
		: data.serverCartItems;

	$: total = displayItems.reduce((sum, i) => sum + (i.product?.price ?? 0) * i.number, 0);
	$: isEmpty = displayItems.length === 0;
</script>

<svelte:head>
	<title>Votre commande - Pique-nique Normand</title>
</svelte:head>

<main class="checkout-page">
	{#if form?.success}
		<div class="confirmation">
			<div class="confirmation-icon">🎉</div>
			<h1>Commande confirmée !</h1>
			<p>Merci <strong>{form.nom}</strong>, votre commande de pique-nique normand est bien enregistrée.</p>
			<p class="sub">Vous recevrez une confirmation par email. Votre panier sera prêt à votre arrivée !</p>
			<a href="/picnic" class="btn-back">Retour à la boutique</a>
		</div>
	{:else}
		<div class="checkout-layout">
			<section class="order-summary">
				<h1>Récapitulatif de commande</h1>

				{#if isEmpty}
					<div class="empty-cart">
						<p>🧺 Votre panier est vide.</p>
						<a href="/picnic" class="btn-back">Composer mon panier</a>
					</div>
				{:else}
					<ul class="items-list">
						{#each displayItems as item}
							{#if item.product}
								<li class="item">
									<img src={item.product.image} alt={item.product.name} />
									<div class="item-details">
										<span class="item-name">{item.product.name}</span>
										<span class="item-qty">× {item.number}</span>
									</div>
									<span class="item-price">{(item.product.price * item.number).toFixed(2)} €</span>
								</li>
							{/if}
						{/each}
					</ul>

					<div class="total-row">
						<span>Total</span>
						<strong>{total.toFixed(2)} €</strong>
					</div>
				{/if}
			</section>

			{#if !isEmpty}
				<section class="order-form">
					<h2>Vos coordonnées</h2>

					{#if form?.error}
						<p class="error-msg">{form.error}</p>
					{/if}

					<form method="POST" use:enhance>
						<label>
							Nom & prénom *
							<input type="text" name="nom" required placeholder="Jean Dupont" />
						</label>

						<label>
							Email *
							<input type="email" name="email" required placeholder="jean@exemple.fr" />
						</label>

						<label>
							Téléphone
							<input type="tel" name="telephone" placeholder="06 12 34 56 78" />
						</label>

						<label>
							Date souhaitée *
							<input type="date" name="date" required min={new Date().toISOString().split('T')[0]} />
						</label>

						<button type="submit" class="btn-order" disabled={isEmpty}>
							Confirmer la commande — {total.toFixed(2)} €
						</button>
					</form>
				</section>
			{/if}
		</div>
	{/if}
</main>

<style>
	.checkout-page {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: inherit;
	}

	.checkout-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: start;
	}

	@media (max-width: 700px) {
		.checkout-layout { grid-template-columns: 1fr; }
	}

	h1 {
		font-size: 1.5rem;
		color: #1d4e3e;
		margin-bottom: 1.5rem;
	}

	h2 {
		font-size: 1.2rem;
		color: #1d4e3e;
		margin-bottom: 1.2rem;
	}

	.items-list {
		list-style: none;
		padding: 0;
		margin: 0 0 1rem;
		border: 1px solid #e5e7eb;
		border-radius: 10px;
		overflow: hidden;
	}

	.item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid #f0f0f0;
	}

	.item:last-child { border-bottom: none; }

	.item img {
		width: 50px;
		height: 50px;
		object-fit: cover;
		border-radius: 6px;
	}

	.item-details {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.item-name { font-weight: 500; text-transform: capitalize; }
	.item-qty { font-size: 0.85rem; color: #666; }
	.item-price { font-weight: 600; color: #1d4e3e; white-space: nowrap; }

	.total-row {
		display: flex;
		justify-content: space-between;
		padding: 0.75rem 1rem;
		background: #f0f7f4;
		border-radius: 8px;
		font-size: 1.1rem;
	}

	.order-form {
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 12px;
		padding: 1.5rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		font-size: 0.9rem;
		font-weight: 500;
		color: #374151;
	}

	input {
		padding: 0.6rem 0.8rem;
		border: 1px solid #d1d5db;
		border-radius: 7px;
		font-size: 1rem;
		transition: border-color 0.2s;
	}

	input:focus {
		outline: none;
		border-color: #1d4e3e;
	}

	.btn-order {
		margin-top: 0.5rem;
		padding: 0.85rem 1.5rem;
		background: #1d4e3e;
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.2s;
	}

	.btn-order:hover { background: #163d30; }
	.btn-order:disabled { opacity: 0.5; cursor: not-allowed; }

	.error-msg {
		color: #c0392b;
		background: #fdecea;
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		font-size: 0.9rem;
		margin-bottom: 0.5rem;
	}

	.empty-cart {
		text-align: center;
		padding: 2rem;
		color: #666;
	}

	.btn-back {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.6rem 1.2rem;
		background: #1d4e3e;
		color: white;
		text-decoration: none;
		border-radius: 7px;
		font-weight: 500;
	}

	.confirmation {
		text-align: center;
		padding: 4rem 2rem;
	}

	.confirmation-icon { font-size: 4rem; margin-bottom: 1rem; }

	.confirmation h1 { font-size: 2rem; color: #1d4e3e; }

	.confirmation p { font-size: 1.1rem; margin-top: 0.5rem; }

	.sub { color: #666; font-size: 0.95rem; }
</style>
