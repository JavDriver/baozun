var progress = document.getElementsByClassName('progress')[0];
//生成二维码


//生成图片


html2canvas(document.getElementById("app"), {
    useCORS: true,
    logging: false,

    // window.devicePixelRatio是设备像素比
    dpi: 192,
}).then(function (canvas) {
    canvas.id = "icanvas";
    progress.value = 50;
    $("#createImg").append(canvas);
    var url = canvas.toDataURL();
    $("#firstImg").attr('src', url);


}).then(function () {
    //将base64签名后的canvas存为图片
    var oldUrl = document.getElementById('icanvas').toDataURL();
    var heightc = $('#icanvas').outerHeight() * 2;
    var originImage = new Image();
    originImage.src = oldUrl;
    originImage.onload = function () {
        var c = document.getElementById("clipCanvas");
        c.width = "1500";
        c.height = heightc;
        var ctx = c.getContext("2d");
        ctx.drawImage(originImage, 0, 0, 1500, heightc, 0, 0, 1500, heightc);
        var newUrl = c.toDataURL("image/png",1);
        document.getElementById("firstImg").src = newUrl;
        //以下代码为下载此图片功能
        //var triggerDownload = $("#download").attr("href", newUrl).attr("download", "product");
        var link = document.getElementById("download");
        link.onclick = function(){

            var imgData = c.toDataURL({  format: 'png',
                multiplier: 4});
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
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {type:mime});
        }
    }

})


