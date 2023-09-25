<!-- layout.svelte -->
<script lang="ts">
</script>

<nav class="navbar">
	<a href="/">Accueil</a>
	<a href="/reservations">Réservations vélos</a>
	<a href="/about">à propos</a>
	<a href="/equipment">Matériels</a>
	<a href="/picnic">Pic-nique</a>
	<a href="/sejours">séjours</a>
	<a href="/login">Login</a>
</nav>

<svelte:head>
	<title>Séjours</title>
</svelte:head>
<h1>Bienvenue en Normandie</h1>

<p>
	Visit <a href="https://www.normandie.fr">le site de la région Normandie</a> Pour visualiser notre belle
	région
</p>

<slot />

<p>Bonne visite !</p>

<style>
	/* Styles pour le menu de navigation */
	.navbar {
		background-color: #333; /* Couleur de fond du menu */
		padding: 16px; /* Espace autour des éléments du menu */
		text-align: center; /* Centrer les éléments du menu horizontalement */
	}

	.navbar a {
		color: #fff; /* Couleur du texte des liens du menu */
		text-decoration: none; /* Supprimer la soulignement des liens */
		margin: 0 10px; /* Marge entre les liens du menu */
		font-size: 18px; /* Taille de la police des liens du menu */
	}
</style>
