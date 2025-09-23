<script>
	import PlayOutline from 'flowbite-svelte-icons/PlayOutline.svelte';
	let { href, ariaLabel, children } = $props();
</script>

<div id="container">
	<a id="content" {href} alt aria-label={ariaLabel}>
		{@render children()}
		<PlayOutline color="#dd00ae" />
	</a>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
	}
	a {
		font-family: 'bukhari';
		text-decoration: underline;
		display: flex;
		align-items: center;
		color: #dd00ae;
		font-size: 1.2em;
		transition: 100ms;
		gap: 10px;
		letter-spacing: 1px;
	}
</style>
