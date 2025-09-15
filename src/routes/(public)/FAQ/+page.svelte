<script lang="ts">
  import { Accordion, AccordionItem } from 'flowbite-svelte';
  import { ChevronUpOutline, ChevronDownOutline } from "flowbite-svelte-icons";

	import Socials from '$lib/components/socials.svelte';

  let questionRefs: (HTMLElement | null)[] = [];
  let expandedIndex: number | null = null;

  function handleAccordionClick(index: number) {
    // If already expanded, do nothing
    if (expandedIndex === index) return;
    expandedIndex = index;

    setTimeout(() => {
      const offset = questionRefs[index].getBoundingClientRect().top + window.scrollY - 30; // subtract 20 for padding
      window.scrollTo({ top: offset, behavior: "smooth" });
    }, 200);
  }

  const questions = [
    {
      question: "Puis-je venir seul.e? Puis-je venir accompagné.e?",
      answer: "Comme tu le souhaites ! Tu peux venir seul.e ou avec toute une Team ! Généralement les personnes viennent seules, parfois en duo."
    },
    {
      question: "Qui participe ?",
      answer: "La moyenne d’âge est entre 25 et 45 ans. Proportionnellement, il y a un peu plus de femmes/personnes non binaires que d’hommes."
    },
    {
      question: "Pourquoi il faut passer par la Tendresse Consentie avant d'accéder à d’autres Ateliers?",
      answer: "Car c’est ma manière de me sécuriser. J’ai besoin de te rencontrer, de voir si tu respectes le cadre dans cet Atelier avant de te voir sur d’autres. C’est aussi important que tu puisses rencontrer mon cadre, ma manière de faciliter et de voir si cela te convient. De plus, les outils et la théorie de l’Atelier Tendresse Consentie sont des piliers pour tous les autres Ateliers."
    },
    {
      question: "Que se passe-t-il si je suis mal à l’aise lors de l’Atelier ?",
      answer: "Tu es libre de te retirer, de partir ou de simplement observer, sans te justifier. Rien n’est obligatoire, il n’y a aucune attente, aucune pression. D’ailleurs, si tu te retires, il y a toujours une personne en soutien émotionnel présente. Qui me permet d’avoir toujours un nombre pair de participant.es même si quelqu’un se retire d’une proposition. En gros ; tu n'empêchera personne de jouer si tu te retires."
    },
    {
        question: "Où les événements ont-ils lieu?",
        answer: "Les Ateliers peuvent avoir lieux dans des lieux publics (Yourte en scène, Ferme Lou Cachet’, La Kour…) ou dans des habitations privées. L’adresse exacte est diffusée seulement aux personnes inscrites pour ne pas avoir de personnes arrivant sur place le jour J sans être inscrites."
    },
    {
        question: "Est-ce que je peux accueillir un Atelier chez moi/à mon travail/dans ma coloc/avant une soirée festive ?",
        answer: "Si tu as la place pour un groupe d’une dizaine de personnes, sans vis à vis, sans trop de bruit et de la place pour se garer : Avec Plaisir ! Contacte-moi pour en discuter."
    },
    {
        question: "Pourquoi ces prix ?",
        answer: "Je construis les tarifs de mes Ateliers pour qu’ils soient accessibles et pour que je sois rémunérée justement pour pouvoir poursuivre le projet. Il y a trois tarifs selon tes moyens financiers pour les 3h d'ateliers : Tarif standard : 25€ (C’est le tarif qui équilibre mes frais et mon temps), Tarif solidaire : 15€ (Pour les personnes pour qui 25 € c’est trop), Tarif soutien : 35€ (Si tu es à l’aise, que tu veux soutenir mon travail et permettre à d’autres de venir)."
    },
    {
        question: "Qui peut participer?",
        answer: "Les personnes curieuses d’explorer ! Quel que soit ton genre, ton âge, tes particularités, ta morphologie, ton ethnicité, ton niveau d’éducation, tes revenus… En cas de besoin spécifique, envoie moi un message et je ferais en sorte de t'accueillir au mieux selon mes ressources ! J’ai encore des progrès à faire pour pouvoir comprendre le créole mais j’ai à coeur de faire tout mon possible pour que tu te sentes bien dans le groupe si tu parles uniquement créole."
    },
    {
        question: "Est-ce que le repas est inclus ?",
        answer: "Non mais je vous invite à apporter de quoi grignoter et partager avant le début de l'événement et pendant les pauses. Au maximum sans emballages excessifs."
    },
    {
        question: "Puis-je apporter de l’alcool/des substances?",
        answer: "Non. Les substances qui modifient l’état de conscience rendent difficile de donner/recevoir un consentement éclairé."
    },
    {
        question: "Les Ateliers sont-ils 100% safe?",
        answer: "Aucun événement n’est 100% safe, mais le cadre que je pose est là pour essayer d’atteindre ceci au maximum. Néanmoins, ton implication à t'écouter et ne pas dépasser tes limites est nécessaire. Je pose une règle de responsabilité collective en demandant à chaque participant.e de rester attentif/ve à ce que le cadre soit respecté et à le signaler si un manquement est observé."
    },
    {
        question: "Que se passe-t-il si quelqu’un ne respecte pas le cadre ?",
        answer: "Le non-respect d’une des règles de consentement ou de n’importe quelle règle du cadre amènera à discussion et à reposer le cadre. Si la personne n'entend pas, ne respecte pas le cadre de nouveau posé, une exclusion immédiate est possible. Toute personne n’ayant pas respecté le cadre n'accèdera pas aux Ateliers de Niveau 2. Je reste disponible après les Ateliers pour que vous puissiez me faire remonter s’il y a eu des non respect du cadre."
    },
    {
        question: "Les Ateliers sont-ils adaptés à des personnes ayant un vécu traumatiques ?",
        answer: "Je tiens à ce que les Ateliers soient des lieux sûrs et respectueux pour toutes et tous. Si tu as vécu des expériences difficiles et que tu te sens préoccupé par ta participation, n’hésites pas à me contacter pour en discuter en privée avant l’atelier. Tu seras accompagné."
    },
    {
        question: "Comment je m’habille?",
        answer: "Comme tu veux pour te sentir bien et pouvoir t'asseoir au sol confortablement !"
    },
    {
        question: "Comment s’inscrire?",
        answer: `Via BilletWeb, en répondant à quelques questions. Ce sera une pré-inscription. Je validerais ensuite ton inscription. Lorsque j'aurais validé ton inscription, il te sera demandé de payer par mail. Tu as 5 jours pour payer avant que la place ne soit donnée à quelqu'un.e d'autre.Ton inscription sera effective après le paiement`
    }
  ];
