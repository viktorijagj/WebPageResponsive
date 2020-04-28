
// GALERY


// const galModal = document.getElementById('myModal');

// const img = document.getElementById('myImg');
// const modalImg = document.querySelectorAll('#img01');
// const close = document.querySelector('.close-button');

// img.addEventListener('click', ()=>{
   
// galModal.classList.toggle('is-hidden');
// modalImg.src = img.src;
  
// });

// close.addEventListener('click', ()=>{
//     galModal.classList.toggle('is-hidden');
// })


// SHOW MORE BTN
const more = document.querySelector('.more-info');
const dots = document.querySelector('.dots');
const infBtn = document.querySelector('.inf-btn');

infBtn.addEventListener('click',(e) => 
{
    if(dots.style.display === "none"){
        dots.style.display = "inline"
        infBtn.innerHTML = "Повеќе Информации";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        infBtn.innerHTML = "Помалку Информации";
        more.style.display = "inline";
    }
    e.preventDefault();
    });

    //Form
    // const form = document.querySelector('.form');
    // form.addEventListener('submit',(e)=>{
    //     e.preventDefault();
    // })