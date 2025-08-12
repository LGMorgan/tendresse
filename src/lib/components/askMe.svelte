<script>
    let { showTitle = true } = $props();
</script>

<section>
    {#if showTitle}
        <h3>Si tu as la moindre question n'hésite pas à m'écrire !</h3>
    {/if}
    <div class="flex justify-center items-center gap-10 mx-5">
        <a class="flex gap-2" href="https://www.instagram.com/les_ateliers_tendresse/" target="_blank" aria-label="Instagram link">
            <enhanced:img class="ml-1" src="/src/lib/img/instagram.svg" alt="instagram icon from flaticon.com" width="22px"/> Insta
        </a>
        <a class="flex gap-2" href="https://www.facebook.com/profile.php?id=61561837275486" target="_blank" aria-label="Facebook link">
            <svg viewBox="0 -10 46 46" fill="#2567f6" height="28" width="28">
                <path d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"></path>
                <path fill="#fff" d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"></path>
            </svg> Facebook
        </a>
        <a href="mailto:les.ateliers.tendresse@gmail.com">
            💌 les.ateliers.tendresse@gmail.com
        </a>
    </div> 
</section>

<style>
    a {
        font-size: 1.3em;
    }
</style>