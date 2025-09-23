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
  import WorkshopsTab from "./WorkshopsTab.svelte";
	import TestimonyTab from "./TestimonyTab.svelte";


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

<header class="h-25 flex justify-center items-end sm:items-center bg-[var(--color-violet)]">
  <a class="bg-[var(--color-yellow)] rounded-full h-[250px] w-[250px] absolute top-[-155px] left-[-105px]"
    href="/" aria-label="retour au site" >
      <enhanced:img class="absolute bottom-[25px] right-[50px]"
        src="/src/lib/img/landing-frogs.png" alt="Atelier Tendresse Consentie" height='60'/>
  </a>
  <div class="flex gap-4 font-bold">
    <button onclick={() => {
        tab = "Ateliers"
        workshop = "Choisir un atelier"
      }}
      class={`text-[var(--color-yellow)] p-1 duration-100 ${tab === "Ateliers" ? "border-b-4 border-[var(--color-yellow)] rounded-lg" : ""}`}>Ateliers</button>
    <button onclick={() => {
        tab = "Témoignages"
        workshop = "Choisir un atelier"
      }}
      class={`text-[var(--color-yellow)] p-1 duration-100 ${tab === "Témoignages" ? "border-b-4 border-[var(--color-yellow)] rounded-lg" : ""}`}>Témoignages</button>
  </div>
  <SignOut class="absolute top-3 right-3"
    options={{
      redirectTo: `/`,
    }}
    signOutPage="signout">
      <span class="bg-red-500 m-auto hover:bg-white text-white hover:text-red-500 duration-100 p-2 rounded-md" slot="submitButton">Déconnexion</span>
  </SignOut>
</header>

<main class="text-[var(--color-violet)] h-screen">
  {#if tab === "Ateliers"}
    <WorkshopsTab {data} />
  {:else}
    <TestimonyTab {data} />
  {/if}
</main>

<style>
  @media (width <= 680px) { .customWrap {
    flex-wrap: wrap;
  }}
</style>