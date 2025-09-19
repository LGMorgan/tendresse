<script lang="ts">
  import { Hamburger } from 'svelte-hamburgers';
  import { fly } from 'svelte/transition';

  let open = $state(false);

  let pages = [
    { text: "Accueil", link: "/" },
    { text: "Le Projet", link: "/projet" },
    { text: "Les Ateliers", link: "/les-ateliers" },
    { text: "Qui suis-je ?", link: "/qui-suis-je" },
    { text: "Le Cadre", link: "/le-cadre" },
    { text: "FAQ", link: "/FAQ" },
    { text: "Accompagnement individuel", link: "/accompagnement-individuel" }
  ]
  
</script>

{#snippet navLi(text: string, link: string)}
	<li>
		<a class="transition-colors duration-100 hover:text-[var(--color-pink)]" href={link}>{text}</a>
	</li>
{/snippet}

<div class="bg-[var(--color-yellow)] flex flex-col justify-center lg:hidden">
  <Hamburger bind:open --color="var(--color-violet)"/> 
  {#if open}
    <ul class="navUl flex flex-col" transition:fly={{ y: -15 }}>
      {#each pages as page}
        {@render navLi(page.text, page.link)}
      {/each}
    </ul>
  {/if}
</div>

<div class="hidden lg:flex justify-center ">
  <ul class="navUl flex justify-evenly">
    {#each pages as page}
      {@render navLi(page.text, page.link)}
    {/each}
  </ul>
</div>