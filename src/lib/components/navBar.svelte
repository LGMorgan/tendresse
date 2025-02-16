<script lang="ts">
  import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import {page} from '$app/state';
  let activeUrl = $derived(page.url.pathname);
  let navHidden = $state(true)

  //       <NavLi class="text-lg" href="/cadre">Le cadre</NavLi>
</script>

<Navbar fluid={true} class="bg-transparent md:m-5">
  <div>
    <NavHamburger
      color={"pink"}
      class="m-auto flex"
      onclick={() => navHidden = !navHidden}/>
    <NavUl
      {activeUrl}
      class="unol navUl dzad text-pink-400 text-lg w-60"
      classUl="text-lg"
      hidden={navHidden}
      slideParams={{delay: 100, duration: 250}}
      activeClass="text-[#dd00ae]"
      nonActiveClass="hover:text-[#dd00ae]"> 
      <NavLi class="text-lg" href="/">Accueil</NavLi>
      <NavLi class="text-lg " href="/tendresse">La Tendresse Consentie</NavLi>
      <NavLi class="text-lg" href="/playfight">La Playfight</NavLi>
      <NavLi class="text-lg" href="/adoration">L' Adoration</NavLi>
      <NavLi class="text-lg" href="/projet">Le Projet</NavLi>
    </NavUl>
  </div>
</Navbar>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
  }
  .tc {
    color: #dd00ae;
  }
</style>