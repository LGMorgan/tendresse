<script>
  import { enhance } from "$app/forms";
  import { fly, slide } from 'svelte/transition';
  import TestimonyItem from "./testimonyItem.svelte";
  const { testimony, signature, uuid, workshop, adminView } = $props()
</script>

<li class="flex flex-col pb-4 shadow-xl rounded-xl transition-transform duration-100 hover:scale-[102%] p-2" in:fly={{ y: 20 }} out:slide id="container" >
  <div class="rounded-lg text-xs">
    {#if adminView}
      <p class=" text-gray-500 p-2">{testimony.S}</p>
      <p class=" text-gray-500 p-2 text-right">Témoignage de</p>
      <p class=" text-gray-500 p-2 text-right">{signature.S}</p>
    {:else}
      <TestimonyItem testimony={testimony} signature={signature} />
    {/if}
    
  </div>
  <form method="POST" action="?/deleteTestimony" use:enhance={() => async ({ update }) => await update()} >
    <input type="hidden" name="uuid" value={uuid.S} />
    <input type="hidden" name="workshop" value={workshop.S} />
    <button class="transition-all duration-100 hover:text-white px-3 py-1 w-full max-w-24 float-right text-red-500 border-b-2 border-red-500 hover:bg-red-500 rounded-md" type="submit">Effacer</button>
  </form>
</li>

<style>
</style>