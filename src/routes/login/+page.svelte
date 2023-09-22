<script lang="ts">
	let email = '';
	let password = '';

	let emailError = '';
	let passwordError = '';

	function validateForm() {
		emailError = '';
		passwordError = '';

		if (!email) {
			emailError = 'This is a mandatory field';
		} else if (!isValidEmail(email)) {
			emailError = 'Email is not valid';
		}

		if (!password) {
			passwordError = 'This is a mandatory field';
		}

		// If there are no errors, you can proceed with form submission
		if (!emailError && !passwordError) {
			// Perform login logic here
			console.log('Form submitted with email:', email, 'and password:', password);
		}
	}

	function isValidEmail(email: string) {
		// Implement your email validation logic here
		// You can use regular expressions or other validation methods
		// For simplicity, we are not implementing email validation in this example
		return true;
	}
</script>

<form>
	<h1>Login</h1>

	<input
		type="email"
		name="email"
		bind:value={email}
		class:invalid={emailError}
		on:input={() => (emailError = '')}
	/>
	{#if emailError}
		<p class="error">{emailError}</p>
	{/if}

	<input
		type="password"
		name="password"
		bind:value={password}
		class:invalid={passwordError}
		on:input={() => (passwordError = '')}
	/>
	{#if passwordError}
		<p class="error">{passwordError}</p>
	{/if}

	<button on:click={validateForm}>Login</button>
</form>
