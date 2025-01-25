<script>
  import TestimonyAdmin from "./testimonyAdmin.svelte";
  const { list } = $props();
</script>

{#if !list.length}
  <p>Pas de témoignage</p>
{:else}
  <ul>
    {#each list as li}
      <TestimonyAdmin {...li} />
    {/each}
  </ul>
{/if}

<style>
  p { text-align: center }
</style>