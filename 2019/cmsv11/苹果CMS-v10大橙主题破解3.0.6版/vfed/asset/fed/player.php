<?php
$jiekouid = @$_GET['id'];
$videourl = @$_GET['url'];
$jumpsurl = @$_GET['jump'];
require ('create.php');
loadhead('VIP视频解析 - 极速解析');
if (empty($jiekouid)) {
	if ($videourl) {
		if (stristr($videourl, '.qq.com') == true)
			iframe(server('jk01') . $videourl);
		elseif (stristr($videourl, '.youku.com') == true)
			iframe(server('jk02') . $videourl);
		elseif (stristr($videourl, '.sohu.com') == true)
			iframe(server('jk03') . $videourl);
		elseif (stristr($videourl, '.iqiyi.com') == true)
			iframe(server('jk04') . $videourl);
		elseif (stristr($videourl, '.pptv.com') == true)
			iframe(server('jk05') . $videourl);
		elseif (stristr($videourl, '.mgtv.com') == true)
			iframe(server('jk06') . $videourl);
		elseif (stristr($videourl, '.letv.com') == true)
			iframe(server('jk07') . $videourl);
		elseif (stristr($videourl, '.le.com') == true)
			iframe(server('jk07') . $videourl);
		elseif (stristr($videourl, '.wasu.cn') == true)
			iframe(server('jk08') . $videourl);
		elseif (stristr($videourl, '.cctv.com') == true)
			iframe(server('jk09') . $videourl);
		elseif (stristr($videourl, '.1905.com') == true)
			iframe(server('jk10') . $videourl);
		elseif (stristr($videourl, '.bilibili.com') == true)
			iframe(server('jk11') . $videourl);
		elseif (stristr($videourl, '.yinyuetai.com') == true)
			iframe(server('jk12') . $videourl);
		elseif (stristr($videourl, '.alicdn.com') == true)
			alplay($videourl, $jumpsurl);
		elseif (stristr($videourl, '27pan') == true)
			iframe(server('jk16') . $videourl);
		elseif (stristr($videourl, '.vlook.cn') == true)
			iframe(server('jk17') . $videourl);
		elseif (stristr($videourl, '.yy.com') == true)
			iframe(server('jk18') . $videourl);
		elseif (stristr($videourl, '.miaopai.com') == true)
			iframe(server('jk19') . $videourl);
		elseif (stristr($videourl, '.fun.tv') == true)
			iframe(server('jk20') . $videourl);
		elseif (stristr($videourl, '.kankan.com') == true)
			iframe(server('jk21') . $videourl);
		elseif (stristr($videourl, '.m3u8') == true)
			player($videourl, $jumpsurl);
		elseif (stristr($videourl, '.mp4') == true)
			player($videourl, $jumpsurl);
		elseif (stristr($videourl, '.flv') == true)
			player($videourl, $jumpsurl);
		elseif (stristr($videourl, '/share/') == true)
			iframe($videourl);
		elseif (stristr($videourl, '/v/') == true)
			iframe($videourl);
		elseif (stristr(setting('parse'), $_SERVER['HTTP_HOST']) == true)
			iframe($videourl);
		else
			iframe(setting('parse') . $videourl);
	} else
		echo '<div class="loading">请填写视频地址</div>';
} else {
	if ($videourl)
		parses($jiekouid, $videourl, $jumpsurl);
	else
		echo '<div class="loading">请填写视频地址</div>';
}
loadfoot($videourl);

function loadhead($title) {
	echo '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>' . $title . '</title><meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />';
	echo '<style type="text/css">html, body, iframe { display: block; margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #000; } .loading { font-family: Helvetica, Arial, Microsoft Yahei, sans-serif; background: #000; width: 90%; position: absolute; top: 50%; left: 50%; color:#fff; font-size: 16px; text-align: center; transform: translate(-50%, -50%); z-index:999;} a { text-decoration: none } .dplayer-menu { display:none!important }</style></head><body>';
	if (setting('prestrain'))
		echo '<style type="text/css">@media (max-width: 768px) {.loading { top: 35%;}}</style>';
}

function loadfoot($videourl) {
	if (setting('autofull') == 1) {
		if (setting('prestrain'))
			echo '<script src="' . setting('prestrain') . '"></script>';
		if ($videourl)
			loadtips();
	} else
		echo '<script>delayed();</script>';
	echo '<div style="display:none">' . "\t\n" . setting('site_tj') . '</div>';
	echo '</body></html>';
}
?>