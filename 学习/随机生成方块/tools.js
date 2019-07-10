/**
 * Created by HSH10111 on 2018/11/21.
 */
//生成 随机数
var Tools = {
    getRandom: function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}