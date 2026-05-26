<script lang="ts">
	import { onMount } from 'svelte';
	import type { Sejour } from '$lib/server/Sejours';

	export let data: { sejour: Sejour };
	$: sejour = data.sejour;

	let visible = false;
	onMount(() => { visible = true; });

	function getDifficultyColor(d: string) {
		if (d === 'Très facile') return '#4CAF50';
		if (d === 'Facile') return '#8BC34A';
		if (d === 'Modéré') return '#FFC107';
		if (d === 'Sportif') return '#FF9800';
		return '#666';
	}
</script>

<svelte:head>
	<title>{sejour.name} — Normandie Vélo & Séjours</title>
</svelte:head>

<!-- Hero -->
<section class="hero">
	<div class="hero-bg">
		<img src={sejour.image} alt={sejour.name} />
		<div class="hero-overlay" />
	</div>
	<div class="hero-content" class:visible>
		<a href="/sejours" class="back-link">
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
			Tous les séjours
		</a>
		<span class="hero-tag">{sejour.duration} · {sejour.distance}</span>
		<h1>{sejour.name}</h1>
		<p>{sejour.description}</p>
		<div class="hero-badges">
			<span class="badge-difficulty" style="background:{getDifficultyColor(sejour.difficulty)}">{sejour.difficulty}</span>
			<span class="badge-accom">🏕️ {sejour.accommodation}</span>
			<span class="badge-people">👥 Max. {sejour.maxPeople} pers.</span>
		</div>
	</div>
</section>

<!-- Sticky CTA bar -->
<div class="sticky-bar">
	<div class="sticky-inner">
		<div class="sticky-info">
			<span class="sticky-name">{sejour.name}</span>
			<span class="sticky-meta">{sejour.duration} · {sejour.distance}</span>
		</div>
		<div class="sticky-right">
			<span class="sticky-price">{sejour.price} €<small>/pers.</small></span>
			<a href="/reservations" class="btn-reserve">Réserver ce séjour</a>
		</div>
	</div>
</div>

