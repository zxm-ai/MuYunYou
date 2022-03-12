(function(){
    var oHotUl = document.getElementById('hotlist');
    var oMenus = document.getElementById('menus_box');
    var oBannerNac = document.getElementById('banner-nac');
    var oHotList = oHotUl.getElementsByTagName('li');
    var oMenusList = oMenus.getElementsByTagName('div');

    oHotUl.onmouseover = function(e){
        if(e.target.tagName.toLowerCase() == 'li'){
            var data_i = e.target.getAttribute('data-i');
            for(var i=0;i<oMenusList.length;i++){
                if(oMenusList[i].getAttribute('data-i')==data_i){
                    oMenusList[i].className = 'menu current';
                }else{
                    oMenusList[i].className = 'menu';
                }
            }
        }
    }
    oBannerNac.onmouseleave = function(){
        for(var i=0;i<oMenusList.length;i++){
            oMenusList[i].className = 'menu';
        }
    }
})();