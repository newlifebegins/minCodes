
$(function(){
	$('.aside-btn li').on('click',function(){
		var _index = $(this).index();
		
		$(this).addClass('active').siblings().removeClass('active');
		$('.content').eq(_index).addClass('active').siblings().removeClass('active');
		$('.name').eq(_index).addClass('active').siblings().removeClass('active');
	})
})

//banner 图轮播
//将速度去掉,速度靠计算得到
function move(obj,json,fn) {
    clearInterval(obj.timer);
    var cur = 0;
    obj.timer = setInterval(function () {
        var isTrue = true;
        for(var attr in json){
            //如果attr是opacity
            if(attr === "opacity"){
                cur = Math.round(getStyle(obj,attr)*100);
            }else{
                cur = parseInt(getStyle(obj,attr));
            }

            speed = (json[attr] - cur)/8;
            //对速度取整
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

            if(cur !== json[attr]){
                isTrue = false;
                if(attr === "opacity"){
                    obj.style.opacity = (cur + speed)/100
                    obj.style.filter = "alpha(opacity="+(cur+speed)+")";
                }else{
                    obj.style[attr] = cur + speed + 'px';
                }
            }
        }
        console.log(isTrue)
        //等所有属性都到达目标值  再结束动画
        if(isTrue){
            clearInterval(obj.timer);
            fn && fn.call(obj);
        }
    },30)
}
function getStyle(obj,attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
}
var btnL = document.getElementsByClassName('btn-l')[0],
    btnR = document.getElementsByClassName('btn-r')[0],
    bannerBox = document.getElementsByClassName('banner-box')[0],
    botBox = document.getElementsByClassName('bot-box')[0],
    bots = null,
    imgs = bannerBox.getElementsByTagName('li'),
    num = 0;
    var winW = document.documentElement.clientWidth,len = imgs.length;
    init();
    function init() {
        //获取到窗口的宽度
        var str='';
        //设置UL的宽度 = 窗口宽度*图片的个数
        bannerBox.style.width = winW * len + 'px';
        //根据图片的个数动态添加小点li
        for(var i=0;i<len;i++){
            str += '<li></li>';
            imgs[i].style.width = winW + 'px';
            console.log(str)
        }
        botBox.innerHTML=str;
        //给第一个Li添加active的class
        getFirst(botBox).className = "active";
        bots = botBox.getElementsByTagName('li');
    }
    
    btnR.onclick = function () {
        num ++;
        if(num === len){
            num = 0;
        }
        move(bannerBox,{
            marginLeft: -num*winW   //每次移动的距离  变成窗口的宽度
        })
        for (var i=0;i<len;i++){
            bots[i].className = "";
        }
        bots[num].className = "active";
    }
    btnL.onclick = function () {
        console.log(num)
        num --;
        if(num < 0){
            num = len - 1;
        }
        console.log(num)
        move(bannerBox,{
            marginLeft:-num*winW
        })
        for (var i=0;i<len;i++){
            bots[i].className = "";
        }
        bots[num].className = "active";
    }
    for(var i=0;i<len;i++){
        bots[i].index = i;
        bots[i].onclick = function () {
            //alert(this.index)
            num = this.index;
            move(bannerBox,{
                marginLeft: -num*960
            })
            for(var j=0;j<len;j++){
                bots[j].className = "";
            }
            this.className = "active";
        }
    }
    //获取元素的第一个子节点
    function getFirst(obj){
        return obj.firstElementChild || obj.firstChild;
    }
    
//弹出框商品数量增减
 $(function(){
        $(".add").on("click", function(){
        // 先找到当前加号的父元素class="card-box"的div,再寻找当前div下的文本框class="num" 
        var $countInput = $(this).parent(".count-box").children(".num");
        $countInput.val($countInput.val()-0+1);
    });
    $(".sub").on("click", function(){
        var $countInput = $(this).parent(".count-box").children(".num");
        if ($countInput.val()-0 > 0){
            $countInput.val($countInput.val()-1);
        }
    });
});
    