<script lang="ts">
  import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  import {page} from '$app/state';
  let activeUrl = $derived(page.url.pathname);
  let navHidden = $state(true)
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
        activeClass="text-color-white md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent">
        <NavLi class="text-lg" href="/">Accueil</NavLi>
        <NavLi class="text-lg" href="/tendresse">Tendresse</NavLi>
        <NavLi class="text-lg" href="/playfight">Playfight</NavLi>
        <NavLi class="text-lg" href="/adoration">Adoration</NavLi>
        <NavLi class="text-lg" href="/projet">Projet</NavLi>
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
</style>