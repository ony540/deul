import {writer} from './arti_list.js'

function puttxt({tit,arti},i) {
    for (let j = 1; j <= 4; j++) { //글마다
        document.querySelector('#w' + i + ' .tit' + j).innerText = tit[j - 1];
        document.querySelector('#w' + i + ' .arti' + j).innerText = arti[j - 1];
    }
    if ( i == 4){
        document.querySelector('#w4 .arti1').innerHTML = arti[0];
        document.querySelector('#w4 .arti4').innerHTML = arti[3];
    }

}

// 작가별 텍스트넣기
for (let i = 1; i < 9; i++) {
    if (i == 1) puttxt(writer.wri1,1);
    else if (i == 2) puttxt(writer.wri2,2);
    else if (i == 3) puttxt(writer.wri3,3);
    else if (i == 4) puttxt(writer.wri4,4);
    else if (i == 5) puttxt(writer.wri5,5);
    else if (i == 6) puttxt(writer.wri6,6);
    else if (i == 7) puttxt(writer.wri7,7);
    else if (i == 8) puttxt(writer.wri8,8);
}