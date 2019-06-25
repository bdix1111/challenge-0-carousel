 function carrousel() {

   let image = document.querySelector('.image') //grabs div that holds image
   let counter = 0

//set interval for changing background image of the grabbed div, increment image number up until the photos have filtered through then restarts from first photo
   setInterval(() => {
     image.style.backgroundImage = `url(./images/hero-image-${counter}.jpg)`
     counter ++

     if (counter >= 3) {
       counter = 0
     }
   }, 2000)
 }

 carrousel()
