
document.getElementById('update-button').addEventListener("click", function showdata(){
    const getName= document.getElementById('name-input').value;
    const getBio = document.getElementById('bio-input').value ;
    const getImage = document.getElementById('pic-input').value ;

    document.getElementById('profile-name').innerText = "Name: " + getName;
    document.getElementById('profile-bio').innerText = "Bio: " + getBio;

    let url = document.getElementById('profile-pic');
    url.setAttribute("src",getImage);
    
    
}
);

