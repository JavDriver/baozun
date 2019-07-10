var progress = document.getElementsByClassName('progress')[0];
//生成二维码
var shareContent  = $('#app')[0];
var width = shareContent.offsetWidth; //获取dom 宽度
var height = shareContent.offsetHeight; //获取dom 高度
console.log(height,'dom高度')
var canvas = document.createElement("canvas"); //创建一个canvas节点
var scale = 1; //定义任意放大倍数 支持小数
canvas.width = width * scale; //定义canvas 宽度 * 缩放
canvas.height = height * scale; //定义canvas高度 *缩放
canvas.getContext("2d").scale(scale, scale); //获取context,设置scale
var opts = {
    scale: scale, // 添加的scale 参数
    canvas: canvas, //自定义 canvas
    logging: true, //日志开关，便于查看html2canvas的内部执行流程
    width: width, //dom 原始宽度
    height: height,
    useCORS: true ,// 【重要】开启跨域配置
    letterRendering: true,
    allowTaint: false
};

//生成图片


html2canvas(shareContent, opts).then(function (canvas) {
    var context = canvas.getContext('2d');
    // 【重要】关闭抗锯齿
    context.mozImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.imageSmoothingEnabled = false;
    
    canvas.id = "icanvas";
    progress.value = 50;
    $("#createImg").append(canvas);
    var url = canvas.toDataURL();
    $("#firstImg").attr('src', url);

}).then(function () {
    //将base64签名后的canvas存为图片
    var oldUrl = document.getElementById('icanvas').toDataURL();
    var heightc = $('#icanvas').outerHeight();
    var originImage = new Image();
    originImage.src = oldUrl;
    originImage.onload = function () {
        var c = document.getElementById("clipCanvas");
        c.width = "750";
        c.height = heightc;
        var ctx = c.getContext("2d");
        ctx.drawImage(originImage, 0, 0, 750, heightc, 0, 0, 750, heightc);
        var newUrl = c.toDataURL("image/png", 1);
        document.getElementById("firstImg").src = newUrl;
        //以下代码为下载此图片功能
        //var triggerDownload = $("#download").attr("href", newUrl).attr("download", "product");
        var link = document.getElementById("download");
        link.onclick = function () {

            var imgData = c.toDataURL({
                format: 'png',
                multiplier: 4
            });
            var strDataURI = imgData.substr(22, imgData.length);
            var blob = dataURLtoBlob(imgData);
            var objurl = URL.createObjectURL(blob);

            link.download = "helloWorld.png";

            link.href = objurl;

            link.click();

        }
        // console.log(triggerDownload);
        progress.value = 100;

        function dataURLtoBlob(dataurl) {
            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {type: mime});
        }
    }
    })

//123

















