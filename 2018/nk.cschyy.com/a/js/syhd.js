document.writeln("  	<script language=\'javascript\'>");
document.writeln("				linkarr = new Array();");
document.writeln("				picarr = new Array();");
document.writeln("				textarr = new Array();");
document.writeln("				var swf_width=719;");
document.writeln("				var swf_height=250;");
document.writeln("				var files = \"\";");
document.writeln("				var links = \"\";");
document.writeln("				var texts = \"\";");
/*
document.writeln("				linkarr[0] = \"chxw/247783.shtml\";");
document.writeln("				picarr[0]  = \"a/images/newadd_hjdy.jpg\";");
document.writeln("				textarr[0] = \"\";"); 

document.writeln("				linkarr[6] = \"../www.cschyy.com/web/ndzt/default.htm\";");
document.writeln("				picarr[6]  = \"a/images/11h3a1.jpg\";");
document.writeln("				textarr[6] = \"\";"); */

document.writeln("				linkarr[2] = \"../www.cschyy.com/web/xgnza/default.htm\";");
document.writeln("				picarr[2]  = \"a/images/h3b.jpg\";");
document.writeln("				textarr[2] = \"\";");   
/*
document.writeln("				linkarr[3] = \"../www.cschyy.com/web/qlx/default.htm\";");
document.writeln("				picarr[3]  = \"a/images/h3d.jpg\";");
document.writeln("				textarr[3] = \"\";");

/*document.writeln("				linkarr[5] = \"../www.cschyy.com/web/yw/default.htm\";");
document.writeln("				picarr[5]  = \"a/images/h3sdf.jpg\";");
document.writeln("				textarr[5] = \"\";");  

document.writeln("				linkarr[1] = \"../www.cschyy.com/web/newbpzt/default.htm\";");
document.writeln("				picarr[1]  = \"a/images/h3a.jpg\";");
document.writeln("				textarr[1] = \"\";"); 

document.writeln("				linkarr[4] = \"../www.cschyy.com/web/yjyc/default.htm\";");
document.writeln("				picarr[4]  = \"a/images/h3abcd.jpg\";");
document.writeln("				textarr[4] = \"\";");
document.writeln("				linkarr[7] = \"../www.cschyy.com/web/nxby/default.htm\";");
document.writeln("				picarr[7]  = \"a/images/nxby_hda.jpg\";");
document.writeln("				textarr[7] = \"\";");    */

document.writeln("				");
document.writeln("				for (i = 2; i < picarr.length; i++) {");
document.writeln("				if (files == \"\") files = picarr[i];");
document.writeln("				else files += \"|\" + picarr[i];");
document.writeln("				}");
document.writeln("				for (i = 2; i < linkarr.length; i++) {");
document.writeln("				if (links == \"\") links = linkarr[i];");
document.writeln("				else links += \"|\" + linkarr[i];");
document.writeln("				}");
document.writeln("				for (i = 2; i < textarr.length; i++) {");
document.writeln("				if (texts == \"\") texts = textarr[i];");
document.writeln("				else texts += \"|\" + textarr[i];");
document.writeln("				}");
document.writeln("				document.write(\'<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"../fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0\" width=\"\' + swf_width + \'\" height=\"\' + swf_height + \'\">\');");
document.writeln("				document.write(\'<param name=\"movie\" value=\"a/images/bcastr3.swf\"><param name=\"quality\" value=\"high\">\');");
document.writeln("				document.write(\'<param name=\"menu\" value=\"false\"><param name=wmode value=\"opaque\">\');");
document.writeln("				document.write(\'<param name=\"FlashVars\" value=\"bcastr_file=\' + files + \'&bcastr_link=\' + links + \'&bcastr_title=\' + texts + \'\">\');");
document.writeln("				document.write(\'<embed src=\"a/images/bcastr3.swf\" wmode=\"opaque\" FlashVars=\"bcastr_file=\' + files + \'&bcastr_link=\' + links + \'&bcastr_title=\' + texts + \'& menu=\"false\" quality=\"high\" width=\"\' + swf_width + \'\" height=\"\' + swf_height + \'\" type=\"application\/x-shockwave-flash\" pluginspage=\"http:\/\/www.macromedia.com\/go\/getflashplayer\" \/>\');");
document.writeln("				document.write(\'<\/object>\');");
document.writeln("			<\/script>");