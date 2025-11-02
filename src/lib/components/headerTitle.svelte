<script>
	import { page } from '$app/state';
	let activeUrl = $derived(page.url.pathname);
	let { title } = $props();
</script>

<header class="pt-8">
	<a href="/">
		<h1 class="text-[var(--color-violet)]">{title}</h1>

		<enhanced:img
			class="m-auto"
			src="/src/lib/img/landing-frogs-1.webp"
			alt="Atelier Tendresse Consentie"
			height="200"
		/>
	</a>
</header>
