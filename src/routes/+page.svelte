<svelte:head>
	<title>Glamping - Séjours tout compris</title>
</svelte:head>
<h1>Bienvenue sur notre site. Venez vivre une belle aventure avec nous</h1>

<main>
	<section class="hero">
		<h1>Bienvenue sur notre site</h1>
		<p>Venez vivre une belle aventure avec nous</p>
	</section>

	<section class="featured-offers">
		<h2>Nos Offres en Vedette</h2>
		<!-- Placez ici les offres en vedette avec des images, des descriptions et des liens vers les détails -->
	</section>

	<section class="glamping-info">
		<h2>Le Glamping</h2>
		<p>Découvrez le luxe du camping avec nos hébergements en pleine nature.</p>
	</section>

	<section class="services">
		<h2>Nos Services</h2>
		<div class="service">
			<img src="/images/tenteLuxe.jpg" alt="Matériel de Camping" />
			<h3>Matériel de Camping</h3>
			<p>Nous fournissons tout l'équipement nécessaire pour votre séjour en camping.</p>
			<div class="service">
				<img src="/images/velobafang.webp" alt="Vélos electriques" />
				<h3>location de vélos electriques</h3>
				<p>Nous fournissons tout l'équipement nécessaire pour votre séjour en camping.</p>
			</div>
			<div class="service">
				<img src="/images/planche-apéro-gourmande-980x980.jpg" alt="Planche Apéro" />
				<h3>Planche Apéro</h3>
				<p>
					Profitez d'une planche apéro pour une arrivée gourmande à chaque étape de votre séjour.
				</p>
			</div>
			<!-- Ajoutez d'autres services ici -->
		</div>
	</section>
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

	/* Styles pour la section Hero */
	.hero {
		background-image: url('/images/tenteLuxe.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		padding: 100px 0;
		text-align: center;
		color: #fff;
	}

	/* Styles pour la section des offres en vedette */
	.featured-offers {
		margin-top: 40px;
		text-align: center;
	}

	/* Styles pour la section Glamping Info */
	.glamping-info {
		margin-top: 40px;
		text-align: center;
	}

	/* Styles pour la section des services */
	.services {
		margin-top: 40px;
		display: flex;
		justify-content: space-evenly;
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
	}

	.service:hover {
		transform: scale(1.05);
	}

	.service img {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
	}

	.service h3 {
		font-size: 18px;
		margin-top: 10px;
		color: #333;
	}

	.service p {
		font-size: 16px;
		color: #777;
		margin-top: 10px;
	}
</style>
