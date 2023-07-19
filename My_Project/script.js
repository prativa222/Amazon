let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")


console.log(imgItem.length - 1)

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100  // 700

slideBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })

}

const dropdownbtn = document.querySelectorAll(".dropdownbtn")
const dropdownbox = document.querySelectorAll(".dropdownbox")



dropdownbtn.forEach((dropb,index)=>{
    dropb.addEventListener("mouseover",()=>{

        dropdownbox[index].classList.remove("active")
    })
    dropb.addEventListener("mouseout",()=>{

        dropdownbox[index].classList.add("active")
    })
})

//render automatic
function renderSlideAuto() {

    if (startSlider >= -endSlider + 100) {
        handleRightBtn()
    }
    else {
        startSlider = 0;
    }
}
setInterval(renderSlideAuto, 2000);




/***** sidebar navigation  */
const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id")
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close")


//  console.log(sidebarNavigationEl)

sidebarOpenNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})
sidebarCloseNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})

const leftbtn = document.querrySelector(".l-btn");
const rightbtn = document.querrySelector(".r-btn");

rightbtn.addEventListener("click",function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft += 1100;
    event.preventDefault();

})

leftbtn.addEventListener('click',function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft -= 1100;
    event.preventDefault();

})

const leftbtn1 = document.querrySelector(".btn-1b");
const rightbtn1 = document.querrySelector(".btn-1a");

rightbtn.addEventListener("click",function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft += 1100;
    event.preventDefault();

})

leftbtn.addEventListener('click',function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide-1');
    conent.scrollLeft -= 1100;
    event.preventDefault();

})






















