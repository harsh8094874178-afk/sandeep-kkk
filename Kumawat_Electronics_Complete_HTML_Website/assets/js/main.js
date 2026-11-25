
document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".main-nav");
 if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});}
 const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
 const form=document.getElementById("enquiry-form");
 if(form){form.addEventListener("submit",e=>{e.preventDefault();if(!form.reportValidity())return;
  const data=new FormData(form);const msg=[
   "Hello Kumawat Electronics, I would like to enquire about a service.",
   "Name: "+data.get("name"),"Phone: "+data.get("phone"),"Service: "+data.get("service"),
   "Area in Jaipur: "+(data.get("area")||"Not specified"),"Message: "+(data.get("message")||"Not specified")
  ].join("\\n");
  window.open("https://wa.me/916377195926?text="+encodeURIComponent(msg),"_blank","noopener");
 });}
});
