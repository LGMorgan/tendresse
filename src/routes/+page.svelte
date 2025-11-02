<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import { Carousel } from '$lib/components/ui/carousel/index.js';
	import Testimonies from '$lib/components/testimonies.svelte';
</script>

<main>
	<section class="xl:mx-52">
		<h3 class="m-auto md:mr-5">
			Des espaces d’expérimentation du Consentement, du Jeu et de la Tendresse à la Réunion.
		</h3>
		<h3 class="m-auto text-right md:ml-50">
			Pour découvrir concrètement et corporellement le Consentement dans des espaces aussi sécurisés
			et sécurisants que possible.
		</h3>

		<h3 class="text-left">Mettre la Joie, le Jeu et la Communication au cœur de nos quotidiens.</h3>
	</section>
	<section class="text-center">
		<Button
			class="my-5 bg-[var(--color-blue)] text-xl font-bold text-[var(--color-yellow)] hover:bg-[var(--color-yellow)] hover:text-[var(--color-violet)] "
			href="/projet">Le projet</Button
		>
	</section>

	<section id="Témoignages">
		<Testimonies />
	</section>
</main>
