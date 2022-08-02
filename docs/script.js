window.addEventListener('scroll',fixNavBar,true)
var nav = document.getElementById('nav')
var nav_link = document.querySelectorAll('.anc')
var services = document.getElementById('services')
var btn = document.querySelector('.menu')
var list = document.querySelector('#list-menu')




function fixNavBar(){
  
    if(scrollY > 23){
nav.style = `position: fixed; background-color:white; top:0px; color:black; transition:all; 
transition-duration:.5s; tranistion-timing-function:ease-in;`
nav_link.forEach(element => {
    element.style ='color:black';
});


if(scrollY == 3251){
    console.log('angel want to talk rubbish havhavah')
    nav.style = `position: fixed; background-color:""; top:0px; color:white; transition:all; 
    transition-duration:.5s; tranistion-timing-function:ease-in;`;
    nav_link.forEach(element => {
        element.style ='color:white';
});
    }
}

    else{


        nav.style = "";
        nav_link.forEach(element => {
            element.style ='';
    });
 
  console.log(scrollY)
}
}




//array of images
var actimg = document.querySelector('[data-image]')
var text = document.querySelector('[data-text]')
var textsArray =[]
var secondcat = document.querySelector('.secondcat');
var imagesIndex = 0;
var images = []
images[0] = "./assets/images/17 Awesome And Inexpensive Laptop Cases That Are Actually Worth Your Money.jfif";
images[1] ="./assets/images/Laptop on rent in Bangalore for a reasonable price.jfif"
images[2]="./assets/images/Dell Laptop.jfif"
images[3]="./assets/images/contact_bg.jpg"
images[4]="./assets/images/The best gaming laptops you can buy for $1,000 or less.png"
images[5]="./assets/images/Jordan Air Jordan 1 High OG Unc Patent Leather - Farfetch.jfif"
images[6]="./assets/images/Nike Jordan 1 Grey - Air Jordan, HD Png Download(780x557) - PngFind.jfif"
images[7] = "./assets/images/Image about orange in ᴮᴸᴬᴺᴷˢ by ⠀⠀⠀⠀⠀⠀⠀⠀⠀ on We Heart It.jfif"
images[8]="./assets/images/Women's Air Jordan I 'Twist' Release Date.jfif"
//text content
var textIndex =0
textsArray[0] =`<h3>Laptops</h3><ul><li> London Used </li><li> Brand New Laptops
</li><li>Dell Laptops</li> <li> Hp Laptops</li> <li> Mac books</li>
`

textsArray[1] =`<h3>Shoes</h3><ul><li> Gucci Brands </li><li> Fendi Brand
</li><li>Nike brand</li> <li> Jordans </li> <li>Air force one </li>
`
var timetimer = 0;

 
function changeImg(){
  if(timetimer == 0 || timetimer == 5){
      changeText()
  }


 actimg.src = images[imagesIndex]
    if(imagesIndex < images.length){
    imagesIndex += 1;
     timetimer +=1
}

   
if(imagesIndex == images.length){
    imagesIndex = 0;
    timetimer = 0;
}
    setTimeout(changeImg,2000)
 

}

function changeText(){
    text.innerHTML = textsArray[textIndex]
    if(textIndex < textsArray.length){
    textIndex += 1
    }
    if(textIndex == textsArray.length){
        textIndex = 0;
    }
        
}

function toggleNav(){
   if(list.getAttribute('data-visible') ===  'false'){
       list.setAttribute('data-visible',true)
   }
   else{
    list.setAttribute('data-visible',false)
   }
}

btn.addEventListener('click',toggleNav,true)

window.addEventListener('load',changeImg,true)


