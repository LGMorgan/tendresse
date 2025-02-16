<script>
  import MailInput from "$lib/components/mailInput.svelte"
  import GridDate from '$lib/components/gridDate.svelte';
  import Testimony from "$lib/components/testimony.svelte";

  const { data } = $props();
</script>

<main>
  <section id="introduction">
    <p class="p center">
      Lutte, jeux de bagarre, de regards, danse impro... Dans cet atelier, consentement, jeux et créativité sont à l'honneur !
    </p>
    <enhanced:img class="enhanced-img" src="/src/lib/img/playfight-illustration.png" alt="Atelier Tendresse Consentie" />  
  </section>

  <section id="présentation-playfight">
    <h3 class="header3">
      Programme
    </h3>
    <ul class="unol">
      <li>Jeux de consentement</li>
      <li>Echauchement au moyen de jeux d'oppositions</li>
      <li>Présentation du cadre et des règles</li>
      <li>Cercle de Playfight</li>
      <li>Retours et temps de parole</li>
    </ul>
    <h3 class="header3">
      Exemples
    </h3>
    <ul class="unol">
      <li>Le premier qui arrive à enlever la chaussette gauche de l'autre</li>
      <li>Bataille d'équilibre / de regard / d'apné / de chatouilles</li>
      <li>Coller les épaules du partenaire à terre</li>
      <li>Et toute autre fantaisie respectant le cadre !</li>
    </ul>
    
    <h3 class="header3">
      Le cadre du cercle
    </h3>
    <p class="p">
      Je m'avance dans le cercle, j'annonce mon souhait de jeu et je choisis mon niveau d'intensité:
    </p>
    
    <ul class="unol">
      <li>Niveau 1 : Danse impro'</li>
      <li>Niveau 2 : Chamaille</li>
      <li>Niveau 3 : Bagarre</li>
    </ul>
    <p class="p">
      Si mon souhait match avec celui d'un•e participant•e, cette personnne s'approche et me demande si je veux jouer avec elle.
    </p>
    <br/>
    <p class="p center">
      Je peux dire oui, <br/><span>je peux dire non</span>.
    </p>
    <br/>
    <p class="p">
      C'est ok de ne pas avoir envie de jouer avec tout le monde.
    </p>
    <br/>
    <p class="p">
      Nous discutons des parties du corps que l'on ne veut pas que l'autre touche, de douleurs éventuelles...
    </p>
    <br/>
    <p class="p">
      Le jeu commence en musique pour maximum 3 minutes.
    </p>
    <p class="p">
      Tu es libre de jouer ou de simplement observer, de ne pas assister à un duel, de partir quand tu le souhaites
    </p>
    <br/>
  </section>
  
  <GridDate dates={data?.workshops?.Playfight}/>

  <Testimony  testimonies={data.testimonies.Playfight}/>
  
  <MailInput />
</main>

<style>

  h2 {
    font-size: 2.5em;
    animation-delay: 450ms;
  }
  h3 {
    animation-delay: 550ms;
  }

  p {
    animation-delay: 750ms;
    text-align: left;
  }
  .center {
    text-align: center;
  }
  .enhanced-img {
    animation-name: blurFade;
    animation-duration: 0.5s;
    animation-delay: 750ms;
    animation-fill-mode: backwards;
  }
  span {
    text-decoration: underline;
  }

  @media only screen and (min-width: 480px) {
    h2 {
      margin: 40px auto;
    }
    p {
      margin: auto;
    }
  }

  @media only screen and (min-width: 768px) {
    main {
      margin: auto;
    }
  }
</style>