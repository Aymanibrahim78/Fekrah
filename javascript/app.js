//start active menu
const menu = document.querySelector(".menu");
const LinkBackgroundMenu = document.querySelector(".LinkMenu");
menu.addEventListener("click", (eo) => {
  LinkBackgroundMenu.classList.toggle("ActiveBackgroundMenu");
});
// end active menu

//start pragrah About
const pragragh = document.querySelector(".contentPragrgh");
const bullets = document.querySelectorAll(".bullets span");
const textPragragh = [
  `<pre class="pragragh">حلول تسويقية متكاملة
لضمان نجاح أعمالك</pre>`,
  `<pre class="pragragh">افضل تصميم المواقع
لضمان نجاح أعمالك</pre>`,
  `<pre class="pragragh">خبرة اكتر من عشر سنين
فى المجال </pre>`,
];

pragragh.innerHTML = textPragragh[0];

bullets.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    pragragh.innerHTML = textPragragh[index];
    item.parentElement.getElementsByClassName("activeBullets")[0].classList.remove("activeBullets");
    item.classList.add("activeBullets");
  });
});
//End pragrah About

//  start upToPage
let iconUp = document.getElementById('upToPage');

// counter Number

const numbers = document.querySelectorAll(".boxNumber h3")
const numberSec = document.querySelector(".number")
let started = false;

// animauin imgAbout
const about = document.querySelector(".about")
const imgAbout = document.querySelector(".imgAbout")
// animauin Number
const imgNumber = document.querySelector(".imgNumber")
// animauin Portfolio
const Portfolio = document.querySelector(".Portfolio")
// animauin works
const works = document.querySelector(".works")
// animauin textAbout
const textAbout = document.querySelector(".textAbout")
// animauin Services
const Services = document.querySelector(".Services")


window.onscroll = ()=>{
// animauin Services
if(scrollY >= Services.offsetTop -1000){
  Services.classList.add("activeAnimtionSection")
}
// animauin textAbout
if(scrollY >= textAbout.offsetTop -1000){
  textAbout.classList.add("activeAnimtionSection")
}
// animauin works
if(scrollY >= works.offsetTop -1000){
  works.classList.add("activeAnimtionSection")
}
// animauin Portfolio
  if(scrollY >= Portfolio.offsetTop -1000){
    Portfolio.classList.add("activeAnimtionSection")
  }
// animauin Number Img
  if(scrollY >= imgNumber.offsetTop -1000){
    imgNumber.classList.add("activeAnimtionImgNumber")
  }
// animauin imgAbout
  if(scrollY >= about.offsetTop -1000){
    imgAbout.classList.add("activeAnimtionImgAbout")
  }

//  start upToPage

    if(scrollY >= 350){
        iconUp.style.display='block'
    }
    else{
          iconUp.style.display='none'
    }

// counter Number
    if(window.scrollY >= numberSec.offsetTop -600 ){

      if(!started){
        numbers.forEach(item => {
            let goal = item.dataset.goal;
          let count =setInterval(() => {
            item.innerText++
            if(item.textContent == goal){
              clearInterval(count)
            }
          }, 2000/goal);
        });
      }
      started = true
    }
}
iconUp.addEventListener("click",(eo) => {

  scroll({
    top:0 ,top: 0,
    behavior :"smooth"
  })
})
//  End upToPage