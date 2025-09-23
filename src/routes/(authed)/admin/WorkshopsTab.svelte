<script>
	import { Button } from '$lib/components/ui/button/index.js';

	import Calendar from '$lib/components/ui/calendar/calendar.svelte';
	import { getLocalTimeZone, today } from '@internationalized/date';

	import { enhance } from '$app/forms';
	import DateList from '$lib/components/dateList.svelte';

	let { data } = $props();

	let workshop = $state('');
	let date = $state(today(getLocalTimeZone()));
	let location = $state(null);
	let link = $state(null);

	let creating = $state(false);
	let errorMessage = $state('');

	console.log({ data });

	function validateForm() {
		if (!date) {
			errorMessage = "La date n'est pas précisée.";
			return false;
		}
		if (!workshop || workshop === 'Choisir un atelier') {
			errorMessage = 'Il te faut sélectionner un atelier.';
			return false;
		}

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
		class="flex w-[284px] flex-col gap-4 rounded border-l-4 border-[var(--color-yellow)] bg-white/80 p-4 text-[var(--color-violet)] shadow-xl"
		method="POST"
		action="?/putDate"
		use:enhance={handleEnhance}
	>
		<p class="mt-0 p-0 pb-6 font-bold underline">Ajout d'atelier</p>

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

		<input type="hidden" name="date" value={date} required />
		<Calendar
			type="single"
			bind:value={date}
			class="rounded-md border-b-2 border-[var(--color-violet)] shadow-md"
			captionLayout="dropdown"
		/>

		<label for="location" class="w-full space-y-2">
			<input
				class="w-full rounded-md border-b-2 border-[var(--color-violet)] bg-white p-2 shadow"
				name="location"
				bind:value={location}
				placeholder="Lieu ?"
			/>
		</label>

		<label for="link" class="w-full space-y-2">
			<input
				class="w-full rounded-md border-b-2 border-[var(--color-violet)] bg-white p-2 shadow"
				name="link"
				bind:value={link}
				placeholder="Lien pour le post facebook ?"
			/>
		</label>

		{#if errorMessage}
			<p class="error h-3 text-[0.5em]">{errorMessage}</p>
		{/if}

		<div>
			<Button class="float-right mt-6 bg-green-500 text-white" type="submit" disabled={creating}
				>{creating ? 'Sauvegarde...' : 'Enregistrer'}</Button
			>
		</div>
	</form>

	<div
		class="flex w-[284px] flex-col gap-4 rounded border-r-4 border-[var(--color-yellow)] bg-white/80 p-4 pb-6 text-[var(--color-violet)] shadow-xl sm:flex-1"
	>
		<p class="mt-0 p-0 pb-6 text-right font-bold underline">Ateliers programmés</p>

		<div class="flex flex-wrap justify-evenly gap-12 sm:gap-4">
			{#each Object.keys(data.workshops) as key (key)}
				{#if !!data.workshops[key]}
					<div class="w-full sm:w-auto">
						<p class="mb-5 border-b-2 border-[(var(--color-violet))] text-center font-bold">
							{key}
						</p>
						{#key data.workshops[key].length}
							<DateList dates={data.workshops[key]} />
						{/key}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>
