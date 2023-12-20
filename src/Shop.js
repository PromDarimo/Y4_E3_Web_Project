// let toggle=document.getElementsByClassName('ul-1')

let cate_toggle=()=>{
    var myElement = document.querySelector('.ul-1');
    let spanRo= document.getElementById('rotate')
    myElement.classList.toggle('active');
    spanRo.classList.toggle('active')
}
const iconshow=()=>{
let aSub=document.querySelector('.sub-icon')
let aSub1=document.querySelector('.sub-icon-1')
aSub.classList.add('active')
aSub1.classList.add('active')
}
const iconhide=()=>{
    let aSub=document.querySelector('.sub-icon')
    let aSub1=document.querySelector('.sub-icon-1')
    aSub.classList.remove('active')
    aSub1.classList.remove('active')
    }