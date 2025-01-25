<script>
  import { SignIn, SignOut } from "@auth/sveltekit/components"
</script>

<div>
  <SignIn provider="Google" signInPage="signin" />

  <SignOut signOutPage="signout" />
</div> 