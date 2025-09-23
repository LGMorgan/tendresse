<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import { getLocalTimeZone, today } from '@internationalized/date';
	import { enhance } from '$app/forms';
	import TestimonyList from '$lib/components/testimonyList.svelte';

	let { data } = $props();

	let value = $state(today(getLocalTimeZone()));

	let workshop = $state(null);
	let testimony = $state(null);
	let signature = $state(null);

	let creating = $state(false);
	let errorMessage = $state('');
	let allowAddTestimony = $derived(!!workshop && !!testimony && !!signature);

	function validateForm() {
		if (!value) {
			errorMessage = "La date n'est pas précisée.";
			return false;
		}
		if (!workshop || workshop === 'Choisir un atelier') {
			errorMessage = 'Il te faut sélectionner un atelier.';
			return false;
		}
		console.log(!workshop && workshop !== 'Choisir un atelier');
		errorMessage = '';
		return true;
	}

	const handleEnhance = () => {
		if (validateForm()) {
			creating = true;
			return async ({ update }) => {
				await update();
				creating = false;
			};
		}
	};
</script>

<div class="flex w-full flex-wrap justify-center gap-12 md:justify-start">
	<form
		method="POST"
		action="?/putTestimony"
		use:enhance={handleEnhance}
		class="flex w-[284px] flex-col gap-4 rounded border-l-4 border-[var(--color-yellow)] bg-white/80 p-4 text-[var(--color-violet)] shadow-xl"
	>
		<p class="mt-0 p-0 pb-6 font-bold underline">Ajout de témoignage</p>

		<label for="workshop" class="w-full space-y-2">
			<input
				class="w-full rounded-md border-b-2 border-[var(--color-violet)] bg-white p-2 shadow"
				name="workshop"
				bind:value={workshop}
				placeholder="Atelier ?"
				list="suggestions"
				required
			/>
			<datalist id="suggestions">
				<option value="Tendresse"></option>
				<option value="Playfight"></option>
			</datalist>
		</label>

		<label class="hidden" for="testimony-id">Témoignage</label>
		<textarea
			id="testimony-id"
			placeholder="Témoignage"
			rows="4"
			name="testimony"
			bind:value={testimony}
			class="w-full rounded-md border-b-2 border-[var(--color-violet)] p-2 shadow bg-white"
		/>

		<label class="hidden" for="signature-id">Signature</label>
		<input
			class="w-full rounded-md border-b-2 border-[var(--color-violet)] p-2 shadow bg-white"
			id="signature-id"
			placeholder="Signature"
			rows="4"
			name="signature"
			bind:value={signature}
		/>

		<div>
			<Button
				disabled={!allowAddTestimony || creating}
				class="float-right mt-6 bg-green-500 text-white"
				type="submit">{creating ? 'Sauvegarde...' : 'Enregistrer'}</Button
			>
		</div>
	</form>

	<div
		class="flex w-[284px] flex-col gap-4 rounded border-r-4 border-[var(--color-yellow)] bg-white/80 p-4 pb-6 text-[var(--color-violet)] shadow-xl sm:flex-1"
	>
		<div class="flex w-full flex-wrap justify-evenly gap-6">
            {#each Object.keys(data.testimonies) as testimony (testimony)}
                {#if !!data.testimonies[testimony]}
					<div class="w-full md:w-auto">
						<p class="mb-5 border-b-2 border-[(var(--color-violet))] text-center font-bold">
							{testimony}
						</p>
						{#key data.testimonies[testimony].length}
							<TestimonyList list={data.testimonies[testimony]} adminView />
						{/key}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
