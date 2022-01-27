let head = document.querySelector(".head")
let title = document.querySelector(".title")
let infoEagle = document.querySelector(".infoEagle")
let card = document.querySelector(".card")
let eagle = document.getElementById("eagle")
let show = document.getElementById("show")
let mountain = document.getElementById("mountain")
let i = 0.5;




window.addEventListener("scroll", () => {
    let top = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = Math.floor(top / height * 100);
    eagle.style.transform = `translateY(-${i * scrolled}%)`
    mountain.style.transform = `translateY(-${i * scrolled}%)`
    head.style.transform = `translateY(${i * scrolled}%)`
    if ((i * scrolled) >= 45) {
        head.style.opacity = 0
        title.classList.add("titleOpacity")

    } else {
        head.style.opacity = 10
        title.classList.remove("titleOpacity")
    }
})


//this is for show eagle info section and  
//show is add event listener to target the eagle info to increase height


show.addEventListener("click", (e) => {
    if (e.target.textContent == "Show👇More") {
        show.innerHTML = "Show👆Less"
        infoEagle.classList.add("showInfoEagle")
        card.classList.add("showInfoEagle")
        show.style.background = "royalblue"
    } else if (e.target.textContent == "Show👆Less") {
        show.innerHTML = "Show👇More"
        infoEagle.classList.remove("showInfoEagle")
        card.classList.remove("showInfoEagle")
        show.style.background = "black"
    }

})
