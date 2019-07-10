//setInterval(function () {
//    if (Date.now() > new Date("2018-10-24 14:56:58")) {
//        document.querySelector("#J_LinkBuy").click()
//    }
//}, 100);


//////////////////////////////////用户设置//////////////////////////////////////
var refeshPageTime = 2000; // 页面刷新时间，默认2000毫秒
var starmin = 00;  // 定时模式设置，默认在59分启动
var starsec = 00;  // 定时模式设置，默认在58秒启动，即在当前小时59:58启动抢购
var step = ['.mui-workshop-btn-primary'];// 如果在购买页面使用这个设置
// var step = ['.go-btn'];  // 如果生成了一键加车链接,推荐使用这个，视网速可以节省3-5s
// 这是一个通用的程序，只需要在step中告诉程序点击顺序就可以了，理论上可以用于任何商城如京东天猫聚划算等抢购。
///////////////////////////程序开始，勿轻易改动除非你懂////////////////////////////
function sleep(ms) {
    // 定义一个sleep方法，单位ms，示例：sleep(1000)； // sleep一秒
    for (var t = Date.now(); Date.now() - t <= ms;) ;
}
function is_element_exist(selector) {
    // 如果找到元素,则返回该元素,否则返回false，暂时只支持#和.选择器
    if (selector.substring(0, 1) == "#") {
        var s = frames[0].document.getElementById(selector.substring(1))
    } else if (selector.substring(0, 1) == ".") {
        var s = frames[0].document.getElementsByClassName(selector.substring(1))[0]
    }else{
        return false
    }
    if (s) {
        return s
    } else {
        return false
    }
}
function getTime() {
    // 定时器，用于生成定时模式的开始抢购时间
    var fmt = "YYYY-MM-dd hh:mm:ss";
    var d = new Date();
    var o = {
        "Y+": d.getYear() + 1900,
        "M+": d.getMonth() + 1,
        "d+": d.getDate(),
        "h+": d.getHours() + 2,
        "m+": starmin,
        "s+": starsec
    };
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 4) ? (o[k]) : (("00"+o[k]).substr((""+o[k]).length)));
        }
    }
    fmt = fmt.replace(/-/g, '/');
    return fmt;
}
function run(n) {
    // 程序真实入口
    count = 0;
    i = setInterval(function () {
        main(n);
    }, 100);
}
function main(n) {
    // 主要逻辑
    count++;
    var item = is_element_exist(step[n]);
    if (item) {
        // 如果找到元素,立即点击并清除i循环
        console.log('程序运行中，找到' + step[n]);
        item.click();
        sleep(300);  // 点击链接后等待页面响应,默认300ms
        clearInterval(i);
        if (!n) {
            // 如果第一步的元素已经找到,停止刷新页面
            clearInterval(reload);
        }
        var m = n + 1;
        if (step[m]) {
            run(m)
        } else {
            stopTime = Date.now();
            console.log('运行完毕,共耗时' + (stopTime - startTime) + '毫秒');
            stop();
        }
    } else {
        if (count >= 100) {
            // 如果循环100次（约30秒）仍然没有找到元素则停止
            clearInterval(i);
            console.log('运行第' + n++ + '步时循环了' + count + '次仍没有找到该元素,程序超时终止');
        }
    }
}
function start() {
    // 立即开始按钮
    console.log('开始');
    startTime = Date.now();  // 用于计算抢购用时
    reload = setInterval("frames[0].location.reload();", refeshPageTime);  // 自动刷新页面
    run(0);
}
function stop() {
    // 停止按钮
    console.log('停止');
    clearInterval(reload);
    clearInterval(i);
}
function timerStart() {
    // 定时抢购按钮
    var d2 = new Date(Date.parse(getTime()));
    console.log("程序运行成功，即将在" + d2 + "开始抢购~");
    z = setInterval(function () {
        var d1 = new Date();
        if (d1 >= d2) {
            clearInterval(z);
            start();
        }
    }, 1000);
}
var mun = 0;
function addInput(name, func) {
    // 生成按钮, 并动态绑定相应的函数，点击按钮时运行
    var o = document.createElement('input');
    o.type = 'button';
    o.id = 'btn' + mun;
    o.style.cssText = "width:100px; height:40px; position:fixed; bottom:40px";
    o.style.right = 50 + 110 * mun++ + 'px';
    o.value = name;
    // 给按钮绑定事件
    if (o.attachEvent) {
        o.attachEvent('onclick', func)
    } else {
        o.addEventListener('click', func)
    }
    document.body.appendChild(o);
    o = null;
}
// 把当前页面加载到iframe，在iframe内刷新页面
document.write('<iframe width=100% height=100% frameborder=0 scrolling=yes>');
frames[0].location.href = document.location.href;
//生成按钮
addInput('结束', stop);
addInput('立即开始', start);
addInput('定时抢购', timerStart);
