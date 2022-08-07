let sliders = document.querySelectorAll('.slider'),
    prevBtn = document.querySelector('#prev'),
    nextBtn = document.querySelector('#next'),
    indicators = document.querySelector('#indicators'),
    current = 0;

nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);

//Create Bullets function
function createBullets() {
    sliders.forEach((slider) => {
        //create element li
        let li = document.createElement("li");
        //put li in the ul
        indicators.appendChild(li);
    });
}

createBullets();

let indicatorsLi = document.querySelectorAll('#indicators li');

function addActiveBullet(n) {
    //Remove all active class from li
    indicatorsLi.forEach((li) => {
        li.classList.remove('active');
    });
    //Add active class to the current li
    indicatorsLi[n].classList.add('active');
}

addActiveBullet(current);

function showImg(n) {
    //Remove active class from all slide
    sliders.forEach((slide) => {
        slide.classList.remove('active');
    });
    //Add class active to the current slide
    sliders[n].classList.add('active');
}

function nextImg() {
    if (current < sliders.length - 1) {
        current++;
    } else {
        current = 0;
    }
    showImg(current);
    addActiveBullet(current);
}

function prevImg() {
    if (current <= 0) {
        current = sliders.length - 1;
    } else {
        current--;
    }
    showImg(current);
    addActiveBullet(current);
}

function BulletsBtn() {
    indicatorsLi.forEach((li, i) => {
        li.addEventListener("click", () => {
            current = i;
            showImg(current);
            addActiveBullet(current);
        });
    });
}

BulletsBtn();

setInterval(() => {
    nextImg();
    addActiveBullet(current);
}, 3000);