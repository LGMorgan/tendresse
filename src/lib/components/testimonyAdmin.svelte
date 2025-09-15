<script>
  import { enhance } from "$app/forms";
  import { fly, slide } from 'svelte/transition';
  import { Button } from "flowbite-svelte"
  import TestimonyItem from "./testimonyItem.svelte";
  const { testimony, signature, uuid, workshop, adminView } = $props()
</script>

<li class=" rounded-lg p-4 m-auto max-w-[260px]" in:fly={{ y: 20 }} out:slide >
  <div class="bg-blue-100 rounded-lg">
    {#if adminView}
      <p class="text-sm text-gray-500 p-2 m-0">{testimony.S}</p>
      <p class="text-sm text-gray-500 p-2 m-0">de</p>
      <p class="text-sm text-gray-500 p-2 m-0">{signature.S}</p>
    {:else}
      <TestimonyItem testimony={testimony} signature={signature} />
    {/if}
    
  </div>
  <form method="POST" action="?/deleteTestimony" use:enhance={() => async ({ update }) => await update()} >
    <input type="hidden" name="uuid" value={uuid.S} />
    <input type="hidden" name="workshop" value={workshop.S} />
    <Button  class="float-right mt-6 text-white bg-red-500" type="submit">Effacer</Button>
  </form>
</li>

<style>
  form {
    padding-bottom: 80px;
  }
</style>