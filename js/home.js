// 초대장팝업 여닫기
const show = () => {
    document.querySelector(".invit_bg").classList.remove('hidden')
    document.querySelector(".to_form").classList.remove('hidden')
    document.querySelector(".invit_p").classList.remove('hidden')
    document.getElementById('x').classList.remove('hidden')
    document.getElementById('invite').classList.add('hidden')
    document.querySelector(".homelist li").style.zIndex = '0'
    document.querySelector(".invit_popup").style.zIndex = '6'
}

const close = () => {
    document.querySelector(".invit_bg").classList.add('hidden')
    document.querySelector(".to_form").classList.add('hidden')
    document.querySelector(".invit_p").classList.add('hidden')
    document.getElementById('x').classList.add('hidden')
    document.getElementById('invite').classList.remove('hidden')
    document.querySelector(".homelist li").style.zIndex = '4'
    document.querySelector(".invit_popup").style.zIndex = '2'
}

document.getElementById("invite").addEventListener("click", show)
document.getElementById("x").addEventListener("click", close)


// 마우스따라가는 원
const circle = document.getElementById("circle_cs");

document.addEventListener("mousemove", (e) => { // mousemove이벤트를 이용해 움

    // 마우스의 좌표는 clientX와 clientY를 이용해 알수 있다. -> 브라우저 window의 좌표값 위치를 전달한다.
    if (document.documentElement.clientWidth >= 1200) {

        const mouseX = e.clientX;

        const mouseY = e.clientY;

        circle.style.left = mouseX + 'px';

        circle.style.top = mouseY + 'px';
    } else {
        circle.style.left = '0';
        circle.style.top = 'calc(15px + 20vw + 5rem)';

    }
});