<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';
  import Socials from "$lib/components/socials.svelte";
  import NavBar from "$lib/components/navBar.svelte";
  import HeaderTitle from "$lib/components/headerTitle.svelte";
	import '../app.css';

	let { data, children } = $props();

	$effect(() => {
		if (data?.analyticsId) {
			webVitals({
				path: $page.url.pathname,
				params: $page.params,
				analyticsId: data.analyticsId
			});
		}
	});
</script>

<HeaderTitle/>
<NavBar />

{@render children()}

<Socials />

<div>
  <enhanced:img class="footer-img" src="/src/lib/img/bottom-img.png" alt="Atelier Tendresse Consentie" />
</div>

<style>
  div {
    overflow: hidden;
  }
  @media only screen and (min-width: 480px) {

  }

  @media only screen and (min-width: 768px) {

  }
  @media only screen and (min-width: 900px) {

  }
  @media only screen and (min-width: 1280px) {
    div {
      margin-top: -150px;
    }
    .footer-img {
      transform:translateY(120px)
    }
  }
</style>