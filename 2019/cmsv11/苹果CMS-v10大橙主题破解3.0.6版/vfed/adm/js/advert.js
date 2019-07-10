var list = {
	'rows1': {
		'rows': [{
			'name': '超清永无广告解析',
			'info': '极速解析接口',
			'link': 'http://www.rzhyi.com/?url='
		}, {
			'name': '超清永无广告解析',
			'info': '极速解析接口',
			'link': 'http://www.rzhyi.com/?url='
		}, {
			'name': '超清永无广告解析',
			'info': '极速解析接口',
			'link': 'http://www.rzhyi.com/?url='
		}, {
			'name': '超清永无广告解析',
			'info': '极速解析接口',
			'link': 'http://www.rzhyi.com/?url='
		}]
	},
	'rows2': {
		'rows': [{
			'name': '超清永无广告解析',
			'info': '极速解析接口',
			'link': 'http://www.rzhyi.com/?url='
		}, {
			'name': '超清永无广告解析',
			'info': '极速解析接口',
			'link': 'http://www.rzhyi.com/?url='
		}, {
			'name': '超清永无广告解析',
			'info': '极速解析接口',
			'link': 'http://www.rzhyi.com/?url='
		}, {
			'name': '超清永无广告解析',
			'info': '极速解析接口',
			'link': 'http://www.rzhyi.com/?url='
		}]
	},
	'rows3': {
		'rows': [{
			'name': '超清永无广告解析',
			'info': '极速解析接口',
			'link': 'http://www.rzhyi.com/?url='
		}, {
			'name': '超清永无广告解析',
			'info': '极速解析接口',
			'link': 'http://www.rzhyi.com/?url='
		}, {
			'name': '超清永无广告解析',
			'info': '极速解析接口',
			'link': 'http://www.rzhyi.com/?url='
		}, {
			'name': '超清永无广告解析',
			'info': '极速解析接口',
			'link': 'http://www.rzhyi.com/?url='
		}]
	}
}
var html = '<table class="layui-table"><thead><tr><th colspan="4">广告投放 >>> 官方QQ群：<a href="https://jq.qq.com/?_wv=1027&k=5VUEBDe">295107929</a> >>> 业务QQ：<a href="http://wpa.qq.com/msgrd?v=3&uin=2937679418&site=qq&menu=yes">2937679418</a> >>></th></tr></thead><tbody>';
$.each(list, function(list, name) {
	html += '<tr>';
	$.each(name.rows, function(nums, info) {
		html += '<td><a target="_blank" href="' + info.link + '"><font color="blue">【' + info.name + '】</font><br><font color="red">【' + info.info + '】</font></a></td>';
	});
	html += '</tr>';
});
html += '</tbody></table>';
$(function() {
	$("table:last").remove();
	$('table:last').after(html);
});