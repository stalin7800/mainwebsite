<script>
    import Resume from "../../components/Resume.svelte";
    let opentab
</script>
<main>
    <h1>About Me</h1>
    <p>I am currently a sophomore at Worcester Polytechnic Institute double majoring in Computer Science and Data Science, and minoring in Statistics. 
        My hobbies include chess, video games, and general programming projects (such as this website). Please feel free to reach out if you have any questions, or would just like to talk.
    </p>
    <div class="buttonshower">
        <button on:click={() => {
            if(opentab != 'resume')
                opentab='resume'
            else opentab=''
        }}>Resume</button>
        <button on:click={() => {
            opentab = 'linkedin'
        }}>LinkedIn</button>
        <button on:click={() => {
            opentab = 'email'
        }}>Email</button>
    </div>
</main>
<div class="menu">
    
    {#if (opentab=='email')}
    
        <input type="text" disabled value="dansardak@gmail.com">
    
    {:else if (opentab == 'lichess')}
    
        <input type="text" disabled value="linkedinlink">
    
    {:else if (opentab== 'resume')}

        <Resume />

    {/if}
</div>
<style>
    main {
        border:1px solid var(--col);
        border-radius: 10px;
        padding: 1em;
        margin-top: 5em;
    } 
    .buttonshower {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .buttonshower > button {
        border-color: var(--col);
        padding: 1em;
        background-color: green;
        border-radius: 5px;
        cursor: pointer;
    }

    .menu {
        margin-inline: auto;
        margin-top: 1em;
    }

    .menu > input {
        text-align: center;
        display: block;
    }
    
</style>