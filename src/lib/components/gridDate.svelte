<script>
  import DateItem from "$lib/components/dateItem.svelte"
  const { dates } = $props();
</script>

<section id="prochains-ateliers">
  <h3 class="header3">Prochaines dates</h3>
  {#if !!dates?.length}
    <div id="wrapper">
      {#each dates as d}
        <DateItem date={new Date(d.date.S)} isFull={d.isFull.BOOL} link={d.link.S} />
      {/each}
    </div>
  {:else}
    <p>Aucun atelier prévus, rejoins la newsletter juste en dessous pour être tenu•e informé•e</p>
  {/if}
</section>

<style>
  #wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 20px auto;
    justify-items: center;
  }
  p {
    text-align: center;
    font-family: "bukhari";
    color: #dd00ae;
    letter-spacing: 1px;
    padding: 20px 40px 40px 40px;
  }

  @media only screen and (min-width: 480px) {
    #prochains-ateliers {
      max-width: 80%;
    }
  }

  @media only screen and (min-width: 768px) {
    #wrapper {
      grid-template-columns: repeat(3, 3fr);
      max-width: 800px;
      margin: auto;
    }
    #prochains-ateliers {
      max-width: 768px;
    }
  }
  @media only screen and (min-width: 900px) {
    
  }
  @media only screen and (min-width: 1024px) {
    
  }
  @media only screen and (min-width: 1100px) {

  }
  @media only screen and (min-width: 1280px) {

  }
</style>