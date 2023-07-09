let windoHeight = window.innerHeight;
let windoWidth = window.innerWidth;
let w1vw = parseInt(windoWidth) * 0.01;
let w1vh = parseInt(windoHeight) * 0.01;

let arti_top = [];
const side_img = [];
const ellement = [];

for (i = 0; i < 8; i++) {
    ellement[i] = document.getElementById('w' + String(i + 1)); //아티클 하나하나 정의
    side_img[i] = 'images/title/w' + String(i + 1) + '_title_l.png'; //각각 사이드 이미지
}

const nav_bb = document.querySelectorAll('nav ul> li'); //목차 목록
const nav_bs = Array.from(nav_bb) //목차 목록 리스트

function arti() {
    arti_top[0] = 0;
    if (windoWidth >= 1200) { // 피씨일때 요소의 탑 위치
        arti_top[1] = ellement[0].offsetHeight + (12.6 * w1vw) + 20;
    } else { // 모바일일 때 요소의 탑 위치
        arti_top[1] = ellement[0].offsetHeight + (12.2 * w1vw)  + (19 * w1vh) + 45;
    }
    for (i = 2; i < 8; i++) { //여기 i 바꿔서 높이 정의하기 ! !
        if (windoWidth >= 1200) {
            arti_top[i] = ellement[i - 1].offsetHeight + arti_top[i - 1] ;
        } else { 
            arti_top[i] = ellement[i - 1].offsetHeight + (20.4 * w1vh) + arti_top[i - 1]; // 각각 글의 스크롤 위치;
        }
    }
    /*
     for (i = 8; i < 8; i++) {
        if (windoWidth >= 1200) { // 피씨일때 요소의 탑 위치
            arti_top[i] = ellement[i - 1].offsetHeight + (4.9 * w1vw) + (3.6 * w1vh) + 40 + arti_top[i - 1]; // 각각 글의 스크롤 위치
        } else { // 모바일일 때 요소의 탑 위치
            arti_top[i] = ellement[i - 1].offsetHeight + (18 * w1vw) + (1.2 * w1vh) + arti_top[i - 1]; // 각각 글의 스크롤 위치
        }
    }
     */
   
    arti_top[8] = document.body.offsetHeight; // 맨끝 스크롤 높이
}

window.addEventListener('resize', function (event) {
    windoWidth = window.innerWidth; //창너비
    windoHeight = window.innerHeight; //창높이
    w1vw = parseInt(windoWidth) * 0.01; ///vw값
    w1vh = parseInt(windoHeight) * 0.01; //vh값
    if ('ontouchstart' in document.documentElement == false) { //피씨에서만 새로고침
        location.reload();
    }
});


window.onload = function () { //새로고침될때
    if (windoWidth >= 1200) {
        document.querySelector("header .logo").classList.remove('hd_unfix');
        document.querySelector("header .back").classList.remove('hd_unfix');
        document.querySelector("nav").classList.remove('nav_unfix');
        document.querySelector(".toggle").classList.remove('tog_unfix');
        document.querySelector(".scroll_indicator").classList.remove('scro_unfix');
        document.querySelector(".sidebg").classList.remove('hidd');
        document.querySelector(".scroll_indicator").style.top = 0;
    } //모바일에서 피씨로 바꼈을때
    arti();
}

// 스크롤 따라  - pc
// - 목차 호랑이 스타일 다르게 하기  (해당 위치 값 따라서)
function gotoArti(){
    let scrollTop = window.scrollY || document.documentElement.scrollTop; //현재 스크롤 위치

    for (i = 0; i < 8; i++) {
        nav_bs[i].style.backgroundColor = 'transparent';
        nav_bs[i].style.border = 'unset';

        if (scrollTop >= arti_top[i] && scrollTop < arti_top[i + 1]) {
            document.getElementById("sideI").src = side_img[i]; //해당하는 사이드 이미지

            for (j = 0; j < 8; j++) {
                if (j != i) {
                    nav_bs[j].addEventListener('mouseover', function () {
                        this.style.border = "1px solid black";
                    });
                    nav_bs[j].addEventListener('mouseout', function () {
                        this.style.border = "unset";
                    });
                }
            }
            nav_bs[i].style.backgroundColor = 'white'; // 해당하는 목차 스타일 변경
            nav_bs[i].style.border = '1px solid black';
        }
    }

}
window.addEventListener('scroll', function () {
    gotoArti();
}, false);

// 피씨 모바일 둘다 클릭하면 그 스크롤 위치로 이동
nav_bs[0].onclick = function navi() {
    window.scrollTo({
        top: 0
    });
    togTop();
}
nav_bs[1].onclick = function navi() {
    window.scrollTo({
        top: arti_top[1]
    });
}
nav_bs[2].onclick = function navi() {
    window.scrollTo({
        top: arti_top[2]
    });
}
nav_bs[3].onclick = function navi() {
    window.scrollTo({
        top: arti_top[3]
    });
}
nav_bs[4].onclick = function navi() {
    window.scroll({
        top: arti_top[4]
    });
}
nav_bs[5].onclick = function navi() {
    window.scroll({
        top: arti_top[5]
    });
}
nav_bs[6].onclick = function navi() {
    window.scroll({
        top: arti_top[6]
    });
}
nav_bs[7].onclick = function navi() {
    window.scroll({
        top: arti_top[7]
    });
}

