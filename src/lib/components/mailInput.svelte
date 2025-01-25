<script>
  import ButtonAlt from "$lib/components/buttonAlt.svelte";
</script>

<section id="newsletter">
  <h3 class="header3">Newsletter</h3>
  <form method="POST">
    <input name="email" type="email" aria-label="email" placeholder="Renseignes ton courriel içi">
    <ButtonAlt text="Valider" />
  </form>
</section>

<style>
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
  }
  input {
    flex: 1;
    border: none;
    border-bottom: 2px solid #f75bff;
    border-radius: 5px;
    margin: 10px;
    text-align: center;
    font: "noot";
    cursor: pointer;
    outline: inherit;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
      -webkit-text-fill-color: #f75bff;
      background-color: white;
  }
  input[type="email"]
  {
      font-family: "big-shoulders";
      font-size: 1.5em;
      color: #f75bff;
  }
  ::placeholder {
    color: #f75bff;
    opacity: 0.6; /* Firefox */
  }
</style>