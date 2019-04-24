function more(){
    var hi= document.getElementById("hiden").style.overflow;
    console.log(hi)
    if(hi=="hidden"){
        document.getElementById("hiden").style.overflow="visible";
        document.getElementById("hiden").style.height="auto";
        console.log("visible",hi)
    }
    else{
        document.getElementById("hiden").style.overflow="hidden";
        document.getElementById("hiden").style.height="";
        console.log("hidden",hi)
    }
}
$(function(){
    $(".content-three .title-nav").click(function () { 
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var index = $(".content-three .title-nav").index(this);
        if(index==0){
            $(".my-content-1").removeClass("hidden");
            $(".my-content-1").siblings().addClass("hidden");
            $(".title").removeClass("hidden");
        }
        else if(index==1){
            $(".my-content-2").removeClass("hidden");
            $(".my-content-2").siblings().addClass("hidden");
            $(".title").removeClass("hidden");
        }
        else{
            $(".my-content-3").removeClass("hidden");
            $(".my-content-3").siblings().addClass("hidden");
            $(".title").removeClass("hidden");
        }
    });
    $(".first-title li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        var index = $(".first-title li").index(this);
        console.log(index)
        if(index==0){
            $(".first-1").removeClass("hidden");
            $(".first-1").siblings(".first-list").addClass("hidden");
        }
        else if(index==1){
            $(".first-2").removeClass("hidden");
            $(".first-2").siblings(".first-list").addClass("hidden");
        }
        else {
            $(".first-3").removeClass("hidden");
            $(".first-3").siblings(".first-list").addClass("hidden");
        }
    })
})