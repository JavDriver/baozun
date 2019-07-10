$(function(){ 
    var i = 2;
	var cid = $('#cid').val();
	var url = $('#url').val();
	var path_tpl = $('#path_tpl').val();
	$('#xwajaxpage').click(function(){
		$("#xwajaxpage").html('<img src="'+path_tpl+'css/aaaloading.gif" />加载中...');
		$.getJSON("/index.php?m=vod-xwajaxpage-id-"+cid+"-page-"+i,null,function(json){
            if(json.result == 0){ 
				var str = "";
				var data = json.data;
                $.each(data,function(index,array){ 
                    str='<li><a href="/vodhtml/'+array.d_id+'.html"><div class="picsize"><img src="http://img.bjshenlai.com/'+array.d_picthumb+'" ><label class="title">'+array.d_remarks+'</label><label class="name">'+array.d_name+'</label></div></a></li>';
                    $("#xwajaxdata").append(str);
                }); 
                i++;
				resizeImgCommon();
				$("#xwajaxpage").html("点击这里显示更多精彩影片");
            }else{ 
				$("#xwajaxpage").html("客官，暂时就这么多了, 还不够看吗（：");
			    $("#xwajaxpage").unbind("click");
                return false; 
            } 
        });
	});
});