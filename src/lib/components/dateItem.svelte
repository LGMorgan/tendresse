<script>
  import { fly } from 'svelte/transition';
  const { date = new Date(), isFull = false, link } = $props();

  const dayOptions = { weekday: 'long' };
  const dateOptions = { day: 'numeric' };
  const monthOptions = { month: 'long'};

  const day = date.toLocaleDateString("fr-FR", dayOptions)
  const numberedDate = date.toLocaleDateString("fr-FR", dateOptions)
  
  const month = date.toLocaleDateString("fr-FR", monthOptions)
</script>

<div class="m-3 h-8 flex flex-col text-center">
  <a href={link} target="_blank">
    <p>{String(day).charAt(0).toUpperCase() + String(day).slice(1)} {numberedDate} {month}</p>
    {#if isFull}
      <span class="text-red-500 my-2" in:fly={{ y: 20 }} out:fly={{ y: -20 }}>Complet</span>
    {/if}
  </a>
</div>

<style>

</style>