import {
    writer
} from './arti_list.js'

let path = String(window.location.pathname);
let wr_num = path.substr(2, 1); //지금 작가 번호 확인
let tit_num = path.substr(10, 1); //지금 글 번호 확인

//목록 해당 스타일 변경 및 a태그 막기
console.log(wr_num);
console.log(tit_num);
document.getElementById(String(tit_num)).href = 'javascript:void(0);'
document.querySelector('.artis_list li:nth-child(' + String(tit_num) + ')').style.cssText = "margin-bottom: 0.98rem; text-decoration: line-through; font-family: 'Eulyoo1945-SemiBold', serif;"


//txt파일 바꾸기
function puttxt({
    tit,
    arti
}) {
    //해당 글 제목, 글 내용
    document.querySelector('.sub_t').innerText = tit[tit_num - 1];
    document.querySelector('article p').innerText = arti[tit_num - 1];

    if (wr_num == 4) {
        if (tit_num == 1) {
            document.querySelector('article p').innerHTML = arti[0];
        } else if (tit_num == 4) {
            document.querySelector('article p').innerHTML = arti[3];
        }
    }

    //arti 전체 목차제목
    for (let i = 0; i < 8; i++) {
        document.getElementById(String(i + 1)).innerText = tit[i];
    }
}

//작가별
if (wr_num == 1) puttxt(writer.wri1);
else if (wr_num == 2) {
    puttxt(writer.wri2);
    document.getElementById(1).innerHTML = '#1 익명자살고민상담채팅사이트 <br> 헤븐즈필';
} else if (wr_num == 3) {
    puttxt(writer.wri3);
} else if (wr_num == 4) {
    puttxt(writer.wri4);
} else if (wr_num == 5) {
    puttxt(writer.wri5);
} else if (wr_num == 6) {
    puttxt(writer.wri6);
    document.getElementById(1).innerHTML = 'Track 01 그런 날이 있어 <br> 갑자기 혼자인 것만 같은 날';
} else if (wr_num == 7) {
    puttxt(writer.wri7);
} else if (wr_num == 8) {
    puttxt(writer.wri8);
}




// 스크롤 타이틀이 다지나가는 스크롤 위치값에오면 
const blind = document.querySelector('.blind').scrollHeight; // 가리는거 높이

const element = document.querySelector('article p');
const eleScroll = window.pageYOffset + element.getBoundingClientRect().top; // 글의 스크롤 위치
let lline = document.querySelector('.line') //라인
const mini_tit = document.querySelector(".wa_mini_title") //미니 타이틀

let togg = true; // 토글 열려있음

window.addEventListener('scroll', function () {
    let windoWidth = document.documentElement.clientWidth; // 창 너비
    let scrollTop = window.scrollY || document.documentElement.scrollTop; //현재 스크롤 위치

    if (windoWidth >= 1200) {
        if (scrollTop + blind >= eleScroll) { //타이틀이 안보이면 
            document.querySelector('.prof_box .prof_txt').style.flexDirection = 'column'
            document.querySelector('.prof_box .prof_txt').style.alignItems = 'baseline'
            document.querySelector('.wrap').style.backgroundImage = "url('../images/bg/w1_bg2_p.png')"
            mini_tit.classList.remove('hidden')
            lline.classList.remove('hidden')

            if (togg == true) { //타이틀 안보이며 사이드 0 (맨처음 상황에서 스크롤 내림)
                lline.style.width = '45.7vw'
                lline.style.marginLeft = '0.8vw'
                if (windoWidth < 1600 && windoWidth >= 1400) {
                    lline.style.marginLeft = '3.5vw'
                    lline.style.width = '45.8vw'
                } else if (windoWidth < 1900 && windoWidth >= 1600) {
                    lline.style.marginLeft = '3.2vw'
                    lline.style.width = '46.6vw'
                } else if (windoWidth >= 1900) {
                    lline.style.marginLeft = '3.5vw'
                    lline.style.width = '46.5vw'
                }
            } else { //타이틀 안보이며 사이드 x 
                // 라인스타일
                lline.style.width = '45.6vw'
                lline.style.marginLeft = '0.8vw'
                if (windoWidth < 1600 && windoWidth >= 1400) {
                    lline.style.marginLeft = '2.8vw'
                    lline.style.width = '46.6vw'
                } else if (windoWidth < 1900 && windoWidth >= 1600) {
                    lline.style.marginLeft = '0vw'
                    lline.style.width = '46.7vw'
                } else if (windoWidth >= 1900) {
                    lline.style.marginLeft = '3.5vw'
                    lline.style.width = '46.5vw'
                }
            }

        } else if (scrollTop + blind < eleScroll) { //타이틀 보이면
            document.querySelector('.prof_box .prof_txt').style.flexDirection = 'row'
            document.querySelector('.prof_box .prof_txt').style.alignItems = 'center'
            document.querySelector('.wrap').style.backgroundImage = "url('../images/bg/w1_bg1_p.png')"
            mini_tit.classList.add('hidden')

            if (togg == true) { //타이틀 보이며 사이드 0 (맨처음 상황)
                lline.classList.remove('hidden')
                lline.style.width = '33.5vw'
                lline.style.marginLeft = '0.8vw'
                if (windoWidth < 1600 && windoWidth >= 1400) {
                    lline.style.marginLeft = '1.2vw'
                    lline.style.width = '38vw'
                } else if (windoWidth < 1900 && windoWidth >= 1600) {
                    lline.style.marginLeft = '0.9vw'
                    lline.style.width = '38vw'
                } else if (windoWidth >= 1900) {
                    lline.style.marginLeft = '1.5vw'
                    lline.style.width = '37.5vw'
                }
            } else { //타이틀 보이며 사이드 x 
                lline.classList.add('hidden')
            }

        }
    }
});

