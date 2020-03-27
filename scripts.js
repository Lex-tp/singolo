let navMenu = document.getElementById('nav_menu');
let portfolioNav = document.getElementById('portfolioNav');
let phoneButton=document.getElementById('slider_mobile');
let phoneButtonV=document.getElementById('buttonV');
let phoneScreenV=document.getElementById('screenV');
let phoneButtonH=document.getElementById('buttonH');
let phoneScreenH=document.getElementById('screenH');
let phoneButtonV2=document.getElementById('buttonV2');
let phoneScreenV2=document.getElementById('screenV2');
let imgPortfolio = document.getElementById("swipePortfolio");
let okButton=document.getElementById('okButton');
let contactForm=document.getElementById('contactForm');


phoneButton.querySelectorAll('#screenV, #screenV2, #screenH').forEach(function(el){
    if(el.style.opacity=='0'){
        el.style.opacity='1';
    }else{
        el.style.opacity='0';
    }
});

navMenu.addEventListener('click', (e) => {
    navMenu.querySelectorAll('li').forEach(function (item) { item.querySelector('a').classList.remove('active'); });
    e.target.classList.add('active');
});

function showMessagemModal() {
    event.preventDefault();
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

phoneButton.querySelectorAll('#buttonV').forEach(function(item){
    item.addEventListener('click', function(){
        phoneButton.querySelectorAll('#screenV').forEach(function(el){
        if(el.style.opacity=='0'){
            el.style.opacity='1';
        }else{
            el.style.opacity='0';
        }
    });
});
});

phoneButton.querySelectorAll('#buttonV2').forEach(function(item){
    item.addEventListener('click', function(){
        phoneButton.querySelectorAll('#screenV2').forEach(function(el){
        if(el.style.opacity=='0'){
            el.style.opacity='1';
        }else{
            el.style.opacity='0';
        }
    });
});
});

phoneButton.querySelectorAll('#buttonH').forEach(function(item){
    item.addEventListener('click', function(){
        phoneButton.querySelectorAll('#screenH').forEach(function(el){
        if(el.style.opacity=='0'){
            el.style.opacity='1';
        }else{
            el.style.opacity='0';
        }
    });
});
});

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

//переключение элементов меню
document.addEventListener('scroll',onScroll);

function onScroll (e) {

    let cursorPos=window.scrollY;
    let headerScroll=document.querySelector('#home');
    let mainScroll=document.querySelector('#services-scroll');
    let portfolioScroll=document.querySelector('#portfolio-scroll');
    let aboutScroll=document.querySelector('#about-scroll');
    let contactScroll=document.querySelector('#contact');

        if(headerScroll.offsetTop<=cursorPos && (headerScroll.offsetTop+headerScroll.offsetHeight)> cursorPos){
            navMenu.querySelectorAll('li').forEach(function (el) { 
                el.querySelector('a').classList.remove('active'); 
                if(String(headerScroll.getAttribute('id')).replace('-scroll','') === el.querySelector('a').getAttribute('href').substring(1)){
                    el.querySelector('a').classList.add('active'); 
                }
            });
        }
        if(mainScroll.offsetTop-100<=cursorPos && (mainScroll.offsetTop-100+mainScroll.offsetHeight)> cursorPos){
            navMenu.querySelectorAll('li').forEach(function (el) { 
                el.querySelector('a').classList.remove('active'); 
                if(String(mainScroll.getAttribute('id')).replace('-scroll','') === el.querySelector('a').getAttribute('href').substring(1)){
                    el.querySelector('a').classList.add('active'); 
                }
            });
        }
        if(portfolioScroll.offsetTop-100<=cursorPos && (portfolioScroll.offsetTop-100+portfolioScroll.offsetHeight)> cursorPos){
            navMenu.querySelectorAll('li').forEach(function (el) { 
                el.querySelector('a').classList.remove('active'); 
                if(String(portfolioScroll.getAttribute('id')).replace('-scroll','') === el.querySelector('a').getAttribute('href').substring(1)){
                    el.querySelector('a').classList.add('active'); 
                }
            });
        }
        if(aboutScroll.offsetTop-100<=cursorPos && (aboutScroll.offsetTop-100+aboutScroll.offsetHeight-200)> cursorPos){
            navMenu.querySelectorAll('li').forEach(function (el) { 
                el.querySelector('a').classList.remove('active'); 
                if(String(aboutScroll.getAttribute('id')).replace('-scroll','') === el.querySelector('a').getAttribute('href').substring(1)){
                    el.querySelector('a').classList.add('active'); 
                }
            });
        }
        if(contactScroll.offsetTop-300<=cursorPos){
            navMenu.querySelectorAll('li').forEach(function (el) { 
                el.querySelector('a').classList.remove('active'); 
                if(String(contactScroll.getAttribute('id')) === el.querySelector('a').getAttribute('href').substring(1)){
                    el.querySelector('a').classList.add('active'); 
                }
            });
        }
}

(function() {

    var doc = document,
        index = 2;

    var Slider = function() {
        this.box = doc.querySelector('.container');
        this.slidesBox = doc.querySelector('.slider');
        this.slides = doc.querySelectorAll('.slide');
        this.btns = doc.querySelectorAll('.btn');
        this.size = this.box.clientWidth;
        this.position();
        this.carousel();

    };

    Slider.prototype.position = function() {
        var size = this.size;
        this.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
    };

    Slider.prototype.carousel = function() {
        var i, max = this.btns.length,
            that = this;

        for (i = 0; i < max; i += 1) {
            that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null,that));
        }
    }

    Slider.back = function(box) {
        box.slidesBox.style.transition = "transform .3s ease-in-out";
        var size = box.size;
        index <= 0 ? false : index--;
        box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        box.jump();
    };

    Slider.next = function(box) {
        box.slidesBox.style.transition = "transform .3s ease-in-out";
        var max = box.slides.length;
        var size = box.size;
        index >= max - 1 ? false : index++;
        box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        box.jump();
    };

    Slider.prototype.jump = function() {
        var that = this;
        var size = this.size;
        this.slidesBox.addEventListener('transitionend', function() {
            that.slides[index].id === "firstClone" ? index = 1: index;
            that.slides[index].id === "lastClone" ? index = that.slides.length-2: index;
            that.slidesBox.style.transition = "none";
            that.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
        });
    }


    new Slider();

})();