// SLIDESHOW JS IMPLEMENTATION

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// Picture slider actions!!!
const productImages = document.querySelectorAll(".product-images img"); // selecting all image thumbs
const productImageSlide = document.querySelector(".image-slider"); // seclecting image slider element

let activeImageSlide = 0; // default slider image

productImages.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide = i; // updating the image slider variable to track current thumb
    });
});


// toggle size buttons

const sizeBtns = document.querySelectorAll('.size-radio-btn'); // selecting size buttons
let checkedBtn = 0; // current selected button

sizeBtns.forEach((item, i) => { // looping through each button
    item.addEventListener('click', () => { // adding click event to each 
        sizeBtns[checkedBtn].classList.remove('check'); // removing check class from the current button
        item.classList.add('check'); // adding check class to clicked button
        checkedBtn = i; // upading the variable
    })
})

function validateForm() {
    alert("Form submitted successfully!");
    return true; // Allow form submission
}


