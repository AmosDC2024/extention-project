const toggleSwitch = document.querySelectorAll(".toggle-switch");
const ctaActive = document.querySelector(".js-cta-active"); 
const ctaAll = document.querySelector(".cta-all");
const checkbox = document.querySelectorAll(".js-checkbox");  
const modeToggle = document.querySelector(".mode-toggle") 
const extention = document.querySelector(".extention")  
const card = document.querySelectorAll(".card")  
const head = document.querySelectorAll("h2") 
const ctaRemove = document.querySelectorAll(".cta-remove")   
const ctaSlider = document.querySelectorAll(".slider")   
const extentionList = document.querySelector("h1"); 
const ctaInactive = document.querySelector(".cta-inactive")

// ctaAll.addEventListener("click",()=>{
//   checkbox.forEach((item, index)=>{ 
//    item.checked = !item.checked} 
//   ) 
// });   


// checkbox.forEach((cb, index) => {
//   cb.addEventListener("change", () => {
//     if (cb.checked) {
//       console.log(`Extension ${index} is now ACTIVE`);
//     } else {
//       console.log(`Extension ${index} is now INACTIVE`);
//     }
//   });
// }); 

 let light = false;
 
function lightMode(){ 
   if(light){ 
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

    }
    else{ 
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
          item.classList.remove("cta-dark-mode");
          item.classList.add("cta-light-mode");
        });

      extentionList.style.color = "hsl(226, 25%, 17%)"; 

  }  

   light = !light
  };
 
modeToggle.addEventListener("click", lightMode);  

function filterSelection(item){ 
  checkbox.forEach(cb =>{ 
    const holder = cb.closest(".card"); 
    if(item === "all") { 
     holder.style.display = "block";
    }
    else if(item === "active" && cb.checked){ 
     holder.style.display = "block";
    }
    else if(item === "inactive" && !cb.checked){
     holder.style.display ="block"
    } 
    else { 
     holder.style.display = "none"
    }
  })
}

ctaAll.addEventListener("click", () => filterSelection("all"));
ctaActive.addEventListener("click", () => filterSelection("active"));
ctaInactive.addEventListener("click", () => filterSelection("inactive"));
