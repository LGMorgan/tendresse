<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button/index.js';

	let form: { success?: boolean; error?: string } = {};

	function validateForm() {
		return true;
	}

	const handleEnhance = () => {
		if (validateForm()) {
			return async ({ update }: { update: (callback: (result: any) => void) => Promise<void> }) => {
				await update((result: any) => {
					form = result;
				});
			};
		}
	};

	console.log({ form });
</script>

<section id="newsletter">
	<h2>Newsletter</h2>
	{#if form?.success}
		<p class="text-center">Merci pour ton inscription !</p>
	{:else if form?.error}
		<p class="text-center">Une erreur est survenue, merci de réessayer.</p>
	{:else}
		<p class="text-center">
			Inscris-toi à la newsletter pour être informé·e des prochains ateliers.
		</p>
		<br />
		<form
			method="POST"
			on:submit|preventDefault
			action="/?/sendToBrevo"
			use:enhance={handleEnhance}
		>
			<input name="email" type="email" aria-label="email" placeholder="Ton mail" />
			<Button class="m-auto w-1/2 bg-[var(--color-blue)] text-xl" type="submit">Valider</Button>
		</form>
	{/if}
</section>

<style>
	section {
		padding: 2em 1em;
		background-color: var(--color-yellow);
		color: var(--color-violet);
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1em;
		max-width: 400px;
		margin: auto;
	}
	input {
		flex: 1;
		border: none;
		border-bottom: 2px solid var(--color-violet);
		border-radius: 5px;
		margin: 10px;
		text-align: center;
		font: 'akzidenz';
		cursor: pointer;
		outline: inherit;
	}
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-text-fill-color: var(--color-violet);
		background-color: white;
	}
	input[type='email'] {
		font-family: 'big-shoulders';
		font-size: 1.5em;
		color: var(--color-violet);
	}
	::placeholder {
		color: var(--color-violet);
		opacity: 0.6; /* Firefox */
	}
</style>
