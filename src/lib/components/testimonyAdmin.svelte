<script>
  import { enhance } from "$app/forms";
  import { fly, slide } from 'svelte/transition';
  import { Button } from "flowbite-svelte"
  import TestimonyItem from "./testimonyItem.svelte";
  const { testimony, signature, uuid, workshop } = $props()
</script>

<li in:fly={{ y: 20 }} out:slide >
  <TestimonyItem testimony={testimony} signature={signature} />
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
  li { margin: auto }
</style>