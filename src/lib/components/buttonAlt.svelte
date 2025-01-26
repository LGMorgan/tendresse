<script>
  import PlayOutline from 'flowbite-svelte-icons/PlayOutline.svelte';
  let { onClick = (e) => e.preventDefault(), text = "button text", value } = $props();
</script>

<div id="container">
  <div id="content">
    <button value={value} onclick={(e)=> {
      e.preventDefault()
      console.log("clol")
    }}>
      {text}
    </button>
    <PlayOutline color="#f75bff" />
  </div>

</div>

<style>
  #container {
    display: flex;
    justify-content: center;
    margin: 20px 0px;
    background-color: #d510ab;
  }
  #content {
    display: flex;
    align-items: center;

    border-radius: 5px;
    color: #f75bff;
    font-size: 1em;
    cursor: pointer;
    box-shadow: 0px 4px 2px 0px #dd00ae;
    transition: 100ms;
    padding-right: 5px;
  }
  #content:active{
    box-shadow: 0px 2px 2px 0px #dd00ae;
    transform: translateY(2px);
  }
  button {
    flex-grow: 0;
    font: "bakhari";
    padding: 10px 5px 10px 10px;
    color: #dd00ae;
  }
</style>