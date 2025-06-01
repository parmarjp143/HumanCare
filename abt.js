// Get the dropdown button and menu
const dropdownBtn = document.querySelector('.menu-btn');
const dropdownMenu = document.querySelector('.menu-content');

// Add an event listener to the dropdown button
dropdownBtn.addEventListener('click', () => {
  // Toggle the display of the dropdown menu
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// ---------------------------

let mnubtn = document.querySelector('#manu-bar');
let nvbar = document.querySelector('.nav-bar')

mnubtn.onclick = ()=>{
nvbar.classList.toggle("active");
}

// --------------------------------

let navigationbar = document.querySelector('.navigation-bar');

window.onscroll = ()=>{
  if(document.documentElement.scrollTop > 100){
    navigationbar.classList.add("nav-scrolled");
    nvbar.style.top = "5.3rem"
  }else{
    navigationbar.classList.remove("nav-scrolled");
  }
}

// change img with click to show the medical treatment and services in over hospital

let mainbox = document.querySelector('.chnage-img');
let btn1 = document.querySelector('#show-img-one');
let btn2 = document.querySelector('#show-img-two');
let btn3 = document.querySelector('#show-img-three');
let btn4 = document.querySelector('#show-img-four');
let changeheading = document.querySelector('.heading');

btn1.addEventListener('click',()=>{
  mainbox.src = "abt-imges/pediatrics_1000x500.jpg"
  changeheading.innerHTML = "Routine Medical Care"
})
btn2.addEventListener('click',()=>{
  mainbox.src = "abt-imges/hematology_1000x500.jpg"
  changeheading.innerHTML = "Full Blood Picture"
})
btn3.addEventListener('click',()=>{
  mainbox.src = "abt-imges/mri_1000x500.jpg"
  changeheading.innerHTML = "MRI Diagnostic"
})
btn4.addEventListener('click',()=>{
  mainbox.src = "abt-imges/x-ray_1000x500.jpg"
  changeheading.innerHTML = "X-Ray Diagnostic"
})


