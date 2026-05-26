<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/../app.css';

	let isMenuOpen = false;
	let scrollY = 0;

	const navLinks = [
		{ href: '/', label: 'Accueil' },
		{ href: '/sejours', label: 'Séjours' },
		{ href: '/reservations', label: 'Location Vélos' },
		{ href: '/picnic', label: 'Pique-nique' },
		{ href: '/equipment', label: 'Équipements' },
		{ href: '/about', label: 'À propos' }
	];
</script>

<svelte:window bind:scrollY />

<div class="app">
	<nav class="navbar" class:scrolled={scrollY > 50}>
		<div class="nav-container">
			<a href="/" class="logo">
				<span class="logo-icon">🚴</span>
				<span class="logo-text">
					<span class="logo-main">Normandie</span>
					<span class="logo-sub">Vélo & Séjours</span>
				</span>
			</a>

			<button
				class="menu-toggle"
				class:active={isMenuOpen}
				on:click={() => isMenuOpen = !isMenuOpen}
				aria-label="Menu"
			>
				<span></span>
				<span></span>
				<span></span>
			</button>

			<div class="nav-links" class:open={isMenuOpen}>
				{#each navLinks as link}
					<a
						href={link.href}
						class="nav-link"
						class:active={$page.url.pathname === link.href}
						on:click={() => isMenuOpen = false}
					>
						{link.label}
					</a>
				{/each}
				<a href="/login" class="nav-cta">
					Connexion
				</a>
			</div>
		</div>
	</nav>

	<main>
		<slot />
	</main>

	<footer class="footer">
		<div class="footer-content">
			<div class="footer-brand">
				<span class="footer-logo">🚴</span>
				<h3>Normandie Vélo & Séjours</h3>
				<p>Découvrez la Normandie autrement, à vélo et en pleine nature.</p>
			</div>

			<div class="footer-links">
				<h4>Navigation</h4>
				<a href="/sejours">Nos Séjours</a>
				<a href="/reservations">Location Vélos</a>
				<a href="/picnic">Pique-nique</a>
				<a href="/about">À propos</a>
			</div>

			<div class="footer-links">
				<h4>Contact</h4>
				<p>📍 Normandie, France</p>
				<p>📞 +33 6 00 00 00 00</p>
				<p>✉️ contact@normandie-velo.fr</p>
			</div>

			<div class="footer-links">
				<h4>Suivez-nous</h4>
				<div class="social-links">
					<a href="#" aria-label="Facebook">FB</a>
					<a href="#" aria-label="Instagram">IG</a>
					<a href="#" aria-label="Twitter">TW</a>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; 2024 Normandie Vélo & Séjours. Tous droits réservés.</p>
		</div>
	</footer>
</div>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
		background-color: #FDFBF7;
		color: #2D3436;
		line-height: 1.6;
		overflow-x: hidden;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	/* Navigation */
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		padding: 1rem 2rem;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.navbar.scrolled {
		background: rgba(253, 251, 247, 0.95);
		backdrop-filter: blur(20px);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
		padding: 0.75rem 2rem;
	}

	.nav-container {
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		color: inherit;
	}

	.logo-icon {
		font-size: 2rem;
		filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
	}

	.logo-text {
		display: flex;
		flex-direction: column;
		line-height: 1.1;
	}

	.logo-main {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 1.5rem;
		font-weight: 700;
		color: #1D4E3E;
	}

	.logo-sub {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: #B8860B;
		font-weight: 500;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-link {
		text-decoration: none;
		color: #2D3436;
		font-size: 0.95rem;
		font-weight: 500;
		position: relative;
		padding: 0.5rem 0;
		transition: color 0.3s ease;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background: linear-gradient(90deg, #1D4E3E, #B8860B);
		transition: width 0.3s ease;
	}

	.nav-link:hover,
	.nav-link.active {
		color: #1D4E3E;
	}

	.nav-link:hover::after,
	.nav-link.active::after {
		width: 100%;
	}

	.nav-cta {
		background: linear-gradient(135deg, #1D4E3E 0%, #2A6B55 100%);
		color: white;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9rem;
		transition: all 0.3s ease;
		box-shadow: 0 4px 15px rgba(29, 78, 62, 0.3);
	}

	.nav-cta:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 25px rgba(29, 78, 62, 0.4);
	}

	.menu-toggle {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		z-index: 1001;
	}

	.menu-toggle span {
		width: 25px;
		height: 2px;
		background: #1D4E3E;
		transition: all 0.3s ease;
		border-radius: 2px;
	}

	.menu-toggle.active span:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	.menu-toggle.active span:nth-child(2) {
		opacity: 0;
	}

	.menu-toggle.active span:nth-child(3) {
		transform: rotate(-45deg) translate(5px, -5px);
	}

	/* Main content */
	main {
		flex: 1;
		padding-top: 80px;
	}

	/* Footer */
	.footer {
		background: linear-gradient(180deg, #1D4E3E 0%, #152F28 100%);
		color: white;
		padding: 4rem 2rem 2rem;
		margin-top: auto;
	}

	.footer-content {
		max-width: 1400px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 2fr 1fr 1fr 1fr;
		gap: 3rem;
	}

	.footer-brand {
		max-width: 300px;
	}

	.footer-logo {
		font-size: 2.5rem;
		display: block;
		margin-bottom: 1rem;
	}

	.footer-brand h3 {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.footer-brand p {
		opacity: 0.8;
		font-size: 0.95rem;
		line-height: 1.7;
	}

	.footer-links h4 {
		font-size: 1rem;
		margin-bottom: 1.25rem;
		color: #B8860B;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 600;
	}

	.footer-links a,
	.footer-links p {
		display: block;
		color: rgba(255,255,255,0.8);
		text-decoration: none;
		margin-bottom: 0.75rem;
		font-size: 0.95rem;
		transition: color 0.3s ease;
	}

	.footer-links a:hover {
		color: #B8860B;
	}

	.social-links {
		display: flex;
		gap: 1rem;
	}

	.social-links a {
		width: 40px;
		height: 40px;
		border: 1px solid rgba(255,255,255,0.3);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.85rem;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.social-links a:hover {
		background: #B8860B;
		border-color: #B8860B;
		color: white;
	}

	.footer-bottom {
		max-width: 1400px;
		margin: 3rem auto 0;
		padding-top: 2rem;
		border-top: 1px solid rgba(255,255,255,0.1);
		text-align: center;
	}

	.footer-bottom p {
		opacity: 0.6;
		font-size: 0.9rem;
	}

	/* Responsive */
	@media (max-width: 1024px) {
		.footer-content {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 768px) {
		.navbar {
			padding: 1rem;
		}

		.menu-toggle {
			display: flex;
		}

		.nav-links {
			position: fixed;
			top: 0;
			right: -100%;
			width: 80%;
			max-width: 350px;
			height: 100vh;
			background: #FDFBF7;
			flex-direction: column;
			justify-content: center;
			gap: 2rem;
			padding: 2rem;
			transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			box-shadow: -10px 0 40px rgba(0,0,0,0.1);
		}

		.nav-links.open {
			right: 0;
		}

		.nav-link {
			font-size: 1.25rem;
		}

		.footer-content {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.footer-brand {
			max-width: 100%;
		}

		.social-links {
			justify-content: center;
		}

		main {
			padding-top: 70px;
		}
	}
</style>
