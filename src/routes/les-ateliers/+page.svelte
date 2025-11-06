<script>
    import InscriptionBtn from '$lib/components/InscriptionBtn.svelte'; 
</script>

<svelte:head>
    <title>Les Ateliers — Les Ateliers Tendresse</title>
    <meta
        name="description"
        content="Descriptions des ateliers, formats, durées et programmes — Tendresse Consentie, Playfight, cercles de parole et plus."
    />
    <script type="application/ld+json">
        {
            "@context":"https://schema.org",
            "@type":"WebPage",
            "name":"Les Ateliers — Les Ateliers Tendresse",
            "url":"https://lesatelierstendresse.re/les-ateliers",
            "description":"Descriptions des ateliers, formats, durées et programmes — Tendresse Consentie, Playfight, cercles de parole et plus.",
            
        }
    </script>
</svelte:head>

<main>
	<section id="introduction">
		<h3>
			Des espaces de connexion, de partage et de jeu avec le Consentement au cœur de chaque
			proposition.
		</h3>
	</section>

	<section id="présentation">
		<p>Il y a deux niveaux d'ateliers. Les ateliers de niveaux 1 ne nécessitent aucun prérequis.</p>
		<h3>Ateliers de niveau 1</h3>
		<ul class="unol">
			<li><span>⭐ </span>La Tendresse Consentie</li>
			<li><span>⭐ </span>La Playfight</li>
			<li><span>⭐ </span>Les Cercles de parole</li>
			<li><span>⭐ </span>... Et d'autres plus occasionnels à découvrir.</li>
		</ul>
		<h3>Ateliers de niveau 2</h3>
		<p>
			Effectuer un atelier "Tendresse Consentie" en respectant le cadre posé permet l'accès aux
			ateliers suivants :
		</p>
		<br />
		<ul class="unol">
			<li><span>⭐ </span>Soirée câlin</li>
			<li><span>⭐ </span>Adoration</li>
			<li><span>⭐ </span>Journée Tendresse</li>
			<li><span>⭐ </span>... Et d'autres plus occasionnels à découvrir.</li>
		</ul>
		<br />
		<p>Tu les retrouveras sur les réseaux, la newsletter ou sur billetweb !</p>
		<br />
		<h3>A quoi ressemble un atelier ?</h3>
		<p>
			Les ateliers durent <b>3 heures</b>. Il y a entre <b>6 et 16 personnes</b>. La moyenne d’âge
			est <b>entre 25 et 45 ans</b>. Proportionnellement, il y a plus de femmes/personnes non
			binaires que d’hommes. Certaines personnes viennent en duo mais la plupart viennent seules.
		</p>
		<br />
		<p>
			Vous pouvez venir en duo et ne jouer qu’ensemble si l'interaction avec des inconnus
			est inconfortable. A chaque pose de cadre, je demande s’il y a des personnes venues en duo
			pour que tout le groupe soit au courant.
		</p>

		<h3>
			Pour beaucoup encore, "Tendresse" et "Consentement" sont des mots qui peuvent faire peur alors :
			un peu de clarté
		</h3>
		<ul class="unol">
			<li><span>⭐ </span>Est-ce qu'il y a de la nudité ? <br /> Non.</li>
			<li><span>⭐ </span>Est-ce qu'il y a de la s*xualité ? <br /> Non.</li>
			<li>
				<span>⭐ </span>Est-ce qu'on est obligé d'être touché/de toucher les autres ? <br /> Non.
			</li>
		</ul>

		<h3>Le programme</h3>
		<ul class="unol">
			<li><span>⭐ </span>Pose du cadre</li>
			<li><span>⭐ </span>Rencontre du groupe</li>
			<li><span>⭐ </span>Atelier en lui-même</li>
			<li><span>⭐ </span>Cercle de clôture</li>
		</ul>

		<h3>Les déroulés d’Ateliers sont progressifs</h3>
		<p>
			Je vous propose une guidance pour faciliter les connexions et vous donner des codes
			communs.
		</p>
		<p>
			Il y a des temps de partage et des propositions incluant parfois du contact physique auxquels
			tu peux choisir ou non de participer.
		</p>
		<p>
			Tu seras invité à changer de binôme mais tu peux venir en duo et explorer seulement avec ce
			duo, ça ne pose aucun soucis !
		</p>
	</section>

	<section id="inscription">
		<p class="text-center pb-6">
			<strong>Il est nécessaire de t’inscrire pour pouvoir participer.</strong>
		</p>
		<InscriptionBtn />
	</section>

	<section id="contact">
		<p class="text-center">Tu peux me contacter pour toute question, réflexion ou proposition !</p>
		<br />
		<div class=" flex">
			<a class="m-auto text-center text-[1.2em] font-bold" href="/qui-suis-je">Laurette</a>
		</div>
	</section>
</main>
