<script>
  import { Button, Datepicker, Textarea, Label, Input, Dropdown, DropdownItem, Tabs, TabItem  } from 'flowbite-svelte';
  import { ChevronDownOutline} from 'flowbite-svelte-icons';
  import { enhance } from '$app/forms';
  import { SignOut } from "@auth/sveltekit/components";
	import DateList from '$lib/components/dateList.svelte';
  import TestimonyList from '$lib/components/testimonyList.svelte';
  import { blur } from "svelte/transition";

  let { data } = $props();

  let tab = $state("Ateliers");
  
  let date = $state(new Date());
  let workshop = $state(null);
  let location = $state(null);
  let link = $state(null)
  let dropdownOpen = $state(false);
  let testimony = $state(null);
  let signature = $state(null);
  let creating = $state(false);
  let errorMessage = $state('');
  let allowAddTestimony = $derived(!!workshop && !!testimony && !!signature)

  const handleClick = (e) => {
    e.preventDefault();
    workshop = e.target.innerText;
    dropdownOpen = false
  };

  function validateForm() {
    if (!date) {
      errorMessage = 'La date n\'est pas précisée.';
      return false;
    }
    if(!workshop) {
      errorMessage = 'Il te faut sélectionner un atelier.';
      return false;
    }
    errorMessage = '';
    return true;
  }

  const handleEnhance = () => {
    if (validateForm()) {
      creating = true;
      return async ({ update }) => {
        await update()
        creating = false;
      };
    }
  }

</script>

<div class="m-auto flex justify-end p-3 w-full bg-[var(--color-violet)] relative">
  <a href="/" aria-label="retour au site" class="flex flex-col bg-[var(--color-yellow)] rounded-full h-[250px] w-[250px] absolute top-[-155px] left-[-105px]">
      <enhanced:img class="m-auto absolute bottom-[25px] right-[50px]" src="/src/lib/img/landing-frogs.png" alt="Atelier Tendresse Consentie"  height='60'/>
  </a>
  <SignOut
    options={{
      redirectTo: `/`,
    }}
    signOutPage="signout">
    <span class="bg-red-500 m-auto text-white p-2 wx-10 rounded-md justify-end" slot="submitButton">Déconnexion</span>
  </SignOut>
</div>