// 토글로 목차 여닫기 - 얘네가 다 움직임
// - 호랑이 정보 사라지고 프사 위치 바뀜 + 서브타이틀 등장
// 다시 열었을 때 - 스크롤이 타이틀 다지나갔을때면 - 배치가 텍스트 생기고 + 서브타이틀 없어지고 + 미니 타이틀 생김


function sidetap() {
    let windoWidth = document.documentElement.clientWidth; // 창 너비
    let scrollTop = window.scrollY || document.documentElement.scrollTop; //현재 스크롤 위치

    togg = !togg //이제 사이드 닫힘

    if (windoWidth >= 1200) {
        document.querySelector(".sub_t").classList.toggle('showen')
        document.querySelector(".prof_box .prof_txt").classList.toggle('hidden')
        document.querySelector(".wa_title").classList.toggle('wa_tit_tog')
        document.querySelector(".wa_prof").classList.toggle('wa_pro_tog')
        mini_tit.classList.toggle('wa_mini_tit_tog')
        document.querySelector("article").classList.toggle('arti_tog')
        document.querySelector(".ul_bg").classList.toggle('ul_tog')
        document.querySelector(".arti_toggle").classList.toggle('toggle_tog')

        if (scrollTop + blind >= eleScroll) {
            document.querySelector('.prof_box .prof_txt').style.flexDirection = 'column'
            document.querySelector('.prof_box .prof_txt').style.alignItems = 'baseline'
            mini_tit.classList.remove('hidden')
            lline.classList.remove('hidden')

            if (togg == false) { // 사이드 X 타이틀 안보임

                // 라인스타일
                lline.style.width = '45.6vw'
                lline.style.marginLeft = '0.8vw'
                if (windoWidth < 1600 && windoWidth >= 1400) {
                    lline.style.marginLeft = '2.8vw'
                    lline.style.width = '46.6vw'
                } else if (windoWidth < 1900 && windoWidth >= 1600) {
                    lline.style.marginLeft = '0vw'
                    lline.style.width = '46.7vw'
                } else if (windoWidth >= 1900) {
                    lline.style.marginLeft = '3.5vw'
                    lline.style.width = '46.5vw'
                }
            } else { // 사이드 0 타이틀 안보임

                // 라인스타일
                lline.style.width = '45.7vw'
                lline.style.marginLeft = '0.8vw'
                if (windoWidth < 1600 && windoWidth >= 1400) {
                    lline.style.marginLeft = '3.5vw'
                    lline.style.width = '45.8vw'
                } else if (windoWidth < 1900 && windoWidth >= 1600) {
                    lline.style.marginLeft = '3.2vw'
                    lline.style.width = '46.6vw'
                } else if (windoWidth >= 1900) {
                    lline.style.marginLeft = '3.5vw'
                    lline.style.width = '46.5vw'
                }
            }

        } else if (scrollTop + blind < eleScroll) {
            document.querySelector('.prof_box .prof_txt').style.flexDirection = 'row'
            document.querySelector('.prof_box .prof_txt').style.alignItems = 'center'
            mini_tit.classList.add('hidden')

            if (togg == false) { // 사이드 X 타이틀 보임
                lline.classList.add('hidden')

            } else { // 사이드 0 타이틀 보임 (맨처음 상황)
                lline.classList.remove('hidden')

                // 라인스타일
                lline.style.width = '33.5vw'
                lline.style.marginLeft = '0.8vw'
                if (windoWidth < 1600 && windoWidth >= 1400) {
                    lline.style.marginLeft = '1.2vw'
                    lline.style.width = '38vw'
                } else if (windoWidth < 1900 && windoWidth >= 1600) {
                    lline.style.marginLeft = '0.9vw'
                    lline.style.width = '37vw'
                } else if (windoWidth >= 1900) {
                    lline.style.marginLeft = '1.5vw'
                    lline.style.width = '37.5vw'
                }
            }

        }


    }

}

document.querySelector(".arti_toggle").addEventListener("click", sidetap)