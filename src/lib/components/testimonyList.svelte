<script>
	import TestimonyAdmin from './testimonyAdmin.svelte';
	const { list, adminView } = $props();
</script>

{#if !list.length}
	<p>Pas de témoignage</p>
{:else}
	<ul class="flex w-full flex-wrap justify-evenly gap-10">
		{#each list as li}
			<TestimonyAdmin {...li} {adminView} />
		{/each}
	</ul>
{/if}

<style>
	p {
		text-align: center;
	}
</style>
