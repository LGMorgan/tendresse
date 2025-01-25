

<main>

  <section id="introduction">
    <h2 class="header2">Évènements autour de l'exploration de la tendresse, du jeu et du consentement à la Réunion</h2>


  </section>
  
  <section id="ateliers">
    <h3 class="header3">Les ateliers</h3>
    <p class="p">Les ateliers ouvrent un espace de connexion, de partage et de jeu.</p>
    <p class="p">Une exploration du rapport au corps, au moyen d’outils de consentement, de tendresse et de joie.</p>
  
    <div id="atelier-grid">
      <div class="flex-item wrks-img">
   

      </div>
  
      <div class="flex-item wrks-img">
    

      </div>
  
      <div class="flex-item wrks-img">
    

      </div>
    </div>
  </section>

  <section id="projet-section">
    <h3 class="header3">Le projet</h3>
    <p class="p projet">
      Tendresse c'est une étape vers mon utopie : Vivre dans un monde où les relations sont authentiques, bienveillantes, inclusives et tendres.
    </p>
    <a href="/projet" aria-label="Boutton pour la page projet">

    </a>
  </section>
  

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
  #ateliers {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    padding: 0px 20px;
  }
  #atelier-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: 20px 0px;
    width: 100%;
  }
  .flex-item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 0px;
    min-width: 100%;
  }
  .wrks-img {
    width: 80vw;
    max-width: 300px;
    margin: auto;
  }
 
  .header2 {
    margin: auto;
  }
  .header3 {
    margin-bottom: 15px;
    padding: 0px;
  }
  .projet {
    text-align: left;
    margin-bottom: 30px;
  }

  @media only screen and (min-width: 480px) {
    .flex-item {
      max-width: 400px;
    }
  }

  @media only screen and (min-width: 768px) {
    #atelier-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .flex-item {
      max-width: 300px;
    }
  }
  @media only screen and (min-width: 1280px) {
    .header3 {
      margin: 50px 20px 10px 20px;
    }
    #atelier-grid {
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
    }
  }
</style>