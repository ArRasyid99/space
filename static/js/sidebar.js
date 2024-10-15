const nav = document.querySelector(".nav-container");

if (nav) {
  const toggle = nav.querySelector(".nav-toggle");
  
  if (toggle) {
    toggle.addEventListener("click", () => {
      if (nav.classList.contains("is-active")) {
        nav.classList.remove("is-active"),document.getElementById("content").style.marginLeft = "0%";
        
      }
      else {
        nav.classList.add("is-active"),document.getElementById("content").style.marginLeft = "20%";
      }
    });
    
    nav.addEventListener("blur", () => {
      nav.classList.remove("is-active");
    });
  }
}