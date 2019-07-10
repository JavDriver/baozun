(function (){
    var position = 'absolute';
   function Snake(options){
       options = options || {};
   this.width = options.width || 20;
   this.height = options.height || 20;
   this.direction = options.direction || 'right';
   this.body = [
       {x: 3, y: 2, color: 'red'},
       {x: 2, y: 2, color: 'blue'},
       {x: 1, y: 2, color: 'blue'},
   ];
}

Snake.prototype.render = function(map){
  for ( var i = 0 ,len = this.body.length; i < len ; i++) {
        var object = this.body[i];
        var div = document.createElement('div');
        map.appendChild(div);
          div.style.position = position;
          div.style.width = this.width +'px';
          div.style.height = this.height +'px';
          div.style.left = object.x * this.width + 'px';
          div.style.top = object.y * this.height + 'px';
          div.style.backgroundColor = object.color;
  }；

}

window.Snake = Snake;

})()





