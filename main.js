'use strict'

const navbar = document.querySelector('#navbar');

const navbarHeight = navbar.scrollHeight;


// navbar객체를 확인하여 scrollheight요소를 추출할 수 있다
console.dir(navbar);

// Make navbar change color when it is on the top
document.addEventListener('scroll', ()=> {
    // console.log를 이용하여 값을 찾는 것이다
    // console.log(window.scrollY);
    // console.log(`navbarHeight is ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--skyblue');
    } else {
        navbar.classList.remove('navbar--skyblue');
    }
});

// Handle scrolling when tapping on the navbar menu
// 1. 우선 navbarmenu 를 가져오자
const navbarMenu = document.querySelector('.navbar__menu');

// navbarMenu.addEventListener('click', ()=> {
//     // click 시 함수가 작동되는 지 log를 통해 확인
//     console.log("확인용");
// });

navbarMenu.addEventListener('click', (event)=> {
    // 클릭한 타켓 요소를 확인해보자
    // console.log(event.target);
    // 타겟 요소의 이름을 부여한 것을 확인해보자
    // console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;

    // link 가 아닌 부분을 클릭하면 아무것도 return 하지 말란 조건문
    if (link == null) {
        return;
    }
    scrollIntoView(link);
    
    // } else {
    //     // console.log(event.target.dataset.link);
    //     const scrollTo = document.querySelector(link);
    //     scrollTo.scrollIntoView({behavior: "smooth"});

    // }

});

// Handle click on "contact me" btn on home
const homeContactBtn = document.querySelector('.home__contact');

// parameter를 굳이 안쓰는 듯? 내 생각엔 어차피 하나의 버튼만 들어오기 때문인듯
homeContactBtn.addEventListener('click', ()=> {
    // console.log("확인");

    // const scrollTo = document.querySelector("#contact");
    // scrollTo.scrollIntoView({behavior: 'smooth'});

    // 인자로 #contact를 준다. 
    scrollIntoView('#contact');
    
})


// 코드가 중복되기 때문에 함수를 만들자
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

// ToggleBtn

const toggleBtn = document.querySelector('.navbar__toggle-btn');

toggleBtn.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
});






// const skillset = document.querySelector('.skillset');
// let intViewportHeight = window.innerHeight;
// let scrollY = window.scrollY;
// let posFromTop = skillset.getBoundingClientRect().top;
// const absolutePos = scrollY + posFromTop;


// document.addEventListener('scroll', () => {
//     // console.log(intViewportHeight);
//     // console.log(skillset.getBoundingClientRect().top);
//     if (intViewportHeight > posFromTop) {
//         skillset.classList.add('fade');
//     }
// });