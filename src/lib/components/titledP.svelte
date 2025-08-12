<script>
  let { title = "title", children} = $props()
</script>

<div class="mb-0 px-4 m-auto lg:w-4/5">
  <h3>{title}</h3>
  <p class="mx-3">{@render children()}</p>
  <br/>
</div>