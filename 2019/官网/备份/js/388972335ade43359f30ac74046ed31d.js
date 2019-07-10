function RGBToHex(n) {
	for(var s = /^rgb\(([0-9]{0,3})\,\s([0-9]{0,3})\,\s([0-9]{0,3})\)/g, h = n.replace(s, "$1 $2 $3").split(" "), f = "#", e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"], i = 0; i < 3; i++) {
		for(var u = null, t = h[i], r = [], o = t; t > 15;) u = t % 16, t = t / 16 >> 0, r.push(e[u]);
		r.push(e[t]), o <= 15 && r.push(0), f += r.reverse().join("")
	}
	return f
}

function AutoDbc() {
	$(".box-rel").unbind("dblclick").dblclick(function() {
		var t = '<div class="hrefBox"><div class="hrefInfo"><div class="href_table"><table><tr><td width="50" align="right">链接：</td><td><input type="text" class="input_text2" id="InputLinks" /></td></tr><tr><td align="right">描述：</td><td><input type="text" class="input_text2" id="InputTitle"/></td></tr><tr><td align="right">尺寸：</td><td><span>宽</span><input type="text" class="input_size" maxlength="4" id="InputWidth" /><span>px,</span><span>高</span><input type="text" class="input_size" maxlength="4" id="InputHeight" /><span>px</span></td></tr><tr><td>&nbsp;</td> <td><input type="checkbox" class="input_check" id="checkTarget" /><span><label for="checkTarget">新窗口打开</label></span></td></tr><tr><td>&nbsp;</td><td><input type="button" class="alert_submit" id="submitBtn" value="确定" /><input type="button" id="cleanBtn" class="alert_submit" value="取消" /></td></tr></table></div></div></div>',
			n = this;
		$("#dlgdbConfig").html(t), $("#dlgdbConfig").window({
			title: "填写链接",
			width: 331,
			height: 239,
			onOpen: function() {
				$("#jbox").draggable();
				var e = $(this).find("#InputWidth"),
					e = $(this).find("#InputWidth"),
					f = $(this).find("#InputHeight"),
					t = $(this).find("#InputTitle"),
					r = $(this).find("#InputLinks"),
					i = $(this).find("#submitBtn"),
					o = $(this).find("#cleanBtn"),
					u = $(this).find("#checkTarget");
				$(n).attr("areamode") != "" ? $(u).attr("checked", !0) : $(u).attr("checked", !1), r.val($(n).attr("areasrc") == "" ? "#" : $(n).attr("areasrc")), e.val($(n).width().toFixed(0)), f.val($(n).height().toFixed(0)), $(n).attr("title") == "" ? (t.val("请输入热区描述信息"), t.css("color", "#999")) : t.val($(n).attr("title")), t.click(function() {
					t.val() == "请输入热区描述信息" ? (t.val(""), t.css("color", "#000")) : $(this).select()
				}), t.blur(function() {
					t.val() == "" && (t.val("请输入热区描述信息"), t.css("color", "#999"))
				}), o.click(function() {
					$("#dlgdbConfig").dialog("close")
				}), r.click(function() {
					$(this).select()
				}), e.click(function() {
					$(this).select()
				}), f.click(function() {
					$(this).select()
				}), i.click(function() {
					$(u).attr("checked") == "checked" || $(u).attr("checked") == !0 ? $(n).attr("areamode", "_blank") : $(n).attr("areamode", "_self"), $(n).attr("areasrc", r.val()), $(n).attr("title", t.val()), $(n).width(Math.min($("#boxRule").width() - $(n).offset().left, e.val())), $(n).height(Math.min($("#boxRule").height() - ($(n).offset().top - 428), f.val())), $("#dlgdbConfig").dialog("close")
				}), r.select().focus(), r.keydown(function(n) {
					n.keyCode == 13 && i.click()
				}), t.keydown(function(n) {
					n.keyCode == 13 && i.click()
				}), e.keydown(function(n) {
					n.keyCode == 13 && i.click()
				}), f.keydown(function(n) {
					n.keyCode == 13 && i.click()
				})
			}
		})
	})
}

