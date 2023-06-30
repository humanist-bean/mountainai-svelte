<script>
    // Source: CSS and HTML for gradient lettering by Adam Argyle
    // https://codepen.io/argyleink/pen/OJMEpGp
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    function clickedHomeBtn(){
        dispatch('clicked-home-btn');
    }

    export let logo_size = 3;
</script>

<article>
    <h1 on:click={clickedHomeBtn} style='--logo_size:{logo_size};'>
        Mountain AI
    </h1>
</article>

<style>

    article {
        background: linear-gradient(
            to right, 
            hsl(07 100% 62%), 
            hsl(182 100% 59%)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
    }

    h1 {
        font-size: calc(var(--logo_size) * 1vmin);
        line-height: 1.1;
    }

    body {
        background: hsl(204 100% 5%);
        
        min-block-size: 100%;
        min-inline-size: 100%;
        box-sizing: border-box;
        display: grid;
        place-content: center;
        font-family: system-ui;
        font-size: min(200%, 5vmin);
    }

    h1, p, body {
        margin: 0;
    }

    p {
        font-family: "Dank Mono", ui-monospace, monospace;
    }
</style>