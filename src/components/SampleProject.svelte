<script>
    export let tab
import { dataset_dev } from 'svelte/internal'
    import { fly, slide } from 'svelte/transition'
</script>

<div class="cont" in:fly="{{delay: 300, duration: 300}}" out:slide="{{duration: 300}}">
    <h1>{tab.name}</h1>
    <img src={tab.url} alt="">
    <p>{tab.description}</p>

    

</div>

<style>
    .cont {
        user-select: none;
        width: 85%;
        margin-inline: auto;
        border: 1px dotted; 
        border-color: var(--col);
        margin-bottom: 1em;
        padding:1em;
        border-radius: 5px;
    }
</style>