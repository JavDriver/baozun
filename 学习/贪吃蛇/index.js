/**
 * Created by HSH10111 on 2018/12/29.
 */

//food
(function (){
    function Food(options) {
        options = options || {};
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.color = options.color || 'black';

    }

    var position = 'absolute';
    var elements = [];
    Food.prototype.render = function (map) {
        remove();
        this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
        this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;


        var div = document.createElement('div');
        map.appendChild(div);
        elements.push(div);

        div.style.position = position;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
    }

    function remove() {
        var removeLengh = elements.length;
        for (var i = 0; i < removeLengh; i++) {
            removeLengh[i].parentNode.removeChild(removeLengh[i]);
            removeLengh.splice(i, 1)//删除数组里面元素

        }
    }

    window.Food = Food;
})();//自调用函数，开启一个新的作用域，避免命名冲突

var Tools = {
    getRandom: function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}
var map = document.getElementById('map');
var food = new Food();
food.render(map);











