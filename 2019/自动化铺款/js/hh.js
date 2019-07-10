var obj = {
    list: book,
    product: '文胸',
    english: 'bras&bralettes'

}
//使用模板
var str = template('tmp', obj)
//替换
$('.conten').html(str)



//function addVal() {
//    var oImg = document.getElementsByTagName("img");
//    for (var i = 0; i< oImg.length; i++) {
//        //获取表单，为表单添加onclick事件。而它的onclick事件就是调用click函数
//        oImg[i].onclick = click;
//    }
//    console.log(oImg);
//}


//$(function(){
//    function zoomImg(o) {
//        var zoom = parseInt(o.style.width, 10) || 100;
//        zoom += event.wheelDelta / 120; //可适合修改
//        if (zoom > 0)
//            o.style.width = zoom + '%';
//        console.log(o.style.width);
//    }
//    $(document).ready(function() {
//        $("img").bind("mousewheel", function(){
//            zoomImg(this);
//
//            return false;
//        });
//    });
//})
////拖拽
//var ie=document.all;
//var nn6=document.getElementByIdx&&!document.all;
//var isdrag=false;
//var y,x;
//var oDragObj;
//function moveMouse(e) {
//    if (isdrag) {
//        oDragObj.style.top  =  (nn6 ? nTY + e.clientY - y : nTY + event.clientY - y)+"px";
//        oDragObj.style.left  =  (nn6 ? nTX + e.clientX - x : nTX + event.clientX - x)+"px";
//        return false;
//    }
//}
//function initDrag(e) {
//    var oDragHandle = nn6 ? e.target : event.srcElement;
//    var topElement = "HTML";
//    while (oDragHandle.tagName != topElement && oDragHandle.className != "dragAble") {
//        oDragHandle = nn6 ? oDragHandle.parentNode : oDragHandle.parentElement;
//    }
//    if (oDragHandle.className=="dragAble") {
//        isdrag = true;
//        oDragObj = oDragHandle;
//        nTY = parseInt(oDragObj.style.top+0);
//        y = nn6 ? e.clientY : event.clientY;
//        nTX = parseInt(oDragObj.style.left+0);
//        x = nn6 ? e.clientX : event.clientX;
//        document.onmousemove=moveMouse;
//        return false;
//    }
//}
//document.onmousedown=initDrag;
//document.onmouseup=new Function("isdrag=false");
//

//var input1
//
//$(".dragAble").dblclick(function(){
//    var src=$(this).attr("src" ,input1);
//});
//
//$(" #wblj2 ").click(function(){
//    var input=$(".wblj1").val();
//    input1 = input;
//});




//$(function(){
//    $("#saveImg").click(function(){
//        html2canvas($(".conten"),{
//            useCORS:true,
//            logging:true,
//            onrendered: function(canvas) {
//            var url = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
//           window.location.href= url; // 下载图片
//        }
//        })
//    });
//});

//
//$(function(){
//    $("#saveImg").click(function(){
//    var w = $(".conten").width();
//    var h = $(".conten").height();
//    var canvas = document.createElement("canvas");
//    canvas.width = w * 2;
//    canvas.height = h * 2;
//    canvas.style.width = w + "px";
//    canvas.style.height = h + "px";
//    var context = canvas.getContext("2d");
//    context.scale(2,2);
//    html2canvas($(".conten"), {
//        canvas: canvas,
//        useCORS:true,
//        logging:true,
//        onrendered: function(canvas) {
//            var url = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
//            window.location.href= url; // 下载图片
//        }
//    })
//    })
//    })
