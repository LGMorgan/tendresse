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
				document.title = 'Tendresse Consentie';
				title = 'Tendresse Consentie';
				break;
			case '/playfight':
				document.title = 'Playfight';
				title = 'Playfight';
				break;
			case '/projet':
				document.title = 'Le Projet';
				title = 'Le Projet';
				break;
			case '/les-ateliers':
				document.title = 'Les Ateliers';
				title = 'Les Ateliers';
				imgSize = 'contain';
				break;
			case '/qui-suis-je':
				document.title = 'Qui suis-je ?';
				title = 'Qui suis-je ?';
				imgSize = 'cover';
				break;
			case '/le-cadre':
				document.title = 'Le Cadre';
				title = 'Le Cadre';
				break;
			case '/FAQ':
				document.title = 'FAQ';
				title = 'FAQ';
				break;
			case '/accompagnement-individuel':
				document.title = 'Accompagnement Individuel';
				title = 'Accompagnement Individuel';
				break;
			case '/tarifs':
				document.title = 'Tarifs';
				title = 'Tarifs';
				break;
			default:
				document.title = 'Les Ateliers Tendresse';
				title = 'Les Ateliers Tendresse';
		}
	});
</script>

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
