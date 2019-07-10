var vfed = {
	'course': {
		'head': '使用教程',
		'rows': [{
			'name1': '站点logo设置',
			'info1': '网站备案号处填写logo链接',
			'name2': '站点favicon设置',
			'info2': 'Email邮箱处填写favicon链接',
		}, {
			'name1': '轮播广告',
			'info1': '基础 > 友情链接 > 图片链接',
			'name2': '站点维护到时时间',
			'info2': '格式: 2018-06-14 04:05:00',
		}, {
			'name1': '搜索防墙关键字设置',
			'info1': '系统 > 网站参数配置 > 预留参数 > 搜索热词',
			'name2': '热门搜索关键字过滤',
			'info2': '系统 > 网站参数配置 > 评论留言 > 词语过滤',
		}, {
			'name1': '集成播放器',
			'info1': 'dplayer ckplayer aliplayer',
			'name2': '主题使用说明',
			'info2': '<a href="/template/vfed/adm/html/read.html">点击查看详情</a>',
		}]
	},
	'update': {
		'head': '主题更新【<a href="">查看更新记录</a>】',
		'rows': [{
			'nows': '恭喜，当前主题是最新版本！',
			'news': '如果修改过本主题，更新前请先备份修改过的文件',
		}]
	},
	'setting': {
		'head': '主题设置',
		'rows': [{
			'title': '首页风格',
			'name1': '默认样式',
			'info1': 'sorted',
			'news1': '../../html/module/default.html',
			'nows1': '../../html/vod/index.html',
			'name2': '通栏排版',
			'info2': 'common',
			'news2': '../../html/module/plains.html',
			'nows2': '../../html/vod/index.html',
			'name3': '极简模式',
			'info3': 'simple',
			'news3': '../../html/module/speed.html',
			'nows3': '../../html/vod/index.html',
			'name4': '大橙专用',
			'info4': 'reveal',
			'news4': '../../html/module/special.html',
			'nows4': '../../html/vod/index.html',
		}, {
			'title': '主题皮肤',
			'name1': '白色皮肤',
			'info1': 'white',
			'news1': '',
			'nows1': '../../html/module/styles.html',
			'name2': '黑色皮肤',
			'info2': 'black',
			'news2': '<link id="color" href="{$maccms.path_tpl}asset/css/black.css" rel="stylesheet" type="text/css" />',
			'nows2': '../../html/module/styles.html',
			'name3': '黑金搭配',
			'info3': 'golds',
			'news3': '<link id="color" href="{$maccms.path_tpl}asset/css/golds.css" rel="stylesheet" type="text/css" />',
			'nows3': '../../html/module/styles.html',
			'name4': '透明皮肤',
			'info4': 'glass',
			'news4': '<link id="color" href="{$maccms.path_tpl}asset/css/glass.css" rel="stylesheet" type="text/css" />',
			'nows4': '../../html/module/styles.html',
		}, {
			'title': '字体颜色',
			'name1': '橙色字体',
			'info1': 'orang',
			'news1': '<link id="color" href="{$maccms.path_tpl}asset/css/orang.css" rel="stylesheet" type="text/css" />',
			'nows1': '../../html/module/styles.html',
			'name2': '粉色字体',
			'info2': 'pinks',
			'news2': '<link id="color" href="{$maccms.path_tpl}asset/css/pinks.css" rel="stylesheet" type="text/css" />',
			'nows2': '../../html/module/styles.html',
			'name3': '蓝色字体',
			'info3': 'blues',
			'news3': '<link id="color" href="{$maccms.path_tpl}asset/css/blues.css" rel="stylesheet" type="text/css" />',
			'nows3': '../../html/module/styles.html',
			'name4': '红色字体',
			'info4': 'gules',
			'news4': '<link id="color" href="{$maccms.path_tpl}asset/css/gules.css" rel="stylesheet" type="text/css" />',
			'nows4': '../../html/module/styles.html',
		}, {
			'title': '配置文件',
			'name1': '播放配置',
			'info1': 'players',
			'news1': '../../adm/inc/vodplayer.php',
			'nows1': '../../../../application/extra/vodplayer.php',
			'name2': '服务器组',
			'info2': 'servers',
			'news2': '../../adm/inc/vodserver.php',
			'nows2': '../../../../application/extra/vodserver.php',
			'name3': '下载设置',
			'info3': 'downers',
			'news3': '../../adm/inc/voddowner.php',
			'nows3': '../../../../application/extra/voddowner.php',
			'name4': '采集资源',
			'info4': 'collecs',
			'news4': '../../adm/html/union.html',
			'nows4': '../../../../application/admin/view/collect/union.html'
		}, {
			'title': '繁简切换',
			'name1': '中文简体',
			'info1': 'chinese',
			'news1': '',
			'nows1': '../../html/module/langon.html',
			'name2': '中文繁體',
			'info2': 'complex',
			'news2': '<script src="{$maccms.path_tpl}asset/js/complex.js" type="text/javascript" charset="utf-8"></script>',
			'nows2': '../../html/module/langon.html',
			'name3': '',
			'info3': '',
			'name4': '',
			'info4': ''
		}]
	},
	'level': {
		'head': '推荐设置',
		'rows': [{
			'name1': '文章/视频推荐1',
			'info1': '移动端自定义导航',
			'name2': '文章推荐2',
			'info2': '全站底部自定义',
		}, {
			'name1': '文章推荐3',
			'info1': '全站右上角按钮',
			'name2': '文章推荐4',
			'info2': '首页文章公告',
		}, {
			'name1': '文章/视频/专题推荐5',
			'info1': '头部轮播图',
			'name2': '文章推荐6',
			'info2': '主题展示列表',
		}, {
			'name1': '视频推荐4',
			'info1': '首页分类列表轮播图',
			'name2': '专题推荐4',
			'info2': '首页抢先看求片专区',
		}]
	},
	'advert': {
		'head': '广告投放'
	}
}
var fed = {
	'global': {
		'survey': function() {
			if(top.location.href == self.location.href) window.close();
			var html = '<div class="layui-elem-quote layui-quote-nm layui-tab">欢迎使用vfed3.0.6极速破解版</div>';
			$.each(vfed, function(list, name) {
				html += '<table class="layui-table ' + list + '"><thead><tr><th colspan="4">' + name.head + '</th></tr></thead><tbody>';
				$.each(name.rows, function(nums, info) {
					html += '<tr>';
					if(list == 'course' || list == 'level')
						html += '<td width="150">' + info.name1 + '</td><td width="300">' + info.info1 + '</td><td width="150">' + info.name2 + '</td><td width="500">' + info.info2 + '</td>';
					else if(list == 'update')
						html += '<td colspan="4" class="layui-text"><h3><font color="green">' + info.nows + '</font></h3></td>';
					else if(list == 'setting')
						html += '<td width="100">' + info.title + '</td><td colspan="1"><a class="' + info.info1 + '" style="margin-right:15px" href="javascript:;">' + info.name1 + '</a><a class="' + info.info2 + '" style="margin-right:15px" href="javascript:;">' + info.name2 + '</a><a class="' + info.info3 + '" style="margin-right:15px" href="javascript:;">' + info.name3 + '</a><a class="' + info.info4 + '" style="margin-right:15px" href="javascript:;">' + info.name4 + '</a></td>';
					html += '</tr>';
				});
				if(list == 'course')
					html += '<tr><td colspan="4">当前主题版本：<span class="layui-badge fed-ver-now">3.0.6</span></td></tr>';
				html += '</tbody></table>';
			});
			$('body').prepend(html);
			fed.global.addads();
		},
		'collec': function(type, info, name, news, nows) {
			$(document).on('click', '.' + info, function() {
				layer.prompt({
					formType: 2,
					title: '联盟资源库' + name + '修改',
					area: ['400px', '20px'],
					btn: ['立即执行', '取消执行'],
					value: '../../../../template/vfed/adm/js/collect.js?v={:time()}'
				}, function(value, index, elem) {
					$.post('../../asset/fed/create.php?id=adm&type=' + type, 'urls=' + encodeURIComponent(value) + '&news=' + encodeURIComponent(news) + '&nows=' + encodeURIComponent(nows), function(data) {
						layer.alert(data.msg, function() {
							$.get('../../asset/fed/create.php?id=col', function(data) {
								parent.location.reload();
							});
						});
					}, 'json').error(function() {
						layer.msg('请求失败');
					});
				}, function(index) {
					layer.close(index);
				});
			});
		},
		'modify': function(type, info, name, news, nows) {
			$.get('../../asset/fed/create.php?id=opt&opts=' + info + '&nows=' + encodeURIComponent(nows), function(data) {
				if(data.msg == 1) $('.' + info).css('color', '#01aaed');
				if(data.msg != '') $('.' + info).removeClass(info);
			}, 'json');
			$(document).on('click', '.' + info, function() {
				layer.confirm('修改前请备份' + nows, {
					area: '450px',
					title: '修改' + name,
					btn: ['立即执行', '取消执行']
				}, function() {
					$.post('../../asset/fed/create.php?id=adm&type=' + type, 'urls=&news=' + encodeURIComponent(news) + '&nows=' + encodeURIComponent(nows), function(data) {
						layer.alert(data.msg, function() {
							fed.global.cache();
						});
					}, 'json').error(function() {
						layer.msg('请求失败');
					});
				}, function(index) {
					layer.close(index);
				});
			});
		},
		'addads': function() {
			$.get('../../asset/fed/create.php?id=ads');
		},
		'cache': function() {
			var top = $('.j-ajax', parent.document).attr('href');
			$.get(top, function(data) {
				if(data.code == 1) {
					layer.msg(data.msg, {
						icon: 1,
						time: 1000
					}, function() {
						location.reload();
					});
				} else {
					layer.msg('缓存清理失败', {
						icon: 2
					});
				}
			});
		}
	},
	'updata': {
		'compare': function(vnow, vnew) {
			var current = fed.updata.version(vnow);
			var newness = fed.updata.version(vnew);
			if(current == newness)
				return false;
			else if(current > newness)
				return false;
			else if(current < newness)
				return vnew;
		},
		'version': function(version) {
			var version = version.toString();
			var version = version.split(/\D/);
			var place = ['', '0', '00', '000', '0000'];
			var reverse = place.reverse();
			for(var i = 0; i < version.length; i++)
				version[i] = reverse[version[i].length] + version[i];
			var result = version.join('');
			return result;
		},
		'verify': function() {
			$.getJSON('../../asset/fed/create.php?id=ver&ver=edition', function(data) {
				$('.fed-ver-now').html(data.version);
				fed.updata.edition(data.version);
			});
		},
		'edition': function(vnow) {
			$.getJSON('../../asset/fed/create.php?id=ver&ver=version&vfed=?', function(data) {
				if(fed.updata.compare(vnow, data.version)) {
					$('.update h3').html('<font color="red">最新版' + data.version + '</font><a class="button" style="margin:0 10px" href="javascript:;">立即更新</a><span class="layui-text">如果修改过本主题，更新前请先备份修改过的文件</span>');
					fed.updata.change();
				}
			});
		},
		'change': function() {
			$.getJSON('../../asset/fed/create.php?id=ver&ver=change&vfed=?', function(data) {
				var output = '<ul>';
				for(var i = 0; i < data.length; i++) {
					var k = (i + 1) < 10 ? '0' + (i + 1) : (i + 1);
					output += '<li class="layui-text">' + k + '：' + data[i] + '</li>';
				}
				output += '</ul>';
				$(document).on('click', '.button', function() {
					layer.confirm(output, {
						area: '400px',
						title: '最新版更新日志',
						btn: ['立即更新', '取消更新']
					}, function() {
						fed.updata.update();
					}, function(index) {
						layer.close(index);
					});
				});
			});
		},
		'update': function() {
			var index = layer.load(2);
			$.get('../../asset/fed/create.php?id=upd', function(data) {
				layer.close(index);
				if(data.code = 1) {
					layer.alert(data.msg, function(index) {
						fed.global.cache();
					});
				} else {
					layer.msg(data.msg, {
						icon: 2
					});
				}
			}, 'json');
		}
	}
}
fed.global.survey();
layui.use('layer', function() {
	var layer = layui.layer;
	fed.updata.verify();
	fed.global.modify('copy', vfed.setting.rows[0].info1, vfed.setting.rows[0].name1, vfed.setting.rows[0].news1, vfed.setting.rows[0].nows1);
	fed.global.modify('copy', vfed.setting.rows[0].info2, vfed.setting.rows[0].name2, vfed.setting.rows[0].news2, vfed.setting.rows[0].nows2);
	fed.global.modify('copy', vfed.setting.rows[0].info3, vfed.setting.rows[0].name3, vfed.setting.rows[0].news3, vfed.setting.rows[0].nows3);
	fed.global.modify('copy', vfed.setting.rows[0].info4, vfed.setting.rows[0].name4, vfed.setting.rows[0].news4, vfed.setting.rows[0].nows4);
	fed.global.modify('swap', vfed.setting.rows[1].info1, vfed.setting.rows[1].name1, vfed.setting.rows[1].news1, vfed.setting.rows[1].nows1);
	fed.global.modify('swap', vfed.setting.rows[1].info2, vfed.setting.rows[1].name2, vfed.setting.rows[1].news2, vfed.setting.rows[1].nows2);
	fed.global.modify('swap', vfed.setting.rows[1].info3, vfed.setting.rows[1].name3, vfed.setting.rows[1].news3, vfed.setting.rows[1].nows3);
	fed.global.modify('swap', vfed.setting.rows[1].info4, vfed.setting.rows[1].name4, vfed.setting.rows[1].news4, vfed.setting.rows[1].nows4);
	fed.global.modify('swap', vfed.setting.rows[2].info1, vfed.setting.rows[2].name1, vfed.setting.rows[2].news1, vfed.setting.rows[2].nows1);
	fed.global.modify('swap', vfed.setting.rows[2].info2, vfed.setting.rows[2].name2, vfed.setting.rows[2].news2, vfed.setting.rows[2].nows2);
	fed.global.modify('swap', vfed.setting.rows[2].info3, vfed.setting.rows[2].name3, vfed.setting.rows[2].news3, vfed.setting.rows[2].nows3);
	fed.global.modify('swap', vfed.setting.rows[2].info4, vfed.setting.rows[2].name4, vfed.setting.rows[2].news4, vfed.setting.rows[2].nows4);
	fed.global.modify('copy', vfed.setting.rows[3].info1, vfed.setting.rows[3].name1, vfed.setting.rows[3].news1, vfed.setting.rows[3].nows1);
	fed.global.modify('copy', vfed.setting.rows[3].info2, vfed.setting.rows[3].name2, vfed.setting.rows[3].news2, vfed.setting.rows[3].nows2);
	fed.global.modify('copy', vfed.setting.rows[3].info3, vfed.setting.rows[3].name3, vfed.setting.rows[3].news3, vfed.setting.rows[3].nows3);
	fed.global.collec('copy', vfed.setting.rows[3].info4, vfed.setting.rows[3].name4, vfed.setting.rows[3].news4, vfed.setting.rows[3].nows4);
	fed.global.modify('swap', vfed.setting.rows[4].info1, vfed.setting.rows[4].name1, vfed.setting.rows[4].news1, vfed.setting.rows[4].nows1);
	fed.global.modify('swap', vfed.setting.rows[4].info2, vfed.setting.rows[4].name2, vfed.setting.rows[4].news2, vfed.setting.rows[4].nows2);
});