// 스크롤 한 아티클마다 진행 바 - 피씨 모바일 둘다
const scrolledIndicatorFill = document.querySelector(".scroll_indicator_fill");

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop; //현재 스크롤 위치

    for (i = 0; i < 8; i++) {
        if (scrollTop >= arti_top[i] && scrollTop < arti_top[i + 1]) {
            const scrollable = ellement[i].offsetHeight;
            let realscrollTop = scrollTop - arti_top[i];
            let percentageScrolled = 100;

            if (scrollable > 0) {
                percentageScrolled = Math.ceil((realscrollTop / scrollable) * 100);
            }
            scrolledIndicatorFill.style.width = `${percentageScrolled}%`;
        }
    }
});

// 토글로 목차 상단에 여닫기  - 모바일버전
const nav = document.querySelector("nav");
let togT = true; //상단에 있음
let togg = true; //원래 열려있음

function togTop() { //토글 맨처음 상황
    document.querySelector("header .logo").classList.remove('hidden')
    document.querySelector("header .back").classList.remove('hidden')
    document.querySelector("nav").classList.remove('hidden') //다시 생기기

    document.querySelector(".sidebg").classList.add('hidd'); //네브배경 필요없음
    document.querySelector("header .logo").classList.add('hd_unfix');
    document.querySelector("header .back").classList.add('hd_unfix');
    document.querySelector("nav").classList.add('nav_unfix');
    document.querySelector(".toggle").classList.add('tog_unfix');
    document.querySelector(".scroll_indicator").classList.add('scro_unfix'); //원래 릴레이티브로 바꾸기
    document.querySelector(".toggle").style.top = 0;
    document.querySelector(".toggle").style.transform = 'rotate(180deg)';
    document.querySelector(".scroll_indicator").style.top = 0;
    togT = true; //상단임
}

function togOpn() { //토글 열렸을때 (밑에서) 
    document.querySelector("header .logo").classList.remove('hidden')
    document.querySelector("header .back").classList.remove('hidden')
    document.querySelector("nav").classList.remove('hidden') //다시 생기기

    document.querySelector(".sidebg").classList.remove('hidd'); // 뒤에 박스 주기 - 이거 왜 안됨?
    document.querySelector("header .logo").classList.remove('hd_unfix');
    document.querySelector("header .back").classList.remove('hd_unfix');
    document.querySelector("nav").classList.remove('nav_unfix');
    document.querySelector(".toggle").classList.remove('tog_unfix');
    document.querySelector(".scroll_indicator").classList.remove('scro_unfix'); //픽스드로 만들기
    document.querySelector(".toggle").style.top = '40.3vw';
    document.querySelector(".toggle").style.transform = 'rotate(180deg)'; //토글 원래대로
    document.querySelector(".scroll_indicator").style.top = '49.5vw';
    togg = true; //토글 열림
    togT = false; //상단이 아님
}

function togClo() { //토글 닫혔을때 
    document.querySelector("header .logo").classList.add('hidden')
    document.querySelector("header .back").classList.add('hidden')
    document.querySelector("nav").classList.add('hidden') // 안보이게하기
    document.querySelector(".toggle").style.top = 0;
    document.querySelector(".toggle").classList.remove('tog_unfix');
    document.querySelector(".scroll_indicator").classList.remove('scro_unfix'); //픽스드로 만들기
    document.querySelector(".toggle").style.transform = 'rotate(0deg)';
    document.querySelector(".scroll_indicator").style.top = '9vw';
    togg = false; //토글 닫힘
    togT = false; //상단이 아님
}


window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop; //현재 스크롤 위치

    if (windoWidth < 1200) {
        if (scrollTop < nav.offsetHeight) { //  맨처음 상태 상단 보임
            togTop();
        } else { // 상단이 아님
            togClo();
        }
    } else { //피씨로 바뀌면
        document.querySelector("header .logo").classList.remove('hd_unfix');
        document.querySelector("header .back").classList.remove('hd_unfix');
        document.querySelector("nav").classList.remove('nav_unfix');
        document.querySelector(".sidebg").classList.remove('hidd');
        document.querySelector(".toggle").classList.remove('tog_unfix');
        document.querySelector(".scroll_indicator").classList.remove('scro_unfix'); //피씨로 바뀌면 다시 픽스드
        document.querySelector(".scroll_indicator").style.top = 0;
    }
});

document.querySelector(".toggle").onclick = function togR() {
    if (togT == false) { //모바일이고 네비가 안보인다!
        if (togg == true) {
            togClo();
        } else {
            togOpn();
        }
    }
};