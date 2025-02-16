<script>
  const { testimony, signature } = $props()
</script>

<div class="flex flex-col align-middle justify-center text-justify  p-4 rounded-lg">
  <span>"</span>
    <p class="p">{testimony.S}</p>
    <span>"</span>
  <p class="p">{signature.S}</p>
</div>

<style>

  span {
    position: relative;
    height: 20px;
    z-index: 10000;
    color: #fff469;
    font-size: 2.5em;
    font-family: "noot";
    margin: 0px 8px;
  }
  span:first-child {
    transform: rotateZ(-17deg) translateY(20px);
    align-self: flex-start;
    top: -30px;
    left: -15px;

  }
  span:nth-child(3) {
    transform: rotateZ(17deg)  translateY(0px);
    align-self: flex-end;
    top: -10px;
  }
  p {
    text-align: center;
    font-family: "bukhari";
  }
  p:nth-child(4) {
    margin-right: 20px;
    font-size: 1.5em;
    font-family: "noot";
    align-self: flex-end;
    text-align: right;
  }

  @media only screen and (min-width: 480px) {
    div {
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    div {
      max-width: 800px;
    }
  }
  @media only screen and (min-width: 1024px) {

  }
  @media only screen and (min-width: 1280px) {

  }
</style>