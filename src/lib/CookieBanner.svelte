<script lang="ts">
	import Cookies from 'js-cookie';

	let isBannerAccepted: string | undefined = Cookies.get('cookieBannerAccepted');

	function acceptCookie() {
		Cookies.set('cookieBannerAccepted', 'true', { expires: 365 });
		isBannerAccepted = '';
	}
</script>

{#if isBannerAccepted !== ''}
	<div class="cookie-banner">
		<p>
			Ce site utilise des cookies. En continuant à naviguer sur ce site, vous acceptez notre
			utilisation des cookies.
		</p>
		<button on:click={acceptCookie}>Accepter</button>
	</div>
{/if}

<style>
	.cookie-banner {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #333;
		color: #fff;
		padding: 10px;
		text-align: center;
		z-index: 999;
	}

	.cookie-banner button {
		background-color: #ff5733;
		color: #fff;
		border: none;
		padding: 5px 10px;
		cursor: pointer;
	}

	.cookie-banner button:hover {
		background-color: #ff3e1a;
	}
</style>
