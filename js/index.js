const getBoredData = async () => {
    const data = await fetch('https://www.boredapi.com/api/activity/')
        .then((r) => r.json())
        .catch((error) => console.error('Er is een error gebeurd!', error));
    return data
}

const initializePage = () => {
    getBoredData().then(function (data){
        updatePageContent(data)
    });
}

function btnClick() {
    const button = document.getElementById('btnActivity');
    button.classList.add('text-animation');
    button.style.backgroundColor = "#b06ab3"
    button.innerText = '✓'
    updateWithButton();
    setTimeout(function(){
        button.classList.remove('text-animation');
    }, 50)
    setTimeout(function () {
        button.classList.add('text-animation');
        button.style.backgroundColor = "#4568dc"
        button.innerText = 'Get a new activity!'
        setTimeout(function(){
            button.classList.remove('text-animation');
        },50)
    }, 1000);
}

const updatePageContent = function (data) {
    const Activity = document.querySelector('.js-activity');
    const Type = document.querySelector('.js-type');
    const Deelneemers = document.querySelector('.js-participants');
    const Price = document.querySelector('.js-price');
    Activity.innerHTML = data.activity;
    Type.innerHTML = data.type;
    Deelneemers.innerHTML = ''
    for (let i = 0 ; i<data.participants; i++){
        Deelneemers.innerHTML += `<img class="c-participants__img" src="img/clipartPerson.png" alt="Clipart of a person">`
    }
    if (data.price<=0.2){
        Price.innerHTML = '$'
    }else if (0.2 < data.price <=0.5){
        Price.innerHTML = '$ $'
    }else if (0.5 < data.price <= 0.7){
        Price.innerHTML = '$ $ $'
    }else if (0.7 < data.price){
        price.innerHTML = '$ $ $ $'
    }
}

function updateWithButton(){
    const Activity = document.querySelector('.js-activity');
    const Type = document.querySelector('.js-type');
    const Deelneemers = document.querySelector('.js-participants');
    const Price = document.querySelector('.js-price');
    Activity.classList.add('transition');
    Type.classList.add('transition');
    Deelneemers.classList.add('transition');
    Price.classList.add('transition');
    getBoredData().then(function (data){
        setTimeout(function(){
            updatePageContent(data);
            Activity.classList.remove('transition');
            Type.classList.remove('transition');
            Deelneemers.classList.remove('transition');
            Price.classList.remove('transition');
        }, 500)
    });
}


document.addEventListener('DOMContentLoaded', function () {
    initializePage();
})


