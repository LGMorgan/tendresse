<script>
  let { onClick = (e) => {}, children } = $props();
</script>

<button
  class="m-auto bg-[var(--color-blue)] hover:bg-[var(--color-pink)] hover:scale-[1.02] transition duration-150 text-xl"
  on:click={(e) => onClick(e)}>
  {@render children()}
</button>