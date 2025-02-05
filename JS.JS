/*===== MENU SHOW Y HIDDEN =====*/ 
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close')

/*SHOW*/ 
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

/*HIDDEN*/
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

function validate(){
  const name = document.getElementById("nameforc").value;
  const email = document.getElementById("emailforc").value;
  const message = document.getElementById("textforc").value;
  let submitOk = true;
  if(name == "" || name == null){
    alert("Please enter your name");
    submitOk =  false;
  }
  if(email === "" || email === null){
    alert("Please enter your email");
    submitOk = false;
  }
  
  if(!email.includes("@") || !email.includes("gmail.com")){
    alert("Please enter a valid email");
    submitOk = false;
  }
  if(message === "" || message === null){
    alert("Please enter a message");
    submitOk = false;
  }
  return submitOk;

}