<script lang="ts">
  import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import {page} from '$app/state';

  let activeUrl = $derived(page.url.pathname);
  let navHidden = $state(true)

  let toggleMenu = () => {
    console.log("toggleMenu called")
    navHidden = !navHidden;
  };
  
</script>

<Navbar fluid={true} class="bg-transparent mt-6 md:my-6" let:toggle>
  <div class="flex flex-col m-auto">
    <NavHamburger
      color={"pink"}
      class="m-auto flex"
      onclick={toggleMenu}/>
    <NavUl
      {activeUrl}
      class="bg-transparent m-auto navUl text-pink-400 text-lg w-full"
      classUl="bg-transparent border-none text-lg flex flex-col align-center"
      hidden={navHidden}
      slideParams={{delay: 100, duration: 250}}
      activeClass="text-[#dd00ae]"
      nonActiveClass="hover:text-[#dd00ae]"
      on:click={() => toggleMenu()}> 
      <NavLi class="text-lg" href="/">Accueil</NavLi>
      <NavLi class="text-lg " href="/tendresse">La Tendresse Consentie</NavLi>
      <NavLi class="text-lg" href="/playfight">La Playfight</NavLi>
      <NavLi class="text-lg" href="/adoration">L' Adoration</NavLi>
      <NavLi class="text-lg" href="/cadre">Le Cadre</NavLi>
      <NavLi class="text-lg" href="/projet">Le Projet</NavLi>
    </NavUl>
  </div>
</Navbar>
