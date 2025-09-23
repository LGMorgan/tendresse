<script>
  let { title = "title", children} = $props()
</script>

<div class="mb-0 px-4 m-auto">
  <h3>{title}</h3>
  <p class="mx-3">{@render children()}</p>
  <br/>
</div>