<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<main>
	<section>
		<h3>Aujourd’hui, on entend toutes et tous parler de consentement</h3>
		<p>
			Si les chiffres des violences sexistes et sexuelles rappellent l'urgence d'en faire un sujet
			de premier plan, il sont aussi l'occasion d'aller questionner jusqu'à nos actes relationnels
			les plus familiers.
		</p>
	</section>

	<section>
		<h3>Ne nous est-il jamais arrivé d'accepter des gestes sans vraiment en avoir envie ?</h3>
		<p>
			N'avons-nous jamais craint qu'un·e proche adhère à quelque chose juste pour nous faire plaisir
			?
		</p>
        <br/>
		<p>
			Sommes nous conscient·es des biais de pouvoir, de relation et de domination pouvant influencer
			nos relations ? Comment essayer qu'ils n'entravent pas l'expression des besoins et des désirs
			de chacun ?
		</p>
        <br/>
		<p>
			Comment écouter et respecter les limites de notre entourage ? De quelle manière pouvons-nous
			poser clairement nos limites ?
		</p>
	</section>

	<section>
		<h3>Des outils existent</h3>
		<p>
			Les Ateliers Tendresse sont des espaces pour les découvrir et les pratiquer. Des espaces où tu
			peux explorer ton rapport au consentement, à la connexion aux autres et à toi-même, au
			travers de jeux, d'explorations sensorielles et relationnelles.
		</p>
		<p>
			L'accès à certains ateliers ont pour prérequis d'avoir participé à l'atelier
			"Tendresse Consentie", celui-ci pose le cadre nécessaire afin d'assurer une expérience
			sécurisante pour chacun·e des participant·es et me permet une première rencontre avec les
			participant.es.
		</p>
		<div class="m-auto w-full pt-5">
			<enhanced:img
				class="enhanced-img m-auto"
				src="/src/lib/img/fist.png"
				alt="Poing militant"
				height="400"
			/>
		</div>
	</section>

	<div class="pb-8 text-center">
		<Button
			class="bg-[var(--color-pink)] p-5 text-xl shadow hover:bg-[var(--color-yellow)] hover:text-[var(--color-violet)]"
			onclick={() => goto('/les-ateliers')}>Découvrir les Ateliers</Button
		>
	</div>
</main>
