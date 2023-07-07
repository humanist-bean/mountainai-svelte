<script>
    // Made this component with help from fireship's Firebase and Sveltekit repo
    // source: https://github.com/codediodeio/sveltefire/blob/master/src/lib/User.svelte
    import {auth} from '$lib/js/firebase.js';
    import {onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    import {user_store} from '$lib/js/user.js';
    import {show_header, hide_header} from '$lib/js/header.js';

    


    //let user = undefined;
    //$:{user_store.set(user);} //should update user_store whenever user changes

    // Use the wrapper function so we can call signInWithPopup when button clicked instead
    // of automatically on page load
    async function signInWrapper(auth){
        // initialize the auth object
        
        const provider = new GoogleAuthProvider();
        // console.log(`IN Auth.svelte auth.currentUser = ${auth.currentUser}`);

        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // Set the user_store with the signed-in user info.
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(`IN Auth.svelte auth.currentUser = ${auth.currentUser}`);
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

    async function clickedDashboard(){
        console.log('Clicked View Dashboard Button');
        show_header();
    }

    
    onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        user_store.set(user);
        // ...
    } else {
        // User is signed out
        // ...
        user_store.set(false);
    }
    }); 

</script>

<div data-sveltekit-preload-data="off">
    {#if ($user_store !== false)}
        <a href="/dashboard/{$user_store.uid}" >
            <button on:click={() => clickedDashboard()} class="mtn-auth-btn" id="upload">
                Dashboard
            </button>
        </a>
    {:else}
        <button on:click={() => signInWrapper()} class="mtn-auth-btn" id="upload">
            Sign In
        </button>
    {/if}
</div>

<style>
    div {
        align-content: center;
        text-align: center;
        justify-content: center;
        align-items: center;
        display: flex;
    }

    div > a {
        text-decoration: none;
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
        outline: 0.2rem solid black;
    }

    .mtn-auth-btn:hover{
        background-color: darkgreen;
    }
</style>