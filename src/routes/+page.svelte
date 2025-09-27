<script>
	import NavBar from '$lib/components/navBar.svelte';
	import HeaderTitle from '$lib/components/headerTitle.svelte';
	import MailInput from '$lib/components/mailInput.svelte';
	import Socials from '$lib/components/socials.svelte';

	export let form;
</script>

<div>
	<HeaderTitle title={'Les Ateliers Tendresse'} />
	<NavBar />
</div>

<main>
	<section>
		<h3 class="m-auto md:mr-50">
			Des espaces d’expérimentation du Consentement, du jeu et de la Tendresse à la Réunion.
		</h3>
		<h3 class="m-auto text-right md:ml-50">
			Pour découvrir concrètement et corporellement le Consentement dans des espaces aussi sécurisés
			et sécurisants que possible.
		</h3>
		<h3>Mettre la Joie, le Jeu et la communication au cœur de nos quotidiens.</h3>
	</section>
</main>

<footer>
	<MailInput {form} />
	<Socials />
</footer>
