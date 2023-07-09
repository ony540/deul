function move_page() {
    location.href = "home.html" // 페이지 이동
}
const toHome = () => {
    document.querySelector("#onboard #on_tt li:nth-child(1)").classList.add('fallen1')
    document.querySelector("#onboard #on_tt li:nth-child(2)").classList.add('fallen2')
    document.querySelector("#onboard #on_tt li:nth-child(3)").classList.add('fallen3')
    document.querySelector("#onboard #on_tt li:nth-child(4)").classList.add('fallen4')
    setTimeout('move_page()', 2700) // 2.8초 후 이동
    setTimeout('window.location.reload()', 3000) // 3초 후 새로고침
}
document.getElementById("on_hole").addEventListener("click", toHome)