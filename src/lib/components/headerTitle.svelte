<script>
  import { page } from "$app/state"
  let activeUrl = $derived(page.url.pathname);

</script> 

<header>
  <a href="/">
    <h1 class="header1" id="top">
      {activeUrl == "/tendresse" ? "TENDRESSE" : activeUrl == "/playfight" ? "PLAYFIGHT" : activeUrl == "/adoration" ? "TENDRE" : activeUrl == "/projet" ? "PROJET" : "TENDRESSE"}
    </h1>
    <h1 class="header1" id="middle">
      {activeUrl == "/tendresse" ? "TENDRESSE" : activeUrl == "/playfight" ? "PLAYFIGHT" : activeUrl == "/adoration" ? "ADORATION" : activeUrl == "/projet" ? "PROJET" : "TENDRESSE"}
    </h1>
    <h1 class="header1" id="bottom">
      {activeUrl == "/tendresse" ? "Consentie" : activeUrl == "/playfight" ? "Playfight" : activeUrl == "/adoration" ? "Adoration" : activeUrl == "/projet" ? "Projet" : "Tendresse"}
    </h1>
  </a>
</header>

<style>
  h1 {
    line-height: 50px;
    position: relative;
  }
  header {
    display: block;
    margin-top: 60px;
  }
  #top {
    font-family: "big-shoulders";
    font-size: 4.5em;
    font-weight: 900;
    transform: rotateZ(4deg) translateY(-5px);
    z-index: 2;
  }
  #middle {
    font-family: "noot";
    font-size: 3em;
    color: #dd00ae;
    transform: rotateZ(-2deg)  translateY(-10px);
    z-index: 1;
  }
  #bottom {
    font-family: "bukhari";
    font-size: 3.6em;
    color: #f6f3e4;
    transform: rotateZ(-10deg) translateY(-40px);
    z-index: 3;
    margin: 0px;
    padding: 0px;
  }
  
  @media only screen and (min-width: 480px) {
    #top {
      font-size: 6em;
      transform: rotateZ(4deg) translateY(-5px);
    }
    #middle {
      font-size: 3.6em;
      transform: rotateZ(-2deg)  translateY(-0px);
    }
    #bottom {
      font-size: 4.4em;
      transform: rotateZ(-10deg) translateY(-20px);
    }
  }

  @media only screen and (min-width: 768px) {
    
  }
  @media only screen and (min-width: 1024px) {
  
  }
  @media only screen and (min-width: 1280px) {

  }
</style>