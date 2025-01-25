<script>
    import MailInput from "$lib/components/mailInput.svelte"
    import GridDate from '$lib/components/gridDate.svelte'
    import Testimony from "$lib/components/testimony.svelte";

    const { data } = $props();
    console.log({data})
</script>

<main>
  <section id="introduction">
    <p class="p">
      Un atelier pour expérimenter l'expression de ses envies/désirs et recevoir de la tendresse 
    </p>
  </section>
  <section id="présentation">
    <p class="p">
      Prérequis : avoir participé à l'atelier tendresse consentie
    </p>
    <h3 class="header3">
      Programme
    </h3>
    <ul class="unol">
      <li>Présentation du cadre</li>
      <li>Cercle d'ouverture </li>
      <li>Outils de consentement </li>
      <li>Adoration </li>
      <li>Retour et temps de parole</li>
    </ul>
    <h3 class="header3">
      Adoration
    </h3>
    <p class="p">
      En groupe de 3, chaque personne reçoit ce qu'elle souhaite pendant 10min (dans la mesure des limites des partenaires) après avoir exprimé ses envies.
    </p>
    <h3 class="header3">
      Dans cet espace
    </h3>
    <p class="p">
      Tu es libre de participer ou non aux propositions, de te mettre à l'écart ou de partir quand tu le souhaites.
    </p>
    <p class="p">
      C'est ok de ne pas avoir envie de jouer avec tout le monde.
    </p>
    <p class="p">
      Les rires, larmes et toutes autres formes d'expressions émotionnelles sont bienvenues.
    </p>
  </section>
  
  <GridDate dates={data?.workshops?.Adoration}/>
  
  <Testimony  testimonies={data.testimonies.Adoration}/>
  
  <MailInput />
</main>

<style>
  h3 {
    animation-delay: 550ms;
  }
  p {
    animation-delay: 750ms;
  }
</style>