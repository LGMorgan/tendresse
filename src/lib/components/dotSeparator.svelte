<script>
  let { nb = 1, delay = 0 } = $props();
</script>

<div class="dot-separator">
  {#each Array(nb) as _, i}
    <div style={`animation-delay: ${delay}ms;`}></div>
  {/each}
</div>

<style>
  .dot-separator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 42px;
    margin: 30px auto 30px auto;

  }
  .dot-separator div {
    border: 8px solid #f75bff;
    border-radius: 8px;
    flex-shrink: 1;
    animation-name: blurFade;
    animation-duration: 0.5s;
    animation-fill-mode: backwards;
  }
</style>