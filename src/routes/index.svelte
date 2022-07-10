<script context="module">

    import Interest from '../components/Interest.svelte';
    import { theme } from '../lib/themes'
    import { info } from '../lib/datascienceprojects'

    let project = {
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Minecraft_cover.png/220px-Minecraft_cover.png",
        name: "Minecraft",
        description: "WEclome to something"
    }
   
</script>


<Interest cat={info[0]} />