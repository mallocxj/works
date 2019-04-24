$(function(){
    $(".teacher-list .list li").hover(function(){
        $(this).css({"width":"370px"},{"height":"462px"});
        $(this).addClass("active");
        $(this).siblings().css({"width":"308px"},{"height":"418px"});
        $(this).siblings().removeClass("active");
    })
    $(".content .left").click(function(){
        var wid = parseInt($(".content .list").css("marginLeft"));
        if(wid<-308){
            $(".content .list").css("margin-left",308+wid+"px");
        }
         else if(wid=>-308&&wid<0){
            $(".content .list").css("margin-left",0+"px");
        }
    })
    $(".content .right").click(function(){
        var wid = parseInt($(".content .list").css("marginLeft"));
        $(".content .list").css("margin-left",-308+wid+"px");
    })
})
// 滚动距离判断
function isInViewPortOfOne (el) {
    // viewPortHeight 兼容所有浏览器写法
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ;
    const offsetTop = el.offsetTop;
    const offsetHeight = el.offsetHeight;
    const scrollTop = document.documentElement.scrollTop;
    const top = (offsetTop+offsetHeight )- scrollTop
    if(top>0&&top<viewPortHeight){
        return true
    }
    else{
        return false;
    }
}
window.onload=function(){
    if(isInViewPortOfOne(document.getElementById('top-header'))==true){
        document.getElementById('fix-nav').style.opacity="0"
    }
    else{
        document.getElementById('fix-nav').style.opacity="1";
    }
    /*_--------------*/
    if(isInViewPortOfOne(document.getElementById("Anchor-1"))==true){
        document.getElementById("six-detail").classList.add("ani");
    }
     /*_--------------*/
     if(isInViewPortOfOne(document.getElementById("Anchor-2"))==true){
        document.getElementById("app").classList.add("ani");
    }
}
window.onscroll = function(){ 
    if(isInViewPortOfOne(document.getElementById('top-header'))==true){
        document.getElementById('fix-nav').style.opacity="0"
    }
    else{
        document.getElementById('fix-nav').style.opacity="1";
    }
    /*_--------------*/
    if(isInViewPortOfOne(document.getElementById("Anchor-1"))==true){
        document.getElementById("six-detail").classList.add("ani");
    }
     /*_--------------*/
     if(isInViewPortOfOne(document.getElementById("Anchor-2"))==true){
        document.getElementById("app").classList.add("ani");
    }
}
