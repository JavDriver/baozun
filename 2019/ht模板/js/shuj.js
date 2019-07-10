

var list1 = document.getElementById('list1');
var app = document.getElementById('app');
var selectid = document.getElementById("sltid");

function getNowFormatDate() { //获取当前时间
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var strDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
        " " + date.getHours() + seperator2 + date.getMinutes() +
        seperator2 + date.getSeconds();
    return currentdate;
}
console.log(getNowFormatDate());



function cuncc() {
    var scppc = document.getElementById('app').innerHTML;
      localStorage.setItem(getNowFormatDate(), scppc);
      console.log(scppc);
   }
function duqu() {
 
 
}
function remov() {
    localStorage.removeItem("list1");
}


for (var i = 0; i < localStorage.length; i++) {
       var dom = localStorage.key([i]);
        selectid.options.add(new Option(dom, dom)); //这个兼容IE与firefox 
    
}


$(document).ready(function(){
  var p
  $('#sltid').change(function () {
      var p1 = $(this).children('option:selected').val(); //这就是selected的值
      p = p1;
      app.innerHTML = localStorage.getItem(p1);
      console.log(p);
  })

})




