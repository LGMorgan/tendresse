<script lang="ts">
  import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

  import {page} from '$app/state';

  let activeUrl = $derived(page.url.pathname);
  let navHidden = $state(true);

  let toggleMenu = () => navHidden = !navHidden;
  
</script>

<Navbar fluid={true} let:toggle border={false} class="bg-[var(--color-yellow)]">
  <div class="flex flex-col m-auto pb-3 ">
    <NavHamburger
      aria-expanded={navHidden}
      class="m-auto flex hover:bg-transparent"
      menuClass="h-9 w-9"
      style="color: var(--color-violet);"
      onclick={toggleMenu} />
    <NavUl
      {activeUrl}
      class="bg-transparent text-lg m-auto navUl w-full"
      classUl="bg-transparent border-none flex flex-col align-center max-w-full"
      hidden={navHidden}
      slideParams={{delay: 100, duration: 250}}
      activeClass=""
      nonActiveClass=""
      on:click={() => toggleMenu()}> 
      <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em]" href="/">Accueil</NavLi>
      <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em]" href="/projet">Le Projet</NavLi>
      <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em]" href="/les-ateliers">Les Ateliers</NavLi>
      <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em]" href="/qui-suis-je">Qui suis-je ?</NavLi>
      <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em]" href="/le-cadre">Le Cadre</NavLi>
      <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em] tracking-[0.15em]" href="/FAQ">FAQ</NavLi>
      <NavLi style="color: var(--color-violet)" class="text-[1.2em] md:text-[1.6em]" href="/accompagnement-individuel">Accompagnement individuel</NavLi>
    </NavUl>
  </div>
</Navbar>