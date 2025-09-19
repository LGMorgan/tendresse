<script>
  import DateAdmin from "./dateAdmin.svelte";
  const { dates } = $props();
</script>

{#if !!dates && !dates.length}
  <p>Aucune date prévue</p>
{:else}
  <ul class="flex flex-col flex-wrap justify-evenly gap-5">
    {#each dates as w}
      <DateAdmin {...w} />
    {/each}
  </ul>
{/if}

<style>
  p { text-align: center }
</style>