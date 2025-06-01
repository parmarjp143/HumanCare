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

// ============
let sbtn = document.querySelector('.request-apointment-btn')
let pname = document.getElementById('nme');

sbtn.addEventListener('click',()=>{
  if(pname.value == ''){
    console.log('done')
  }else
   {
    pname.value == ''
    alert("Your Apointment Was Granted...");
    setTimeout(() => {
      location.reload()
    },500);
   }
})


