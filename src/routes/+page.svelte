<script lang="ts">
	import { onMount } from 'svelte';
	import CookieBanner from '../lib/CookieBanner.svelte';

	let visible = false;
	let selectedSejour = '';
	let dateArrivee = '';
	let dateDepart = '';
	let nombrePersonnes = 2;

	const sejours = [
		{ value: 'bulle', label: 'Séjour Bulle' },
		{ value: 'tipi', label: 'Séjour Tipi' },
		{ value: 'cabane', label: 'Cabane dans les arbres' },
		{ value: 'roulotte', label: 'Roulotte' },
		{ value: 'glamping', label: 'Tente de luxe' }
	];

	const services = [
		{
			icon: '🚴',
			title: 'Location de Vélos',
			description: 'Vélos électriques haut de gamme pour explorer la Normandie en toute liberté.',
			image: '/images/velobafang.webp',
			link: '/reservations'
		},
		{
			icon: '🏕️',
			title: 'Hébergements Insolites',
			description: 'Bulles, cabanes, tipis... Vivez une expérience unique en pleine nature.',
			image: '/images/bulle normandie.jpg',
			link: '/sejours'
		},
		{
			icon: '🧺',
			title: 'Pique-nique Gourmet',
			description: 'Paniers garnis de produits locaux pour des pauses gourmandes inoubliables.',
			image: '/images/planche-apéro-gourmande-980x980.jpg',
			link: '/picnic'
		},
		{
			icon: '🎒',
			title: 'Équipement Complet',
			description: 'Tout le matériel nécessaire pour un séjour confortable et sans souci.',
			image: '/images/sacoches.jpg',
			link: '/equipment'
		}
	];

	const experiences = [
		{
			title: 'Plages du Débarquement',
			subtitle: 'Circuit historique',
			image: '/images/plage-debarquement.jpg',
			duration: '3 jours'
		},
		{
			title: 'Suisse Normande',
			subtitle: 'Nature & aventure',
			image: '/images/visuelcartevoievertedelasuissenormande.jpg',
			duration: '5 jours'
		},
		{
			title: 'Côte Fleurie',
			subtitle: 'Mer & gastronomie',
			image: '/images/ASNELLESPLAGE.jpg',
			duration: '4 jours'
		}
	];

	const stats = [
		{ number: '500+', label: 'Clients satisfaits' },
		{ number: '15', label: 'Circuits disponibles' },
		{ number: '50', label: 'Vélos électriques' },
		{ number: '100%', label: 'Local & authentique' }
	];

	onMount(() => {
		visible = true;
	});

	function handleSearch() {
		console.log('Recherche:', { selectedSejour, dateArrivee, dateDepart, nombrePersonnes });
	}
</script>

<svelte:head>
	<title>Normandie Vélo & Séjours - Découvrez la Normandie autrement</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
</svelte:head>

<CookieBanner />

