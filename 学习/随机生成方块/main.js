/**
 * Created by HSH10111 on 2018/11/21.
 */
this.width = 50;
this.height =50;

var dw = document.getElementById('dw');
//数组，存储创建的方块对象
var array =[];
for (var i = 0; i < 10; i++){
    var r = Tools.getRandom(0,255);
    var g = Tools.getRandom(0,255);
    var b = Tools.getRandom(0,255);
    var box = new Box(dw, {
        backgroundColor:'rgb('+ r +','+ g +','+ b +')'
    });
//把创建好的方块的对象，添加到数组中
    array.push(box);
}
// 设置随机位置，开启定时器
setInterval(randomBox, 500);

// 页面加载完成，先设置随机位置
randomBox();

function randomBox() {
    // 随机生成方块的坐标
    for (var i = 0; i < array.length; i++) {
        var box = array[i];
        box.random();
    }
}
