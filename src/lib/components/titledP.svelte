<script>
  let { title = "title", children} = $props()
</script>

<div class="mb-0 px-4 m-auto lg:w-4/5">
  <h3 class="header3 !text-left !text-[1.5em]">{title}</h3>
  <p class="p !text-left">{@render children()}</p>
  <br/>
</div>