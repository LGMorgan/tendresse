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

<div class="flex flex-wrap items-start customWrap justify-center gap-12 m-auto">

      <form method="POST" action="?/putTestimony" use:enhance={handleEnhance}
        class="flex flex-col gap-4 bg-white shadow-xl p-4 rounded min-w-[320px] text-[var(--color-violet)] border-l-4 border-[var(--color-yellow)]">
    
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
