<script>
  import { Button, Datepicker, Textarea, Label, Input, Dropdown, DropdownItem, Tabs, TabItem  } from 'flowbite-svelte';
  import { ChevronDownOutline} from 'flowbite-svelte-icons';
  import { enhance } from '$app/forms';
  import { SignOut } from "@auth/sveltekit/components";
	import DateList from '$lib/components/dateList.svelte';
  import TestimonyList from '$lib/components/testimonyList.svelte';

  let { data } = $props();
  
  let date = $state(null);
  let workshop = $state(null);
  let location = $state("");
  let dropdownOpen = $state(false);
  let testimony = $state(null);
  let signature = $state(null);
  let creating = $state(false);
  let allowAddDate = $derived(!!date && !!workshop && !!location.length)
  let allowAddTestimony = $derived(!!workshop && !!testimony && !!signature)

  const handleClick = (e) => {
    e.preventDefault();
    workshop = e.target.innerText;
    dropdownOpen = false
  };

  const handleEnhance = () => {
    creating = true;
    return async ({ update }) => {
      await update()
      creating = false;
    };
  }
</script>

<main>
  <div class="m-auto flex justify-center mb-7 mt-0 ">
    <SignOut
      options={{
        redirectTo: `/`,
      }}
      signOutPage="signout">
      <span class="bg-red-500 m-auto text-white p-2 wx-10 rounded-md justify-end" slot="submitButton">Déconnexion</span>
    </SignOut>
  </div>

  <Tabs
    tabStyle="full"
    defaultClass="flex m-auto justify-center rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700"
    contentClass="m-auto p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4 md:w-2/3 lg:w-1/2">
    <TabItem
      open
      title="Ateliers"
      activeClasses="p-4 w-full md:w-20 bg-transaprent group-first:rounded-s-lg group-last:rounded-e-lg text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white">
      <form method="POST" action="?/putDate" use:enhance={handleEnhance} class="flex justify-end flex-col w-8">
    
        <h2 class="header3 mt-0 p-0">Ajout d'atelier</h2>
        
        <input type="hidden" name="workshop" value={workshop} required />
        <Button class="w-full mb-4 text-white bg-red-500">{workshop ? workshop : "Atelier"}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
        <Dropdown bind:open={dropdownOpen}>
          <DropdownItem onclick={handleClick}>Tendresse</DropdownItem>
          <DropdownItem onclick={handleClick}>Playfight</DropdownItem>
          <DropdownItem onclick={handleClick}>Adoration</DropdownItem>
        </Dropdown>
    
        <Label  class="space-y-2 mb-6 w-full">
          <input type="hidden" name="date" value={date} required />
          <Datepicker inline locale="fr-FR" required bind:value={date} placeholder="Sélectionner une date"/>
        </Label>
    
        <Label  class="space-y-2 mb-4 w-full">
          <Input class="text-gray-500" name="location" bind:value={location} required/>
        </Label>

        <div>
          <Button disabled={!allowAddDate || creating} class="float-right mt-6 text-white bg-green-500" type="submit">{creating ? "Sauvegarde" : "Enregistrer"}</Button>
        </div>
      </form>
    
      <h3 class="header3">Tendresse</h3>
      {#key data.workshops.Tendresse.length}
        <DateList dates={data.workshops.Tendresse} />
      {/key}
      <h3 class="header3">Playfight</h3>
      {#key data.workshops.Playfight.length}
        <DateList dates={data.workshops.Playfight} />
      {/key}
      <h3 class="header3">Adoration</h3>
      {#key data.workshops.Adoration.length}
        <DateList dates={data.workshops.Adoration} />
      {/key}
    </TabItem>

    <TabItem title="Témoignage" activeClasses="p-4 w-full group-first:rounded-s-lg group-last:rounded-e-lg text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white">
      <form method="POST" action="?/putTestimony" use:enhance={handleEnhance} class="flex justify-end flex-col">
    
        <h2 class="header3 mt-0 p-0">Ajout de témoignage</h2>
        
        <input type="hidden" name="workshop" value={workshop} />
        <Button class="w-full mb-4 text-white  bg-red-500">{workshop ? workshop : "Atelier"}<ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
        <Dropdown bind:open={dropdownOpen}>
          <DropdownItem on:click={handleClick}>Tendresse</DropdownItem>
          <DropdownItem on:click={handleClick}>Playfight</DropdownItem>
          <DropdownItem on:click={handleClick}>Adoration</DropdownItem>
        </Dropdown>
    
        <Label class="hidden" for="testimony-id" >Témoignage</Label>
        <Textarea id="testimony-id" placeholder="Témoignage" rows="4" name="testimony" bind:value={testimony}/>
    
        <Label class="hidden" for="signature-id" >Signature</Label>
        <Input class="mt-4" id="signature-id" placeholder="Signature" rows="4" name="signature" bind:value={signature}/>

        <div>
          <Button disabled={!allowAddTestimony || creating} class="float-right mt-6 text-white bg-green-500" type="submit">Enregistrer</Button>
        </div>
      </form>

      <h3 class="header3">Tendresse</h3>
      <TestimonyList list={data?.testimonies?.Tendresse} />
      <h3 class="header3">Playfight</h3>
      <TestimonyList list={data?.testimonies?.Playfight} />
      <h3 class="header3">Adoration</h3>
      <TestimonyList list={data?.testimonies?.Adoration} />

    </TabItem>
  </Tabs>
</main>

<style>
  main { 
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 80px;
    padding: 20px;
  }
  p {
    text-align: center;
  }
  form {
    margin-bottom: 20px;
    width: 100%;
    margin: auto;
  }
  @media only screen and (min-width: 480px) {
    form {
      max-width: 400px;
    }
  }
</style>