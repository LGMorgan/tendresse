<script>
  import DateAdmin from "./dateAdmin.svelte";
  const { dates } = $props();
</script>

{#if !dates.length}
  <p>Aucune date prévue</p>
{:else}
  <ul>
    {#each dates as w}
      <DateAdmin {...w} />
    {/each}
  </ul>
{/if}

<style>
  p { text-align: center }
</style>