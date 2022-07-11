<script>
import { theme } from "../lib/themes";


    
</script>
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>

<style>
    a {
        /* color: black; */
        text-decoration: none;
    }
    a:visited {
        color: var(--col);
    }
    ul {
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        color: var(--col);
        
    }
    nav {
        user-select: none;
        background-color: var(--bgc);
        border:1px solid var(--col);
        border-radius: 5px;
        width: 95%;
        margin-left:2.5%;
        max-width: 100vw;
        position: fixed;
        top: 0;
    }
</style>
