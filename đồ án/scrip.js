const adressbtn = document.querySelector('#click')
const adressclose = document.querySelector('#close')

adressbtn.addEventListener ("click", function(){
    document.querySelector('.menucon').style.display ="flex"
})
adressclose.addEventListener ("click", function(){
    document.querySelector('.menucon').style.display = "none"
})
// ---------------slider-----------
const iconright = document.querySelector('.fa-chevron-right')
const iconleft = document.querySelector('.fa-chevron-left')
const imgNuber = document.querySelectorAll('.slidertrai2 img')
console.log(imgNuber.length)
let index = 0
iconright.addEventListener ("click", function(){
    index = index+1
    if(index>imgNuber.length-1){
        index=0
    }
    document.querySelector('.slidertrai2').style.right = index *100+"%"
})
iconleft.addEventListener ("click", function(){
    index = index-1
    if(index<=0){
        index=imgNuber.length-1
    }
    document.querySelector('.slidertrai2').style.right =index *100+"%"
})