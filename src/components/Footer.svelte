<script>
import Slider from "./Slider.svelte";

import { theme } from "../lib/themes";
    
</script>

<footer>
    <p>Test Thing</p>
    <Slider />
</footer>

<style>
    footer {
        text-align: center;
        border-radius: 5px;
        /* position: absolute; */
        width: 90%;
        padding: 1em;
        margin-top: 1em;
        margin-left: 2.5%;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        border:1px solid var(--col);
        background-color: var(--bgc);
    }

  
</style>

{#if ($theme=='light') }
    <style>
        footer {
            background-color: white !important;
            border-color: black !important;
            color: black !important;
        }
    </style>
{:else} 
    <style>
        footer {
            background-color: black !important;
            border-color: white !important;
            color: white !important;
        }
    </style>
{/if}