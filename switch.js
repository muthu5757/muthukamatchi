const styleST = document.querySelector(".style-switcher-toggle");
styleST.addEventListener("click",() => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

const astyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    astyle.forEach((style) => {
      if(color === style.getAttribute("title"))
      {
        style.removeAttribute("disabled");
      }
      else
      {
        style.setAttribute("disabled", "true");
      }
    })
}

const dn = document.querySelector(".day-night");
dn.addEventListener("click",() => {
    dn.querySelector("i").classList.toggle("fa-sun");
    dn.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dn.querySelector("i").classList.add("fa-sun");
    }
    else{
        dn.querySelector("i").classList.add("fa-moon");
    }
})