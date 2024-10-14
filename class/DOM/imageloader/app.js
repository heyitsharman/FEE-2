
function changeImage(){
   const image = document.getElementById('img');

   if(image.src.includes('image.jpg')){
    image.setAttribute('src','image2.jpeg');
   }
   else{
    image.setAttribute('src','image.jpg');

   }
   
}

setInterval(changeImage,2000);


