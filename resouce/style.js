/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * editor LX
 */


function toStr(n){
    if(n<10){
        return '0'+n;
    }
    else{
        return ''+n;
}
}


window.onload=function(){
    var oDiv=document.getElementById('clock');
    var oImg=oDiv.getElementsByTagName('img');
    
    function timer(){
       var oTime=new Date();
       var str=toStr(oTime.getHours())+toStr(oTime.getMinutes())+toStr(oTime.getSeconds());
        for (i=0;i<oImg.length;i++){
            oImg[i].src='http://o9ybnkuir.bkt.clouddn.com/javascript09/'+str.charAt(i)+'.png';
        };
    };
    setInterval(timer,1000);
    timer();
}