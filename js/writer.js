import {writer} from './arti_list.js'

let path = String(window.location.pathname);
let wr_num = path.substr(7, 1); //지금 작가 번호 확인
console.log(wr_num)

function puttxt({ wr_txt,tit}) {
    //글마다 제목
    for (let i = 1; i < 7; i++) {
        document.querySelector('.artis li:nth-child(' + i + ') h3').innerText = tit[i-1];
         //작가별 작가 설명
        document.querySelector('.top_bg .wr_txt').innerText = wr_txt;
    }

}

// 작가별
 if (wr_num == 1) puttxt(writer.wri1);
 else if(wr_num == 2) puttxt(writer.wri2);
 else if(wr_num == 3) puttxt(writer.wri3);
 else if(wr_num == 4) puttxt(writer.wri4);
 else if(wr_num == 5) puttxt(writer.wri5);
 else if(wr_num == 6) puttxt(writer.wri6);
 else if(wr_num == 7) puttxt(writer.wri7);
 else if(wr_num == 8) puttxt(writer.wri8);