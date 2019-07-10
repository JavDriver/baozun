/**
 * Created by Administrator on 2017/12/26.
 */
    //checkbox样式修改
$(".piaochecked").on("click",function(){
    $(this).hasClass("on_check")? $(this).removeClass("on_check"):$(this).addClass("on_check");
    //或者这么写
    // $(this).toggleClass( "on_check" );
})

//弹窗
$(function(){

    $('#loginform').submit(function(e){
        return false;
    });
    //弹出层调用语句
    $('.modaltrigger').leanModal({
        top:0,
        overlay:0.45,
        closeButton:".hidemodal1"

    });

    $('.modaltrigger1').leanModal({
        top:145,
        overlay:0.45,
        closeButton:".hidemodal"

    });

    $('.modaltrigger2').leanModal({
        top:0,
        overlay:0.95,
        closeButton:".hidemodal"

    });

    $('.modaltrigger3').leanModal1({
        top:100,
        overlay:0.95,
        closeButton:".hidemodal2"

    });


    $('.modaltrigger4').leanModal2({
        top:100,
        overlay:0.95,
        closeButton:".hidemodal3"

    });
});

//导航改变class
$(function(){
    pos = 0;
    ticking = false;
    var header = document.querySelector("header");
    window.addEventListener("scroll", function(e){
        pos = window.scrollY;
        if(pos > 900&&!ticking){
            header.classList.add("scrolledDown");
            ticking = true;
        }
        if(pos < 900 && ticking){
            header.classList.remove("scrolledDown");
            ticking = false;
        }
    });
});


//锚点滑动
$(function(){
    $('a[href*=#],area[href*=#]').click(function() {
        console.log(this.pathname)
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    1000);
                return false;
            }
        }
    });
})


//导航下拉
$(function(){
    $('.is-sticky ul li').hover(function(){
        $(this).find('.weixin-Qr-code').stop().slideDown();
    },function(){
        $(this).find('.weixin-Qr-code').stop().slideUp();
    });

});


//导航下拉
$(function(){
    $('.is-sticky ul li').hover(function(){
        $(this).find('.weixin-Qr-code').stop().slideDown();
    },function(){
        $(this).find('.weixin-Qr-code').stop().slideUp();
    });

});

$(function(){
    $('.nav ul li').hover(function(){
        $(this).find('.nac').stop().slideDown();
    },function(){
        $(this).find('.nac').stop().slideUp();
    });

});
//点击滑动效果
$(document).ready(function(){
    $(this).find(".conter-right1 dl").click(function(){
        $(this).find(".conter-right11").slideToggle("slow");
    });
});

//点击切换class
$(document).ready(function(){
    $(".conter-right1 dl").click(function(){
        $(this).toggleClass("conter-right1_main");
    });
});

$(document).ready(function(){
    $(".sdyd1").click(function(){
        $(this).toggleClass("sdyd2");
    });
});


$(document).ready(function(){
    $(".js-login").click(function(){
        $(this).closest(".no-login-box").toggleClass("js-login1");
    });
});
//切换class
$(".gs41 ul li").mouseover(function(){
    $(".gs41 ul li").removeClass("active");
    $(this).addClass("active");
    $(".gs41 ul li").find("span").hide();
    $(this).find("span").show();
});



//点击显示隐藏
//<a href="javascript:"  class="zwx22" onclick="openShutManager(this,'box1',false)">其他  <img src="images/zw02.png"></a>
//    <div  class="zwx23"  id = "box1" style="display:none;">
//    </div>
function openShutManager(oSourceObj,oTargetObj,shutAble,oOpenTip,oShutTip){
    var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
    var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
    var openTip = oOpenTip || "";
    var shutTip = oShutTip || "";
    if(targetObj.style.display!="none"){
        if(shutAble) return;
        targetObj.style.display="none";
        if(openTip  &&  shutTip){
            sourceObj.innerHTML = shutTip;
        }
    } else {
        targetObj.style.display="table-cell";
        if(openTip  &&  shutTip){
            sourceObj.innerHTML = openTip;
        }
    }
}



//选项卡
//<div class='tabs' id="tabs">
//    <ul class='horizontal'>
//    <li rel="tab-1">information</li>
//    <li rel="tab-2" class="selectActive">tab2</li>
//    <li rel="tab-3" >tab3</li>
//    </ul>
//    <div rel='tab-1'><span>Change the tab to see that there is an animation.</span></div>
//<div rel='tab-2'><span>Tab 2</span></div>
//<div rel='tab-3'><span>Tab 3</span></div>
//</div>
//<script type="text/javascript">
//    tabs_takes.init("tabs");
//</script>
var tabs_takes={
    "init":function(containId){
        if(containId==null||containId==""){
            alert("id不能为空");
            return;
        }
        $("#"+containId+">ul>li").on("click",function(){
            tabs_takes.tabItemTakes(containId,this)
        });
        var liActiveNumber =  $("#"+containId+" ul li.selectActive").length;
        if(liActiveNumber>0){
            var liRel = $("#"+containId+">ul>li.selectActive").eq(0).attr("rel");
            $("#"+containId+">div").css("display","none");
            $("#"+containId+">div[rel='"+liRel+"']").css("display","block");
            var tabHrefRel = $("#"+containId+">ul>li.selectActive").eq(0).attr("relHref");
            if(tabHrefRel!=null&&tabHrefRel!=""){
                $("#"+containId+">div[rel='"+liRel+"']").load(tabHrefRel);
            }
        }else{
            var liRel = $("#"+containId+">ul>li").eq(0).attr("rel");
            $("#"+containId+">ul>li").eq(0).addClass("selectActive");
            $("#"+containId+">div").eq(0).css("display","block");
            var tabHrefRel = $("#"+containId+">ul>li").eq(0).attr("relHref");
            if(tabHrefRel!=null&&tabHrefRel!=""){
                $("#"+containId+">div[rel='"+liRel+"']").load(tabHrefRel);
            }
        }
    },
    "tabItemTakes":function(containId,thisObj){
        var tabRel = $(thisObj).attr("rel");
        $("#"+containId+">ul>li").removeClass("selectActive");
        $(thisObj).addClass("selectActive");
        $("#"+containId+">div").css("display","none");
        $("#"+containId+">div[rel='"+tabRel+"']").css("display","block");
        var tabHrefRel = $(thisObj).attr("relHref");
        if(tabHrefRel!=null&&tabHrefRel!=""){
            $("#"+containId+">div[rel='"+tabRel+"']").load(tabHrefRel);
        }
    }
}


















