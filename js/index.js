$(document).ready(function(){
    $(".aside-box .arrow").on("click",function(){
        $(".aside-btn").fadeIn();
    });
    document.addEventListener('click',function (e) {
       var parent=$(e.target).parents('.aside-btn,.aside-box');
     
       if(parent.length===0){
        console.log('不在弹层与按钮区')
        //操作此区域
     
        $(".aside-btn").fadeOut();s
     
       }else{
        console.log('按钮与弹层区')
       }
      })
});


