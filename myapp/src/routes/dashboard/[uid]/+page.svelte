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
        <Uploads uid={data.uid} />
    </div>
{/if}