<main class="w-full p-0 m-0 text-[var(--color-violet)] pb-20">
  <div class="flex justify-center gap-4 mb-8 font-bold">
    <button onclick={() => tab = "Ateliers"}
      class={`text-[var(--color-yellow)] transition-all duration-100 ${tab === "Ateliers" ? "border-b-4 border-[var(--color-yellow)] rounded-lg" : ""}`}>Ateliers</button>
    <button onclick={() => tab = "Témoignages"}
      class={`text-[var(--color-yellow)] transition-all duration-100 ${tab === "Témoignages" ? "border-b-4 border-[var(--color-yellow)] rounded-lg" : ""}`}>Témoignages</button>
  </div>

  {#if tab === "Ateliers"}
    <div class="flex items-start customWrap justify-center gap-12 m-auto">

        <form method="POST" action="?/putDate"
          use:enhance={handleEnhance}
          class="flex flex-col bg-white shadow-xl p-4 rounded ">
      
          <p class="font-bold mt-0 p-0 pb-12 text-[var(--color-violet)] underline">Ajout d'atelier</p>
          
          <input type="hidden" name="workshop" value={workshop} required />
          <Button class="mb-4 text-[var(--color-violet)] hover:bg-[var(--color-violet)] hover:text-white border-2 bg-transparent border-[var(--color-violet)] font-bold">{workshop ? workshop : "Atelier"}<ChevronDownOutline class="w-6 h-6 ms-2 ext-[var(--color-violet)] hover:text-white" /></Button>
          <Dropdown bind:open={dropdownOpen} simple transition={blur} transitionParams={{ duration: 800 }}>
            <DropdownItem onclick={handleClick}>Tendresse</DropdownItem>
            <DropdownItem onclick={handleClick}>Playfight</DropdownItem>
            <DropdownItem onclick={handleClick}>Adoration</DropdownItem>
          </Dropdown>
      
          <Label  class="space-y-2 mb-6 w-full">
            <input type="hidden" name="date" value={date} required />
            <Datepicker inline locale="fr-FR" bind:value={date} placeholder="Sélectionner une date" required 
              availableFrom={new Date()}/>
          </Label>
      
          <Label  class="space-y-2 mb-4 w-full">
            <Input class="text-gray-500" name="location" bind:value={location} placeholder="Lieu ?"/>
          </Label>

          <Label  class="space-y-2 mb-4 w-full">
            <Input class="text-gray-500" name="link" bind:value={link} placeholder="Lien pour le post facebook ?"/>
          </Label>

          {#if errorMessage}
            <p class="error">{errorMessage}</p>
          {/if}

          <div>
            <Button  class="float-right mt-6 text-white bg-green-500" type="submit">{creating ? "Sauvegarde" : "Enregistrer"}</Button>
          </div>
        </form>

        <div class="flex flex-col flex-wrap bg-white shadow pt-4 rounded pb-8 px-6">
          <p class="text-right font-bold mt-0 p-0 pb-12 underline">Ateliers programmés</p>
          
          <div class="flex flex-wrap justify-evenly gap-6">
            
            {#if !!data.workshops.Tendresse}
            <div>
               <p class="text-center font-bold border-b-2 mb-5">Tendresse</p>
              {#key data.workshops.Tendresse.length}
                <DateList dates={data.workshops.Tendresse} />
              {/key}
            </div>
             
            {/if}

            
            {#if !!data.workshops.Playfight}
              <div>
                <p class="text-center font-bold border-b-2 mb-5">Playfight</p>
                {#key data.workshops.Playfight.length}
                  <DateList dates={data.workshops.Playfight} />
                {/key}
              </div>
            {/if}

            
            {#if !!data.workshops.Adoration}
              <div>
                <p class="text-center font-bold border-b-2 mb-5">Adoration</p>
                {#key data.workshops.Adoration.length}
                  <DateList dates={data.workshops.Adoration} />
                {/key}
              </div>
            {/if}
          </div>

          
        </div>

      </div>
  {:else}
    <div class="flex items-start customWrap justify-center gap-12 m-auto">

      <form method="POST" action="?/putTestimony" use:enhance={handleEnhance}
        class="flex flex-col bg-white shadow-xl p-4 rounded min-w-[320px]">
    
        <p class="font-bold mt-0 p-0 pb-12 text-[var(--color-violet)] underline">Ajout de témoignage</p>
        
        <input type="hidden" name="workshop" value={workshop} />
        <Button class="mb-4 text-[var(--color-violet)] hover:bg-[var(--color-violet)] hover:text-white border-2 bg-transparent border-[var(--color-violet)] font-bold">{workshop ? workshop : "Atelier"}<ChevronDownOutline class="w-6 h-6 ms-2 " /></Button>
        <Dropdown bind:open={dropdownOpen} simple>
          <DropdownItem on:click={handleClick}>Tendresse</DropdownItem>
          <DropdownItem on:click={handleClick}>Playfight</DropdownItem>
          <DropdownItem on:click={handleClick}>Adoration</DropdownItem>
        </Dropdown>
    
        <Label class="hidden" for="testimony-id" >Témoignage</Label>
        <Textarea id="testimony-id" placeholder="Témoignage" rows="4" name="testimony" bind:value={testimony} class="w-full"/>
    
        <Label class="hidden" for="signature-id" >Signature</Label>
        <Input class="mt-4" id="signature-id" placeholder="Signature" rows="4" name="signature" bind:value={signature}/>

        <div>
          <Button disabled={!allowAddTestimony || creating} class="float-right mt-6 text-white bg-green-500" type="submit">Enregistrer</Button>
        </div>
      </form>

      <div class="flex flex-col flex-wrap bg-white shadow pt-4 rounded pb-8 px-6">
        
        
        <div class="flex flex-wrap justify-evenly gap-6">

          <div>
            <p class="font-bold">Tendresse</p>
            {#if !data?.testimonies?.Tendresse || data?.testimonies?.Tendresse.length === 0}
              <p class="italic text-gray-500">Aucun témoignage pour le moment</p>
            {:else}
              <TestimonyList list={data?.testimonies?.Tendresse} adminView />
            {/if}
          </div>

          <div>
            <p class="font-bold">Playfight</p>
            {#if !data?.testimonies?.Playfight || data?.testimonies?.Playfight.length === 0}
              <p class="italic text-gray-500">Aucun témoignage pour le moment</p>
            {:else}
              <TestimonyList list={data?.testimonies?.Playfight} adminView />
            {/if}
          </div>

          <div>
            <p class="font-bold">Adoration</p>
            {#if !data?.testimonies?.Adoration || data?.testimonies?.Adoration.length === 0}
              <p class="italic text-gray-500">Aucun témoignage pour le moment</p>
            {:else}
              <TestimonyList list={data?.testimonies?.Adoration} adminView />
            {/if}
          </div>
        </div>

      </div>

    </div>

  {/if}
</main>

<style>
  @media (width <= 680px) { .customWrap {
    flex-wrap: wrap;
  }}
</style>