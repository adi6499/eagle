  let contain = document.querySelector('.contain')
       
        for(let i=0;i < 1000;i++){
            contain.innerHTML+=`<div class="star"></div>`
            let star = document.querySelectorAll(".star")
            star[i].style.left=`${Math.random() * window.innerWidth}px`
            star[i].style.top=`${Math.random() * window.innerHeight}px`
            let size = Math.random() * 5 + "px"
            star[i].style.width=`${size}`
            star[i].style.height=`${size}`
            star[i].style.animationDelay=`${Math.random() * 10}s`
        }
        
