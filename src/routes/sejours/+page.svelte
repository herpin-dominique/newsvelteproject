<script lang="ts">
	import { onMount } from 'svelte';

	let selectedCategory = 'all';
	let searchQuery = '';

	const categories = [
		{ id: 'all', label: 'Tous les séjours' },
		{ id: 'nature', label: 'Nature & Aventure' },
		{ id: 'histoire', label: 'Historique' },
		{ id: 'gastronomie', label: 'Gastronomie' },
		{ id: 'famille', label: 'En famille' }
	];

	const sejours = [
		{
			id: 1,
			name: 'Plages du Débarquement',
			category: 'histoire',
			description: 'Parcourez les sites historiques du D-Day à vélo, de Utah Beach à Sword Beach.',
			duration: '3 jours',
			distance: '85 km',
			difficulty: 'Facile',
			price: 450,
			image: '/images/plage-debarquement.jpg',
			highlights: ['Musée du Débarquement', 'Cimetière américain', 'Pointe du Hoc'],
			accommodation: "Chambre d'hôtes"
		},
		{
			id: 2,
			name: 'Suisse Normande',
			category: 'nature',
			description:
				'Découvrez les paysages vallonnés et les gorges spectaculaires de la Suisse Normande.',
			duration: '5 jours',
			distance: '120 km',
			difficulty: 'Sportif',
			price: 680,
			image: '/images/visuelcartevoievertedelasuissenormande.jpg',
			highlights: ["Roche d'Oëtre", 'Clécy', "Pont-d'Ouilly"],
			accommodation: 'Bulle transparente'
		},
		{
			id: 3,
			name: 'Côte Fleurie',
			category: 'gastronomie',
			description: 'De Honfleur à Cabourg, savourez les trésors de la côte normande.',
			duration: '4 jours',
			distance: '90 km',
			difficulty: 'Facile',
			price: 590,
			image: '/images/ASNELLESPLAGE.jpg',
			highlights: ['Honfleur', 'Deauville', 'Fromages AOP'],
			accommodation: 'Roulotte'
		},
		{
			id: 4,
			name: 'Escapade en Famille',
			category: 'famille',
			description:
				'Un séjour adapté aux familles avec des étapes courtes et des activités ludiques.',
			duration: '3 jours',
			distance: '45 km',
			difficulty: 'Très facile',
			price: 520,
			image: '/images/baladde vélo plage débarquement.jpg',
			highlights: ['Parcours sécurisé', 'Ferme pédagogique', 'Plage'],
			accommodation: 'Cabane dans les arbres'
		},
		{
			id: 5,
			name: 'Route du Camembert',
			category: 'gastronomie',
			description: "Traversez le Pays d'Auge et ses vergers, dégustez cidre et fromages.",
			duration: '4 jours',
			distance: '100 km',
			difficulty: 'Modéré',
			price: 620,
			image: '/images/camembert.jpg',
			highlights: ['Fromageries', 'Cidreries', 'Manoirs normands'],
			accommodation: 'Tipi'
		},
		{
			id: 6,
			name: 'Aventure Bocage',
			category: 'nature',
			description: 'Immersion totale dans le bocage normand, entre haies et chemins creux.',
			duration: '6 jours',
			distance: '150 km',
			difficulty: 'Sportif',
			price: 780,
			image: '/images/destinationsbois.jpg',
			highlights: ['Chemins ruraux', 'Faune sauvage', 'Villages authentiques'],
			accommodation: 'Tente de luxe'
		}
	];

	$: filteredSejours = sejours.filter((sejour) => {
		const matchesCategory = selectedCategory === 'all' || sejour.category === selectedCategory;
		const matchesSearch =
			sejour.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			sejour.description.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	function getDifficultyColor(difficulty: string): string {
		switch (difficulty) {
			case 'Très facile':
				return '#4CAF50';
			case 'Facile':
				return '#8BC34A';
			case 'Modéré':
				return '#FFC107';
			case 'Sportif':
				return '#FF9800';
			default:
				return '#666';
		}
	}

	let visible = false;
	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>Nos Séjours - Normandie Vélo & Séjours</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-bg">
		<img src="/images/baladde vélo plage débarquement.jpg" alt="Séjours vélo Normandie" />
		<div class="hero-overlay" />
	</div>
	<div class="hero-content" class:visible>
		<span class="hero-tag">Découvrez nos offres</span>
		<h1>Nos <span class="accent">Séjours</span></h1>
		<p>Des circuits vélo tout compris pour explorer la Normandie à votre rythme</p>
	</div>
</section>

<!-- Filters Section -->
<section class="filters-section">
	<div class="container">
		<div class="filters">
			<div class="search-box">
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.35-4.35" />
				</svg>
				<input type="text" placeholder="Rechercher un séjour..." bind:value={searchQuery} />
			</div>

			<div class="category-filters">
				{#each categories as cat}
					<button
						class="filter-btn"
						class:active={selectedCategory === cat.id}
						on:click={() => (selectedCategory = cat.id)}
					>
						{cat.label}
					</button>
				{/each}
			</div>
		</div>

		<p class="results-count">
			{filteredSejours.length} séjour{filteredSejours.length > 1 ? 's' : ''} trouvé{filteredSejours.length >
			1
				? 's'
				: ''}
		</p>
	</div>
</section>

<!-- Sejours Grid -->
<section class="sejours-section">
	<div class="container">
		<div class="sejours-grid">
			{#each filteredSejours as sejour, i (sejour.id)}
				<article class="sejour-card" style="animation-delay: {i * 0.1}s">
					<div class="sejour-image">
						<img src={sejour.image} alt={sejour.name} />
						<div class="sejour-badge">{sejour.duration}</div>
						<div class="sejour-price">{sejour.price}€<span>/pers.</span></div>
					</div>

					<div class="sejour-content">
						<div class="sejour-meta">
							<span
								class="sejour-difficulty"
								style="background-color: {getDifficultyColor(sejour.difficulty)}"
							>
								{sejour.difficulty}
							</span>
							<span class="sejour-distance">{sejour.distance}</span>
						</div>

						<h3>{sejour.name}</h3>
						<p>{sejour.description}</p>

						<div class="sejour-highlights">
							{#each sejour.highlights as highlight}
								<span class="highlight-tag">{highlight}</span>
							{/each}
						</div>

						<div class="sejour-footer">
							<div class="accommodation">
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
									<polyline points="9 22 9 12 15 12 15 22" />
								</svg>
								<span>{sejour.accommodation}</span>
							</div>
							<a href="/sejours/{sejour.id}" class="btn-details">
								Voir le détail
								<svg
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d="M5 12h14m-7-7 7 7-7 7" />
								</svg>
							</a>
						</div>
					</div>
				</article>
			{/each}
		</div>

		{#if filteredSejours.length === 0}
			<div class="no-results">
				<svg
					width="64"
					height="64"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
				>
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.35-4.35" />
				</svg>
				<h3>Aucun séjour trouvé</h3>
				<p>Essayez de modifier vos critères de recherche</p>
				<button
					class="btn-reset"
					on:click={() => {
						selectedCategory = 'all';
						searchQuery = '';
					}}
				>
					Réinitialiser les filtres
				</button>
			</div>
		{/if}
	</div>
</section>

<!-- CTA Section -->
<section class="cta-section">
	<div class="container">
		<div class="cta-content">
			<h2>Besoin d'un séjour sur mesure ?</h2>
			<p>Contactez-nous pour créer un circuit personnalisé adapté à vos envies et votre niveau.</p>
			<a href="/about" class="btn-cta">Nous contacter</a>
		</div>
	</div>
</section>

<style>
	/* Hero Section */
	.hero {
		position: relative;
		height: 50vh;
		min-height: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		z-index: -1;
	}

	.hero-bg img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, rgba(29, 78, 62, 0.9) 0%, rgba(29, 78, 62, 0.7) 100%);
	}

	.hero-content {
		text-align: center;
		color: white;
		padding: 2rem;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}

	.hero-content.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-tag {
		display: inline-block;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.hero h1 {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 700;
		margin-bottom: 1rem;
		color: white;
	}

	.hero h1 .accent {
		color: #b8860b;
		font-style: italic;
	}

	.hero p {
		font-size: 1.2rem;
		opacity: 0.9;
		max-width: 600px;
		margin: 0 auto;
	}

	/* Container */
	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Filters Section */
	.filters-section {
		background: white;
		padding: 2rem 0;
		border-bottom: 1px solid #eee;
		position: sticky;
		top: 70px;
		z-index: 100;
	}

	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		align-items: center;
		justify-content: space-between;
	}

	.search-box {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background: #f8f6f2;
		padding: 0.75rem 1.25rem;
		border-radius: 50px;
		border: 2px solid transparent;
		transition: all 0.3s ease;
		flex: 1;
		max-width: 350px;
	}

	.search-box:focus-within {
		border-color: #1d4e3e;
		background: white;
	}

	.search-box svg {
		color: #888;
		flex-shrink: 0;
	}

	.search-box input {
		border: none;
		background: none;
		outline: none;
		font-size: 1rem;
		width: 100%;
		font-family: inherit;
	}

	.category-filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.filter-btn {
		padding: 0.6rem 1.25rem;
		border: 2px solid #eee;
		border-radius: 50px;
		background: white;
		color: #666;
		font-size: 0.9rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: inherit;
	}

	.filter-btn:hover {
		border-color: #1d4e3e;
		color: #1d4e3e;
	}

	.filter-btn.active {
		background: #1d4e3e;
		border-color: #1d4e3e;
		color: white;
	}

	.results-count {
		margin-top: 1rem;
		color: #888;
		font-size: 0.9rem;
	}

	/* Sejours Section */
	.sejours-section {
		padding: 4rem 0;
		background: #fdfbf7;
	}

	.sejours-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
		gap: 2rem;
	}

	.sejour-card {
		background: white;
		border-radius: 24px;
		overflow: hidden;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		opacity: 0;
		animation: fadeInUp 0.6s ease forwards;
	}

	.sejour-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
	}

	.sejour-image {
		position: relative;
		height: 240px;
		overflow: hidden;
	}

	.sejour-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s ease;
	}

	.sejour-card:hover .sejour-image img {
		transform: scale(1.1);
	}

	.sejour-badge {
		position: absolute;
		top: 1rem;
		left: 1rem;
		background: white;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 600;
		color: #1d4e3e;
	}

	.sejour-price {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: #1d4e3e;
		color: white;
		padding: 0.75rem 1rem;
		border-radius: 16px;
		font-size: 1.25rem;
		font-weight: 700;
	}

	.sejour-price span {
		font-size: 0.75rem;
		font-weight: 400;
		opacity: 0.8;
	}

	.sejour-content {
		padding: 1.5rem;
	}

	.sejour-meta {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.sejour-difficulty {
		padding: 0.35rem 0.75rem;
		border-radius: 50px;
		font-size: 0.75rem;
		font-weight: 600;
		color: white;
	}

	.sejour-distance {
		color: #888;
		font-size: 0.85rem;
	}

	.sejour-content h3 {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 1.5rem;
		color: #1d4e3e;
		margin-bottom: 0.75rem;
	}

	.sejour-content p {
		color: #666;
		font-size: 0.95rem;
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.sejour-highlights {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.highlight-tag {
		background: #f8f6f2;
		color: #666;
		padding: 0.35rem 0.75rem;
		border-radius: 50px;
		font-size: 0.8rem;
	}

	.sejour-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 1rem;
		border-top: 1px solid #eee;
	}

	.accommodation {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #888;
		font-size: 0.9rem;
	}

	.btn-details {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: #b8860b;
		font-weight: 600;
		font-size: 0.95rem;
		text-decoration: none;
		transition: gap 0.3s ease;
	}

	.btn-details:hover {
		gap: 0.75rem;
	}

	/* No Results */
	.no-results {
		text-align: center;
		padding: 4rem 2rem;
		color: #888;
	}

	.no-results svg {
		margin-bottom: 1.5rem;
		opacity: 0.5;
	}

	.no-results h3 {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 1.5rem;
		color: #333;
		margin-bottom: 0.5rem;
	}

	.no-results p {
		margin-bottom: 1.5rem;
	}

	.btn-reset {
		background: #1d4e3e;
		color: white;
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 50px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: inherit;
	}

	.btn-reset:hover {
		background: #2a6b55;
	}

	/* CTA Section */
	.cta-section {
		padding: 6rem 0;
		background: linear-gradient(135deg, #1d4e3e 0%, #152f28 100%);
	}

	.cta-content {
		text-align: center;
		color: white;
		max-width: 600px;
		margin: 0 auto;
	}

	.cta-content h2 {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		margin-bottom: 1rem;
		color: white;
	}

	.cta-content p {
		font-size: 1.1rem;
		opacity: 0.9;
		margin-bottom: 2rem;
	}

	.btn-cta {
		display: inline-block;
		background: white;
		color: #1d4e3e;
		padding: 1rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.btn-cta:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	/* Animations */
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero {
			height: 40vh;
			min-height: 300px;
		}

		.filters {
			flex-direction: column;
			align-items: stretch;
		}

		.search-box {
			max-width: 100%;
		}

		.category-filters {
			justify-content: center;
		}

		.sejours-grid {
			grid-template-columns: 1fr;
		}

		.filters-section {
			position: relative;
			top: 0;
		}
	}
</style>
