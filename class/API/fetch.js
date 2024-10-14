fetch("https://official-joke-api.appspot.com/random_joke")
.then(response => response.json())
.then(data => {
    const jokepara = document.getElementById('joke');
    jokepara.innerText = `${data.setup}- ${data.punchline}`;
})
.catch(error)
{
    console.error(error);
}