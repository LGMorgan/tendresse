<script>
  import PlayOutline from 'flowbite-svelte-icons/PlayOutline.svelte';
  let { href, ariaLabel, children } = $props();
</script>

<div id="container">
  <a id="content" href={href} alt aria-label={ariaLabel}>
    {@render children()}
    <PlayOutline color="#f75bff" />
  </a>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }
  a {
    font-family: "bukhari";
    display: flex;
    align-items: center;
    background: #f6f3e4;
    border-radius: 5px;
    color: #f75bff;
    font-size: 1em;
    box-shadow: 0px 4px 2px 0px #f75bff;
    transition: 100ms;
    padding: 10px 8px 10px 10px;
    gap: 10px;
    letter-spacing: 1px;
  }
  a:active{
    box-shadow: 0px 2px 2px 0px #f75bff;
    transform: translateY(2px);
  }
</style>