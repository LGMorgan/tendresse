<script>
	let { title = 'title', children } = $props();
</script>

<div class="m-auto mb-0 px-4">
	<h3>{title}</h3>
	<p class="mx-3">{@render children()}</p>
	<br />
</div>
