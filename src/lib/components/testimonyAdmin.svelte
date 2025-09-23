<script>
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';
	import TestimonyItem from './testimonyItem.svelte';
	const { testimony, signature, uuid, workshop, adminView } = $props();
</script>

<li
	class="flex w-full flex-col rounded-xl bg-white p-2 pb-4 shadow-xl transition-transform duration-100 hover:scale-[101%] sm:w-80"
	in:fly={{ y: 20 }}
	out:slide
	id="container"
>
	<div class="rounded-lg text-xs">
		{#if adminView}
			<p class=" p-2 text-gray-500">{testimony.S}</p>
			<p class=" p-2 text-right text-gray-500">Témoignage de</p>
			<p class=" p-2 text-right text-gray-500">{signature.S}</p>
		{:else}
			<TestimonyItem {testimony} {signature} />
		{/if}
	</div>
	<form
		method="POST"
		action="?/deleteTestimony"
		use:enhance={() =>
			async ({ update }) =>
				await update()}
	>
		<input type="hidden" name="uuid" value={uuid.S} />
		<input type="hidden" name="workshop" value={workshop.S} />
		<button
			class="float-right w-full max-w-24 rounded-md border-b-2 border-red-500 px-3 py-1 text-red-500 transition-all duration-100 hover:bg-red-500 hover:text-white"
			type="submit">Effacer</button
		>
	</form>
</li>

<style>
</style>
