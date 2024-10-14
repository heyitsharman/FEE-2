fetch("https://swapi.dev/api/people/1")
.then(response => response.json())
.then(data =>{
    const Name = document.getElementsByClassName('name')[0];
    const Gender = document.getElementsByClassName('gender')[0];
    const Height = document.getElementsByClassName('height')[0];
    Name.innerText = `Name: ${data.name}`;
    Gender.innerText = `Gender: ${data.gender}`;
    Height.innerText = `Height: ${data.height}`;

})
// .catch(error)
// {
//     console.error(error);
// }