function removeMouseFn(n) {
	$(n).unbind("mousedown.dragBox"), $(n).unbind("mousemove.dragBox"), $(n).unbind("mouseup.dragBox"), $(document).unbind("mousedown.dragBox"), $(document).unbind("mousemove.dragBox"), $(document).unbind("mouseup.dragBox")
}

function selectBox() {
	var t = parseInt($("#poinert-box").position().left),
		n = parseInt($("#poinert-box").position().top),
		r = parseInt($("#poinert-box").width()),
		i = parseInt($("#poinert-box").height()),
		u = parseInt($(this).attr("data-position"));
	$(".box-rel").removeClass("poinert-sel"), $(".box-rel").each(function() {
		var f = parseInt($(this).position().left),
			u = parseInt($(this).position().top),
			o = parseInt($(this).width()),
			e = parseInt($(this).height());
		f + o > t && u + e > n && t + r > f && i + n > u && $(this).addClass("poinert-sel")
	})
}

function getOffset(n) {
	var t = n.target;
	t.offsetLeft == undefined && (t = t.parentNode);
	var r = getPageCoord(t),
		i = {
			x: window.pageXOffset + n.clientX,
			y: window.pageYOffset + n.clientY
		};
	return {
		offsetX: i.x - r.x,
		offsetY: i.y - r.y
	}
}

function getPageCoord(n) {
	for(var t = {
			x: 0,
			y: 0
		}; n;) t.x += n.offsetLeft, t.y += n.offsetTop, n = n.offsetParent;
	return t
}

function SelectPointer() {
	$(".poinert-sel").mousedown(function(n) {
		if($(".poinert-sel").length > 1) {
			var u = !0,
				o = n.x || n.pageX,
				e = n.y || n.pageY,
				t = 0,
				i = 0,
				r = [],
				f = [];
			$(".poinert-sel").each(function() {
				var t = $(this).css("left"),
					n;
				t = parseInt(t.replace(/px/g, "")), r.push(t), n = $(this).css("top"), n = parseInt(n.replace(/px/g, "")), f.push(n)
			}), $("#box").unbind("mousemove.dragBox").bind("mousemove.dragBox", function(n) {
				t = n.x || n.pageX, i = n.y || n.pageY, u && (n.preventDefault(), n.stopPropagation(), $(".poinert-sel").each(function(n) {
					$(this).css({
						left: r[n] + parseInt(t - o)
					}), $(this).css({
						top: f[n] + parseInt(i - e)
					})
				}))
			}), $("#box").unbind("mouseup.dragBox").bind("mouseup.dragBox", function() {
				u = !1;
				return
			})
		}
		return
	})
}

function onDrag(n) {
	var r, f, e;
	n.preventDefault(), n.stopPropagation();
	var t = n.data,
		u = $("#box"),
		i = u.css("left");
	i = parseInt(i.replace(/px/g, "")), r = u.css("top"), r = parseInt(r.replace(/px/g, "")), f = i + u.width(), e = r + u.height(), t.left - i < 0 && (t.left = i - 4), t.top < 0 && (t.top = -4), t.left + $(t.target).outerWidth() > f && (t.left = f + 4 - $(t.target).outerWidth()), t.top + $(t.target).outerHeight() > $(t.parent).height() && (t.top = $(t.parent).height() - $(t.target).outerHeight() + 4)
}

function onStopResize(n) {
	var u = $("#box"),
		r = u.css("left"),
		f;
	r = parseInt(r.replace(/px/g, "")), f = u.css("top"), f = parseInt(f.replace(/px/g, ""));
	var e = r + u.width(),
		o = f + u.height(),
		i = n.data,
		t = $(this);
	i.left - r < 0 && (t.css({
		left: r + "px"
	}), t.width(t.width() + i.left - r)), i.top < 0 && (t.css({
		top: "0px"
	}), t.height(t.height() + i.top)), i.left + i.width > e && t.width(e - i.left - 2), i.top + i.height > t.parent().height() && t.height(t.parent().height() - i.top - 2)
}

