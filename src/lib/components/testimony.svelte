<script>
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import TestimonyItem from './testimonyItem.svelte';
	const { testimonies } = $props();

	let carousel;

	const handleNextClick = () => {
		carousel.goToNext();
	};

	console.log({ testimonies });
</script>

{#if !!testimonies.length}
	<section id="témoignages">
		<h3 class="header3">Temoignages</h3>
		{#if browser}
			<Carousel bind:this={carousel} infinite={false}>
				{#each testimonies as t}
					<TestimonyItem testimony={t.testimony} signature={t.signature} />
				{/each}
			</Carousel>
		{/if}
	</section>
{/if}

<style>
	section {
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		max-width: 95%;
	}
	.header3 {
		padding-bottom: 0px;
	}

	@media only screen and (min-width: 480px) {
	}

	@media only screen and (min-width: 768px) {
		section {
			max-width: 768px;
			margin: 40px auto;
		}
	}
	@media only screen and (min-width: 1024px) {
	}
	@media only screen and (min-width: 1280px) {
	}
</style>
