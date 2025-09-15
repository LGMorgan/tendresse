<script>
	import { goto } from '$app/navigation';
  import Button from '$lib/components/button.svelte'

  /*
<main>
  <section id="introduction">
    <p class="p projet">
      Tendresse c'est une étape vers mon utopie : Vivre dans un monde où les relations sont authentiques, bienveillantes, inclusives et tendres.
    </p>
    <div>
      <enhanced:img class="enhanced-img" src="/src/lib/img/frog.png" alt="Atelier Tendresse Consentie" />
    </div>
  </section>

  <section id="présentation">
    <p class="p projet">
      Un monde où il est possible de poser clairement ses limites, écouter et respecter celles des autres, exprimer ses besoins et ses désirs. 
      <br/>
      <br/>
      Tendresse c'est l’expérience d’un espace de connexion, de partage, de jeu, d'apprentissage et d’exploration (sensorialité, rapport au corps et au toucher, éducation au consentement…) sans sexualité, sans nudité, s'inscrivant dans un des nombreux pans du mouvement Sex-positif, pensé avec mes bagages de psychomotricienne/circassienne.
      <br/>
      <br/>
      J'ai pensé Tendresse en lien avec mon intérêt pour le genre, le féminisme intersectionnel, le milieu sexpositif, les expériences sensorielles, les réflexions autour des relations... 
      <br/>
      <br/>
    </p>
    <p class="p">
      Ce projet fait suite à :
    </p>
    <ul class="unol">
      <li>
        Mes accompagnements de personnes victimes de violences que j'ai pu faire en psychiatrie. 
      </li>
      <li>
        Mes créations / facilitations de groupes / cercles de paroles. 
      </li>
      <li>
        Mon travail de prévention et d'éducation à la sexualité.  
      </li>
    </ul>
    <p class="p">
      N'hésites pas à me contacter pour toute question/reflexion. 
      <br/>
      <br/>
      Laurette 
    </p>
    <div id="profil-div">
      <enhanced:img class="enhanced-img" id="profil-pic" src="/src/lib/img/laurette.jpg" alt="Photo de profil de Laurette"/>
    </div>
  </section>
</main>


  <div class="circle">
    <enhanced:img class="enhanced-img" src="/src/lib/img/frog.png" alt="Atelier Tendresse Consentie" />
  </div>
  */
</script>

<main>
  <section>
    <h3>
      Aujourd’hui, on entend toutes et tous parler de consentement.
    </h3>
    <p>
      Si les chiffres des violences sexistes et sexuelles rappellent l'urgence d'en faire un sujet de premier plan, il sont aussi l'occasion d'aller questionner jusqu'à nos actes relationnels les plus familiers.
    </p>
  </section>

  <section>
    <h3>
      Ne nous est-il jamais arrivé d'accepter des gestes sans vraiment en avoir envie ?
    </h3>
    <p>
      N'avons-nous jamais craint qu'un·e proche adhère à quelque chose juste pour nous faire plaisir ?
    </p>
    <p>
      Sommes nous conscient·es des biais de pouvoir, de relation et de domination pouvant influencer nos relations et comment essayer qu'ils n'entravent pas l'expression des besoins et des désirs de chacun ?
    </p>
    <p>
      Comment écouter et respecter les limites de notre entourage, de quelle manière pouvons-nous poser clairement nos limites ?
    </p>
  </section>

  <section>
    <h3>
      Des outils existent.
    </h3>
    <p>
      Les Ateliers Tendresse sont des espaces pour les découvrir et les pratiquer. Des espaces où tu peux explorer ton rapport au consentement et à la connexion aux autres et à toi-même, au travers de jeux, d'explorations sensorielles et relationnelles.
    </p>

    <p>
      L'accès à certains ateliers ont pour prérequis le besoin d'avoir participé à l'atelier "Tendresse Consentie". Celui-ci pose le cadre nécessaire afin d'assurer une expérience sécurisante pour chacun·e des participant·es et me permet une première rencontre avec les participant.es.
    </p>
    <div class="m-auto w-full pt-5">
      <enhanced:img class="enhanced-img m-auto" src="/src/lib/img/fist.png" alt="Poing militant" height="400"/>
    </div>
  </section>

    <div class="flex">
      <Button onClick={() => goto('/les-ateliers')}>Découvrir les Ateliers</Button>
    </div>

</main>

<style>
  @media only screen and (min-width: 768px) {
    .circle {
      width: 55vw;
      height: 55vw;
    }
  }
  @media only screen and (min-width: 1024px) {
    .circle {
      width: 45vw;
      height: 45vw;
    }
  }
  @media only screen and (min-width: 1280px) {
    .circle {
      width: 35vw;
      height: 35vw;
    }
  }
</style>