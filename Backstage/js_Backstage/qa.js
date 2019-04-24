var page_num = new Array();
var page_sum = new Array();
$(function(){
    $(".list-content .list-title ul li").click(function(){
        $(this).addClass("select");
        $(this).siblings().removeClass("select");
        var index = $(".list-content .list-title ul li").index(this);
        if(index==0){
            $(".list-content .newest").removeClass("hidden");
            $(".list-content .newest").siblings(".list-block").addClass("hidden");
            $(".list-content .page1").removeClass("hidden");
            $(".list-content .page1").siblings(".page").addClass("hidden");
        }
        else if(index==1){
            $(".list-content .unsolved").removeClass("hidden");
            $(".list-content .unsolved").siblings(".list-block").addClass("hidden");
            $(".list-content .page2").removeClass("hidden");
            $(".list-content .page2").siblings(".page").addClass("hidden");
        }
        else if(index==2){
            $(".list-content .solved").removeClass("hidden");
            $(".list-content .solved").siblings(".list-block").addClass("hidden");
            $(".list-content .page3").removeClass("hidden");
            $(".list-content .page3").siblings(".page").addClass("hidden");
        }
        else if(index==3){
            $(".list-content .mine").removeClass("hidden");
            $(".list-content .mine").siblings(".list-block").addClass("hidden");
            $(".list-content .page4").removeClass("hidden");
            $(".list-content .page4").siblings(".page").addClass("hidden");
        }
    })
    $('.page li').click(function(){
        var page;
        // $(this).addClass("page-act");
        $(this).siblings().removeClass("page-act");
        var pageid = $(this).parent().attr('id');
        switch(pageid){
            case'page1':
                i=0;
                break;
            case'page2':
                i=1;
                break;
            case'page3':
                i=2;
                break;
            case'page4':
                i=3;
                break;
            case'page5':
                i=4;
                break;
            case'page6':
                i=5;
                break;
            case'page7':
                i=6;
                break;
        }
        page = $(this).children().text();
        // console.log(page);
        if(page=="下一页"){
            page = parseInt(page_num[i])+1;
        }
        else if(page == "上一页"){
            page = parseInt(page_num[i])-1;
        }
        else if(page == "1..."){
            page=1;
        }
        else if(page==("..."+page_sum[i])){
            page = page_sum[i];
        }
        else{
            page = parseInt(page);
        }
        showPages (page, page_sum[i], pageid)
        page_num[i]=page;
    })
})
//分页函数
function showPages (page, total, pagec) {
    // console.log("page2=",page);
    var str = page + '';
    for (var i = 1; i <= 2; i++) {
        if (page - i > 1) {
            str = page - i + ' ' + str;
        }
        if (page + i < total) {
            str = str + ' ' + (page + i);
        }
    }

    if (page - 3 > 1) {
        str = '... ' + str;
    }

    if (page > 1) {
        if(page<5){
            str = '上一页 ' + 1 + ' ' + str;
        }
        else{
            str = '上一页 ' + 1 + '' + str;
        }
    }

    if (page + 3 < total) {
        str = str + ' ...';
    }

    if (page < total) {
        if(page>total-4){
            str = str + ' ' + total + ' 下一页';
        }
        else{
            str = str + '' + total + ' 下一页';
        }
    }
    // console.log(str);
    //拆分应用到HTML
    var arr = str.split(" ");
    for(i=0;i<9;i++){
        // console.log("arr=",arr[i]);
        // console.log("page3=",page);
        if(page<5){
            if(page==1){
                $('.'+pagec).children().eq(0).addClass("page-act");
            }
            else if(i==page){
                $('.'+pagec).children().eq(i).addClass("page-act");
            }
        }
        else{
            $('.'+pagec).children().eq(4).addClass("page-act");
        }
        $('.'+pagec).children().eq(i).empty();
        if(arr[i]==undefined){
            $('.'+pagec).children().eq(i).append("<a>"+""+"</a>");;
        }
        else {    
            $('.'+pagec).children().eq(i).append("<a>"+arr[i]+"</a>");
        }
    }
}
window.onload=function(){
    // 初始化分页
    for(i=0;i<7;i++){
        page_num[i]=1;
        page_sum[i]=10;
        showPages(page_num[i], page_sum[i],'page'+(i+1))
    }
}