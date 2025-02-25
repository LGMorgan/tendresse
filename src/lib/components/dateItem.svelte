<script>
  import { fly, slide } from 'svelte/transition';
  const { date = new Date(), isFull = false, link } = $props();

  const dayOptions = { weekday: 'long' };
  const dateOptions = { day: 'numeric' };
  const monthOptions = { month: 'long'};

  const day = date.toLocaleDateString("fr-FR", dayOptions)
  const numberedDate = date.toLocaleDateString("fr-FR", dateOptions)
  
  const month = date.toLocaleDateString("fr-FR", monthOptions)
  console.log({link})
</script>

<div id="outer">
  <a href={link} target="_blank">
  <div id="line-div">
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <h1 class="header1">{day}</h1>
  <h2 class="header2">{numberedDate}</h2>
  <h3 class="header3">{month}</h3>
  {#if isFull}
    <span in:fly={{ y: 20 }} out:fly={{ y: -20 }}>Complet</span>
  {/if}
  </a>
</div>

<style>
  #outer {
    border: 8px solid #F79F79;
    border-radius: 35px;
    width: 130px;
    height: 130px;
    background-color: #f79f7966;
    box-shadow: 0px 3px 5px  #9f674f, inset 0px 1px 5px  #9f674f;
    margin: 25px 10px;
    cursor: pointer;
  }
  #outer:active {
    box-shadow: 0px 1px 5px  #9f674f, inset 0px -1px 5px  #9f674f;
    transform: translateY(2px);
  }
  #line-div {
    display: flex;
    justify-content: center;
    gap: 48px;
    transform: translateY(-20px);
  }
  .line {
    border: 3px solid #F79F79;
    border-radius: 5px;
    height: 30px;
    width: 3px;
    background-color: #F79F79;
    box-shadow: 0px 5px 5px #9f674f;
  }
  h1, h2, h3 {
    margin: 0px;
    padding: 0px;
    line-height: 20px;
  }
  h1 {
    text-shadow: #FC0 1px 0 10px;
    transform: translateY(-8px);
    font-size: 2em;
  }
  h2 {
    transform: translateY(7px);
    font-family: "noot";
  }
  h3 {
    transform: translateY(10px);
    font-size: 1.2em;
    font-family: "bukhari";
  }
  span {
    display: block;
    position: relative;
    z-index: 100;
    transform: translateX(30px) rotateZ(-20deg) translateY(0px);
    text-align: center;
    font-family: "noot";
    font-size: 1.8em;
    text-shadow: red 1px 0 1px;
    color: red;
  }

  @media only screen and (min-width: 480px) {

  }

  @media only screen and (min-width: 768px) {
    
  }
  @media only screen and (min-width: 1024px) {
  
  }
  @media only screen and (min-width: 1280px) {

  }
</style>