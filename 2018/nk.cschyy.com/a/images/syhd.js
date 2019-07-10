document.writeln("  	<script>");
document.writeln("				linkarr = new Array();");
document.writeln("				picarr = new Array();");
document.writeln("				textarr = new Array();");
document.writeln("				var swf_width=982;");
document.writeln("				var swf_height=288;");
document.writeln("				var files = \"\";");
document.writeln("				var links = \"\";");
document.writeln("				var texts = \"\";");

document.writeln("				linkarr[0] = \"../swt/zn/@296367.shtml\";");
document.writeln("				picarr[0]  = \"../a/images/ddgw.jpg\";");
document.writeln("				textarr[0] = \"\";");

document.writeln("				linkarr[2] = \"\/swt/zn/\";");
document.writeln("				picarr[2]  = \"a/images/yypp002530.jpg\";");
document.writeln("				textarr[2] = \"\";");

document.writeln("				linkarr[1] = \"\/swt/zn/\";");
document.writeln("				picarr[1]  = \"a/images/nkzjhz.jpg\";");
document.writeln("				textarr[1] = \"\";");



document.writeln("				for (i = 1; i < picarr.length; i++) {");
document.writeln("				if (files == \"\") files = picarr[i];");
document.writeln("				else files += \"|\" + picarr[i];");
document.writeln("				}");
document.writeln("				for (i = 1; i < linkarr.length; i++) {");
document.writeln("				if (links == \"\") links = linkarr[i];");
document.writeln("				else links += \"|\" + linkarr[i];");
document.writeln("				}");
document.writeln("				for (i = 1; i < textarr.length; i++) {");
document.writeln("				if (texts == \"\") texts = textarr[i];");
document.writeln("				else texts += \"|\" + textarr[i];");
document.writeln("				}");
document.writeln("				document.write(\'<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"../../fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0\" width=\"\' + swf_width + \'\" height=\"\' + swf_height + \'\">\');");
document.writeln("				document.write(\'<param name=\"movie\" value=\"a/images/bcastr3.swf\"><param name=\"quality\" value=\"high\">\');");
document.writeln("				document.write(\'<param name=\"menu\" value=\"false\"><param name=wmode value=\"opaque\">\');");
document.writeln("				document.write(\'<param name=\"FlashVars\" value=\"bcastr_file=\' + files + \'&bcastr_link=\' + links + \'&bcastr_title=\' + texts + \'\">\');");
document.writeln("				document.write(\'<embed src=\"a/images/bcastr3.swf\" wmode=\"opaque\" FlashVars=\"bcastr_file=\' + files + \'&bcastr_link=\' + links + \'&bcastr_title=\' + texts + \'& menu=\"false\" quality=\"high\" width=\"\' + swf_width + \'\" height=\"\' + swf_height + \'\" type=\"application\/x-shockwave-flash\" pluginspage=\"http:\/\/www.macromedia.com\/go\/getflashplayer\" \/>\');");
document.writeln("				document.write(\'<\/object>\');");
document.writeln("			<\/script>");

