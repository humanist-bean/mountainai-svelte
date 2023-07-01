<script>
let mountains = ['Mt. Rainier', 'Mt. Thielsen', 'Diamond Peak', 'Mt. Hood', 'Mt. Jefferson']
import { fade } from 'svelte/transition';
</script>

<!-- Outer div is list container, inner divs are for each list element-->
<div transition:fade class="list-flex-container">
    {#each mountains as mountain}
        <div>
            <h3>{mountain}</h3>
            <img src="src/lib/images/{mountain}.jpg" alt="">
        </div>
    {/each}
</div>

<style>
    .list-flex-container {
        display: flex;
        background-color: black;
        background: rgba(1, 0, 0, .15);
        min-width: 40rem;
        width: fit-content;
        height: fit-content;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .list-flex-container > div {
        background-color: #f1f1f1;
        margin: 10px;
        padding: 5px;
        font-size: 2rem;
        display: flex;
        min-width: inherit;
        width: fit-content;
        height: fit-content;
        text-align: center;
        resize: none;
        flex-direction: row;
        justify-content: space-between;
    }

    .list-flex-container > div > h3 {
        font-size: 1.5rem;
    }

    .list-flex-container > div > img {
        height: 5rem;
        width: auto;
    }

</style>