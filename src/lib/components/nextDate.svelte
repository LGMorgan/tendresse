<script>
  let { dates } = $props();
  let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const next = dates?.find(date => date.isFull.BOOL == false)
</script>

{#if !!next}
  <div>
    <span>(</span>
      <button>
        Prochaine date le
        <br/>
        <strong>{new Date(next.date.S).toLocaleDateString("fr-FR", dateOptions)}</strong>
      </button>
    <span>)</span>
  </div>
{:else}
<div>
  <span>(</span>
    <a href="#newsletter">Rejoins la newsletter pour être informé•e de la prochaine date</a>
  <span>)</span>
</div>
{/if}

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    width: 100%;
  }
  span {
    color: #fff469;
    font-size: 2.5em;
    font-family: "noot";
    margin: 0px 8px;
  }
  span:first-child {
    transform: rotateZ(7deg) translateY(3px);
  }
  span:last-child {
    transform: rotateZ(7deg)  translateY(8px);
  }
  a, button {
    font-family: "Bukhari";
    color: #dd00ae;
    transform: rotateZ(-1deg);
    text-align: center;
  }
  strong {
    text-decoration: underline;
  }
</style>