document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".burger-list"),t=e.querySelector(".burger span"),n=document.querySelector(".header-sm-popup"),c=n.querySelectorAll("a");e.addEventListener("click",(function(){window.innerWidth<=768&&(t.classList.toggle("active"),n.classList.toggle("popup-active"))})),c.forEach((function(e){e.addEventListener("click",(function(){window.innerWidth<=768&&(n.classList.remove("popup-active"),t.classList.remove("active"))}))}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".products figure").forEach((e=>{e.addEventListener("mouseenter",(function(){this.querySelector(".card-btn:hover")||this.classList.add("show-circle")})),e.addEventListener("mouseleave",(function(){this.classList.remove("show-circle")}));const t=e.querySelector(".card-btn");t&&(t.addEventListener("mouseenter",(function(){e.classList.remove("show-circle")})),t.addEventListener("mouseleave",(function(){e.classList.add("show-circle")})))}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("nav-list").querySelectorAll("a[data-section]"),t=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const n=t.target.id;e.forEach((e=>{e.getAttribute("data-section")===n?e.parentElement.classList.add("active"):e.parentElement.classList.remove("active")}))}}))}),{threshold:.5});["search","categories","aboutus","form"].forEach((e=>{const n=document.getElementById(e);n&&t.observe(n)}))}));