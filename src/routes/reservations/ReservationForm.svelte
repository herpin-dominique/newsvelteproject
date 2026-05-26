<!-- ReservationForm.svelte -->
<script>
	// Vous pouvez définir ici des variables pour stocker les informations de réservation
	let name = '';
	let email = '';
</script>

<form>
	<label for="name">Nom :</label>
	<input type="text" id="name" bind:value={name} />

	<label for="email">Email :</label>
	<input type="email" id="email" bind:value={email} />

	<!-- Autres champs du formulaire de réservation -->

	<button type="submit">Confirmer la réservation</button>
</form>
