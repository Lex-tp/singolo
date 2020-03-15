let navMenu = document.getElementById('nav_menu');
let portfolioNav = document.getElementById('portfolioNav');
let numberslides = 0;
let slider = document.getElementById('slider_mobile');
let sliderItem = document.getElementsByClassName('slide');
let sliderBg = document.getElementById('slider-bg');
let backButton = document.getElementById('back');
let nextButton = document.getElementById('next');
let phoneButtonV=document.getElementById('buttonV');
let phoneScreenV=document.getElementById('screenV');
let phoneButtonH=document.getElementById('buttonH');
let phoneScreenH=document.getElementById('screenH');
let phoneButtonV2=document.getElementById('buttonV2');
let phoneScreenV2=document.getElementById('screenV2');
let imgPortfolio = document.getElementById("swipePortfolio");
let okButton=document.getElementById('okButton');
let contactForm=document.getElementById('contactForm');

phoneScreenV.style.opacity='0';
phoneScreenH.style.opacity='0';
phoneScreenV2.style.opacity='0';

navMenu.addEventListener('click', (e) => {
    navMenu.querySelectorAll('li').forEach(function (item) { item.querySelector('a').classList.remove('active'); });
    e.target.classList.add('active');
});

function showMessagemModal() {
    let name=document.getElementById('name').value.toString();
    let mail=document.getElementById('mail').value.toString();
    let subject=document.getElementById('subject').value.toString();
    let describe=document.getElementById('describe').value.toString();
    document.getElementById('nameValue').innerHTML= Boolean(name)?'Name: '+name:'Без названия';
    document.getElementById('mailValue').innerHTML=Boolean(mail)?'Mail: '+mail:'Без электронной почты';
    document.getElementById('subjectValue').innerHTML=Boolean(subject)?'Subject: '+subject:'Без темы';
    document.getElementById('describeValue').innerHTML=Boolean(describe)?'Description: '+describe:'Без описания';
    document.getElementById('resultWindow').classList.remove('hidden');
}

okButton.addEventListener('click', () => {
    document.getElementById('nameValue').innerHTML='';
    document.getElementById('mailValue').innerHTML='';
    document.getElementById('subjectValue').innerHTML='';
    document.getElementById('describeValue').innerHTML='';
    contactForm.reset();
    document.getElementById('resultWindow').classList.add('hidden');
});

phoneButtonV.addEventListener('click', function(){
    if(phoneScreenV.style.opacity=='0'){
        phoneScreenV.style.opacity='1';
    }else{
        phoneScreenV.style.opacity='0';
    }
});

phoneButtonV2.addEventListener('click', function(){
    if(phoneScreenV2.style.opacity=='0'){
        phoneScreenV2.style.opacity='1';
    }else{
        phoneScreenV2.style.opacity='0';
    }
});

phoneButtonH.addEventListener('click', function(){
    if(phoneScreenH.style.opacity=='0'){
        phoneScreenH.style.opacity='1';
    }else{
        phoneScreenH.style.opacity='0';
    }
});

nextButton.addEventListener('click', next_slide);
backButton.addEventListener('click', back_slide);
sliderItem[1].style.display = 'none';
function next_slide() {
    numberslides++;
    sliderManager();
}

function back_slide() {
    numberslides--;
    sliderManager();
}

function sliderManager() {
    console.log(numberslides);
    if (numberslides < 0) {
        numberslides = sliderItem.length - 1;
    }
    if (numberslides > sliderItem.length - 1) {
        numberslides = 0;
    }

    for (let i = 0; i < sliderItem.length; i++) {
        if(i==numberslides){    
            if(i%2!=0){
                sliderBg.style.backgroundColor='#648BF0';
                sliderBg.style.borderBottom='6px solid #ffffff';
            }else{
                sliderBg.style.backgroundColor='#f06c64';
                sliderBg.style.borderBottom='6px solid #ea676b';
            }
            sliderItem[i].style.display = 'flex'; 
        }else{
            sliderItem[i].style.display = 'none';
        }
    }
}

function swipePortfolio(){
    let parent = imgPortfolio;
    let frag = document.createDocumentFragment();
    while (parent.children.length) {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);
}

imgPortfolio.addEventListener('click', (e) => {
    imgPortfolio.querySelectorAll('img').forEach(function (item) { item.classList.remove('select-img'); });
    e.target.classList.add('select-img');
});

portfolioNav.addEventListener('click', (e) => {
    portfolioNav.querySelectorAll('button').forEach(function (item) { item.classList.remove('portfolio__button-active'); });
    e.target.classList.add('portfolio__button-active');
});