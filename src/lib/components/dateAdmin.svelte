<script>
  import DateItem from './dateItem.svelte';
  import { fly, slide } from 'svelte/transition';
  import { enhance } from '$app/forms';
  const { date, isFull } = $props();
</script>

<li in:fly={{ y: 20 }} out:slide id="container">
  <div>
    <DateItem date={new Date(date.S)} isFull={isFull.BOOL}/>
  </div>
  <div id="buttons">
    <form method="POST" action="?/changeComplet" use:enhance={() => async ({ update }) => await update()} >
      <input type="hidden" name="isFull" value={isFull.BOOL} />
      <input type="hidden" name="date" value={date.S} />
      <button class="border-2 border-black" type="submit">{"Atelier complet"}</button>
    </form>
    <form method="POST" action="?/deleteDate" use:enhance={() => async ({ update }) => await update()} >
      <input type="hidden" name="date" value={date.S} />
      <button class="text-red-500 border-2 border-red-500" type="submit">Supprimer</button>
    </form>
  </div>
</li>

<style>
  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: 1px solid red
  }
  div:first-of-type {
    display: flex;
    flex: 1;
    align-content: center;
    justify-content: center;
    border: 2px solid blue;
  }
  #container {
    margin: auto;
    border-radius: 3px;
    margin-bottom: 20px;
  }
  #buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
  }
  button {
    display: block;
    margin: 10px auto;
    width: 100%;
    padding: 10px;
    text-align: center;
    font-weight: bolder;
    border-radius: 3px;
    max-width: 200px;
  }

  @media only screen and (min-width: 480px) {
    li {
      flex-direction: row;
      gap: 20px;
      max-width: 400px;
    }
    #buttons {
      align-items: flex-end;
    }
  }

  @media only screen and (min-width: 768px) {

  }
  @media only screen and (min-width: 1024px) {

  }
  @media only screen and (min-width: 1280px) {

  }
</style>