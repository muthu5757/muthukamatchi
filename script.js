var typed= new Typed(".typing", {
    strings:["","Web Developer","Programmer"],
    typeSpeed:150,
    BackSpeed:120,
    loop:true
})

const nav =document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
{
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function()
    {
        for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function showSection(element){
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}


function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
    }
}




document.querySelector(".hire-me").addEventListener("click", function()
{
    showSection(this);
    updateNav(this);
})
document.querySelector(".qq").addEventListener("click", function()
{
    showSection(this);
    updateNav(this);
})
const navTogBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogBtn.addEventListener("click", () =>{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}

function display()
{
    var x = document.getElementById("log");
    if(x.style.display=="none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}

document.getElementById("pp").onclick = function() {displaypost()};
function displaypost()
{
    var x = document.getElementById("ap");
    if(x.style.display=="none"){
        x.style.display="block";
    }
    else{
        x.style.display="none";
    }
}

function dd()
{
    alert("Your Request has Submitted. I Contact You Soon");
}