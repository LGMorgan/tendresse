<script>
  import DateItem from './dateItem.svelte';
  import { fly, slide } from 'svelte/transition';
  import { enhance } from '$app/forms';
  const { date, isFull, link } = $props();

  let optimisticFull = $state(isFull.BOOL)

</script>

<li class="flex flex-col shadow-xl rounded-xl transition-transform duration-100 hover:scale-[102%]" in:fly={{ y: 20 }} out:slide id="container">

  <DateItem date={new Date(date.S)} isFull={optimisticFull} link={link.S}/>

  <div class="flex w-full gap-2">
    <form class="flex-1" method="POST" action="?/changeComplet" use:enhance={() => {
      optimisticFull = !optimisticFull
      async ({ update }) => {
      await update();
      optimisticFull = isFull.BOOL
    }
    }} >
      <input type="hidden" name="isFull" value={isFull.BOOL} />
      <input type="hidden" name="date" value={date.S} />
      <button class="transition-all duration-100 hover:text-white flex-1 p-1 w-full border-b-2 text-gray-700 hover:bg-[var(--color-violet)] rounded-md  border-[var(--color-violet)]" type="submit">{"Atelier complet"}</button>
    </form>

    <form method="POST" action="?/deleteDate" use:enhance={() => async ({ update }) => await update()} >
      <input type="hidden" name="date" value={date.S} />
      <button class="transition-all duration-100 hover:text-white w-7 p-1 text-red-500 border-b-2 border-red-500 hover:bg-red-500 rounded-md" type="submit">X</button>
    </form>
  </div>
</li>

<style>
  

  @media only screen and (min-width: 480px) {

  }

  @media only screen and (min-width: 768px) {

  }
  @media only screen and (min-width: 1024px) {

  }
  @media only screen and (min-width: 1280px) {

  }
</style>