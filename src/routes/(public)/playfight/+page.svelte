<script>
	import GridDate from '$lib/components/gridDate.svelte';
	import Testimony from '$lib/components/testimony.svelte';
	import AskMe from '$lib/components/askMe.svelte';
    import MailInput from '$lib/components/mailInput.svelte';


    /**
     * 	<GridDate dates={data?.workshops?.Playfight} />

	<Testimony testimonies={data.testimonies.Playfight} />
     */

	const { data, form } = $props();
</script>

<main>
	<section>
		<h3>
			Lutte, chamaille, bataille de regards, course de vers de terre, bagarre au ralenti, danse
			impro... Dans cet atelier, Consentement, jeux et créativité sont à l'honneur !
		</h3>
		<enhanced:img
			class="enhanced-img m-auto"
			src="/src/lib/img/playfight-illustration.png"
			alt="Atelier Tendresse Consentie"
			width="400"
		/>
	</section>
	<section class="text-center">
		<p class="text-left">
			L’atelier Playfight est <strong>un espace d'exploration du consentement</strong> et de ta
			créativité par des jeux d'opposition. C'est un espace où l'écoute des limites de chacun.es et
			le consentement sont au centre.
			<strong
				>Tu choisis les personnes avec qui tu joues, à quoi tu as envie de jouer et à quelle
				intensité.</strong
			>
		</p>
		<br />
		<p class="mb-1">
			C’est aussi un atelier pour se mettre en corps, en joie, en rire et se rencontrer
			différemment.
		</p>
		<p class="mb-1">
			Je vous proposerais une guidance pour faciliter les connexions, se donner des codes communs.
		</p>
		<p class="mb-1">
			<strong>Le groupe est mixte.</strong> Quel que soit ton genre, ton âge, tes particularités, tu
			es bienvenu.e !
		</p>
		<p class="mb-1">
			En cas de besoin spécifique, envoie moi un message et je ferais en sorte de t'accueillir au
			mieux selon mes ressources !
		</p>
		<p>
			Il y aura <strong>entre 6 et 16 personnes</strong>.
		</p>
	</section>

	<section>
		<h3 class="header3">Programme</h3>
		<ul class="unol">
			<li><span>🌀 </span>Cercle d’ouverture</li>
			<li><span>🌀 </span>Jeux de consentement</li>
			<li><span>🌀 </span>Echauchement au moyen de jeux d'oppositions</li>
			<li><span>🌀 </span>Présentation du cadre et des règles</li>
			<li><span>🌀 </span>Cercle de Playfight</li>
			<li><span>🌀 </span>Retours et temps de parole</li>
		</ul>
		<br />
		<p>
			Au cours de l’atelier, tu peux à tout moment te retirer, observer et/ou partir quand tu le
			souhaites. Il n'y aura aucun jugement ni attente, rien n'est obligatoire (hormis le respect du
			cadre établi) et tout est révocable.
		</p>

		<h3>Exemples</h3>
		<ul class="unol">
			<li><span>⭐ </span>Le premier qui arrive à enlever la chaussette gauche de l'autre</li>
			<li><span>⭐ </span>Bataille d'équilibre / de regard / d'apné / de chatouilles/ de rires.</li>
			<li><span>⭐ </span>Des roulés boulés tout doux au sol.</li>
			<li><span>⭐ </span>La première personne qui trouve un objet, les yeux fermés.</li>
			<li><span>⭐ </span>Bataille intergalactique au ralenti.</li>
			<li><span>⭐ </span>Coller les épaules du partenaire à terre</li>
			<li><span>⭐ </span>Et toute autre fantaisie respectant le cadre !</li>
		</ul>
	</section>

	<AskMe />


</main>

<MailInput {form} />

<style>
	.enhanced-img {
		animation-name: blurFade;
		animation-duration: 0.5s;
		animation-delay: 750ms;
		animation-fill-mode: backwards;
	}
</style>
