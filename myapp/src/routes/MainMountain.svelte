<script>

</script>

<div class="flex-container">
    <div>
        <img class="top-mountain-image" src="/src/lib/images/north-cascades-img.webp" alt="Girl in a jacket"> 
    </div>
    <div>
        <p>
            Mount Rainier, also known as Tahoma, is a large active stratovolcano in the Cascade Range of the Pacific Northwest in the United States. The mountain is located in Mount Rainier National Park about 59 miles south-southeast of Seattle.
        </p>
    </div> 
</div>
  

<style>
    .flex-container {
        display: flex;
        background-color: black;
        background: rgba(1, 0, 0, .15);
        width: fit-content;
        height: fit-content;
    }

    .flex-container > div {
        background-color: #f1f1f1;
        margin: 10px;
        padding: 20px;
        size: 25rem;
        font-size: 3rem;
        min-width: auto;
        min-height: 25rem;
        width: fit-content;
        height: fit-content;
        text-align: center;
        resize: none;
    }

    .flex-container > div > p {
        font-size: 12px;
        overflow: scroll;
        flex: 1;
        
    }

    .top-mountain-image{
        height: 22rem;
        width: auto;
    }
</style>