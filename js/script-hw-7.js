//Task 1//
// const cat = document.querySelectorAll('.item');
// console.log(`В списке ${(cat.length)} категории`);
//   cat.forEach(el => {
//     console.log("Категория:", el.querySelector("h2").textContent);
//     console.log("Количество элементов:", el.querySelectorAll("li").length);
//    });
//========================================================
//Task 2//
// Напиши скрипт, который для каждого элемента массива 
// ingredients создаст отдельный li, после чего 
// вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().
//==================================================================
// const ulProducts = document.querySelector('#ingredients');
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// const renderProducts = (array) =>{
//   const frag = document.createDocumentFragment();
//     array.forEach(el => {
//       const li = document.createElement('li');
//       li.textContent = el;
//       console.log('li :', li);
//       frag.appendChild(li);
//     });
//     ulProducts.appendChild(frag);
// }
// renderProducts(ingredients);
//=====================================================================
  //Task 3//
  // const gallery = document.querySelector('#gallery');
  // const images = [
  //   {
  //     url:
  //       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //     alt: 'White and Black Long Fur Cat',
  //   },
  //   {
  //     url:
  //       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  //   },
  //   {
  //     url:
  //       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //     alt: 'Group of Horses Running',
  //   },
  // ];
  // const renderGallery = (array) =>{
  //   const frag = document.createDocumentFragment();
  //     array.forEach(el => {
  //       const li = document.createElement('li');
  //       li.style.listStyle = 'none';
  //       li.insertAdjacentHTML('beforeend', `<img style="width:300px; height:100px" src=${el.url} alt=${el.alt}>`);
  //       console.log('li :', li);
  //       frag.appendChild(li);
  //     });
  //     gallery.appendChild(frag);
  // }
  // renderGallery(images);

  // gallery.style.display = 'flex';
  // gallery.style.flexWrap = 'wrap';
//===============================================================
//Task 4//
// let counterValue = document.querySelector('#value');
// const increm = document.querySelector('[data-action="increment"]');
// const decrem = document.querySelector('[data-action="decrement"]');

// counterValue.textContent = 0;
 
// increm.addEventListener('click', handleIncrement);
// decrem.addEventListener('click', handleDecrement);

// function handleIncrement(){
//   counterValue.textContent = Number(counterValue.textContent) + 1;

// }
// function handleDecrement(){
//   counterValue.textContent = Number(counterValue.textContent) - 1;

// }
//====================================================================
//Task 5//
// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// input.addEventListener('input', handleInputName);

// function handleInputName(event) {
//     output.textContent = event.currentTarget.value;
// };
//==================================================================
//Task 6//
// const input = document.querySelector('#validation-input');

// input.addEventListener('blur', inputValidation);
// input.style.border = '3px solid #bdbdbd';


// function inputValidation(event) {
//     if(event.currentTarget.value.length == input.getAttribute('data-length')){
//       input.style.borderColor = '#4caf50';
//     } 
//     else {
//       input.style.borderColor = '#f44336';
//     }
// };
// console.log('input[data-length] :', input.getAttribute('data-length'));
//===========================================================
//Task 7//
// const input = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');

// input.addEventListener('input', changeFontSize);

// function changeFontSize(event){
//   let size = input.value;
//   text.style.fontSize = size + "px";
// };
//================================================================