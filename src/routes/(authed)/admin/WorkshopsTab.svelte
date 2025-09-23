<script>
  import { Button } from "$lib/components/ui/button/index.js";

  import Calendar from "$lib/components/ui/calendar/calendar.svelte";
  import { getLocalTimeZone, today } from "@internationalized/date";

  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";

  import { ChevronDownOutline} from 'flowbite-svelte-icons';
  import { enhance } from '$app/forms';
	import DateList from '$lib/components/dateList.svelte';

  let { data } = $props();

  let workshop = $state("Choisir un atelier");
  let workshops = ["Tendresse", "Playfight", "Adoration", "RBDSM"];

  let date = $state(today(getLocalTimeZone()));
  let location = $state(null);
  let link = $state(null)

  let creating = $state(false);
  let errorMessage = $state('');

  function validateForm() {
    if (!date) {
      errorMessage = 'La date n\'est pas précisée.';
      return false;
    }
    if(!workshop || workshop === "Choisir un atelier") {
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

<div class="flex flex-wrap justify-center md:justify-start gap-12 w-full">
  <form class="flex flex-col w-[284px] gap-4 bg-white/80 shadow-xl p-4 rounded text-[var(--color-violet)] border-l-4 border-[var(--color-yellow)]"
      method="POST"
      action="?/putDate"
      use:enhance={handleEnhance}>

        <p class="font-bold mt-0 p-0 pb-6 underline">Ajout d'atelier</p>

        <input type="hidden" name="workshop" value={workshop} required />
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
            <Button class="w-full rounded-md text-[var(--color-violet)] hover:bg-[var(--color-violet)] hover:text-white border-b-2 shadow bg-white border-[var(--color-violet)] font-bold">{workshop}<ChevronDownOutline class="w-6 h-6 ms-2 " /></Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
            {#each workshops as w}
                <DropdownMenu.Item onSelect={() => workshop = w}>{w}</DropdownMenu.Item>
            {/each}
            </DropdownMenu.Content>
        </DropdownMenu.Root>

            <input type="hidden" name="date" value={date} required />
            <Calendar
            type="single"
            bind:value={date}
            class="rounded-md border-b-2 border-[var(--color-violet)] shadow-md"
            captionLayout="dropdown"
            />


        <label class="space-y-2 w-full">
            <input class="border-b-2 border-[var(--color-violet)] bg-white rounded-md p-2 w-full shadow" name="location" bind:value={location} placeholder="Lieu ?"/>
        </label>

        <label  class="space-y-2 w-full">
            <input class="border-b-2 border-[var(--color-violet)] bg-white rounded-md p-2 w-full shadow" name="link" bind:value={link} placeholder="Lien pour le post facebook ?"/>
        </label>

        {#if errorMessage}
            <p class="h-3 error text-[0.5em]">{errorMessage}</p>
        {/if}

        <div>
            <Button  class="float-right mt-6 text-white bg-green-500" type="submit" disabled={creating}>{creating ? "Sauvegarde..." : "Enregistrer"}</Button>
        </div>
  </form>

  <div class="flex flex-col sm:flex-1 w-[284px] gap-4 bg-white/80 shadow-xl p-4 pb-6 rounded text-[var(--color-violet)] border-r-4 border-[var(--color-yellow)]">
    <p class="text-right font-bold mt-0 p-0 pb-6 underline">Ateliers programmés</p>

    <div class="flex flex-wrap justify-evenly gap-12 sm:gap-4">
        
        {#if !!data.workshops.Tendresse}
          <div class="w-full sm:w-auto">
            <p class="text-center font-bold border-b-2 border-[(var(--color-violet))] mb-5">Tendresse</p>
            {#key data.workshops.Tendresse.length}
              <DateList dates={data.workshops.Tendresse} />
            {/key}
          </div>
        {/if}

        {#if !!data.workshops.Playfight}
        <div class="w-full sm:w-auto">
            <p class="text-center font-bold border-b-2 border-[(var(--color-violet))] mb-5">Playfight</p>
            {#key data.workshops.Playfight.length}
            <DateList dates={data.workshops.Playfight} />
            {/key}
        </div>
        {/if}

        {#if !!data.workshops.Adoration}
        <div class="w-full sm:w-auto">
            <p class="text-center font-bold border-b-2 border-[(var(--color-violet))] mb-5">Adoration</p>
            {#key data.workshops.Adoration.length}
            <DateList dates={data.workshops.Adoration} />
            {/key}
        </div>
        {/if}
    </div>
  </div>
</div>