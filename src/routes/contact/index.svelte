<script>
    function onSubmit(e) {
        let fData = new FormData(e.target)

        const data = {}

        for(let field of fData) {
            const [key, value] = field 
            data[key] = value
        }
        console.log(data)
    }
</script>
<h1>Contact Form</h1>
<form on:submit|preventDefault={onSubmit}>
    <p>Your name</p>
    <input type="text" name="name" placeholder="Your name">
    <p>Your message</p>
    <textarea name="message" id="" rows="10"></textarea>
    <br>
    <button type="submit" >Submit</button>
</form>

<style> 
    h1 {
        text-align: center;
    }
    form {
        width: 85%;
        margin-inline: auto;
        border-radius: 5px;
        border: 1px solid black;;
    }
    form > * {
        margin-left: 10%;
    }
    textarea {
        resize: none;
        width: 80%;
        
    }
    button {
        display: block;
        margin-top: 2em;
        margin-bottom: 2em;
        margin-inline: auto;
        background-color: deepskyblue;
        width: 25%;
        height: 3em;
    }

</style>