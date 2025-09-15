<script>
    import { page } from '$app/state';
	import { webVitals } from '$lib/vitals';
    
    import "../app.css";
    import { fade } from 'svelte/transition';

    let { data, children } = $props();
    let activeUrl = $derived(page.url.pathname);

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

{#key activeUrl}
    <div in:fade={{ duration: 200, delay: 300 }} out:fade={{ duration: 200 }}>
        {@render children()}
    </div>
{/key}
