<script>
  import DateAdmin from "./dateAdmin.svelte";
  const { dates } = $props();
</script>

{#if !!dates && !dates.length}
  <p>Aucune date prévue</p>
{:else}
  <ul class="m-auto mb-5">
    {#each dates as w}
      <DateAdmin {...w} />
    {/each}
  </ul>
{/if}

<style>
  p { text-align: center }
</style>