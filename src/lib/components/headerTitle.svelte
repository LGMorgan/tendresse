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
			src="/src/lib/img/logo-tendresse.webp"
			alt="Atelier Consentement"
			height="200"
            width="280"
		/>
	</a>
</header>
