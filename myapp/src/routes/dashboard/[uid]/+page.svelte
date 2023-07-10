<script>
    import { fade } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';
    import Uploads from './Uploads.svelte';

    let intro_transition_ready = false;
    onMount(() => {intro_transition_ready= true;});

    export let data;
</script>
{#if intro_transition_ready}
    <div transition:fade>
        Inner Dashboard
        The Current User's UID is: {data.uid};

        CAN NOW CHECK USER'S ID BEFORE ALLOWING TO DO STUFF IN THE CLOUD LIKE UPLOAD IMAGES!!!
        SO NOW I SHOULD BE GOOD TO START WORKING ON DATABASE STUFF
        IT FEELS WEIRD THAT I'M DOING ALL MY AUTH ON THE FRONTEND BESIDES PASSING THE uid
        in params BUT APPARENTLY THAT'S HOW FIREBASE IS SUPPOSED TO WORK!
        <Uploads uid={data.uid} />
    </div>
{/if}