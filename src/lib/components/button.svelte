<script>
	let { onClick = (e) => {}, children } = $props();
</script>

<button
	class="m-auto bg-[var(--color-blue)] text-xl transition duration-150 hover:scale-[1.02] hover:bg-[var(--color-pink)]"
	on:click={(e) => onClick(e)}
>
	{@render children()}
</button>
