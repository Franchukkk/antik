const products=[{id:1,name:"Вінтажний грамофон",description:"Рідкісний грамофон 1920-х років з бронзовим рупором та механізмом ручного заводу. Чудово збережений стан.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Electronics",price:100},{id:2,name:"Антикварний секретер",description:"Елегантний секретер XIX століття з червоного дерева, з потайними шухлядами та оригінальною фурнітурою.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Electronics",price:150,rating:1},{id:3,name:"Старовинний годинник",description:"Настінний годинник епохи модерн з ручним розписом та позолоченим маятником, виготовлений у Відні.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Clocks",price:200},{id:4,name:"Раритетний чайник",description:"Порцеляновий чайник кінця XIX століття з ручним розписом та золотим декором.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Clocks",price:250},{id:5,name:"Бронзовий канделябр",description:"Вишуканий п'ятисвічковий канделябр XVIII століття, прикрашений рельєфними орнаментами.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Clocks",price:300},{id:6,name:"Антикварне дзеркало",description:"Венеціанське дзеркало XIX століття в позолоченій рамі з ручним різьбленням.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Clocks",price:350},{id:7,name:"Порцеляновий сервіз",description:"Колекційний сервіз Мейсенської мануфактури на 12 персон з унікальним квітковим орнаментом.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Dishes",price:400},{id:8,name:"Старовинна ваза",description:"Китайська порцелянова ваза династії Цін з традиційним розписом та печаткою майстра.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Dishes",price:450,rating:1},{id:9,name:"Срібний столовий набір",description:"Розкішний столовий набір 1890-х років, виготовлений зі срібла 925 проби з гравіруванням.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Dishes",price:500},{id:10,name:"Антикварний самовар",description:"Мідний самовар 1880 року виробництва тульських майстрів з оригінальними клеймами.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Dishes",price:550},{id:11,name:"Старовинний глобус",description:"Настільний глобус 1920-х років на дерев'яній підставці з латунними елементами.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Models",price:600},{id:12,name:"Антикварна картина",description:"Олійний живопис XIX століття в оригінальній позолоченій рамі, пейзаж невідомого майстра.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Art",price:650},{id:13,name:"Старовинна скульптура",description:"Бронзова скульптура початку XX століття, підписана відомим французьким майстром.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Art",price:700},{id:14,name:"Вінтажний гобелен",description:"Ручної роботи гобелен кінця XIX століття з зображенням міфологічних сцен.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Art",price:750},{id:15,name:"Антикварна ікона",description:"Православна ікона XVIII століття, писана на дереві темперними фарбами.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Art",price:800},{id:16,name:"Раритетний телефон",description:"Настільний телефонний апарат початку XX століття з латуні та бакеліту.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Electronics",price:850},{id:17,name:"Антикварний компас",description:"Морський компас XIX століття в латунному корпусі з оригінальним футляром.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Other",price:900},{id:18,name:"Старовинна шкатулка",description:"Дерев'яна шкатулка XVIII століття з інкрустацією перламутром та потайним механізмом.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Other",price:950},{id:19,name:"Антикварний годинник-брегет",description:"Кишеньковий годинник 1850-х років з золотим корпусом та складним механізмом.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Other",price:1e3},{id:20,name:"Старовинний підсвічник",description:"Срібний підсвічник XVII століття з гербом аристократичної родини.",images:["img/product-card-image.jpeg","img/product-card-image2.jpeg","img/product-card-image3.jpeg","img/product-card-image4.jpeg"],category:"Other",price:1050}];
const promos=[{promo:"123456",discount:10},{promo:"654321",discount:20},{promo:"987654",discount:30}];
if(window.location.pathname.includes("product-card.html")){const e=JSON.parse(localStorage.getItem("selectedProduct"));if(e){document.querySelector(".product-card-info-img img").src=e.images[0];const t=document.querySelectorAll(".next-images-line img");e.images.forEach(((e,c)=>{t[c]&&(t[c].src=e)})),document.querySelector(".product-price").textContent=`${e.price} грн.`,document.querySelector("#heightJsBlockCard h2").textContent=e.name;const c=document.querySelectorAll("#heightJsBlockCard p");c.length>0&&(c[0].textContent=e.description);const n=document.querySelector(".card-btns .button");n.addEventListener("click",(function(){event.preventDefault()}));JSON.parse(localStorage.getItem("basketProducts")||"[]").includes(e.id)?(n.innerHTML="В кошику",n.classList.add("cart-open-btn")):(n.setAttribute("data-value",e.id),n.addEventListener("click",(function(){const e=Number(this.getAttribute("data-value"));addToBasket(e),n.innerHTML="У кошику",n.classList.add("cart-open-btn"),document.querySelector(".basket-popup-js").classList.toggle("basket-active")})));const a=document.querySelector("#productCardsSimilar");if(a){products.filter((t=>t.category===e.category&&t.id!==e.id)).forEach((e=>{const t=document.createElement("figure");t.className="col-6 col-md-4 col-lg-3",t.innerHTML=`\n            <figcaption>\n              <div class="figure-image">\n                <img src="${e.images[0]}" alt="">\n                <a class="figure-to-card-page" href="product-card.html" onclick="localStorage.setItem('selectedProduct', JSON.stringify(${JSON.stringify(e)}))"></a>\n              </div>\n              <div class="card-text-block d-flex justify-content-between w-100">\n                <a class="description-card" href="product-card.html" onclick="localStorage.setItem('selectedProduct', JSON.stringify(${JSON.stringify(e)}))">\n                  <p>${e.name}</p>\n                  <p class="price">${e.price} грн.</p>\n                </a>\n                <a class="card-btn al-center d-flex justify-content-center" data-value='${e.id}' href="#">\n                  <img src="${JSON.parse(localStorage.getItem("basketProducts")||"[]").includes(e.id)?"img/tick.svg":"img/cart.svg"}" alt="">\n                </a>\n              </div>\n            </figcaption>\n          `,a.appendChild(t)}))}}}
document.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("selectedCategory"),t=document.querySelector("#productsCategory");if(window.location.pathname.includes("category.html")&&t&&e){const o={Electronics:"Електроніка",Clocks:"Годинники",Dishes:"Посуд",Models:"Статуетки, моделі",Art:"Мистецтво",Other:"Інше"};document.querySelector(".categories-main h1").innerHTML=o[e];const n=products.filter((t=>t.category===e));console.log(t),n.forEach((e=>{const o=`\n        <figure class="col-6 col-md-4 col-lg-3">\n          <figcaption>\n            <div class="figure-image">\n              <img src="${e.images[0]}" alt="${e.name}">\n              <a href="product-card.html" class="figure-to-card-page" data-product-id="${e.id}"></a>\n            </div>\n            <div class="card-text-block d-flex justify-content-between w-100">\n              <a href="product-card.html" class="description-card" data-product-id="${e.id}">\n                <p>${e.name}</p>\n                <p class="price">${e.price} грн.</p>\n              </a>\n              <a href="#" data-value="${e.id}" class="${JSON.parse(localStorage.getItem("basketProducts")||"[]").includes(e.id)?"cart-open-btn":""} card-btn al-center d-flex justify-content-center">\n                <img src="${JSON.parse(localStorage.getItem("basketProducts")||"[]").includes(e.id)?"img/tick.svg":"img/cart.svg"}" alt="cart">\n              </a>\n            </div>\n          </figcaption>\n        </figure>\n      `;document.querySelectorAll(".cart-open-btn"),document.querySelector(".basket-popup-js");t.insertAdjacentHTML("beforeend",o)}))}})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector(".burger-list"),t=e.querySelector(".burger span"),o=document.querySelector(".header-sm-popup"),n=o.querySelectorAll("a");e.addEventListener("click",(function(){window.innerWidth<=768&&(t.classList.toggle("active"),o.classList.toggle("popup-active"))})),n.forEach((function(e){e.addEventListener("click",(function(){window.innerWidth<=768&&(o.classList.remove("popup-active"),t.classList.remove("active"))}))}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".products figure").forEach((e=>{e.addEventListener("mouseenter",(function(){this.querySelector(".card-btn:hover")||this.classList.add("show-circle")})),e.addEventListener("mouseleave",(function(){this.classList.remove("show-circle")}));const t=e.querySelector(".card-btn");t&&(t.addEventListener("mouseenter",(function(){e.classList.remove("show-circle")})),t.addEventListener("mouseleave",(function(){e.classList.add("show-circle")})))}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("nav-list").querySelectorAll("a[data-section]"),t=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const o=t.target.id;e.forEach((e=>{e.getAttribute("data-section")===o?e.parentElement.classList.add("active"):e.parentElement.classList.remove("active")}))}}))}),{threshold:.5});["search","categories","aboutus","form"].forEach((e=>{const o=document.getElementById(e);o&&t.observe(o)}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".cart-open-btn"),t=document.querySelector(".basket-popup-js");e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),t.classList.toggle("basket-active")}))}));const o=document.querySelectorAll(".checkout-btn"),n=document.querySelector(".check-out-popup-js");o.forEach((e=>{e.addEventListener("click",(()=>{event.preventDefault();0!==(JSON.parse(localStorage.getItem("basketProducts"))||[]).length&&(t.classList.toggle("basket-active"),n.classList.toggle("basket-active"))}))}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#heightJsBlockCard"),t=document.querySelector("#takeJsHeight");e&&(e.style.height=t.getBoundingClientRect().height+"px")})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".next-images-line"),t=document.querySelector(".product-card-info-img .bgwhite > img");e&&e.addEventListener("click",(e=>{if("IMG"===e.target.tagName){const o=e.target.getAttribute("src");t.setAttribute("src",o)}}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".check-out-open-ready-popup"),t=document.querySelector(".succsessful-order");e.addEventListener("click",(e=>{const o=document.getElementById("checkOutForm"),n=o.querySelectorAll('input:not([name="userPromo"])');let c=!0;if(n.forEach((e=>{e.value.trim()||(c=!1)})),c){e.preventDefault(),document.querySelector(".check-out-popup-js").classList.toggle("basket-active");const n={name:o.querySelector('input[name="userName"]').value,phone:o.querySelector("#phoneInput").value,promo:o.querySelector('input[type="text"][name="userPromo"]').value,deliveryType:o.querySelector('input[name="deliveryType"]:checked').nextElementSibling.textContent,city:o.querySelector('input[name="city"]').value,department:o.querySelector('input[name="department"]').value},c=(JSON.parse(localStorage.getItem("basketProducts"))||[]).map((e=>{const t=products.find((t=>t.id===e));return{name:t.name,price:t.price,photo:t.images[0]}}));let r=c.reduce(((e,t)=>e+t.price),0),a=r;if(n.promo){const e=promos.find((e=>e.promo===n.promo));e&&(a=r-r*e.discount/100)}const s=c.map((e=>`${e.name} - ${e.price} грн`)).join("\n"),d=c.map((e=>`${e.photo}`));console.log(d);const i=`\n    <b>Нове замовлення!</b>\n    <b>Ім'я:</b> ${n.name}\n    <b>Телефон:</b> ${n.phone}\n    <b>Промокод:</b> ${n.promo||"Не вказано"}\n    <b>Спосіб доставки:</b> ${n.deliveryType}\n    <b>Місто:</b> ${n.city}\n    <b>Відділення:</b> ${n.department}\n    \n\n\n    <b>Замовлені товари:</b>\n    \n    ${s}\n\n    <b>Загальна сума без знижки:</b> ${r} грн\n    <b>Загальна сума до сплати:</b> ${a} <i>грн ${n.promo?"(з урахуванням промокоду)":""}</i>\n    `,l="7936445587:AAHV5lZ4RV6fW2w5vE75qfMRg27VUtuDDo0",u="-1002442277202";fetch(`https://api.telegram.org/bot${l}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:u,text:i,parse_mode:"HTML"})}),setTimeout((function(){d.forEach((function(e){let t="https://raw.githubusercontent.com/Franchukkk/antik/refs/heads/master/docs/"+e;fetch(`https://api.telegram.org/bot${l}/sendPhoto`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:u,photo:t})}).then((e=>e.json())).catch((e=>{console.error("Помилка:",e)}))}))}),1e3),t.classList.toggle("d-none"),localStorage.clear()}}))}));const productsContainer=document.querySelector("#products"),basketContainer=document.querySelector("#productsInBasket"),totalPriceContainer=document.querySelector("#totalPrice"),checkoutBtn=document.querySelector("#checkoutBtn"),productsByCategory={};function updateProducts(){const e=[];Object.values(productsByCategory).flat().forEach((t=>{1===t.rating&&e.push(t)})),Object.values(productsByCategory).flat().forEach((t=>{1!==t.rating&&e.push(t)})),e.forEach((e=>{const t=`\n              <figure class="col-6 col-md-4 col-lg-3">\n                  <figcaption>\n                      <div class="figure-image">\n                          <img src="${e.images[0]}" alt="${e.name}">\n                          <a href="product-card.html" class="figure-to-card-page" data-product-id="${e.id}"></a>\n                      </div>\n                      <div class="card-text-block d-flex justify-content-between w-100">\n                          <a href="product-card.html" class="description-card" data-product-id="${e.id}">\n                              <p>${e.name}</p>\n                              <p class="price">${e.price} грн.</p>\n                          </a>\n                          <a href="#" data-value="${e.id}" class="${JSON.parse(localStorage.getItem("basketProducts")||"[]").includes(e.id)?"cart-open-btn":""} card-btn al-center d-flex justify-content-center">\n                              <img src="${JSON.parse(localStorage.getItem("basketProducts")||"[]").includes(e.id)?"img/tick.svg":"img/cart.svg"}" alt="cart">\n                          </a>\n                      </div>\n                  </figcaption>\n              </figure>\n          `;document.querySelectorAll(".cart-open-btn"),document.querySelector(".basket-popup-js");productsContainer&&productsContainer.insertAdjacentHTML("beforeend",t)}))}function addToBasket(e){let t=JSON.parse(localStorage.getItem("basketProducts"))||[];t.includes(e)||(t.push(e),localStorage.setItem("basketProducts",JSON.stringify(t))),updateBasket()}function removeFromBasket(e){let t=JSON.parse(localStorage.getItem("basketProducts"))||[];t=t.filter((t=>t!==e)),localStorage.setItem("basketProducts",JSON.stringify(t)),updateBasket()}function updateBasket(){let e=JSON.parse(localStorage.getItem("basketProducts"))||[];if(e=e.filter((e=>null!==e)),localStorage.setItem("basketProducts",JSON.stringify(e)),basketContainer.innerHTML="",0===e.length)return basketContainer.innerHTML="<h2>Кошик пустий</h2>",totalPriceContainer.textContent="Кошик пустий",void(checkoutBtn.disabled=!0);let t=0;e.forEach((e=>{const o=products.find((t=>t.id===e));if(o){t+=o.price;const e=`\n                    <div class="col-6 col-md-4 col-lg-3">\n                        <figure class="figure-basket">\n                            <figcaption>\n                                <div class="figure-image">\n                                    <img src="${o.images[0]}" alt="${o.name}">\n                                    <a href="product-card.html" class="figure-to-card-page" data-product-id="${o.id}"></a>\n                                </div>\n                                <div class="card-text-block d-flex justify-content-between w-100">\n                                    <a href="product-card.html" class="description-card" data-product-id="${o.id}">\n                                        <p>${o.name}</p>\n                                        <p class="price">${o.price} грн.</p>\n                                    </a>\n                                    <a href="#" onclick="removeFromBasket(${o.id})" class="card-btn al-center d-flex justify-content-center align-items-center">\n                                        <img src="img/cross.svg" alt="remove">\n                                    </a>\n                                </div>\n                            </figcaption>\n                        </figure>\n                    </div>\n                `;basketContainer.insertAdjacentHTML("beforeend",e)}})),totalPriceContainer.textContent=""+(0!=t?t+"грн.":"Кошик пустий"),document.querySelector("#allPriceWithPromo").textContent=""+(0!=t?t+"грн.":"Кошик пустий"),checkoutBtn.disabled=!1}products.forEach((e=>{productsByCategory[e.category]||(productsByCategory[e.category]=[]),productsByCategory[e.category].length<2&&productsByCategory[e.category].push(e)})),updateProducts(),document.addEventListener("click",(e=>{if(e.target.closest(".card-btn")){e.preventDefault(),e.target.closest(".card-btn").classList.add("cart-open-btn"),e.target.closest(".card-btn").querySelector("img").src="img/tick.svg",e.target.closest(".card-btn").addEventListener("click",(()=>{o.classList.toggle("basket-active")}));const t=parseInt(e.target.closest(".card-btn").dataset.value),o=(document.querySelectorAll(".cart-open-btn"),document.querySelector(".basket-popup-js"));addToBasket(t)}if(e.target.closest('a[href="product-card.html"]')){const t=parseInt(e.target.closest("a").dataset.productId),o=products.find((e=>e.id===t));o&&localStorage.setItem("selectedProduct",JSON.stringify(o))}})),document.querySelector("#cartUpdate").addEventListener("click",(()=>{updateBasket()}));const promoInput=document.querySelector('input[name="userPromo"]');promoInput.addEventListener("input",(e=>{const t=e.target.value,o=promos.find((e=>e.promo===t)),n=document.querySelector("#allPriceWithPromo"),c=parseInt(n.textContent);if(o&&c){const e=c-c*(o.discount/100);n.textContent=`${Math.round(e)}грн.`,document.querySelector("#isPromoUsed").textContent="Промокод (застосовано)",localStorage.setItem("promo",t)}else n.textContent=document.querySelector("#totalPrice").textContent,document.querySelector("#isPromoUsed").textContent="Промокод"})),document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".contact-form#form")&&document.querySelector(".contact-form#form").addEventListener("submit",(async e=>{e.preventDefault();const t=e.target.querySelectorAll("input"),o=`\nНове звернення:\nІм'я: ${t[0].value}\nТелефон: ${t[1].value}\nМесенджер: ${t[2].value}\nПовідомлення: ${t[3].value}\n    `;try{if(!(await fetch("https://api.telegram.org/bot7936445587:AAHV5lZ4RV6fW2w5vE75qfMRg27VUtuDDo0/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:"-1002442277202",text:o})})).ok)throw new Error("Помилка при відправці");e.target.reset()}catch(e){console.error(e)}document.querySelector(".succsessful-feedback").classList.toggle("d-none")}))}));const feedbackOutOpenReadyPopup=document.querySelectorAll(".feedback-popup-open"),succsessfulFeedback=document.querySelector(".succsessful-feedback");feedbackOutOpenReadyPopup.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),succsessfulFeedback.classList.toggle("d-none")}))}));const categoryLinks=document.querySelectorAll(".category-link");categoryLinks.forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.dataset.value;localStorage.setItem("selectedCategory",t)}))}));const readMoreBtns=document.querySelectorAll(".read-more-btn"),mobileHiddenContents=document.querySelectorAll(".mobile-hidden");readMoreBtns.forEach(((e,t)=>{e.addEventListener("click",(()=>{mobileHiddenContents[t].classList.toggle("mobile-hidden"),e.textContent=mobileHiddenContents[t].classList.contains("mobile-hidden")?"Читати далі":"Згорнути"}))}));
function searchProducts(e){const c=document.querySelector("#searchedProducts");c.innerHTML="",""==e&&(c.innerHTML="<h1>Нічого не знайдено.</h1>");const t=e.trim().toLowerCase(),a=products.filter((e=>e.name.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.category.toLowerCase().includes(t)));a.length>0?a.forEach((e=>{const t=`\n        <figure class="col-6 col-md-4 col-lg-3">\n          <figcaption>\n            <div class="figure-image">\n              <img src="${e.images[0]}" alt="${e.name}">\n              <a href="product-card.html" class="figure-to-card-page" data-product-id="${e.id}"></a>\n            </div>\n            <div class="card-text-block d-flex justify-content-between w-100">\n              <a href="product-card.html" class="description-card" data-product-id="${e.id}">\n                <p>${e.name}</p>\n                <p class="price">${e.price} грн.</p>\n              </a>\n              <a href="#" data-value="${e.id}" class="card-btn al-center d-flex justify-content-center">\n                <img src="${JSON.parse(localStorage.getItem("basketProducts")||"[]").includes(e.id)?"img/tick.svg":"img/cart.svg"}" alt="cart">\n              </a>\n            </div>\n          </figcaption>\n        </figure>\n      `;c.innerHTML+=t})):(c.innerHTML="<h1>Нічого не знайдено.</h1>",searchProducts(""))}console.log(localStorage.getItem("searchedProduct")),searchProducts(localStorage.getItem("searchedProduct"));