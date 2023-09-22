<svelte:head>
	<title>Glamping - Séjours tout compris</title>
</svelte:head>
<body>
	<header>
		<h1>Bienvenue sur notre site. Venez vivre une belle aventure avec nous</h1>
		<a href="#offres" class="button primary">Découvrez nos offres</a>
	</header>

	<main>
		<main>
			<section class="hero">
				<p>Venez vivre une belle aventure avec nous</p>
			</section>

			<section class="glamping-info">
				<h2>Le Glamping</h2>
				<p>Découvrez le luxe du camping avec nos hébergements en pleine nature.</p>
			</section>

			<section class="featured-offers" id="offres">
				<h2>Nos Offres en Vedette</h2>
				<div class="offer">
					<img src="/images/Saucisson-sec.jpg" alt="Offre 1" />
					<h3>Offre 1</h3>
					<p>PROMO SUR LE SAUCISSON !!</p>
					<a href="/offre1" class="button">Voir l'offre</a>
				</div>
				<div class="offer">
					<img src="/images/caramel beurre salé.jpg" alt="Offre 2" />
					<h3>Offre 2</h3>
					<p>TROP BONS LES CARAMELS DE NORMANDIE !!!</p>
					<a href="/offre2" class="button">Voir l'offre</a>
				</div>
				<div class="offer">
					<img src="/images/camembert.jpg" alt="Offre 3" />
					<h3>Offre 3</h3>
					<p>Le véritable camembert moulé à la louche</p>
					<a href="/offre3" class="button">Voir l'offre</a>
				</div>
			</section>

			<section class="services">
				<h2>Nos Services</h2>
				<div class="service">
					<img src="/images/tenteLuxe.jpg" alt="Matériel de Camping" />
					<h3>Matériel de Camping</h3>
					<p>Nous fournissons tout l'équipement nécessaire pour votre séjour en camping.</p>
					<a href="/service1" class="button">En savoir plus</a>
				</div>
				<div class="service">
					<img src="/images/velobafang.webp" alt="Vélos electriques" />
					<h3>Location de Vélos Electriques</h3>
					<p>Nous fournissons tout l'équipement nécessaire pour votre séjour en camping.</p>
					<a href="/service2" class="button">En savoir plus</a>
				</div>
				<div class="service">
					<img src="/images/planche-apéro-gourmande-980x980.jpg" alt="Planche Apéro" />
					<h3>Planche Apéro</h3>
					<p>
						Profitez d'une planche apéro pour une arrivée gourmande à chaque étape de votre séjour.
					</p>
					<a href="/service3" class="button">En savoir plus</a>
				</div>
				<div class="service">
					<img src="/images/bracelet-all inclusive.jpg" alt="All Inclusive" />
					<h3>Séjours All-Inclusive</h3>
					<p>Budget maîtrisé, il ne reste plus qu'à profiter !</p>
					<a href="/service4" class="button">En savoir plus</a>
				</div>
			</section>
		</main>
	</main>
</body>

<style>
	/* Styles généraux */
	body {
		font-family: 'Roboto', sans-serif;
		margin: 0;
		padding: 0;
		background-color: #f0f0f0;
	}

	header {
		background-color: #333;
		color: #fff;
		text-align: center;
		padding: 20px 0;
	}

	header h1 {
		font-size: 36px;
	}

	/* Styles pour la section Hero */
	.hero {
		background-image: url('/images/tenteLuxe.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		padding: 100px 0;
		text-align: center;
		color: #fff;
		position: relative;
	}

	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5); /* Arrière-plan légèrement transparent */
	}

	/* Styles pour les titres */
	h2 {
		font-size: 28px;
		margin-top: 30px;
		color: #ff5733; /* Couleur vive */
		text-transform: uppercase; /* Texte en majuscules */
	}

	/* Styles pour la section des offres en vedette */
	.featured-offers {
		margin-top: 30px;
		display: flexbox;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.offer {
		flex-basis: calc(33.33% - 20px);
		margin: 10px;
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 8px;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
		background-color: #fff;
		text-align: center;
		transition: transform 0.2s;
		position: relative;
		overflow: hidden;
	}

	.offer:hover {
		transform: scale(1.05);
		box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2); /* Ombre plus prononcée */
	}
	.offer img {
		max-width: 20%;
		height: auto;
		border-radius: 8px;
		transition: transform 0.2s;
	}

	.offer:hover img {
		transform: scale(1.1); /* Zoom au survol */
	}

	.offer h3 {
		font-size: 22px;
		margin-top: 10px;
		color: #333;
		font-weight: bold; /* Texte en gras */
	}

	.offer p {
		font-size: 16px;
		color: #666;
		margin-top: 10px;
	}

	/* Bouton pour les offres en vedette */
	.offer a.button {
		display: inline-block;
		padding: 10px 20px;
		background-color: #ff5733; /* Couleur vive */
		color: #fff;
		font-size: 18px;
		border: none;
		border-radius: 5px; /* Bouton légèrement arrondi */
		text-decoration: none;
		margin-top: 10px;
		transition: background-color 0.2s;
	}

	.offer a.button:hover {
		background-color: #ff3c1e; /* Couleur vive au survol */
	}

	/* Styles pour la section Glamping Info */
	.glamping-info {
		margin-top: 30px;
		text-align: center;
	}

	/* Styles pour la section des services */
	.services {
		margin-top: 30px;
		display: inline-flexbox;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.service {
		flex-basis: calc(33.33% - 20px);
		margin: 10px;
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 8px;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
		background-color: #fff;
		text-align: center;
		transition: transform 0.2s;
		position: relative;
		overflow: hidden;
	}

	.service:hover {
		transform: scale(1.05);
		box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2); /* Ombre plus prononcée */
	}

	.service img {
		max-width: 20%;
		height: auto;
		border-radius: 8px;
		transition: transform 0.2s;
	}

	.service:hover img {
		transform: scale(1.1); /* Zoom au survol */
	}

	.service h3 {
		font-size: 22px;
		margin-top: 10px;
		color: #333;
		font-weight: bold; /* Texte en gras */
	}

	.service p {
		font-size: 16px;
		color: #666;
		margin-top: 10px;
	}
	/* Styles généraux pour les petits écrans comme les iPhones */
	@media (max-width: 767px) {
		/* Ajoutez ici vos styles spécifiques pour les petits écrans */
	}

	/* Styles pour les écrans de taille moyenne comme les iPads en mode portrait */
	@media (min-width: 768px) and (max-width: 1023px) {
		/* Ajoutez ici vos styles spécifiques pour les iPads */
	}

	/* Styles pour les écrans plus grands comme le Nest Hub Max */
	@media (min-width: 1024px) {
		/* Ajoutez ici vos styles spécifiques pour le Nest Hub Max */
	}
</style>
