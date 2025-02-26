<script lang="ts">
  import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import {page} from '$app/state';

  let activeUrl = $derived(page.url.pathname);
  let navHidden = $state(true)

</script>

<Navbar fluid={true} class="bg-transparent mt-6 md:my-6" let:toggle>
  <div class="flex flex-col m-auto">
    <NavHamburger
      color={"pink"}
      class="m-auto flex"
      onclick={() => navHidden = !navHidden}/>
    <NavUl
      {activeUrl}
      class="m-auto navUl text-pink-400 text-lg w-full"
      classUl="text-lg flex flex-col align-center"
      hidden={navHidden}
      slideParams={{delay: 100, duration: 250}}
      activeClass="text-[#dd00ae]"
      nonActiveClass="hover:text-[#dd00ae]"
      on:click={() => onNavLinkClick(toggle)}> 
      <NavLi class="text-lg" href="/" onclick={() => navHidden = !navHidden}>Accueil</NavLi>
      <NavLi class="text-lg " href="/tendresse" onclick={() => navHidden = !navHidden}>La Tendresse Consentie</NavLi>
      <NavLi class="text-lg" href="/playfight" onclick={() => navHidden = !navHidden}>La Playfight</NavLi>
      <NavLi class="text-lg" href="/adoration" onclick={() => navHidden = !navHidden}>L' Adoration</NavLi>
      <NavLi class="text-lg" href="/cadre" onclick={() => navHidden = !navHidden}>Le Cadre</NavLi>
      <NavLi class="text-lg" href="/projet" onclick={() => navHidden = !navHidden}>Le Projet</NavLi>
    </NavUl>
  </div>
</Navbar>

<style>

</style>