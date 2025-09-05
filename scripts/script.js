const toggleSwitch = document.querySelector(".js-toggle-switch");
const ctaActive = document.querySelector(".js-cta-active");
const checkbox = document.querySelectorAll(".js-checkbox");  
const modeToggle = document.querySelector(".mode-toggle") 
const extention = document.querySelector(".extention")  
const card = document.querySelectorAll(".card")  
const head = document.querySelectorAll("h2") 
const ctaRemove = document.querySelectorAll(".cta-remove")   
const extentionList = document.querySelector("h1");

ctaActive.addEventListener("click",()=>{
  checkbox.forEach((item)=>{
    item.checked = !item.checked
  })
});  

 let light = true; 

function lightMode(){ 
  if (!light){ 
    const lightMode = "/assets/images/icon-moon.svg";   
    modeToggle.src = lightMode;
    document.body.style.backgroundImage = "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)";
    extention.style.backgroundColor = "hsl(217, 61%, 90%)";   

    card.forEach((item)=>{ 
      item.style.backgroundColor ="hsl(200, 60%, 99%)"
    }) 

      head.forEach((item) => {
        item.classList.remove("dark-mode"); 
         item.classList.add("light-mode");    
      });

      ctaRemove.forEach((item) => {
        item.classList.remove("cta-dark-mode", light);
        item.classList.toggle("cta-light-mode", !light);
      });

    extentionList.style.color = "hsl(226, 25%, 17%)"; 

    light = true
  } else{ 
      const darkMode = "/assets/images/icon-sun.svg";
      modeToggle.src = darkMode;
      document.body.style.backgroundImage = "linear-gradient(180deg, #040918 0%, #091540 100%)";
      extention.style.backgroundColor = "hsl(226, 25%, 17%)";   

      card.forEach((item)=>{ 
        item.style.backgroundColor ="hsl(226, 25%, 17%)"
      }) 

      head.forEach((item) => {
        item.classList.remove("light-mode");
        item.classList.add("dark-mode");
      });

      ctaRemove.forEach((item) => {
        item.classList.remove("cta-light-mode");
        item.classList.add("cta-dark-mode");
      });


      extentionList.style.color = "hsl(200, 60%, 99%)";

      light = false;
    } ;
  };
 
 
modeToggle.addEventListener("click", lightMode); 


