<script>
  import Button from "$lib/components/button.svelte";
</script>


<iframe 
  title="newsletter"

  height="680"
  src="https://eeb30f34.sibforms.com/serve/MUIFAPlO-YTpdI5k9PMuD4-mwP2YmRSppCytCFSro-uVuHkI8TsDUz6sq_eOQxequMktSwns9045oxEPxoFAdTewVU6wswzJQM5Pi650NeUvsFdT0BLmNYAg3OgpBVhEK8K0m44wD1ckxv2vul6nV-IVAGm_sbaYPrIUaPiyF0MaHEmGuffxVs_mztcrCMoBfl37w3Hj3-6Abvws"
  frameborder="0"
  scrolling="auto"
  allowfullscreen
  style="display: block;margin-left: auto;margin-right: auto;max-width: 100%; width: 100%;"></iframe>

<section id="newsletter">
  <h2>Newsletter</h2>
  <p class="text-center">Inscris-toi à la newsletter pour être informé·e des prochains ateliers.</p>
  <br/>
  <form method="POST">
    <input name="email" type="email" aria-label="email" placeholder="Ton mail">
    <Button class="w-1/2 m-auto bg-[var(--color-blue)] text-xl" type="submit">Valider</Button>
  </form>
</section>

<style>
  section {
    padding: 2em 1em;
    background-color: var(--color-yellow);
    color: var(--color-violet);
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    max-width: 400px;
    margin: auto;
  }
  input {
    flex: 1;
    border: none;
    border-bottom: 2px solid var(--color-violet);
    border-radius: 5px;
    margin: 10px;
    text-align: center;
    font: "akzidenz";
    cursor: pointer;
    outline: inherit;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
      -webkit-text-fill-color: var(--color-violet);
      background-color: white;
  }
  input[type="email"]
  {
      font-family: "big-shoulders";
      font-size: 1.5em;
      color: var(--color-violet);
  }
  ::placeholder {
    color: var(--color-violet);
    opacity: 0.6; /* Firefox */
  }

    @font-face {
    font-display: block;
    font-family: Roboto;
    src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 600;
    src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 700;
    src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
  }

  #sib-container input:-ms-input-placeholder {
    text-align: left;
    font-family: Helvetica, sans-serif;
    color: #c0ccda;
  }

  #sib-container input::placeholder {
    text-align: left;
    font-family: Helvetica, sans-serif;
    color: #c0ccda;
  }

  #sib-container textarea::placeholder {
    text-align: left;
    font-family: Helvetica, sans-serif;
    color: #c0ccda;
  }

  #sib-container a {
    text-decoration: underline;
    color: #2BB2FC;
  }
</style>