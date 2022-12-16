function random(max){
    return Math.floor(Math.random() * max);
}
let typed = new Typed('#test', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 30, // Скорость печати
    startDelay: 1000, // Задержка перед стартом анимации
    backSpeed: 30, // Скорость удаления
    loop: false // Указываем, повторять ли анимацию
});
let wrappers = document.querySelectorAll('.wrapper');
let sec1 = document.querySelector('.section1');
let sec2 = document.querySelector('.section2');
let sec3 = document.querySelector('.section3');
let secContact = document.querySelector('.contactInfo');
let links = document.querySelectorAll('.header .container > div');
let header = document.querySelector('.header');


links.forEach(e =>{
    e.addEventListener('click',()=>{
        if(e.classList.contains('about')){
            window.scrollTo({
                top: sec1.getBoundingClientRect().bottom,
                behavior: "smooth"
            });
        }
        if(e.classList.contains('example')){
            sec2.classList.toggle('sectionGo');
            sec3.classList.toggle('sectionGo');
            secContact.classList.toggle('contactInfoVisible');
            setTimeout(()=>{
                sec3.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"})
            },500)
        }
        if(e.classList.contains('contacts')){
            sec2.classList.toggle('sectionGo');
            sec3.classList.toggle('sectionGo');
            secContact.classList.toggle('contactInfoVisible');
            setTimeout(()=>{
                window.scrollTo({
                    top: document.body.scrollHeight - window.innerHeight,
                    behavior: "smooth"
                });
            },500)
        }
    })
})
let temp = 0;
function wrapper(elem){ //Функция слежка за фазами анимаций 
    elem.addEventListener('animationstart',()=>{
        wrappers.forEach(wrapper => {
            if((wrapper.parentNode.classList.contains('sectionGo'))){
                wrapper.parentNode.childNodes[1].classList.add('wrapperVisible')
                wrapper.parentNode.childNodes[1].classList.remove('wrapper')
            }
        });
        
    })
    elem.addEventListener('animationstart',()=>{
        wrappers.forEach(wrapper => {
            if(!(wrapper.parentNode.classList.contains('sectionGo'))){
                wrapper.parentNode.childNodes[1].classList.remove('wrapperVisible')
                wrapper.parentNode.childNodes[1].classList.add('wrapper')
            }
        });
        
    })

}
window.addEventListener('scroll',()=>{
    
    if(getMiddleElem('.section1')){
        if(!(sec2.classList.contains('sectionGo'))){
            sec2.classList.toggle('sectionGo')
            wrapper(sec2)
        }
        
    }
    else{
        if(sec2.classList.contains('sectionGo')){
            sec2.classList.toggle('sectionGo')
            
        }
    }
    if(getMiddleElem('.section2') && sec2.classList.contains('sectionGo')){
        if(!(sec3.classList.contains('sectionGo'))){
            secContact.classList.toggle('contactInfoVisible');
            sec3.classList.toggle('sectionGo')
            wrapper(sec3)
        }
    }
    else{
        if(sec3.classList.contains('sectionGo')){
            secContact.classList.toggle('contactInfoVisible');
            sec3.classList.toggle('sectionGo')
            
        }
    }
    
});

function getMiddleElem(elem){
    let userScroll = window.scrollY;
    let top = document.querySelector(elem).getBoundingClientRect().top;
    let bottom = document.querySelector(elem).getBoundingClientRect().bottom;
    
    
    if(((top + bottom) / 2) < 0){
        return true;
    }
    else{
        return false;
    }
    
}

let contacts = document.querySelectorAll('.containerContact > div');
contacts.forEach(e => {
    e.addEventListener('click',function(){
        if(e.classList.contains('contactVK')){
            setTimeout(()=>{
                window.location.href = "https://vk.com/teodor_green"
            },400)
        }
        if(e.classList.contains('contactTelegram')){
            setTimeout(()=>{
                window.location.href = "https://t.me/Beloskyzz"
            },400)
        }
        if(e.classList.contains('contactMail')){
            setTimeout(()=>{
                window.location.href = "mailto:teodorgreen@yandex.ru"
            },400)
        }
    })
});