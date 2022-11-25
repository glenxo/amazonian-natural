let my_element = document.createElement('h1');
let my_span = document.createElement('span');
let my_div = document.createElement('div');
let message;
message = 'Bienvenido a Amazonian Natural!';
let button;
let box;



    

alert(message);

my_element.appendChild(my_span);

my_element.appendChild(my_div);

my_element.classList.add('custom_class');

document.body.appendChild(my_element);  



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
  document.body.classList.toggle('active');
};

window.onscroll = () =>{
  if(window.innerWidth < 1200){
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    document.body.classList.remove('active');
  };
};

let productPreviewContainer = document.querySelector('.products-preview-container');
let prodcutPreview = productPreviewContainer.querySelectorAll('.product-preview');

document.querySelectorAll('.products .slide .btn').forEach(detailBtn =>{
  detailBtn.onclick = () =>{
    productPreviewContainer.style.display = 'block';
    let name = detailBtn.getAttribute('data-product');
    prodcutPreview.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
      preview.style.display = 'flex';
      };
    });
  };
});

document.querySelectorAll('.products-preview-container .product-preview .fa-times').forEach(close =>{
  close.onclick = () =>{
    productPreviewContainer.style.display = 'none';
    prodcutPreview.forEach(closePreview =>{
      closePreview.style.display = 'none';
    });
  };
});

