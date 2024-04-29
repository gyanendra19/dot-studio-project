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

const firstClass = () => {
    return  hoverAbove[0].classList.add('animate-box')
    hoverAbove[0].classList.remove('animate-box-out')
    allImages[0].classList.add('blur-photo')
    boxTitle[0].classList.add('box-title-hide')
}

const secondClass = () => {
    return  hoverAbove[0].classList.add('animate-box')
    hoverAbove[0].classList.remove('animate-box-out')
    allImages[0].classList.add('blur-photo')
    boxTitle[0].classList.add('box-title-hide')
}

window.onscroll = () => {
        let top = window.scrollY;
        
        if(window.innerWidth > 720) return
        if(top > 0 && top < 120){
            hoverAbove[0].classList.add('animate-box')
            hoverAbove[0].classList.remove('animate-box-out')
            allImages[0].classList.add('blur-photo')
            boxTitle[0].classList.add('box-title-hide')
        }else{
            hoverAbove[0].classList.remove('animate-box')
            hoverAbove[0].classList.add('animate-box-out')
            allImages[0].classList.remove('blur-photo')
            boxTitle[0].classList.remove('box-title-hide')
        }

        if(top > 120 && top < 240){
            hoverAbove[1].classList.add('animate-box')
            hoverAbove[1].classList.remove('animate-box-out')
            allImages[1].classList.add('blur-photo')
            boxTitle[1].classList.add('box-title-hide')
        }else{
            hoverAbove[1].classList.remove('animate-box')
            hoverAbove[1].classList.add('animate-box-out')
            allImages[1].classList.remove('blur-photo')
            boxTitle[1].classList.remove('box-title-hide')
        }
        if(top > 240 && top < 360){
            hoverAbove[2].classList.add('animate-box')
            hoverAbove[2].classList.remove('animate-box-out')
            allImages[2].classList.add('blur-photo')
            boxTitle[2].classList.add('box-title-hide')
        }else{
            hoverAbove[2].classList.remove('animate-box')
            hoverAbove[2].classList.add('animate-box-out')
            allImages[2].classList.remove('blur-photo')
            boxTitle[2].classList.remove('box-title-hide')
        }
        if(top > 360){
            hoverAbove[3].classList.add('animate-box')
            hoverAbove[3].classList.remove('animate-box-out')
            allImages[3].classList.add('blur-photo')
            boxTitle[3].classList.add('box-title-hide')
        }else{
            hoverAbove[3].classList.remove('animate-box')
            hoverAbove[3].classList.add('animate-box-out')
            allImages[3].classList.remove('blur-photo')
            boxTitle[3].classList.remove('box-title-hide')
        }

    }

