<script lang="ts">
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';

	import * as Carousel from '$lib/components/ui/carousel/index.js';

	let api = $state<CarouselAPI>();
	let current = $state(0);
	const count = $derived(api ? api.scrollSnapList().length : 0);

	$effect(() => {
		if (api) {
			current = api.selectedScrollSnap() + 1;
			api.on('select', () => {
				current = api!.selectedScrollSnap() + 1;
			});
		}
	});

	const list = [
		{
			text: "Laurette propose un espace sécure et joyeux, qui permet d'entrer dans l'exploration très progressive des briques de base d'une relation saine et épanouissante, à travers des exercices super bien guidés",
			signature: 'L.'
		},
		{
			text: "Même plusieurs mois après, j'en garde une empreinte qui continue de diffuser dans ma relation à moi et aux autres : Brillant.",
			signature: 'L.'
		},
		{
			text: 'Si tout le monde était formé au consentement par Laurette, je pense que les psy et les tribunaux seraient moins saturés !',
			signature: 'C.'
		},
		{
			text: 'Nécessité absolue, inscrivez-vous !',
			signature: 'E.'
		},
		{
			text: "Ce genre d'espace vraiment unique, c'est quelque chose que tout le monde devrait tester au moins une fois pour mieux se comprendre, se connaitre et retravailler son rapport au mot tendresse.",
			signature: 'B.'
		},
		{
			text: 'J’avais peur de tomber sur un truc perché, axé spiritualité. Mais pas du tout on est dans du concret de la vraie vie , du factuel et du parlé vrai. Je me suis sentie en sécurité.',
			signature: 'L.'
		},
		{
			text: "Ce qui m'impressionne le plus, c’est l’évolution des participant·es. Je vois des personnes très insécures qui arrivent et qui sont transformées en un ou deux ateliers... ce ne sont plus les mêmes ! Grâce à l’espace que tu crées, les gens se sentent rassurés et en sécurité, et ça change tout dans les interactions. C’est trop beau.",
			signature: 'A.'
		},
		{
			text: "Ce que j'ai trouvé vraiment précieux c'est à quel point on est accompagné du début à la fin à écouter nos réactions, nos envies, nos limites et à oser les exprimer.",
			signature: 'B.'
		},
		{
			text: "Les ateliers tendresse viennent remettre de l'humanité simple et joyeuse dans la relation à l'autre. Ils envoient également un souffle de liberté et d'ouverture des pensées qui fait du bien !",
			signature: 'H.'
		}
	];
</script>

{#snippet testimony(text: string, signature: string)}
	<blockquote
		class="m-4 rounded-xl border-l-4 border-[var(--color-pink)] bg-[var(--color-yellow)] p-4"
	>
		<p class="rounded text-[var(--color-violet)] italic">"{text}"</p>
		<footer class="mt-2 text-right text-[var(--color-blue)]">- {signature}</footer>
	</blockquote>
{/snippet}

<Carousel.Root
	setApi={(emblaApi) => (api = emblaApi)}
	class="mx-auto mt-10 w-4/5"
	opts={{
		align: 'center',
		loop: true
	}}
>
	<Carousel.Content>
		{#each list as item, i (i)}
			<Carousel.Item>
				{@render testimony(item.text, item.signature)}
				<p class="m-auto text-center font-semibold">
					{current} sur {count}
				</p>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous class="hidden sm:flex text-[var(--color-violet)] hover:text-yellow-500" />
	<Carousel.Next class="hidden sm:flex text-[var(--color-violet)] hover:text-yellow-500" />
</Carousel.Root>
