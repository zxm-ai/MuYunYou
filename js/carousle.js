/*
轮播图特效 
*/
(function(){
    /* 得到元素*/
    var oList = document.getElementById('carousle_list');
    var oLeftBtn = document.getElementById('leftbtn');
    var oRightBtn = document.getElementById('rightbtn');
    var oCircles = document.getElementById('circles_ol');
    var oCirclesLis = oCircles.getElementsByTagName('li');
    var oBanner = document.getElementById('banner');
    /* 克隆第一个li */
    var last_list = oList.firstElementChild.cloneNode(true);
    oList.appendChild(last_list);
   
    var id = 0;
    var lock=true;

    // timer = setInterval(function(){
    //     /* clearInterval(timer); */
    //     oList.style.transition = 'transform 1s ease 0s';
    //     id++;
    //     console.log(id);
    //     if(id>4){
    //         setTimeout(function(){
    //             oList.style.transition = 'none';
    //             oList.style.transform = 'translateX(0)';
    //             id=0;
    //         },1000)
    //     }
    //     oList.style.transform = 'translateX('+ id*(-16.666) + '%)';
    // },1000)
    


    oRightBtn.onclick = rightBtnHandler;
    //右按钮的事件处理函数
    function rightBtnHandler(){
        if(!lock)return;
        lock = false;
        oList.style.transition = 'transform 1s ease 0s';
        id++;
       /*  console.log(id); */
        if(id>4){
            setTimeout(function(){
                oList.style.transition = 'none';
                oList.style.transform = 'translateX(0)';
                id=0;
            },1000)
        }
        oList.style.transform = 'translateX('+ id*(-16.666) + '%)';
        setCircle();
        //动画结束 就开锁
        setTimeout(function(){
            lock = true;
        },1000);
    }
    oLeftBtn.onclick = function(){
        if(!lock)return;
        lock = false;
        //左按钮很特殊，要先写if语句，而不是idx--
        if(id==0){
            
            oList.style.transition = 'none';
            oList.style.transform = 'translateX('+ 5*(-16.666) + '%)';
            id = 4;
            setTimeout(function(){
                oList.style.transition = 'transform 1s ease 0s';
                oList.style.transform = 'translateX('+ id*(-16.666) + '%)';
            },0)
        }else{
            id--;
            oList.style.transform = 'translateX('+ id*(-16.666) + '%)';
        }
        setCircle();
                //动画结束 就开锁
        setTimeout(function(){
            lock = true;
        },1000);
    }

    function setCircle(){
        for(var i=0;i<oCirclesLis.length;i++){
            if(i == id%5){
                oCirclesLis[i].className = 'current';
            }else{
                oCirclesLis[i].className = '';
            }
        }
    }
    oCircles.onclick = function(e){
        if(e.target.tagName.toLowerCase() == 'li'){
            var n = Number(e.target.getAttribute('data-n'));
            id = n;
            oList.style.transform = 'translateX('+ id*(-16.666) + '%)';
            setCircle();
        }
    }
    /**
     * 自动轮播
     */
    var timer = setInterval(rightBtnHandler, 2000);
    oBanner.onmouseenter = function(){
        clearInterval(timer);
    }
    oBanner.onmouseleave = function(){
        clearInterval(timer);
        timer = setInterval(rightBtnHandler, 2000);
    }
})();

