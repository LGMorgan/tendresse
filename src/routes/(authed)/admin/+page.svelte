<script>
  import { Button } from "$lib/components/ui/button/index.js";

  import Calendar from "$lib/components/ui/calendar/calendar.svelte";
  import { getLocalTimeZone, today } from "@internationalized/date";

  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

  import { ChevronDownOutline} from 'flowbite-svelte-icons';
  import { enhance } from '$app/forms';
  import { SignOut } from "@auth/sveltekit/components";
	import DateList from '$lib/components/dateList.svelte';
  import TestimonyList from '$lib/components/testimonyList.svelte';
	import WorkshopsAdmin from "$lib/components/WorkshopsAdmin.svelte";

  let { data } = $props();

  let tab = $state("Ateliers");
  
  let value = $state(today(getLocalTimeZone()));

  let workshop = $state(null || "Choisir un atelier");
  

    let location = $state(null);
    let link = $state(null)

  let testimony = $state(null);
  let signature = $state(null);

  let creating = $state(false);
  let errorMessage = $state('');
  let allowAddTestimony = $derived(!!workshop && !!testimony && !!signature)

  function validateForm() {
    if (!value) {
      errorMessage = 'La date n\'est pas précisée.';
      return false;
    }
    if(!workshop || workshop === "Choisir un atelier") {
      errorMessage = 'Il te faut sélectionner un atelier.';
      return false;
    }
    console.log(!workshop && workshop !== "Choisir un atelier")
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

<main class="w-full p-0 m-0 text-[var(--color-violet)] pb-20 flex flex-col flex-start">

  <div class="flex justify-center gap-4 mb-8 font-bold">
    <button onclick={() => {
        tab = "Ateliers"
        workshop = "Choisir un atelier"
      }}
      class={`text-[var(--color-yellow)] p-1 transition-all duration-100 ${tab === "Ateliers" ? "border-b-4 border-[var(--color-yellow)] rounded-lg" : ""}`}>Ateliers</button>
    <button onclick={() => {
        tab = "Témoignages"
        workshop = "Choisir un atelier"
      }}
      class={`text-[var(--color-yellow)] p-1 transition-all duration-100 ${tab === "Témoignages" ? "border-b-4 border-[var(--color-yellow)] rounded-lg" : ""}`}>Témoignages</button>
  </div>
            
  {#if tab === "Ateliers"}
    <div class="flex items-start self-start customWrap justify-center gap-12 m-auto">
    <form class="flex flex-col gap-4 bg-white shadow-xl p-4 rounded text-[var(--color-violet)] min-w-[320px]  border-l-4 border-[var(--color-yellow)]"
        method="POST"
        action="?/putDate"
        use:enhance={handleEnhance}>

        <p class="font-bold mt-0 p-0 pb-6 underline">Ajout d'atelier</p>

        <input type="hidden" name="workshop" value={workshop} required />
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
            <Button class="w-full rounded-md text-[var(--color-violet)] hover:bg-[var(--color-violet)] hover:text-white border-b-2 shadow bg-transparent border-[var(--color-violet)] font-bold">{workshop}<ChevronDownOutline class="w-6 h-6 ms-2 " /></Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
            {#each workshops as w}
                <DropdownMenu.Item onSelect={() => workshop = w}>{w}</DropdownMenu.Item>
            {/each}
            </DropdownMenu.Content>
        </DropdownMenu.Root>

            <input type="hidden" name="date" {value} required />
            <Calendar
            type="single"
            bind:value
            class="rounded-md border-b-2 border-[var(--color-violet)] shadow-md"
            captionLayout="dropdown"
            />


        <label class="space-y-2 w-full">
            <input class="border-b-2 border-[var(--color-violet)] rounded-md p-2 w-full shadow" name="location" bind:value={location} placeholder="Lieu ?"/>
        </label>

        <label  class="space-y-2 w-full">
            <input class="border-b-2 border-[var(--color-violet)] rounded-md p-2 w-full shadow" name="link" bind:value={link} placeholder="Lien pour le post facebook ?"/>
        </label>

        {#if errorMessage}
            <p class="h-3 error text-[0.5em]">{errorMessage}</p>
        {/if}

        <div>
            <Button  class="float-right mt-6 text-white bg-green-500" type="submit" disabled={creating}>{creating ? "Sauvegarde..." : "Enregistrer"}</Button>
        </div>
    </form>

    <div class="flex flex-col gap-4 flex-wrap bg-white shadow pt-4 rounded pb-8 px-6 text-[var(--color-violet)] border-r-4 border-[var(--color-yellow)] rounded-md">
    <p class="text-right font-bold mt-0 p-0 pb-12 underline">Ateliers programmés</p>

    <div class="flex flex-wrap justify-evenly gap-4">
        
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
        class="flex flex-col gap-4 bg-white shadow-xl p-4 rounded min-w-[320px] text-[var(--color-violet)] border-l-4 border-[var(--color-yellow)] rounded-md">
    
        <p class="font-bold mt-0 p-0 pb-12 text-[var(--color-violet)] underline">Ajout de témoignage</p>
        
        <input type="hidden" name="workshop" value={workshop} />
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button class="w-full rounded-md text-[var(--color-violet)] hover:bg-[var(--color-violet)] hover:text-white border-b-2 shadow bg-transparent border-[var(--color-violet)] font-bold">{workshop}<ChevronDownOutline class="w-6 h-6 ms-2 " /></Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {#each workshops as w}
              <DropdownMenu.Item onSelect={() => workshop = w}>{w}</DropdownMenu.Item>
            {/each}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
    
        <label class="hidden" for="testimony-id" >Témoignage</label>
        <textarea id="testimony-id" placeholder="Témoignage" rows="4" name="testimony" bind:value={testimony} class="border-b-2 border-[var(--color-violet)] rounded-md p-2 w-full shadow"/>
    
        <label class="hidden" for="signature-id" >Signature</label>
        <input class="border-b-2 border-[var(--color-violet)] rounded-md p-2 w-full shadow" id="signature-id" placeholder="Signature" rows="4" name="signature" bind:value={signature}/>

        <div>
          <Button disabled={!allowAddTestimony || creating} class="float-right mt-6 text-white bg-green-500" type="submit">{creating ? "Sauvegarde..." : "Enregistrer"}</Button>
        </div>
      </form>

      <div class="flex flex-col flex-wrap bg-white shadow pt-4 rounded pb-8 px-6 border-r-4 border-[var(--color-yellow)] rounded-md text-[var(--color-violet)] min-w-[320px]">
        
        
        <div class="flex flex-wrap justify-evenly gap-6 w-full">

          <div class="w-full">
            <p class="text-center font-bold border-b-2 mb-5">Tendresse</p>
            {#if !data?.testimonies?.Tendresse || data?.testimonies?.Tendresse.length === 0}
              <p class="italic text-gray-500">Aucun témoignage pour le moment</p>
            {:else}
              <TestimonyList list={data?.testimonies?.Tendresse} adminView />
            {/if}
          </div>

          <div class="w-full">
            <p class="text-center font-bold border-b-2 mb-5">Playfight</p>
            {#if !data?.testimonies?.Playfight || data?.testimonies?.Playfight.length === 0}
              <p class="italic text-gray-500">Aucun témoignage pour le moment</p>
            {:else}
              <TestimonyList list={data?.testimonies?.Playfight} adminView />
            {/if}
          </div>

          <div class="w-full">
            <p class="text-center font-bold border-b-2 mb-5">Adoration</p>
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