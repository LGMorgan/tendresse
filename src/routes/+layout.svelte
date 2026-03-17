<script lang="ts">
	import { page } from '$app/state';
	import Socials from '$lib/components/socials.svelte';
	import NavBar from '$lib/components/navBar.svelte';
	import HeaderTitle from '$lib/components/headerTitle.svelte';
	import MailInput from '$lib/serverComponents/mailSubscription/mailInput.svelte';
	import { fade } from 'svelte/transition';
	import InscriptionBtn from '$lib/components/InscriptionBtn.svelte';

	import '../app.css';

	let { children } = $props();
	let activeUrl = $derived(page.url.pathname);
	let title = $state('Les Ateliers Tendresse');
	let imgSize = $state('contain');

	$effect(() => {
		switch (activeUrl) {
			case '/tendresse':
				title = 'Atelier Consentement';
				break;
			case '/playfight':
				title = 'Playfight';
				break;
			case '/projet':
				title = 'Le Projet';
				break;
			case '/les-ateliers':
				title = 'Les Ateliers';
				imgSize = 'contain';
				break;
			case '/qui-suis-je':
				title = 'Qui suis-je ?';
				imgSize = 'cover';
				break;
			case '/le-cadre':
				title = 'Le Cadre';
				break;
			case '/FAQ':
				title = 'FAQ';
				break;
			case '/accompagnement-individuel':
				title = 'Accompagnement Individuel';
				break;
			case '/tarifs':
				title = 'Tarifs';
				break;
			default:
				title = 'Les Ateliers Tendresse';
		}
	});
</script>

<svelte:head>
	<title>{'Les Ateliers Tendresse'}</title>
	<meta name="title" content={'Les Ateliers Tendresse'} />
	<meta name="author" content="Laurette Deloison" />
	<meta
		name="keywords"
		content="Atelier, Ateliers, Ateliers Tendresse, Consentement, Jeu, Connexion, La Réunion, Atelier Consentement, Playfight, Cercles de Parole"
	/>
	<meta name="theme-color" content="#fce977" />
	<meta name="color-scheme" content="#fce977" />
	<meta name="robots" content="index, follow" />
	<meta charset="utf-8" />

	<meta property="og:site_name" content="Les Ateliers Tendresse" />
	<meta property="og:title" content="Les Ateliers Tendresse" />
    <meta property="og:locale" content="fr_FR" />
	<meta
		property="og:description"
		content="Ateliers Tendresse — explorez le consentement, le jeu et la connexion."
	/>
	<meta property="og:url" content="https://lesatelierstendresse.re" />
	<meta property="og:image" content={"$lib/img/og-logo-tendresse.webp"} />
    <meta property="og:image:width" content="1560" />
    <meta property="og:image:height" content="1115" />
    <meta property="og:image:alt" content="Logo Les Ateliers Tendresse" />
	<meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />

	<link rel="canonical" href={'https://lesatelierstendresse.re'} />
</svelte:head>

{#key activeUrl}
	<div class="relative" in:fade={{ duration: 200, delay: 300 }} out:fade={{ duration: 200 }}>
		<div>
			<HeaderTitle {title} />

			<InscriptionBtn />
			<NavBar />
		</div>

		{@render children()}

		{#if activeUrl !== '/FAQ'}
			<MailInput />
			<Socials />
		{/if}
	</div>
{/key}
