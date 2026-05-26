<script lang="ts">
	import { onMount } from 'svelte';
	import { cartStore } from '$lib/stores/Cart';

	interface Product {
		id: number;
		category: string;
		name: string;
		price: number;
		image: string;
	}

	export let data: { Products: Product[]; AllProducts: Product[] };

	const cart = cartStore;
	let cartOpen = true;
	let addedProductId: number | null = null;
	let visible = false;

	$: uncategorized = data.Products.filter((p) =>
		!productCategories.flatMap((c) => c.products).some((kw) =>
			p.name.toLowerCase().includes(kw.toLowerCase())
		)
	);

	const productCategories = [
		{
			id: 'cycling',
			name: 'Équipement vélo',
			icon: '🚴',
			products: ['sacoches', 'remorque', 'poncho', 'siège enfant']
		},
		{
			id: 'camping',
			name: 'Camping & Bivouac',
			icon: '⛺',
			products: ['sac de couchage', 'matelas', 'popotte', 'rechaud', 'lampe']
		},
		{
			id: 'safety',
			name: 'Sécurité',
			icon: '🪖',
			products: ['casque']
		}
	];

	function getProductsByCategory(keywords: string[]) {
		return data.Products.filter((p: Product) =>
			keywords.some((kw) => p.name.toLowerCase().includes(kw.toLowerCase()))
		);
	}

	function getProductById(id: number): Product | undefined {
		return data.AllProducts.find((p: Product) => p.id === id);
	}

	function getItemQuantity(productId: number, currentCartValue: any): number {
		const item = currentCartValue.summary.items.find((i: any) => i.productId === productId);
		return item?.number || 0;
	}

	async function addArticle(product: Product) {
		const response = await fetch('/api/cart/add', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(product)
		});

		if (response.ok) {
			cart.addProduct(product);
			addedProductId = product.id;
			setTimeout(() => (addedProductId = null), 600);
		}
	}

	async function removeArticle(product: Product) {
		const response = await fetch('/api/cart/remove', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(product)
		});

		if (response.ok) cart.removeProduct(product);
	}

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Équipements - Normandie Vélo & Séjours</title>
</svelte:head>

<section class="hero">
	<div class="hero-bg">
		<img src="/images/VELOTRANSPORTEUR.jpg" alt="Équipements vélo" />
		<div class="hero-overlay" />
	</div>
	<div class="hero-content" class:visible>
		<span class="hero-tag">Matériel de qualité</span>
		<h1>Équipements <span class="accent">& Accessoires</span></h1>
		<p>Tout le nécessaire pour partir l'esprit libre — vélo, camping, sécurité.</p>
	</div>
</section>

