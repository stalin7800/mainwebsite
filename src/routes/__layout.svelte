
<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte"

    import { theme } from '../lib/themes'


    import '../global.css'
    </script>
    
    <Header />
    <br>
    <slot></slot>

    <Footer />

    {#if ($theme == 'light')}
    <style>
        :root {
            --col: black;
            --bgc: white;
        }
        
    </style>
    {:else }
    <style>
        :root {
            --col: white;
            --bgc: black;
        }

    </style>

    {/if}