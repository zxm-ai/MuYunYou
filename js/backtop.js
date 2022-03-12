(function(){
    var oBackTop = document.getElementById('backtop');
    var timer;
    oBackTop.onclick = function(){
        clearInterval(timer); 
        timer = setInterval(function() {
            document.documentElement.scrollTop -=200;
            if(document.documentElement.scrollTop<=0){
                clearInterval(timer);
            }
        }, 20);
    }
    //监听页面的滚动
    window.onscroll = function(){
        var scrollTop = document.documentElement.scrollTop || window.scrollY
        if(scrollTop == 0){
            oBackTop.style.display = 'none';
        }else{
            oBackTop.style.display = 'block';
        }
    }

})();