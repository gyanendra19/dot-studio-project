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
    hoverAbove[index].classList.remove('animate-box'),
    hoverAbove[index].classList.add('animate-box-out'),
    allImages[index].classList.remove('blur-photo'),
    boxTitle[index].classList.remove('box-title-hide')
}


window.onscroll = () => {
        let top = window.scrollY;
         if(window.innerWidth > 720) return;

        if(top > 0 && top < 120){
            firstClass(0)
        }
        else if(this.oldScroll > this.scrollY){
           secondClass(1)
        }

        if(top > 120 && top < 240){
            secondClass(0)
            firstClass(1)
        }
        else if(this.oldScroll > this.scrollY){
            secondClass(2)
         }

        if(top > 240 && top < 360){
            secondClass(1)
            firstClass(2)
            }
            else if(this.oldScroll > this.scrollY){
                secondClass(3)
             }
        
        if((window.innerHeight + Math.round(top)) >= document.body.offsetHeight){
            secondClass(2)
            firstClass(3)
        }
        this.oldScroll = this.scrollY
    }

