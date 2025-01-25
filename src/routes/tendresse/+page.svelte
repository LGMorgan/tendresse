<script>
  import MailInput from "$lib/components/mailInput.svelte"
  import GridDate from '$lib/components/gridDate.svelte'
  import ButtonAlt from '$lib/components/buttonAlt.svelte';
  import Testimony from "$lib/components/testimony.svelte";

  const { data } = $props();
</script>

<main>
  <section id="introduction">
    <p class="p">
      C'est un atelier pour apprendre des outils de consentement verbal, tactile et les expérimenter grâce à des jeux sensoriels
    </p>
  </section>
 
  <section id="présentation-tendresse">
    <h3 class="header3">
      Les objectifs
    </h3>
    <ul class="unol">
      <li>Identifier et apprendre poser ses limites</li>
      <li>Exprimer ses besoins</li>
      <li>Rendre simple et ludique le partage de la tendresse</li>
    </ul>
    <p class="mt-5 p">(Il n'y a ni nudité ni sexualité dans ces espaces)</p>
    <h3 class="header3">
      Programme
    </h3>
    <ul class="unol">
      <li>Présentation du cadre</li>
      <li>Cercle d'ouverture</li>
      <li>Application d'outils concrets</li>
      <li>Explorations sensorielles</li>
      <li>Retours et temps de parole</li>
    </ul>
    
    <h3 class="header3">
      Dans cet Espace
    </h3>
    <ul class="unol">
      <li>Tu es libre de participer ou non aux propositions, de te mettre à l'écart ou de partir quand tu le souhaites</li>
      <li>C'est ok de ne pas avoir envie de jouer avec tout le monde</li>
      <li>Les rires, larmes et toutes autres formes d'expressions émotionnelles sont bienvenues</li>
    </ul>
    
    <ButtonAlt text="Des questions ?" />
  </section>
  
  <GridDate dates={data?.workshops?.Tendresse}/>
  
  <Testimony  testimonies={data.testimonies.Tendresse}/>
  
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
  h3 {
    animation-delay: 550ms;
    margin-top: 20px;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  p {
    animation-delay: 750ms;
  }
  .p {
    font-size: 1.2em;
  }
</style>

