$(function(){
    // $(".video-title span:nth-child(1)" ).click(function(){
    //     $(this).addClass("active");
    //     $(this).siblings().removeClass("active");
    //     $(".liulan").removeClass("hidden");
    //     $(".xuanji").addClass("hidden");
    // })
    // $(".video-title span:nth-child(2)" ).click(function(){
    //     $(this).addClass("active");
    //     $(this).siblings().removeClass("active");
    //     $(".xuanji").removeClass("hidden");
    //     $(".liulan").addClass("hidden");
    // })
    var scrolh=parseFloat($(".scrol").css("height"));
    document.getElementById("scrol").style.height=scrolh-48+"px";
    // 左右移动
    $(".arrow-ri").click(function(){
        var marlf =parseInt($(".kecheng").css("margin-left"));
        $(".kecheng").css("margin-left",marlf-200+"px");
    })
    $(".arrow-lf").click(function(){
        var marlf =parseInt($(".kecheng").css("margin-left"));
        if(marlf<-200){
            $(".kecheng").css("margin-left",marlf+200+"px");
        }
        else{
            $(".kecheng").css("margin-left","0px");
        }
    })
    // 
    $(".below-title .comment" ).click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(".below .comments").removeClass("hidden");
        $(".below .kcjj").addClass("hidden");
    })
    $(".below-title .kc-details" ).click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $(".below .kcjj").removeClass("hidden");
        $(".below .comments").addClass("hidden");
    })
    // 
    // $(".liulan li" ).click(function(){
    //     $(this).addClass("active");
    //     $(this).siblings().removeClass("active");
    // })
    // 
    $(".xuanji .select-item>p").click(function(){
        if($(this).parent(".select-item").children(".lv-2").hasClass("hidden")!=true){
            $(this).parent(".select-item").children(".lv-2").addClass("hidden");
            $(this).children("span:nth-child(1)").addClass("close");
        }
        else{
            $(this).parent(".select-item").children(".lv-2").removeClass("hidden");
            $(this).children("span:nth-child(1)").removeClass("close");
        }
    })
})
window.onresize=function(){
    var scrolh=parseFloat($(".scrol").css("height"));
    document.getElementById("scrol").style.height=scrolh-48+"px";
}
// 
// 滚动距离判断
function isInViewPortOfOne (el) {
    // viewPortHeight 兼容所有浏览器写法
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ;
    const offsetTop = el.offsetTop;
    const offsetHeight = el.offsetHeight;
    const scrollTop = document.documentElement.scrollTop;
    // const top = (offsetTop+offsetHeight )- scrollTop
    const top = offsetTop-scrollTop;
    if(top<500&&top<viewPortHeight){
        return true
    }
    else{
        return false;
    }
}
window.onscroll = function(){
   if(document.documentElement.scrollTop>60){
    document.getElementById('header').classList.add("op0");
   }
   else{
    document.getElementById('header').classList.remove("op0");
   }
    if(isInViewPortOfOne(document.getElementById('content'))==true){
        document.getElementById('header').classList.add("fix");
        var h = document.getElementById('content');
        var h2 = document.documentElement.scrollTop-h.offsetTop+60;
        if(h2>0){
            document.getElementById('video-info').style.marginTop=h2+"px";
        }
    }
    else{
        document.getElementById('header').classList.remove("fix");
        document.getElementById('video-info').classList.remove("fix");
    }
}
