<script lang="ts">
  import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

  import {page} from '$app/state';

  let activeUrl = $derived(page.url.pathname);
  let navHidden = $state(true);

  let toggleMenu = () => navHidden = !navHidden;
  
</script>

<Navbar fluid={true} class="bg-[var(--color-yellow)] m-auto ">
  <NavHamburger
    aria-expanded={navHidden}
    class="m-auto"
    classes={{ menu: "h-9 w-9" }}
    style="color: var(--color-violet);" />
  <NavUl
    {activeUrl}
    class="bg-transparent m-auto navUl w-full"
    ulClass="flex w-full m-auto justify-evenly gap-5 p-0"

    slideParams={{delay: 100, duration: 250}}
    classes={{ active: "underline bg-transaprent" }}
    nonActiveClass=""
    onclick={() => toggleMenu()}> 
    <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em]" href="/">Accueil</NavLi>
    <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em]" href="/projet">Le Projet</NavLi>
    <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em]" href="/les-ateliers">Les Ateliers</NavLi>
    <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em]" href="/qui-suis-je">Qui suis-je ?</NavLi>
    <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em]" href="/le-cadre">Le Cadre</NavLi>
    <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em] tracking-[0.15em]" href="/FAQ">FAQ</NavLi>
    <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em]" href="/accompagnement-individuel">Accompagnement individuel</NavLi>
  </NavUl>
</Navbar>

<style></style>