'use strict'

let hoverBox = document.querySelectorAll('.gradient-common')
let hoverAbove = document.querySelectorAll('.hover-above')
let allImages = document.querySelectorAll('.image-common')
let boxTitle = document.querySelectorAll('.box-title')
console.log(hoverBox);

hoverBox.forEach((hover, i) => {
    hover.addEventListener('mouseenter', () => {
        hoverAbove[i].classList.add('animate-box')
        hoverAbove[i].classList.remove('animate-box-out')
        allImages[i].classList.add('blur-photo')
        boxTitle[i].classList.add('box-title-hide')
    })
    
    hover.addEventListener('mouseleave', () => {
        hoverAbove[i].classList.remove('animate-box')
        hoverAbove[i].classList.add('animate-box-out')
        allImages[i].classList.remove('blur-photo')
        boxTitle[i].classList.remove('box-title-hide')

    })
})

const firstClass = (index) => {
    hoverAbove[index].classList.add('animate-box'),
    hoverAbove[index].classList.remove('animate-box-out'),
    allImages[index].classList.add('blur-photo'),
    boxTitle[index].classList.add('box-title-hide')
}

const secondClass = (index) => {
    hoverAbove[index].classList.add('animate-box'),
    hoverAbove[index].classList.remove('animate-box-out'),
    allImages[index].classList.add('blur-photo'),
    boxTitle[index].classList.add('box-title-hide')
}


window.onscroll = () => {
        let top = window.scrollY;
        console.log(top, window.innerHeight);
        
        if(window.innerWidth > 720) return

        if(top > 0 && top < 120){
            firstClass(0)
        }else{
           secondClass(0)
        }

        if(top > 120 && top < 240){
            firstClass(1)
        }else{
            secondClass(1)
        }

        if(top > 240 && top < 360){
            firstClass(2)
        }else{
           secondClass(2)
        }
        
        if ((window.innerHeight + Math.round(top)) >= document.body.offsetHeight){
            firstClass(3)
        }else{
            secondClass(3)
        }

    }