<div class="page-layout">
	<main class="products-section">
		<div class="intro-card">
			<div class="intro-icon">🎒</div>
			<div class="intro-text">
				<h2>Louez votre équipement</h2>
				<p>Ajoutez les équipements à votre panier et commandez en même temps que votre vélo.</p>
			</div>
		</div>

		{#each productCategories as category}
			{@const categoryProducts = getProductsByCategory(category.products)}
			{#if categoryProducts.length > 0}
				<section class="category-section">
					<h2 class="category-title">
						<span class="category-icon">{category.icon}</span>
						{category.name}
					</h2>
					<div class="products-grid">
						{#each categoryProducts as product (product.id)}
							{@const qty = getItemQuantity(product.id, $cart)}
							<article
								class="product-card"
								class:added={addedProductId === product.id}
								class:in-cart={qty > 0}
							>
								<div class="product-image">
									<img src={product.image} alt={product.name} />
									{#if qty > 0}
										<div class="quantity-badge">{qty}</div>
									{/if}
								</div>
								<div class="product-info">
									<h3>{product.name}</h3>
									<p class="product-price">{product.price.toFixed(2)} €</p>
								</div>
								<div class="product-actions">
									{#if qty > 0}
										<button class="btn-qty btn-minus" on:click={() => removeArticle(product)} aria-label="Retirer">
											<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14" /></svg>
										</button>
										<span class="qty-display">{qty}</span>
									{/if}
									<button class="btn-qty btn-plus" on:click={() => addArticle(product)} aria-label="Ajouter">
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14m-7-7h14" /></svg>
									</button>
								</div>
							</article>
						{/each}
					</div>
				</section>
			{/if}
		{/each}

		<!-- Produits sans catégorie définie -->
		{#if uncategorized.length > 0}
			<section class="category-section">
				<h2 class="category-title">
					<span class="category-icon">📦</span>
					Autres
				</h2>
				<div class="products-grid">
					{#each uncategorized as product (product.id)}
						{@const qty = getItemQuantity(product.id, $cart)}
						<article
							class="product-card"
							class:added={addedProductId === product.id}
							class:in-cart={qty > 0}
						>
							<div class="product-image">
								<img src={product.image} alt={product.name} />
								{#if qty > 0}
									<div class="quantity-badge">{qty}</div>
								{/if}
							</div>
							<div class="product-info">
								<h3>{product.name}</h3>
								<p class="product-price">{product.price.toFixed(2)} €</p>
							</div>
							<div class="product-actions">
								{#if qty > 0}
									<button class="btn-qty btn-minus" on:click={() => removeArticle(product)} aria-label="Retirer">
										<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14" /></svg>
									</button>
									<span class="qty-display">{qty}</span>
								{/if}
								<button class="btn-qty btn-plus" on:click={() => addArticle(product)} aria-label="Ajouter">
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14m-7-7h14" /></svg>
								</button>
							</div>
						</article>
					{/each}
				</div>
			</section>
		{/if}
	</main>

	<aside class="cart-sidebar" class:open={cartOpen}>
		<div class="cart-header">
			<div class="cart-title">
				<span class="cart-icon-wrap">🛒</span>
				<h3>Mon panier</h3>
				{#if $cart.summary.items.length > 0}
					{@const totalQty = $cart.summary.items.reduce((s, i) => s + i.number, 0)}
					<span class="item-count-badge">{totalQty}</span>
				{/if}
			</div>
			<button class="cart-toggle" on:click={() => (cartOpen = !cartOpen)} aria-label="Ouvrir/fermer le panier">
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					{#if cartOpen}
						<path d="M18 6L6 18M6 6l12 12" />
					{:else}
						<path d="M4 6h16M4 12h16M4 18h16" />
					{/if}
				</svg>
			</button>
		</div>

		{#if cartOpen}
			{#if $cart.summary.items.length > 0}
				<div class="cart-items">
					{#each $cart.summary.items as item (item.productId)}
						{@const p = getProductById(item.productId)}
						{#if p}
							<div class="cart-item">
								<div class="cart-thumb-wrap">
									<img src={p.image} alt={p.name} class="cart-thumb" />
								</div>
								<div class="cart-item-body">
									<span class="cart-item-name">{p.name}</span>
									<span class="cart-item-unit">{p.price.toFixed(2)} € / unité</span>
									<div class="qty-pill">
										<button class="qty-btn" on:click={() => removeArticle(p)} aria-label="Retirer">−</button>
										<span class="qty-count">{item.number}</span>
										<button class="qty-btn" on:click={() => addArticle(p)} aria-label="Ajouter">+</button>
									</div>
								</div>
								<span class="cart-item-subtotal">{(p.price * item.number).toFixed(2)} €</span>
							</div>
						{/if}
					{/each}
				</div>

				<div class="cart-footer">
					<div class="cart-total-row">
						<span class="total-label">Total</span>
						<span class="total-amount">{$cart.summary.total.toFixed(2)} €</span>
					</div>
					<a href="/panier-final" class="btn-checkout">
						Commander
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
					</a>
				</div>
			{:else}
				<div class="cart-empty">
					<div class="empty-icon">🎒</div>
					<p>Votre panier est vide</p>
					<p class="empty-hint">Ajoutez des équipements depuis la liste</p>
				</div>
			{/if}
		{/if}
	</aside>
</div>

<style>
	.page-layout {
		display: grid;
		grid-template-columns: 1fr 320px;
		gap: 2rem;
		max-width: 1200px;
		margin: 2rem auto;
		padding: 0 1rem;
		align-items: start;
	}

	@media (max-width: 860px) {
		.page-layout { grid-template-columns: 1fr; }
	}

	/* ── Hero ── */
	.hero {
		position: relative;
		height: 340px;
		overflow: hidden;
	}

	.hero-bg { position: absolute; inset: 0; }
	.hero-bg img { width: 100%; height: 100%; object-fit: cover; }
	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to bottom, rgba(0,0,0,.2), rgba(15,40,28,.72));
	}

	.hero-content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		text-align: center;
		color: #fff;
		opacity: 0;
		transform: translateY(12px);
		transition: opacity .5s, transform .5s;
	}
	.hero-content.visible { opacity: 1; transform: translateY(0); }

	.hero-tag {
		background: rgba(255,255,255,.18);
		border: 1px solid rgba(255,255,255,.4);
		padding: .3rem .9rem;
		border-radius: 20px;
		font-size: .8rem;
		letter-spacing: .05em;
		margin-bottom: .75rem;
	}

	.hero-content h1 { font-size: 2.5rem; font-weight: 700; margin: 0 0 .5rem; }
	.accent { color: #a8d5b0; }
	.hero-content p { opacity: .85; font-size: 1rem; }

	/* ── Intro card ── */
	.intro-card {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: #f0f7f4;
		border-radius: 12px;
		padding: 1rem 1.25rem;
		margin-bottom: 1.5rem;
	}
	.intro-icon { font-size: 2rem; }
	.intro-text h2 { font-size: 1rem; font-weight: 600; color: #1d4e3e; margin: 0 0 .2rem; }
	.intro-text p { font-size: .88rem; color: #555; margin: 0; }

	/* ── Category section ── */
	.category-section { margin-bottom: 2rem; }

	.category-title {
		display: flex;
		align-items: center;
		gap: .5rem;
		font-size: 1.1rem;
		font-weight: 600;
		color: #1d4e3e;
		margin-bottom: 1rem;
	}
	.category-icon { font-size: 1.3rem; }

	/* ── Products grid ── */
	.products-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 1rem;
	}

	/* ── Product card ── */
	.product-card {
		background: #fff;
		border: 2px solid #e5e7eb;
		border-radius: 12px;
		overflow: hidden;
		transition: border-color .2s, box-shadow .2s, transform .15s;
		display: flex;
		flex-direction: column;
	}
	.product-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,.1); transform: translateY(-2px); }
	.product-card.in-cart { border-color: #1d4e3e; }
	.product-card.added { transform: scale(1.03); border-color: #2e7d5e; }

	.product-image {
		position: relative;
		aspect-ratio: 1;
		overflow: hidden;
		background: #f5f5f5;
	}
	.product-image img { width: 100%; height: 100%; object-fit: cover; display: block; }

	.quantity-badge {
		position: absolute;
		top: 6px;
		right: 6px;
		background: #1d4e3e;
		color: #fff;
		font-size: .75rem;
		font-weight: 700;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.product-info { padding: .6rem .75rem .3rem; flex: 1; }
	.product-info h3 {
		font-size: .85rem;
		font-weight: 600;
		margin: 0 0 .2rem;
		color: #1a1a1a;
		text-transform: capitalize;
		line-height: 1.3;
	}
	.product-price { font-size: .82rem; color: #1d4e3e; font-weight: 600; margin: 0; }

	.product-actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: .3rem;
		padding: .4rem .6rem .6rem;
	}

	.btn-qty {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 1.5px solid #1d4e3e;
		background: #fff;
		color: #1d4e3e;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: background .15s, color .15s;
		padding: 0;
	}
	.btn-qty:hover { background: #1d4e3e; color: #fff; }
	.btn-plus { background: #1d4e3e; color: #fff; }
	.btn-plus:hover { background: #163d30; }

	.qty-display {
		min-width: 20px;
		text-align: center;
		font-weight: 700;
		font-size: .9rem;
		color: #1d4e3e;
	}

	/* ── Cart sidebar ── */
	.cart-sidebar {
		position: sticky;
		top: 5rem;
		background: #fff;
		border-radius: 16px;
		border: 1px solid #e5e7eb;
		box-shadow: 0 4px 24px rgba(0,0,0,.08);
		overflow: hidden;
		max-height: calc(100vh - 6rem);
		display: flex;
		flex-direction: column;
	}

	.cart-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1.25rem;
		border-bottom: 1px solid #f0f0f0;
		background: #1d4e3e;
		color: #fff;
	}

	.cart-title {
		display: flex;
		align-items: center;
		gap: .5rem;
	}

	.cart-icon-wrap { font-size: 1.2rem; }

	.cart-title h3 {
		font-size: 1rem;
		font-weight: 600;
		margin: 0;
		color: #fff;
	}

	.item-count-badge {
		background: #a8d5b0;
		color: #1d4e3e;
		font-size: .72rem;
		font-weight: 800;
		min-width: 20px;
		height: 20px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 5px;
	}

	.cart-toggle {
		background: rgba(255,255,255,.15);
		border: none;
		color: #fff;
		cursor: pointer;
		padding: .3rem;
		border-radius: 6px;
		display: flex;
		align-items: center;
		transition: background .15s;
	}
	.cart-toggle:hover { background: rgba(255,255,255,.25); }

	.cart-items {
		flex: 1;
		overflow-y: auto;
		padding: .75rem;
		display: flex;
		flex-direction: column;
		gap: .5rem;
	}

	.cart-item {
		display: flex;
		align-items: center;
		gap: .75rem;
		padding: .6rem .5rem;
		border-radius: 10px;
		background: #fafafa;
		border: 1px solid #f0f0f0;
		transition: background .15s;
	}
	.cart-item:hover { background: #f0f7f4; }

	.cart-thumb-wrap {
		flex-shrink: 0;
		width: 54px;
		height: 54px;
		border-radius: 8px;
		overflow: hidden;
		background: #efefef;
	}

	.cart-thumb {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.cart-item-body {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: .15rem;
	}

	.cart-item-name {
		font-size: .82rem;
		font-weight: 600;
		color: #1a1a1a;
		text-transform: capitalize;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.cart-item-unit { font-size: .72rem; color: #888; }

	.qty-pill {
		display: flex;
		align-items: center;
		gap: .25rem;
		margin-top: .3rem;
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 20px;
		padding: .1rem .3rem;
		width: fit-content;
	}

	.qty-btn {
		width: 20px;
		height: 20px;
		border: none;
		background: none;
		color: #1d4e3e;
		font-size: 1rem;
		font-weight: 700;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: background .15s;
		line-height: 1;
	}
	.qty-btn:hover { background: #e8f4ee; }

	.qty-count {
		min-width: 18px;
		text-align: center;
		font-size: .8rem;
		font-weight: 700;
		color: #1d4e3e;
	}

	.cart-item-subtotal {
		flex-shrink: 0;
		font-size: .82rem;
		font-weight: 700;
		color: #1d4e3e;
		white-space: nowrap;
	}

	.cart-footer {
		border-top: 1px solid #f0f0f0;
		padding: 1rem 1.25rem;
		background: #fff;
	}

	.cart-total-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: .75rem;
	}

	.total-label { font-size: .9rem; color: #555; }

	.total-amount {
		font-size: 1.2rem;
		font-weight: 800;
		color: #1d4e3e;
	}

	.btn-checkout {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: .5rem;
		width: 100%;
		padding: .75rem 1rem;
		background: #1d4e3e;
		color: #fff;
		text-decoration: none;
		border-radius: 10px;
		font-weight: 600;
		font-size: .95rem;
		transition: background .2s, transform .1s;
	}
	.btn-checkout:hover { background: #163d30; transform: translateY(-1px); }
	.btn-checkout:active { transform: translateY(0); }

	.cart-empty {
		padding: 2rem 1rem;
		text-align: center;
		color: #aaa;
	}
	.empty-icon { font-size: 2.5rem; margin-bottom: .5rem; }
	.cart-empty p { margin: .2rem 0; font-size: .85rem; }
	.empty-hint { font-size: .78rem; color: #bbb; }
</style>
