// JavaScript Document
function serchFocus()
{
	var searchbox1	=$id('keyword');
	if (searchbox1.value=='搜索您想找的电影！')
	{
		searchbox1.value='';
	}
}
function serchBlur()
{
	var searchbox1	=$id('keyword');
	if (GetLen('keyword')<1)
	{
		searchbox1.value='搜索您想找的电影！';
	}
}
function GetLen(IdName)
{
	return document.getElementById(IdName).value.replace(/(^\s*)|(\s*$)/g , '').length;
}
function SubmitForm()
{
	var searchbox1	= $id('keyword');
	if (GetLen('keyword')<1 || searchbox1.value=='搜索您想找的电影！' )
	{
		alert("请输入要搜索的电影关键字！");
		return false;
	}
	else
	{
		window.location.href = 'http://www.zhangsan.cc/vod-search-wd-' + encodeURIComponent(searchbox1.value)+'-by-time.html';
	}
}

function QueryString(id) 
{
    var svalue = location.search.match(new RegExp("[\?\&]" + id + "=([^\&]*)(\&?)", "i"));
    return svalue ? svalue[1] : "";
}
function Trim(str)  //删除左右两端的空格
{
    return str.replace(/(^\s*)|(\s*$)/g, "").replace(/[ ]+/g, " ");
}
function loadSearch() 
{
    var key = QueryString("KeyWords");
    if (key == undefined || key == null || key == "") 
	{
        $('#lilist').html("<div class=\"searchTip\">请输入要查询的关键字</div>");
        return;
    }
    key = decodeURIComponent(key);
    //alert(key);
    searchlist(key);
}