<div class="page-content">

	<!-- Overview cards -->
	<section class="overview-cards">
		<div class="stat-card">
			<div class="stat-icon">📅</div>
			<div class="stat-label">Durée</div>
			<div class="stat-value">{sejour.duration}</div>
		</div>
		<div class="stat-card">
			<div class="stat-icon">🚴</div>
			<div class="stat-label">Distance</div>
			<div class="stat-value">{sejour.distance}</div>
		</div>
		<div class="stat-card">
			<div class="stat-icon">💪</div>
			<div class="stat-label">Difficulté</div>
			<div class="stat-value" style="color:{getDifficultyColor(sejour.difficulty)}">{sejour.difficulty}</div>
		</div>
		<div class="stat-card">
			<div class="stat-icon">🏕️</div>
			<div class="stat-label">Hébergement</div>
			<div class="stat-value">{sejour.accommodation}</div>
		</div>
		<div class="stat-card">
			<div class="stat-icon">📍</div>
			<div class="stat-label">Départ</div>
			<div class="stat-value">{sejour.meetingPoint}</div>
		</div>
	</section>

	<div class="two-col">
		<div class="main-col">

			<!-- Description -->
			<section class="content-section">
				<h2>À propos de ce séjour</h2>
				<p class="full-desc">{sejour.fullDescription}</p>
				<div class="highlights-wrap">
					{#each sejour.highlights as h}
						<span class="highlight-chip">✦ {h}</span>
					{/each}
				</div>
			</section>

			<!-- Programme -->
			<section class="content-section">
				<h2>Programme jour par jour</h2>
				<div class="program-timeline">
					{#each sejour.program as day}
						<div class="program-day">
							<div class="day-marker">
								<span class="day-num">J{day.day}</span>
							</div>
							<div class="day-content">
								<div class="day-header">
									<h3>{day.title}</h3>
									{#if day.distance}
										<span class="day-distance">🚴 {day.distance}</span>
									{/if}
								</div>
								<p>{day.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</section>

		</div>

		<aside class="side-col">

			<!-- Prix & réservation -->
			<div class="price-card">
				<div class="price-header">
					<span class="price-amount">{sejour.price} €</span>
					<span class="price-per">par personne</span>
				</div>
				<a href="/reservations" class="btn-reserve-large">
					Réserver ce séjour
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
				</a>
				<p class="reserve-note">Devis personnalisé gratuit · Réponse sous 24h</p>
			</div>

			<!-- Inclus / Non inclus -->
			<div class="include-card">
				<h3>Ce qui est inclus</h3>
				<ul class="include-list">
					{#each sejour.included as item}
						<li class="include-item yes">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5" /></svg>
							{item}
						</li>
					{/each}
				</ul>

				<h3 class="not-included-title">Non inclus</h3>
				<ul class="include-list">
					{#each sejour.notIncluded as item}
						<li class="include-item no">
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
							{item}
						</li>
					{/each}
				</ul>
			</div>

		</aside>
	</div>

</div>

<style>
	/* ── Hero ── */
	.hero {
		position: relative;
		height: 480px;
		display: flex;
		align-items: flex-end;
		overflow: hidden;
	}

	.hero-bg { position: absolute; inset: 0; }
	.hero-bg img { width: 100%; height: 100%; object-fit: cover; }
	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(10,30,20,.85) 30%, rgba(0,0,0,.2) 100%);
	}

	.hero-content {
		position: relative;
		z-index: 1;
		padding: 2.5rem 2rem;
		color: #fff;
		max-width: 900px;
		opacity: 0;
		transform: translateY(16px);
		transition: opacity .6s, transform .6s;
	}
	.hero-content.visible { opacity: 1; transform: translateY(0); }

	.back-link {
		display: inline-flex;
		align-items: center;
		gap: .4rem;
		color: rgba(255,255,255,.7);
		text-decoration: none;
		font-size: .85rem;
		margin-bottom: 1rem;
		transition: color .2s;
	}
	.back-link:hover { color: #fff; }

	.hero-tag {
		display: inline-block;
		background: rgba(255,255,255,.15);
		border: 1px solid rgba(255,255,255,.3);
		padding: .3rem .85rem;
		border-radius: 20px;
		font-size: .8rem;
		margin-bottom: .75rem;
	}

	.hero-content h1 {
		font-size: clamp(1.8rem, 4vw, 3rem);
		font-weight: 700;
		margin: 0 0 .5rem;
	}

	.hero-content p { opacity: .85; font-size: 1rem; margin-bottom: 1rem; }

	.hero-badges { display: flex; flex-wrap: wrap; gap: .5rem; }

	.badge-difficulty, .badge-accom, .badge-people {
		padding: .3rem .75rem;
		border-radius: 20px;
		font-size: .8rem;
		font-weight: 500;
	}
	.badge-difficulty { color: #fff; }
	.badge-accom, .badge-people {
		background: rgba(255,255,255,.15);
		color: #fff;
		border: 1px solid rgba(255,255,255,.3);
	}

	/* ── Sticky bar ── */
	.sticky-bar {
		position: sticky;
		top: 64px;
		z-index: 200;
		background: #fff;
		border-bottom: 1px solid #e5e7eb;
		box-shadow: 0 2px 12px rgba(0,0,0,.06);
	}

	.sticky-inner {
		max-width: 1100px;
		margin: 0 auto;
		padding: .75rem 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.sticky-info { display: flex; flex-direction: column; }
	.sticky-name { font-weight: 700; color: #1d4e3e; font-size: .95rem; }
	.sticky-meta { font-size: .8rem; color: #888; }

	.sticky-right { display: flex; align-items: center; gap: 1rem; }

	.sticky-price {
		font-size: 1.1rem;
		font-weight: 800;
		color: #1d4e3e;
	}
	.sticky-price small { font-size: .72rem; font-weight: 400; color: #888; margin-left: .2rem; }

	/* ── Main content ── */
	.page-content {
		max-width: 1100px;
		margin: 0 auto;
		padding: 2rem 1.5rem 4rem;
	}

	/* ── Overview cards ── */
	.overview-cards {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 2.5rem;
	}

	.stat-card {
		flex: 1;
		min-width: 130px;
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 12px;
		padding: 1rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: .3rem;
	}

	.stat-icon { font-size: 1.4rem; }
	.stat-label { font-size: .75rem; color: #888; text-transform: uppercase; letter-spacing: .04em; }
	.stat-value { font-size: .95rem; font-weight: 700; color: #1a1a1a; }

	/* ── Two-column layout ── */
	.two-col {
		display: grid;
		grid-template-columns: 1fr 320px;
		gap: 2rem;
		align-items: start;
	}

	@media (max-width: 860px) {
		.two-col { grid-template-columns: 1fr; }
		.side-col { order: -1; }
	}

	/* ── Content sections ── */
	.content-section {
		margin-bottom: 2.5rem;
	}

	.content-section h2 {
		font-size: 1.3rem;
		font-weight: 700;
		color: #1d4e3e;
		margin-bottom: 1rem;
		padding-bottom: .5rem;
		border-bottom: 2px solid #e8f4ee;
	}

	.full-desc {
		color: #444;
		line-height: 1.75;
		font-size: .97rem;
		margin-bottom: 1.25rem;
	}

	.highlights-wrap { display: flex; flex-wrap: wrap; gap: .5rem; }

	.highlight-chip {
		background: #f0f7f4;
		color: #1d4e3e;
		padding: .35rem .9rem;
		border-radius: 20px;
		font-size: .82rem;
		font-weight: 500;
	}

	/* ── Timeline ── */
	.program-timeline {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.program-day {
		display: flex;
		gap: 1.25rem;
		position: relative;
	}

	.program-day:not(:last-child)::before {
		content: '';
		position: absolute;
		left: 19px;
		top: 40px;
		bottom: 0;
		width: 2px;
		background: #e8f4ee;
	}

	.day-marker {
		flex-shrink: 0;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: #1d4e3e;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: .1rem;
	}

	.day-num { color: #fff; font-size: .75rem; font-weight: 800; }

	.day-content {
		padding-bottom: 1.75rem;
		flex: 1;
	}

	.day-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: .4rem;
	}

	.day-header h3 { font-size: 1rem; font-weight: 700; color: #1a1a1a; margin: 0; }
	.day-distance { font-size: .78rem; color: #888; white-space: nowrap; flex-shrink: 0; }
	.day-content p { font-size: .88rem; color: #555; line-height: 1.65; margin: 0; }

	/* ── Side cards ── */
	.side-col { display: flex; flex-direction: column; gap: 1rem; position: sticky; top: 120px; }

	.price-card {
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 4px 20px rgba(0,0,0,.06);
	}

	.price-header {
		display: flex;
		align-items: baseline;
		gap: .4rem;
		margin-bottom: 1rem;
	}

	.price-amount { font-size: 2rem; font-weight: 800; color: #1d4e3e; }
	.price-per { font-size: .85rem; color: #888; }

	.btn-reserve, .btn-reserve-large {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: .5rem;
		background: #1d4e3e;
		color: #fff;
		text-decoration: none;
		border-radius: 10px;
		font-weight: 600;
		transition: background .2s, transform .1s;
	}

	.btn-reserve { padding: .6rem 1.2rem; font-size: .9rem; }
	.btn-reserve:hover { background: #163d30; }

	.btn-reserve-large {
		width: 100%;
		padding: .85rem 1rem;
		font-size: 1rem;
		margin-bottom: .75rem;
	}
	.btn-reserve-large:hover { background: #163d30; transform: translateY(-1px); }

	.reserve-note { font-size: .75rem; color: #aaa; text-align: center; margin: 0; }

	.include-card {
		background: #fff;
		border: 1px solid #e5e7eb;
		border-radius: 16px;
		padding: 1.25rem;
	}

	.include-card h3 {
		font-size: .9rem;
		font-weight: 700;
		color: #1d4e3e;
		margin: 0 0 .75rem;
	}

	.not-included-title { margin-top: 1rem !important; }

	.include-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: .45rem; }

	.include-item {
		display: flex;
		align-items: flex-start;
		gap: .5rem;
		font-size: .82rem;
		line-height: 1.4;
	}

	.include-item svg { flex-shrink: 0; margin-top: .1rem; }
	.include-item.yes { color: #2d6a4f; }
	.include-item.yes svg { stroke: #2d6a4f; }
	.include-item.no { color: #888; }
	.include-item.no svg { stroke: #bbb; }
</style>
