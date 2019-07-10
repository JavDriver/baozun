// JavaScript Document
function AddFavorite(sURL, sTitle)
{
	try
	{
		window.external.addFavorite(sURL, sTitle);
	}
	catch (e)
	{
		try
		{
			window.sidebar.addPanel(sTitle, sURL, "");
		}
		catch (e)
		{
			alert("加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}
function SetHome(obj,vrl)
{
	try
	{
		obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
	}
	catch(e)
	{
		if(window.netscape)
		{
			try 
			{
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
			} 
			catch (e) 
			{ 
				alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将[signed.applets.codebase_principal_support]设置为'true'");
			}
			var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
			prefs.setCharPref('browser.startup.homepage',vrl);
		}
	}
}
function gotom()
{
	var nowurl=new String(document.location.href);
	if (nowurl.indexOf('/dy2013/jmb')!=-1 || nowurl.indexOf('/dy2013/tupian')!=-1) 
	{
	}
	else
	{
		var headstr=document.getElementsByTagName("head")[0].innerHTML;
		if(headstr.indexOf('mobile-agent')!=-1) 
		{
			location.replace(nowurl.replace("www.","g."));
		}
	}
}
function $id(ids)
{
	return document.getElementById(ids);
}
function ShowSs()
{
	$id("ssop").style.display="block";
}
function HideSs()
{
	$id("ssop").style.display="none";
}
function Selss(seltit,tid)
{
	$id("selt").innerHTML=seltit;
	$id("tid").value=tid;
	$id("ssop").style.display="none";
}
function ShowTab(mid,sid)
{
	var pspan=$id("m_tab_"+mid).getElementsByTagName("span");
	var pul=$id("m_cont_"+mid).getElementsByTagName("ul");
	for(i=0;i<pspan.length;i++)
	{
		pspan[i].className=(i==sid?"movie_cur":"");
		pul[i].style.display=(i==sid?"block":"none");
	}
}
function ShowTab2(mid,sid,nhref)
{
	var pspan=$id("m_tab_"+mid).getElementsByTagName("span");
	var pul=$id("m_cont_"+mid).getElementsByTagName("ul");
	for(i=0;i<pspan.length;i++)
	{
		pspan[i].className=(i==sid?"movie_cur":"");
		pul[i].style.display=(i==sid?"block":"none");
	}
	$id("nowhref").href=nhref;
}

function Share()
{
document.writeln("<div class=\"bdsharebuttonbox\"><a href=\"#\" class=\"bds_more\" data-cmd=\"more\"></a><a href=\"#\" class=\"bds_qzone\" data-cmd=\"qzone\" title=\"分享到QQ空间\"></a><a href=\"#\" class=\"bds_tsina\" data-cmd=\"tsina\" title=\"分享到新浪微博\"></a><a href=\"#\" class=\"bds_tqq\" data-cmd=\"tqq\" title=\"分享到腾讯微博\"></a><a href=\"#\" class=\"bds_renren\" data-cmd=\"renren\" title=\"分享到人人网\"></a><a href=\"#\" class=\"bds_weixin\" data-cmd=\"weixin\" title=\"分享到微信\"></a></div>");
document.writeln("<script>window._bd_share_config={\"common\":{\"bdSnsKey\":{},\"bdText\":\"\",\"bdMini\":\"2\",\"bdMiniList\":false,\"bdPic\":\"\",\"bdStyle\":\"1\",\"bdSize\":\"24\"},\"share\":{},\"image\":{\"viewList\":[\"qzone\",\"tsina\",\"tqq\",\"renren\",\"weixin\"],\"viewText\":\"分享到：\",\"viewSize\":\"16\"}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];</script>");
}

function ViewGc(classid,id)
{
	if(document.getElementById("geci_"+classid+"_"+id).className=="geci")
	{
		document.getElementById("geci_"+classid+"_"+id).className="geci2";
	}
	else
	{
		document.getElementById("geci_"+classid+"_"+id).className="geci";
	}	
}

function DrawImage(ImgD,width_s,height_s)
{
	var image=new Image();
	image.src=ImgD.src;
	if(image.width>0 && image.height>0)
	{
		flag=true;
		if(image.width / image.height >= width_s / height_s)
		{
			if(image.width>width_s)
			{
				ImgD.width=width_s;
				ImgD.height=(image.height*width_s)/image.width;
			}
			else
			{
				ImgD.width=image.width;
				ImgD.height=image.height;
			}
		}
		else
		{
			if(image.height>height_s)
			{
				ImgD.height=height_s;
				ImgD.width=(image.width*height_s)/image.height;
			}
			else
			{
				ImgD.width=image.width;
				ImgD.height=image.height;
			}
		}
	}
}
function ShowMbtn()
{
	if($id("mbtnli").style.display=="block")
	{
		$id("mbtnli").style.display="none";
		document.getElementById("mclick").className="other_moer other_moer_m";
	}
	else
	{
		$id("mbtnli").style.display="block";
		document.getElementById("mclick").className="other_moer";
	}
}

function ShowMore() 
{
	$id("jies1").style.display="none";
	$id("jies2").style.display="block";
}
function HideMore() 
{
	$id("jies2").style.display="none";
	$id("jies1").style.display="block";
}

function sel_dy_month()
{
	if(document.getElementById("allmonth"))
	{
		var urlstr=document.location.toString().toLowerCase();
		var nav=$id("allmonth").getElementsByTagName("li");
		
		for(var i=0;i<nav.length;i++)
		{
			var gahref=nav[i].getElementsByTagName("a");
			var hrefv=gahref[0].getAttribute('href');
			if(urlstr.indexOf(hrefv)!=-1)
			{
				gahref[0].className="cur";
			}
			else
			{
				gahref[0].className="";
			}
		}
	}
}
function sel_dy_dq_lx()
{
	var ishsel=0;
	var urlstr=document.location.toString().toLowerCase();
	if(document.getElementById("dqlist"))
	{
		var nav=$id("dqlist").getElementsByTagName("li");
		for(var i=0;i<nav.length;i++)
		{
			var gahref=nav[i].getElementsByTagName("a");
			var hrefv=gahref[0].getAttribute('href');
			if(urlstr.indexOf(hrefv)!=-1)
			{
				gahref[0].className="cur";
				ishsel=1;
			}
			else
			{
				gahref[0].className="";
			}
		}
	}
	if(ishsel==0)
	{
		if(document.getElementById("lxlist"))
		{
			var nav2=$id("lxlist").getElementsByTagName("li");
			for(var i2=0;i2<nav2.length;i2++)
			{
				var gahref2=nav2[i2].getElementsByTagName("a");
				var hrefv2=gahref2[0].getAttribute('href');
				if(urlstr.indexOf(hrefv2)!=-1)
				{
					gahref2[0].className="cur";
				}
				else
				{
					gahref2[0].className="";
				}
			}
		}
	}
}
