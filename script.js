let contain = document.querySelector('.contain')
       
for(let i=0;i < 400;i++){
    contain.innerHTML+=`<div class="star"></div>`
    let star = document.querySelectorAll(".star")
    star[i].style.left=`${Math.random() * window.innerWidth}px`
    star[i].style.top=`${Math.random() * window.innerHeight}px`
    let size = Math.random() * 5 + "px"
    star[i].style.width=`${size}`
    star[i].style.height=`${size}`
    star[i].style.animationDelay=`${Math.random() * 10}s`
}
let songs = document.getElementById("songs")
let playSound = document.getElementById("clickSound")
playSound.addEventListener("click",(e)=>{
    if(e.target.innerHTML=="Play"){
        e.target.innerHTML="Off"
        songs.play()
    }else if(e.target.innerHTML=="Off"){
        e.target.innerHTML="Play"
        songs.pause()
    }
   
})