function onStopResizeL(n) {
	var f = $("#box"),
		r = f.css("left"),
		u;
	r = parseInt(r.replace(/px/g, "")), u = f.css("top"), u = parseInt(u.replace(/px/g, ""));
	var e = r + f.width(),
		o = u + f.height(),
		i = n.data,
		t = $(this);
	i.left - r < 0 && (t.css({
		left: r - 4 + "px"
	}), t.width(t.width() + i.left - r + 4)), i.top < 0 && (t.css({
		top: "-4px"
	}), t.height(t.height() + i.top + 4)), i.left + i.width > e && t.width(e - i.left - 6), i.top + i.height > t.parent().height() && t.height(t.parent().height() - i.top - 6), t.children(".lady-box-frame").css("line-height", t.height() + "px")
}

function showAlertBox(n, t, i, r) {
	$.jBox("id:" + n, {
		width: t,
		height: i,
		top: 10,
		loaded: r
	})
}(function(n) {
	n.fn.dragBox = function(t) {
		var r = t ? n.extend(!0, n.fn.dragBox.settings, t) : n.fn.dragBox.settings,
			i = n(this);
		i.unbind("mousedown.dragBox").bind("mousedown.dragBox", function(t) {
			var u, f, e;
			if(t.button != 2 && t.target.id == i.attr("id")) {
				var h = !0,
					s = t.x || t.pageX,
					o = t.y || t.pageY,
					c = n(".drag-box").length + 1;
				u = r.boxId ? n('<div class="easyui-draggable easyui-resizable drag-box drag-box-check box-rel" title="" mcMode="" borderMode="none" borderColor="000000" areaMode="_blank" areaSrc="" data-options="onDrag:onDrag,onStopResize:onStopResizeL,edge:10" id="' + r.boxId + '"><span class="lady-box-frame"><div class="icon t_l"> </div><div class="icon t_c"> </div><div class="icon t_r"></div><div class="icon c_l"></div><div class="icon c_r"></div><div class="icon b_l"></div><div class="icon b_c"></div><div class="icon b_r"></div></span><span class="lady-box-close"></span></div>') : n('<div class="easyui-draggable easyui-resizable drag-box drag-box-check box-rel" title="" mcMode="" borderMode="none" borderColor="000000" areaMode="_blank" areaSrc="" data-options="onDrag:onDrag,onStopResize:onStopResizeL,edge:10" id="hostspaceBox' + c + '"><span class="lady-box-frame"><span class="drag-box-tip-text"></span><div class="icon t_l"></div><div class="icon t_c"> </div><div class="icon t_r"></div><div class="icon c_l"></div><div class="icon c_r"></div><div class="icon b_l"></div><div class="icon b_c"></div><div class="icon b_r"></div></span><span class="lady-box-close"></span></div>'), f = null, e = null, u.appendTo(i).offset({
					left: s,
					top: o
				}).draggable().resizable(), u.children(".lady-box-close").bind("click", function() {
					n(this).parent().remove()
				}), AutoDbc(), n(document).unbind("mousemove.dragBox").bind("mousemove.dragBox", function(t) {
					var r, i;
					if(n(this).focus(), h) {
						f = t.x || t.pageX, e = t.y || t.pageY;
						var v = 6,
							a = 6,
							c = n("#boxRule").width() + 30 + v,
							l = n("#boxRule").height() + 60 + a;
						f > c && (f = c + 30), e - 360 > l && (e = l + 370), f < 1 && (f = 24), e < 408 && (e = 412), r = Math.abs(f - s), i = Math.abs(e - o), u.offset({
							left: Math.min(f, s) - v,
							top: Math.min(e, o) - a
						}).width(r).height(i), u.children(".lady-box-frame").css("line-height", i + "px")
					}
				}), n(document).unbind("mouseup.dragBox").bind("mouseup.dragBox", function(t) {
					var y, p, r, c, a, v, w;
					if(n(this).focus(), h = !1, u) {
						if(u.find(".icon").show(), y = t.x || t.pageX, p = t.y || t.pageY, Math.abs(y - s) < 10 || Math.abs(p - o) < 10 || u.width() < 10 && u.height() < 10) {
							u.remove(), delete u, f = null, e = null, u = null, s = null, o = null;
							return
						}
						Math.abs(y - s) > 78 && Math.abs(p - o) > 29 && n(u).find(".drag-box-tip-text").text("双击设置链接"), n(u).hover(function() {
							n(this).hasClass("poinert-sel") || n(this).find(".lady-box-close").show()
						}, function() {
							n(this).find(".lady-box-close").hide()
						}), r = u.css("left"), r = parseInt(r.replace(/px/g, "")), c = u.css("top"), c = parseInt(c.replace(/px/g, ""));
						var b = r + u.width(),
							k = c + u.height(),
							l = i.css("left");
						l = parseInt(l.replace(/px/g, "")), a = i.css("top"), a = parseInt(a.replace(/px/g, "")), v = l + i.width(), w = a + i.height(), r - l < 0 && u.css({
							left: l + "px"
						}).width(u.width() + r - l), c < 0 && u.css({
							top: a + "px"
						}).height(u.height() + c), b > v - 2 && u.width(v - r - 5), k > i.height() - 2 && u.height(i.height() - c - 6), u.position().top == 0 && (u.css({
							top: "-4px"
						}), u.height(u.height() + 4)), u.position().left == 0 && (u.css({
							left: "-4px"
						}), u.width(u.width() + 4))
					}
					f = null, e = null, u = null, s = null, o = null
				})
			}
		})
	}, n.fn.dragBox.settings = {}
})(jQuery),
function(n) {
	n.fn.pointerBox = function(t) {
		var r = t ? n.extend(!0, n.fn.dragBox.settings, t) : n.fn.dragBox.settings,
			i = n(this);
		i.unbind("mousedown.dragBox").bind("mousedown.dragBox", function(t) {
			var u, e, f;
			if(t.button != 2 && t.target.id == i.attr("id")) {
				var h = !0,
					o = t.x || t.pageX,
					s = t.y || t.pageY,
					c = n(".poinert-rel").length + 1;
				u = r.boxId ? n('<div class="easyui-draggable easyui-resizable drag-box drag-box-check poinert-rel" title="" mcMode="" borderMode="none" borderColor="000000" areaMode="_blank" areaSrc="" data-options="onDrag:onDrag,onStopResize:onStopResizeL,edge:10" id="' + r.boxId + '"><span class="lady-box-frame"></span><span class="lady-box-close"></span></div>') : n('<div class="easyui-draggable easyui-resizable drag-box drag-box-check poinert-rel" title="" mcMode="" borderMode="none" borderColor="000000" areaMode="_blank" areaSrc="" data-options="onDrag:onDrag,onStopResize:onStopResizeL,edge:10" id="poinert-box"><span class="lady-box-frame"></span><span class="lady-box-close"></span></div>'), e = null, f = null, u.appendTo(i).offset({
					left: o,
					top: s
				}).draggable().resizable(), u.children(".lady-box-close").bind("click", function() {
					n(this).parent().remove()
				}), n(document).unbind("mousemove.dragBox").bind("mousemove.dragBox", function(n) {
					if(h) {
						e = n.x || n.pageX, f = n.y || n.pageY;
						var i = Math.abs(e - o),
							t = Math.abs(f - s);
						u.offset({
							left: Math.min(e, o),
							top: Math.min(f, s)
						}).width(i).height(t), u.children(".lady-box-frame").css("line-height", t + "px")
					}
				}), n(document).unbind("mouseup.dragBox").bind("mouseup.dragBox", function(t) {
					var r, c, a, v, p;
					if(h = !1, u) {
						var w = t.x || t.pageX,
							b = t.y || t.pageY,
							y = !1;
						if((u.width() < 30 || u.height() < 30) && (n(".box-rel").removeClass("poinert-sel"), y = !0), Math.abs(w - o) < 30 && Math.abs(b - s) < 30 || y) {
							u.remove(), delete u, e = null, f = null, u = null, o = null, s = null;
							return
						}
						r = u.css("left"), r = parseInt(r.replace(/px/g, "")), c = u.css("top"), c = parseInt(c.replace(/px/g, ""));
						var d = r + u.width(),
							k = c + u.height(),
							l = i.css("left");
						l = parseInt(l.replace(/px/g, "")), a = i.css("top"), a = parseInt(a.replace(/px/g, "")), v = l + i.width(), p = a + i.height(), r - l < 0 && u.css({
							left: l + "px"
						}).width(u.width() + r - l), c < 0 && u.css({
							top: a + "px"
						}).height(u.height() + c), d > v - 2 && u.width(v - r - 6), k > i.height() - 2 && u.height(i.height() - c - 6), u.position().top == 0 && u.css({
							top: "-5px"
						}), u.position().left == 0 && u.css({
							left: "-5px"
						})
					}
					n("#poinert-box").html() != undefined && selectBox(), e = null, f = null, u = null, o = null, s = null, n("#poinert-box").remove(), SelectPointer()
				})
			}
		})
	}, n.fn.dragBox.settings = {}
}(jQuery);
var BOXRULETOP, BOXRULELEFT, BOXRULEWIDTH, BOXRULEHEIGHT, self = this,
	init = {
		setBgImage: function() {
			$("#ChangBgBtn").click(function() {
				var t, n, r, i;
				if(!$("#ChangBgUrl").val() || $("#ChangBgUrl").val() == "") {
					alert("请填图片地址");
					return
				}
				t = $("#ChangBgUrl").val(), n = new Image, n.src = t, r = 0, i = 0, $("#box").html("<div style='color:#fff;font-size:16px;text-align:center;background:red;width:200px'>图片快加载好了，请稍等哈<div>"), n.onload = function() {
					$("#box").html("");
					var r = n.width,
						i = n.height;
					$("#box").css("background", "url('" + t + "')"), $("#box").width(r), $("#box").height(i), $(".boxContainer").height(i + 22), $("#boxRule").height(i - 22), r > $(window).width() ? ($("#boxRule").width(r - 22), $(".boxContainer").height($(".boxContainer").height() + 17)) : $("#boxRule").width($(window).width() - 45), self.init.setRuler(), $(".vRule").height($(".vRule").height() - 63), $(".mousePosBox").hide(), $("#tools_zuobiao").attr("checked", !1), $("#referLine1,#referLine2").height($(".vRule").height() + 45), $("#referLine1").css("left", "370px"), $("#referLine2").css("left", "1285px")
				}, n.onerror = function() {
					$("#box").html("<div style='color:#fff;font-size:16px;text-align:center;background:red;width:200px'>图片地址有误，请重新输入<div>")
				}
			}), $("#ChangBgUrl").click(function() {
				$(this).select()
			}), $("#ChangBgBtn").click()
		},
		setDragBoxContainer: function() {
			$("#box").dragBox(), $(".controlSelect").draggable(), $(".hostspaceBox").draggable(), $("#poinertBoxLine").click(function() {
				$(this).select()
			})
		},
		createCode: function() {
			var n = 5,
				i = (Math.random() * 9999999999).toFixed(0),
				t = "<div class='w" + $("#box").width() +"'><img src=" + $("#box").css("background-image").replace("url(", "").replace(")", "") + " border='0' usemap='#map" + i + "' alt=''/><map name='map" + i + "' id='map" + i + "'>";
			return $(".box-rel").each(function() {
				t += "<area shape='rect' coords='" + (parseInt($(this).position().left.toFixed(1)) + n) + "," + (parseInt($(this).position().top.toFixed(1)) + n) + "," + (parseInt($(this).width().toFixed(1)) + parseInt($(this).position().left.toFixed(1)) + n) + "," + (parseInt($(this).height().toFixed(1)) + parseInt($(this).position().top.toFixed(1)) + n) + "'  href='" + $(this).attr("areasrc") + "' target='" + $(this).attr("areamode") + "' title='" + ($(this).attr("title") == "请输入热区描述信息" ? "" : $(this).attr("title")) + "' alt='' />"
			}), t += "</map></div>"
		},
		setPositionPanel: function() {
			$(".moveZB").click(function() {
				var n = 9999;
				$("div.poinert-sel").each(function() {
					parseInt($(this).css("left").replace(/px/g, "")) < n && (n = parseInt($(this).css("left").replace(/px/g, "")))
				}), $("div.poinert-sel").each(function() {
					$(this).css({
						left: n + "px"
					})
				})
			}), $(".moveYB").click(function() {
				var n = 0;
				$("div.poinert-sel").each(function() {
					parseInt($(this).css("left").replace(/px/g, "")) + $(this).width() > n && (n = parseInt($(this).css("left").replace(/px/g, "")) + $(this).width())
				}), $("div.poinert-sel").each(function() {
					$(this).css({
						left: n - $(this).width() + "px"
					})
				})
			}), $(".moveDB").click(function() {
				var n = 9999;
				$("div.poinert-sel").each(function() {
					parseInt($(this).css("top").replace(/px/g, "")) < n && (n = parseInt($(this).css("top").replace(/px/g, "")))
				}), $("div.poinert-sel").each(function() {
					$(this).css({
						top: n + "px"
					})
				})
			}), $(".moveDiB").click(function() {
				var n = 0;
				$("div.poinert-sel").each(function() {
					parseInt($(this).css("top").replace(/px/g, "")) + $(this).height() > n && (n = parseInt($(this).css("top").replace(/px/g, "")) + $(this).height())
				}), $("div.poinert-sel").each(function() {
					$(this).css({
						top: n - $(this).height() + "px"
					})
				})
			}), $(".moveCZ").click(function() {
				var n = 9999;
				$("div.poinert-sel").each(function() {
					parseInt($(this).css("top").replace(/px/g, "")) + $(this).height() / 2 < n && (n = parseInt($(this).css("top").replace(/px/g, "")) + $(this).height() / 2)
				}), $("div.poinert-sel").each(function() {
					$(this).css({
						top: n - $(this).height() / 2 + "px"
					})
				})
			}), $(".moveSZ").click(function() {
				var n = 9999;
				$("div.poinert-sel").each(function() {
					parseInt($(this).css("left").replace(/px/g, "")) + $(this).width() / 2 < n && (n = parseInt($(this).css("left").replace(/px/g, "")) + $(this).width() / 2)
				}), $("div.poinert-sel").each(function() {
					$(this).css({
						left: n - $(this).width() / 2 + "px"
					})
				})
			}), $("#moveHXJJ").click(function() {
				var t = $("#poinertBoxLine").val() ? parseInt($("#poinertBoxLine").val()) : 0,
					n = 0;
				$("div.poinert-sel").each(function(i) {
					if(i == 0) n = parseInt($(this).css("left").replace(/px/g, "")) + $(this).width();
					else {
						var u = n + t + $(this).width();
						u = u > $("#box").width() ? $("#box").width() - $(this).width() - 5 : n + t, $(this).css({
							left: u + "px"
						}), n = parseInt($(this).css("left").replace(/px/g, "")) + $(this).width()
					}
				})
			}), $("#moveZXJJ").click(function() {
				var t = $("#poinertBoxLine").val() ? parseInt($("#poinertBoxLine").val()) : 0,
					n = 0;
				$("div.poinert-sel").each(function(i) {
					if(i == 0) n = parseInt($(this).css("top").replace(/px/g, "")) + $(this).height();
					else {
						var u = n + t + $(this).height();
						u = u > $("#box").height() ? $("#box").height() - $(this).height() - 5 : n + t, $(this).css({
							top: u + "px"
						}), n = parseInt($(this).css("top").replace(/px/g, "")) + $(this).height()
					}
				})
			}), $("#closehostspaceBox").click(function() {
				$(".hostspaceBox").slideUp(300), $("#tools_duiqi").attr("checked", !1)
			}), $(".hostspaceBox,.controlSelect").css("left", $(window).width() - $(".hostspaceBox").width())
		},
		objEventClick: function() {
			$(".hostspaceTable img").click(function() {
				for(var i = $(this).attr("src"), t = $(".hostspaceTable img"), n = 0; n < t.length; n++) $(t[n]).attr("src", $(t[n]).attr("src").replace("_s.jpg", ".jpg"));
				i.indexOf("_s.jpg") == -1 && $(this).attr("src", i.replace(".jpg", "_s.jpg"))
			}), $("#ChoosePointer").click(function() {
				$(this).removeClass().addClass("icon2_s"), $("#Choosehostspace").removeClass().addClass("icon1"), removeMouseFn($("#box")), $("#box").css("cursor", "default"), $("#box").pointerBox()
			}), $("#Choosehostspace").click(function() {
				$(this).removeClass().addClass("icon1_s"), $("#ChoosePointer").removeClass().addClass("icon2"), removeMouseFn($("#box")), $(".box-rel").removeClass("poinert-sel"), $("#box").css("cursor", "crosshair"), $("#box").dragBox()
			}), $("#hostspacePreview").click(function() {
				var t = self.init.createCode(),
					n = $("<form action='/hot/preview' method='post' target='_blank'><input type='hidden' id='code' name='code' value='" + escape(t) + "' /></form>");
				n.appendTo(document.body).submit()
			}), $("#hostspaceCreate").click(function() {
				$("#CreateText").val(self.init.createCode()), $(".createBox").show(), showBox("dlgCreateCode"), $("#CreateText").click(function() {
					$("#CreateText").select()
				}), $("#copy_code").unbind("zclip").zclip({
					path: "/scripts/zeroclipboard.swf",
					copy: $("#CreateText").val(),
					afterCopy: function() {
						closeBox("dlgCreateCode"), $("#copylightbox").click()
					}
				})
			}), $("#copy_close").click(function() {
				closeBox("dlgCreateCode")
			}), $("#cleanUrl").click(function() {
				$("#ChangBgUrl").val("")
			}), $(".copylightbox").lightbox()
		},
		dialogControl: function() {
			$("#dlgCreateCode").dialog("close")
		},
		setRuler: function() {
			$("#boxRule").ruler({
				vRuleSize: 0,
				hRuleSize: 0,
				showCrosshair: !1,
				showMousePos: !0
			})
		},
		setToobar: function() {
			$("#tools_biaochi").click(function() {
				$(this).attr("checked") ? $(".ruler").show() : $(".ruler").hide()
			}), $("#tools_duiqi").click(function() {
				$(this).attr("checked") ? $(".hostspaceBox").slideDown(300) : $(".hostspaceBox").slideUp(300)
			}), $("#tools_zuobiao").click(function() {
				$(this).attr("checked") ? $(".mousePosBox").show() : $(".mousePosBox").hide()
			})
		},
		setConfig: function() {
			$("#box").attr("date-val", (Math.random() * 9999999999).toFixed(0)), $("#box").width($(window).width() - 20), BOXRULETOP = $("#box").position().top + 390, BOXRULELEFT = $("#box").position().left, BOXRULEWIDTH = $("#box").width(), BOXRULEHEIGHT = $("#box").height()
		},
		load: function() {
			self.init.setConfig(), self.init.setBgImage(), self.init.setDragBoxContainer(), self.init.setPositionPanel(), self.init.objEventClick(), self.init.dialogControl(), self.init.setToobar()
		}
	};
$(function() {
	$.checkInit() == !0 && new init.load
})