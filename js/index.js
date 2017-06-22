$(document).ready(function(){
    $(".aside-box .arrow").on("click",function(){
        $(".aside-btn").fadeToggle();
    });
    document.addEventListener('click',function (e) {
       var parent = $(e.target).parents('.aside-btn,.aside-box');
     
       if(parent.length===0){
        console.log('不在弹层与按钮区')
        //操作此区域
     
        $(".aside-btn").fadeOut();
     
       }else{
        console.log('按钮与弹层区')
       }
      });
    $(".shop-img a").on("click",function(){
        $(this).parents("li").find(".alert-box").show();
        $(this).parents(".content").addClass("shadow");
        window.onmousewheel=function(){return false};
        return false;
    });

    $(".close").on("click",function(){
        $(this).parents(".alert-box").hide();
        $(this).parents(".content").removeClass("shadow");
        window.onmousewheel=function(){return true};
    });

    // 点击加减按钮对应的商品进行加减
    var i = 1;
    $(".sub").on("click",function(){
        i -= 1;
        if(i == 0)i = 1;
        $(this).siblings("input").val(i);
        return false;
    });
    $(".add").on("click",function(){
        i += 1;
        $(this).siblings("input").val(i);
        return false;
    });

    // 点击购物车进行相应的操作
    $(".shop-car").on("click",function(){
        var imgUrl = $(this).parents(".alert-box").find(".alert-shop-img img").attr("src");
        var shopName = $(this).parents(".alert-box").find(".alert-shop-ad").html() + $(this).parents(".alert-box").find(".alert-shop-name").html();
        var shopPrice = $(this).parents(".alert-box").find(".alert-price").html();
        var shopNum = $(this).parents(".alert-box").find(".count-box").find("input").val();
        var li = '<li class="shop-detail clearfix"><div class="check-box"><input type="checkbox" id="checkboxFourInput2"><label for="checkboxFourInput2"></label></div><div class="card-img"><a href=""><img src="'+imgUrl+'"></a></div><dl><dt>'+shopName+'</dt><dd class="price">'+shopPrice+'</dd><dd class="count"><img src="img/关闭.png"><span>'+shopNum+'</span></dd></dl><div class="num-controls"><ul class="num-control"><li>+</li><li>-</li></ul><div class="del">删除</div></div></li>';
        console.log(li);
        $(".card-bar").find("ul").appendTo(li);
    });
});


