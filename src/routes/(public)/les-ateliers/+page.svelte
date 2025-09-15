<script>
  import Button from '$lib/components/button.svelte';

  import NextDate from "$lib/components/nextDate.svelte"
  import Link from "$lib/components/link.svelte";
	import ButtonAlt from '$lib/components/button.svelte';

  let { data } = $props();

  /**
   *     <div id="atelier-grid">
    <div class="flex-item wrks-img">
      <a href="/tendresse" aria-label="Lien pour la page tendresse-consentie">
        <enhanced:img class="enhanced-img wrks-img" src="/src/lib/img/tendresse.png" alt="Atelier Tendresse Consentie" />
      </a>
      <Link href="/tendresse" aria-label="Boutton pour la page tendresse-consentie">
        Découvrir la Tendresse Consentie
      </Link>
      <NextDate dates={data.workshops?.Tendresse}/>
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
  */

</script>

<main>
  <section id="introduction">
    <h3>Des espaces de connexion, de partage et de jeu avec le consentement au cœur de chaque proposition.</h3>
    <p>Rien n’est obligatoire, tout est révocable et c’est ok de ne pas avoir envie de jouer avec tout le monde !</p>
  </section>
  <section id="présentation">
    <h3>Les ateliers ouverts à toutes et à tous sont la <a href="/tendresse" target="_blank">Tendresse Consentie</a> et <a href="/playfight" target="_blank">la Playfight</a>.</h3>
    <p>Effectuer une Tendresse Consentie en respectant le cadre posé permet l'accès aux <b>ateliers de niveau 2 :</b></p>
    <br/>
    <ul class="unol">
      <li><span>⭐ </span>Soirée câlin</li>
      <li><span>⭐ </span>Adoration</li>
      <li><span>⭐ </span>Journée Tendresse</li>
      <li><span>⭐ </span>Tendresse Collective</li>
      <li><span>⭐ </span>Et d'autres encore à venir...</li>
    </ul>
    <br/>
    <p>Tu les retrouveras sur les réseaux, la newsletter ou sur billetweb !</p>
    <br/>
    <p>Les Ateliers durent <b>3 heures</b>. Il y a entre <b>6 et 16 personnes</b>. La moyenne d’âge est <b>entre 25 et 45 ans</b>. Proportionnellement, il y a un peu plus de femmes/personnes non binaires que d’hommes. Certaines personnes viennent en duo mais la plupart viennent seules.</p>
  
    <h3>Le programme type :</h3>
    <ul class="unol">
      <li><span>⭐ </span>Pose du cadre</li>
      <li><span>⭐ </span>Rencontre du groupe</li>
      <li><span>⭐ </span>Atelier en lui-même</li>
      <li><span>⭐ </span>Cercle de clôture</li>
    </ul>
    <ul class="unol">
      <li><span>⭐ </span>Est-ce qu'il y a de la nudité ? <br/> Non.</li>
      <li><span>⭐ </span>Est-ce qu'il y a de la s*xualité ? <br/> Non. </li>
      <li><span>⭐ </span>Est-ce qu'on est obligé d'être touché/de toucher les autres ? <br/> Non.</li>
      <li><span>⭐ </span>Il n'y a aucune attente. Au cours de l'atelier, tu peux à tout moment te retirer d’une proposition, observer, rester sans rien faire, et/ou partir quand tu le souhaites, sans justification.</li>
      <li><span>⭐ </span>Ce n'est pas un espace de séduction/sensualité. L’envie de séduire peut te couper de l’expérience et nuire à l’ambiance collective.</li>
      <li><span>⭐ </span>Le consentement peut parfois être l’inverse de l’inclusivité. Il y a donc des moments où vous allez peut-être vivre du rejet, être sans binôme, recevoir un non. Ça fait partie de l’expérience.</li>
      <li><span>⭐ </span>Il y a toujours une personne en soutien émotionnel disponible tout au long de l'atelier si besoin.</li>
    </ul>
    <h3>
      Les déroulés d’Ateliers sont progressifs. 
    </h3>
    <p>
      Je vous propose une guidance pour faciliter les connexions et de vous donner des codes communs.
    </p>
    <p>
      Il y a des temps de partage et des propositions incluant parfois du contact physique auxquels tu peux choisir ou non de participer.
    </p>
    <p>
      Tu seras invité à changer de binôme mais tu peux venir en duo et explorer seulement avec ce duo ça ne pose aucun soucis !
    </p>
  </section>
  <section id="tarifs">
    <h3>Tarifs</h3>
    <p>Pour 3h d'ateliers, je te propose trois tarifs selon tes moyens financiers :</p>
    <ul class="unol">
      <li>Tarif standard : 25€</li>
      <li>Tarif solidaire : 15€</li>
      <li>Tarif soutiens : 35€</li>
    </ul>
    <p>Si tu es intéressé·e par un atelier mais que tu ne peux pas payer le prix solidaire. Un prix libre est possible sur demande, sans justification ⭐</p>
  </section>
  
  <section id="inscription">
    <p><strong>Il est nécessaire de t’inscrire pour pouvoir participer.</strong></p>
    <div class="flex flex-col items-center p-5">
      <Button>
        <a href="https://www.billetweb.fr/pro/les-ateliers-tendresse" target="_blank" >
          infos et inscriptions
        </a>
      </Button>
    </div>
  </section>

  <section id="contact">
    <p>Tu peux me contacter pour toute question, réflexion, proposition ou juste pour discuter de ce projet !</p>
    <p>Laurette</p>
  </section>
</main>

