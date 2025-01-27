<script>
  import Line from "$lib/components/lineSeparator.svelte"
  import MailInput from "$lib/components/mailInput.svelte"
  import NextDate from "$lib/components/nextDate.svelte"
  import Link from "$lib/components/link.svelte";

  let { data } = $props();
</script>

<main>
  <section id="introduction">
    <h2 class="header2">Évènements autour de l'exploration de la tendresse, du jeu et du consentement à la Réunion</h2>
    <enhanced:img class="enhanced-img" src="/src/lib/img/statues.png" alt="Décoration statues" />
    <Line />
  </section>
  
  <div id="ateliers">
    <h3 class="header3">Les ateliers</h3>
    <p class="p">Les ateliers ouvrent un espace de connexion, de partage et de jeu.</p>
    <p class="p">Une exploration du rapport au corps, au moyen d’outils de consentement, de tendresse et de joie.</p>
  
    <div id="atelier-grid">
      <div class="flex-item wrks-img">
        <a href="/tendresse" aria-label="Lien pour la page tendresse-consentie">
          <enhanced:img class="enhanced-img wrks-img" src="/src/lib/img/tendresse-consentie.png" alt="Atelier Tendresse Consentie" />
        </a>
        <Link href="/tendresse" aria-label="Boutton pour la page tendresse-consentie">
          Découvrir la Tendresse Consentie
        </Link>
        <NextDate dates={data.workshops?.Tendresse}/>
      </div>
  
      <div class="flex-item wrks-img">
        <a href="/adoration" aria-label="Boutton pour la page tendresse-consentie">
          <enhanced:img class="enhanced-img wrks-img" src="/src/lib/img/adoration.png" alt="Atelier Adoration"/>
        </a>
        <Link href="/adoration" aria-label="Boutton pour la page l'adoration">
          Découvrir l'Adoration
        </Link>
        <NextDate dates={data.workshops?.Adoration}/>
      </div>
  
      <div class="flex-item wrks-img">
        <a href="/playfight" aria-label="Boutton pour la page tendresse-consentie">
          <enhanced:img class="enhanced-img wrks-img" src="/src/lib/img/playfight.png" alt="Atelier Playfight"/>
        </a>
        <Link href="/playfight" aria-label="Boutton pour la page playfight">
          Découvrir le Playfight
        </Link>
        <NextDate dates={data.workshops?.Playfight}/>
      </div>
    </div>
  </div>

  <section id="projet-section">
    <h3 class="header3">Le projet</h3>
    <p class="p projet">
      Tendresse c'est une étape vers mon utopie : Vivre dans un monde où les relations sont authentiques, bienveillantes, inclusives et tendres.
    </p>
    <Link href="/projet" aria-label="Boutton pour la page projet">
      En savoir plus
    </Link>
  </section>
  
  <MailInput />
</main>

<style>
  #introduction {
    animation-delay: 400ms;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0px 20px;
  }
  #ateliers {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    padding: 0px 20px;
  }
  #atelier-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 20px 0px;
    width: 100%;
  }
  .flex-item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 0px;
    min-width: 100%;
  }
  .wrks-img {
    width: 80vw;
    max-width: 300px;
    margin: auto;
  }
 
  .header2 {
    margin: auto;
  }
  .header3 {
    margin-bottom: 15px;
    padding: 0px;
  }
  .projet {
    text-align: left;
    margin-bottom: 30px;
  }

  @media only screen and (min-width: 480px) {
    .flex-item {
      max-width: 400px;
    }
  }

  @media only screen and (min-width: 768px) {
    #atelier-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .flex-item {
      max-width: 300px;
    }
  }
  @media only screen and (min-width: 1000px) {
    #atelier-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .flex-item {
      max-width: 300px;
    }
    #ateliers {
      margin: 20px 7vw;
    }
  }
  @media only screen and (min-width: 1280px) {
    .header3 {
      margin: 50px 20px 10px 20px;
    }
    #atelier-grid {
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
    }
    #ateliers {
      margin: 20px 50px;
    }
  }
</style>