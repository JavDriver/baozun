function addVal() {
    var oImg = document.getElementsByTagName("img");
    for (var i = 0; i< oImg.length; i++) {
        //获取表单，为表单添加onclick事件。而它的onclick事件就是调用click函数
        oImg[i].onclick = click;
    }
    console.log(oImg);
}



 //function click() {
 //       function fnWheel(obj, fncc) {
 //           obj.onmousewheel = fn;
 //           if (obj.addEventListener) {
 //               obj.addEventListener('DOMMouseScroll', fn, false);
 //           }
 //
 //           function fn(ev) {
 //               var oEvent = ev || window.event;
 //               var down = true;
 //
 //               if (oEvent.detail) {
 //                   down = oEvent.detail > 0
 //               } else {
 //                   down = oEvent.wheelDelta < 0
 //               }
 //
 //               if (fncc) {
 //                   fncc.call(this, down, oEvent);
 //               }
 //
 //               if (oEvent.preventDefault) {
 //                   oEvent.preventDefault();
 //               }
 //
 //               return false;
 //           }
 //
 //
 //       };
 //       fnWheel(this, function(down, oEvent){
 //
 //           var oldWidth = this.offsetWidth;
 //           var oldHeight = this.offsetHeight;
 //           var oldLeft = this.offsetLeft;
 //           var oldTop = this.offsetTop;
 //
 //           var scaleX = (oEvent.clientX - oldLeft) / oldWidth; //比例
 //           var scaleY = (oEvent.clientY - oldTop) / oldHeight;
 //
 //           if (down) {
 //               this.style.width = this.offsetWidth * 0.9 + "px";//0.9102
 //               this.style.height = this.offsetHeight * 0.9 + "px";//0.91
 //           } else {
 //               this.style.width = this.offsetWidth * 1.2 + "px";
 //               this.style.height = this.offsetHeight * 1.1 + "px";// 0.999999
 //           }
 //
 //           var newWidth = this.offsetWidth;
 //           var newHeight = this.offsetHeight;
 //
 //           this.style.left = oldLeft - scaleX * (newWidth - oldWidth) + "px";
 //           this.style.top = oldTop - scaleY * (newHeight - oldHeight) + "px";
 //       });
 //
 //   }
$(function(){
    function zoomImg(o) {
        var zoom = parseInt(o.style.width, 10) || 100;
        zoom += event.wheelDelta / 120; //可适合修改
        if (zoom > 0)
            o.style.width = zoom + '%';
    }
    $(document).ready(function() {
        $("img").bind("mousewheel", function() {
            zoomImg(this);
            return false;
        });
    });
})
//拖拽
var ie=document.all;
var nn6=document.getElementByIdx&&!document.all;
var isdrag=false;
var y,x;
var oDragObj;
function moveMouse(e) {
    if (isdrag) {
        oDragObj.style.top  =  (nn6 ? nTY + e.clientY - y : nTY + event.clientY - y)+"px";
        oDragObj.style.left  =  (nn6 ? nTX + e.clientX - x : nTX + event.clientX - x)+"px";
        return false;
    }
}
function initDrag(e) {
    var oDragHandle = nn6 ? e.target : event.srcElement;
    var topElement = "HTML";
    while (oDragHandle.tagName != topElement && oDragHandle.className != "dragAble") {
        oDragHandle = nn6 ? oDragHandle.parentNode : oDragHandle.parentElement;
    }
    if (oDragHandle.className=="dragAble") {
        isdrag = true;
        oDragObj = oDragHandle;
        nTY = parseInt(oDragObj.style.top+0);
        y = nn6 ? e.clientY : event.clientY;
        nTX = parseInt(oDragObj.style.left+0);
        x = nn6 ? e.clientX : event.clientX;
        document.onmousemove=moveMouse;
        return false;
    }
}
document.onmousedown=initDrag;
document.onmouseup=new Function("isdrag=false");


