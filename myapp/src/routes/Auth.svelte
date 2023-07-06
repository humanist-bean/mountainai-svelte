<script>
    // Made this component with help from fireship's Firebase and Sveltekit repo
    // source: https://github.com/codediodeio/sveltefire/blob/master/src/lib/User.svelte
    import {app} from '$lib/js/firebase.js';
    import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

    const provider = new GoogleAuthProvider();

    // initialize the auth object
    const auth = getAuth(app);
    let user = undefined;

    async function signInWrapper(auth, provider){
        await signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            //const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
  });
    }

    /*
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
    }); */

</script>

<div>
    {#if (user !== undefined)}
        <slot user={user} />
        YOYOYOYOYo
    {:else}
        <slot name="signedOut" />
        <button on:click={() => signInWrapper(auth, provider)} class="mtn-auth-btn" id="upload">
            Sign In
        </button>
    {/if}
</div>

<style>
    div {
        align-content: center;
        text-align: center;
    }

    .mtn-auth-btn{
        background-color: lightgrey;
        font-family: sans-serif;
        border-radius: 0.7rem;
        cursor: pointer;
        display: flex;
        color: black;
        text-align: center;
        padding: 0.66rem;
        margin: 0.66rem;
        text-decoration: none;
    }

    .mtn-auth-btn:hover{
        background-color: darkgreen;
    }
</style>