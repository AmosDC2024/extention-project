const toggleSwitch = document.querySelector(".js-toggle-switch");
const ctaActive = document.querySelector(".js-cta-active");
const checkbox = document.querySelectorAll(".js-checkbox");  
const modeToggle = document.querySelector(".mode-toggle") 
const extention = document.querySelector(".extention")  
const card = document.querySelectorAll(".card")  
const head = document.querySelectorAll("h2") 
const ctaRemove = document.querySelectorAll(".cta-remove")  
console.log(ctaRemove);


ctaActive.addEventListener("click",()=>{
  checkbox.forEach((item)=>{
    item.checked = !item.checked
  })
}); 

function mode(){
  const lightMode = "/assets/images/icon-moon.svg"; 
  modeToggle.src = lightMode;
  document.body.style.backgroundImage = "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)";
  extention.style.backgroundColor = "hsl(217, 61%, 90%)";   


  // head.style.backgroundColor = "hsl(226, 25%, 17%)";
  card.forEach((item)=>{ 
    item.style.backgroundColor ="hsl(0, 0%, 93%)"
  }) 

  head.forEach((item)=>{
    item.classList.add("light-mode")
  }); 

  
  ctaRemove.forEach((item)=>{
    item.classList.add("cta-light-mode")
  });

  // head.classList.add("light-mode");
} ;
 
modeToggle.addEventListener("click", mode);


