/**
 * Created by HSH10111 on 2019/4/22.
 */
var input1

$(".dragAble").dblclick(function(){
    var src=$(this).attr("src" ,input1);
});

$(" #wblj2 ").click(function(){
    var input=$(".wblj1").val();
    input1 = input;
});