<!-- Hero Section -->
<section class="hero" class:visible>
	<div class="hero-bg">
		<div class="hero-overlay"></div>
		<img src="/images/Woman-Beach-Electric-Bike-Snow-Electric-Bike-Fatbike.jpg" alt="Vélo en Normandie" class="hero-image" />
	</div>

	<div class="hero-content">
		<div class="hero-badge">
			<span>🌿</span> Tourisme durable en Normandie
		</div>

		<h1 class="hero-title">
			<span class="hero-title-line">Explorez la</span>
			<span class="hero-title-accent">Normandie</span>
			<span class="hero-title-line">à vélo</span>
		</h1>

		<p class="hero-subtitle">
			Séjours tout compris alliant vélo électrique, hébergements insolites
			et découvertes gastronomiques au cœur de la campagne normande.
		</p>

		<div class="hero-cta">
			<a href="/sejours" class="btn btn-primary">
				Découvrir nos séjours
				<span class="btn-arrow">→</span>
			</a>
			<a href="/about" class="btn btn-secondary">
				En savoir plus
			</a>
		</div>
	</div>

	<div class="hero-search">
		<form on:submit|preventDefault={handleSearch} class="search-form">
			<div class="search-field">
				<label for="sejour-select">Type de séjour</label>
				<select id="sejour-select" bind:value={selectedSejour}>
					<option value="">Tous les séjours</option>
					{#each sejours as sejour}
						<option value={sejour.value}>{sejour.label}</option>
					{/each}
				</select>
			</div>

			<div class="search-field">
				<label for="date-arrivee">Arrivée</label>
				<input type="date" id="date-arrivee" bind:value={dateArrivee} />
			</div>

			<div class="search-field">
				<label for="date-depart">Départ</label>
				<input type="date" id="date-depart" bind:value={dateDepart} />
			</div>

			<div class="search-field">
				<label for="personnes">Voyageurs</label>
				<input type="number" id="personnes" bind:value={nombrePersonnes} min="1" max="10" />
			</div>

			<button type="submit" class="search-btn">
				<span>Rechercher</span>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="11" cy="11" r="8"></circle>
					<path d="m21 21-4.35-4.35"></path>
				</svg>
			</button>
		</form>
	</div>

	<div class="scroll-indicator">
		<span>Découvrir</span>
		<div class="scroll-arrow"></div>
	</div>
</section>

<!-- Stats Section -->
<section class="stats-section">
	<div class="container">
		<div class="stats-grid">
			{#each stats as stat, i}
				<div class="stat-item" style="animation-delay: {i * 0.1}s">
					<span class="stat-number">{stat.number}</span>
					<span class="stat-label">{stat.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="services-section">
	<div class="container">
		<div class="section-header">
			<span class="section-tag">Nos Services</span>
			<h2 class="section-title">Tout pour votre<br/><span class="accent">aventure normande</span></h2>
			<p class="section-subtitle">
				Des prestations haut de gamme pour un séjour inoubliable,
				du vélo à l'hébergement en passant par la gastronomie locale.
			</p>
		</div>

		<div class="services-grid">
			{#each services as service, i}
				<a href={service.link} class="service-card" style="animation-delay: {i * 0.15}s">
					<div class="service-image">
						<img src={service.image} alt={service.title} />
						<div class="service-icon">{service.icon}</div>
					</div>
					<div class="service-content">
						<h3>{service.title}</h3>
						<p>{service.description}</p>
						<span class="service-link">
							Découvrir
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M5 12h14m-7-7 7 7-7 7"/>
							</svg>
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Experiences Section -->
<section class="experiences-section">
	<div class="container">
		<div class="section-header centered">
			<span class="section-tag">Séjours populaires</span>
			<h2 class="section-title">Nos circuits <span class="accent">coup de cœur</span></h2>
		</div>

		<div class="experiences-grid">
			{#each experiences as exp, i}
				<div class="experience-card" style="animation-delay: {i * 0.2}s">
					<div class="experience-image">
						<img src={exp.image} alt={exp.title} />
						<div class="experience-duration">{exp.duration}</div>
					</div>
					<div class="experience-content">
						<span class="experience-subtitle">{exp.subtitle}</span>
						<h3>{exp.title}</h3>
						<a href="/sejours" class="experience-link">Voir le circuit →</a>
					</div>
				</div>
			{/each}
		</div>

		<div class="experiences-cta">
			<a href="/sejours" class="btn btn-outline">
				Voir tous nos séjours
			</a>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="cta-section">
	<div class="cta-bg"></div>
	<div class="container">
		<div class="cta-content">
			<h2>Prêt pour l'aventure ?</h2>
			<p>Réservez dès maintenant votre séjour vélo en Normandie et vivez une expérience unique.</p>
			<div class="cta-buttons">
				<a href="/sejours" class="btn btn-white">Réserver maintenant</a>
				<a href="/about" class="btn btn-ghost">Nous contacter</a>
			</div>
		</div>
	</div>
</section>

<style>
	/* Base Styles */
	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem 2rem;
		border-radius: 50px;
		font-weight: 600;
		font-size: 1rem;
		text-decoration: none;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		cursor: pointer;
		border: none;
	}

	.btn-primary {
		background: linear-gradient(135deg, #1D4E3E 0%, #2A6B55 100%);
		color: white;
		box-shadow: 0 4px 20px rgba(29, 78, 62, 0.4);
	}

	.btn-primary:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 30px rgba(29, 78, 62, 0.5);
	}

	.btn-secondary {
		background: rgba(255, 255, 255, 0.15);
		color: white;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.3);
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.25);
	}

	.btn-outline {
		background: transparent;
		color: #1D4E3E;
		border: 2px solid #1D4E3E;
	}

	.btn-outline:hover {
		background: #1D4E3E;
		color: white;
	}

	.btn-white {
		background: white;
		color: #1D4E3E;
	}

	.btn-white:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
	}

	.btn-ghost {
		background: transparent;
		color: white;
		border: 2px solid white;
	}

	.btn-ghost:hover {
		background: white;
		color: #1D4E3E;
	}

	.btn-arrow {
		transition: transform 0.3s ease;
	}

	.btn:hover .btn-arrow {
		transform: translateX(5px);
	}

	/* Section Styles */
	.section-header {
		margin-bottom: 4rem;
	}

	.section-header.centered {
		text-align: center;
	}

	.section-tag {
		display: inline-block;
		background: linear-gradient(135deg, rgba(29, 78, 62, 0.1) 0%, rgba(184, 134, 11, 0.1) 100%);
		color: #1D4E3E;
		padding: 0.5rem 1.25rem;
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 1.5rem;
	}

	.section-title {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 600;
		color: #1D4E3E;
		line-height: 1.2;
		margin-bottom: 1.5rem;
	}

	.section-title .accent {
		color: #B8860B;
		font-style: italic;
	}

	.section-subtitle {
		font-size: 1.15rem;
		color: #666;
		max-width: 600px;
		line-height: 1.8;
	}

	/* Hero Section */
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 6rem 2rem 2rem;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		z-index: -1;
	}

	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transform: scale(1.1);
		transition: transform 8s ease-out;
	}

	.hero.visible .hero-image {
		transform: scale(1);
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			135deg,
			rgba(29, 78, 62, 0.85) 0%,
			rgba(29, 78, 62, 0.6) 50%,
			rgba(0, 0, 0, 0.4) 100%
		);
		z-index: 1;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		max-width: 800px;
		margin-bottom: 3rem;
		opacity: 0;
		transform: translateY(30px);
		animation: fadeInUp 1s ease forwards 0.3s;
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10px);
		padding: 0.75rem 1.25rem;
		border-radius: 50px;
		color: white;
		font-size: 0.9rem;
		font-weight: 500;
		margin-bottom: 2rem;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.hero-title {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(2.5rem, 8vw, 5rem);
		font-weight: 700;
		color: white;
		line-height: 1.1;
		margin-bottom: 1.5rem;
	}

	.hero-title-line {
		display: block;
	}

	.hero-title-accent {
		display: block;
		color: #B8860B;
		font-style: italic;
	}

	.hero-subtitle {
		font-size: clamp(1rem, 2.5vw, 1.25rem);
		color: rgba(255, 255, 255, 0.9);
		line-height: 1.8;
		max-width: 550px;
		margin-bottom: 2.5rem;
	}

	.hero-cta {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	/* Search Form */
	.hero-search {
		position: relative;
		z-index: 2;
		max-width: 1200px;
		margin: 0 auto;
		opacity: 0;
		transform: translateY(30px);
		animation: fadeInUp 1s ease forwards 0.6s;
	}

	.search-form {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		background: white;
		padding: 1.5rem;
		border-radius: 20px;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
	}

	.search-field {
		flex: 1;
		min-width: 150px;
	}

	.search-field label {
		display: block;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: #888;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	.search-field select,
	.search-field input {
		width: 100%;
		padding: 0.75rem 1rem;
		border: 2px solid #eee;
		border-radius: 12px;
		font-size: 1rem;
		color: #333;
		background: #FDFBF7;
		transition: all 0.3s ease;
		font-family: inherit;
	}

	.search-field select:focus,
	.search-field input:focus {
		outline: none;
		border-color: #1D4E3E;
		background: white;
	}

	.search-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		background: linear-gradient(135deg, #1D4E3E 0%, #2A6B55 100%);
		color: white;
		padding: 1rem 2rem;
		border: none;
		border-radius: 12px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		min-width: 160px;
		font-family: inherit;
	}

	.search-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(29, 78, 62, 0.4);
	}

	/* Scroll Indicator */
	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		color: white;
		opacity: 0;
		animation: fadeIn 1s ease forwards 1.2s;
	}

	.scroll-indicator span {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		opacity: 0.8;
	}

	.scroll-arrow {
		width: 24px;
		height: 40px;
		border: 2px solid rgba(255, 255, 255, 0.5);
		border-radius: 12px;
		position: relative;
	}

	.scroll-arrow::after {
		content: '';
		position: absolute;
		top: 8px;
		left: 50%;
		transform: translateX(-50%);
		width: 4px;
		height: 8px;
		background: white;
		border-radius: 2px;
		animation: scrollBounce 2s ease infinite;
	}

	/* Stats Section */
	.stats-section {
		padding: 4rem 0;
		background: linear-gradient(135deg, #1D4E3E 0%, #152F28 100%);
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}

	.stat-item {
		text-align: center;
		color: white;
		opacity: 0;
		animation: fadeInUp 0.6s ease forwards;
	}

	.stat-number {
		display: block;
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 700;
		color: #B8860B;
		margin-bottom: 0.5rem;
	}

	.stat-label {
		font-size: 1rem;
		opacity: 0.9;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	/* Services Section */
	.services-section {
		padding: 8rem 0;
		background: #FDFBF7;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}

	.service-card {
		background: white;
		border-radius: 24px;
		overflow: hidden;
		text-decoration: none;
		color: inherit;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		opacity: 0;
		animation: fadeInUp 0.6s ease forwards;
	}

	.service-card:hover {
		transform: translateY(-10px);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
	}

	.service-image {
		position: relative;
		height: 220px;
		overflow: hidden;
	}

	.service-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s ease;
	}

	.service-card:hover .service-image img {
		transform: scale(1.1);
	}

	.service-icon {
		position: absolute;
		bottom: -25px;
		right: 20px;
		width: 60px;
		height: 60px;
		background: linear-gradient(135deg, #1D4E3E 0%, #2A6B55 100%);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.75rem;
		box-shadow: 0 8px 25px rgba(29, 78, 62, 0.4);
		z-index: 1;
	}

	.service-content {
		padding: 2.5rem 1.5rem 1.5rem;
	}

	.service-content h3 {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 1.5rem;
		color: #1D4E3E;
		margin-bottom: 0.75rem;
	}

	.service-content p {
		color: #666;
		font-size: 0.95rem;
		line-height: 1.7;
		margin-bottom: 1.5rem;
	}

	.service-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: #B8860B;
		font-weight: 600;
		font-size: 0.95rem;
		transition: gap 0.3s ease;
	}

	.service-card:hover .service-link {
		gap: 1rem;
	}

	/* Experiences Section */
	.experiences-section {
		padding: 8rem 0;
		background: linear-gradient(180deg, #f8f6f2 0%, #FDFBF7 100%);
	}

	.experiences-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.experience-card {
		position: relative;
		border-radius: 24px;
		overflow: hidden;
		background: white;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		opacity: 0;
		animation: fadeInUp 0.6s ease forwards;
	}

	.experience-image {
		position: relative;
		height: 280px;
	}

	.experience-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s ease;
	}

	.experience-card:hover .experience-image img {
		transform: scale(1.1);
	}

	.experience-duration {
		position: absolute;
		top: 1rem;
		left: 1rem;
		background: white;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 600;
		color: #1D4E3E;
	}

	.experience-content {
		padding: 1.5rem;
	}

	.experience-subtitle {
		display: block;
		font-size: 0.85rem;
		color: #B8860B;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	.experience-content h3 {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 1.5rem;
		color: #1D4E3E;
		margin-bottom: 1rem;
	}

	.experience-link {
		color: #1D4E3E;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
		transition: color 0.3s ease;
	}

	.experience-link:hover {
		color: #B8860B;
	}

	.experiences-cta {
		text-align: center;
	}

	/* CTA Section */
	.cta-section {
		position: relative;
		padding: 8rem 2rem;
		overflow: hidden;
	}

	.cta-bg {
		position: absolute;
		inset: 0;
		background: linear-gradient(135deg, #1D4E3E 0%, #2A6B55 50%, #1D4E3E 100%);
		z-index: -1;
	}

	.cta-bg::before {
		content: '';
		position: absolute;
		inset: 0;
		background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}

	.cta-content {
		text-align: center;
		color: white;
		max-width: 700px;
		margin: 0 auto;
	}

	.cta-content h2 {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(2rem, 5vw, 3.5rem);
		margin-bottom: 1.5rem;
	}

	.cta-content p {
		font-size: 1.2rem;
		opacity: 0.9;
		margin-bottom: 2.5rem;
		line-height: 1.8;
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
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

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes scrollBounce {
		0%, 100% { transform: translateX(-50%) translateY(0); }
		50% { transform: translateX(-50%) translateY(10px); }
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.experiences-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.stats-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 3rem;
		}
	}

	@media (max-width: 768px) {
		.hero {
			padding: 5rem 1rem 2rem;
		}

		.hero-content {
			text-align: center;
		}

		.hero-cta {
			justify-content: center;
		}

		.search-form {
			flex-direction: column;
			gap: 1rem;
		}

		.search-field {
			min-width: 100%;
		}

		.search-btn {
			width: 100%;
		}

		.services-section,
		.experiences-section {
			padding: 4rem 0;
		}

		.section-header {
			text-align: center;
			margin-bottom: 3rem;
		}

		.section-subtitle {
			margin: 0 auto;
		}

		.experiences-grid {
			grid-template-columns: 1fr;
		}

		.stats-grid {
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}

		.scroll-indicator {
			display: none;
		}

		.cta-section {
			padding: 4rem 1rem;
		}
	}
</style>