</script>
  
  {#snippet entry(question: string, answer: string, index: number)}
    <div id={String(index)} bind:this={questionRefs[index]} on:click={() => handleAccordionClick(index)}>
      <AccordionItem
        borderClass=""
        borderOpenClass="border-s border-e rounded-b-md"
        borderBottomClass='border-b'
        borderSharedClass=''
        defaultClass="flex items-center justify-between w-full font-medium text-left text-inerit "
      >
        {#snippet header()}<h3>{question}</h3>{/snippet}

        {#snippet arrowup()}
          <ChevronUpOutline class="-me-0.5 h-6 w-6" />
        {/snippet}

        {#snippet arrowdown()}
          <ChevronDownOutline class="-me-0.5 h-6 w-6" />
        {/snippet}

        <p>{@html answer}</p>

      </AccordionItem>
    </div>
  {/snippet}

<main>
  <section>
    <Accordion
      activeClass="dark:bg-gray-800 focus:ring-2 focus:ring-gray-200 focus:rounded dark:focus:ring-gray-800"
      defaultClass="text-inerite"
      inactiveClass="">
        {#each questions as {question, answer}, index}
            {@render entry(question, answer, index)}
        {/each}
    </Accordion>
  </section>
  <section id="contact">
    <p class="p-5">
      Pour toute autre question tu peux me contacter ici en utilisant les liens çi-dessous :
    </p>
  </section>
  <Socials />
</main>

<style>
  h3 {
      margin: 0 0 0.5rem;
      font-size: 1.3rem;
  }
</style>