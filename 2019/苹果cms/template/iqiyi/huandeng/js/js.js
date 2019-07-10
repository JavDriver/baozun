// JavaScript Document
(function(A) {
    A.fn.lazyload = function(F) {
        var G = {
            placeholder: "http://img04.taobaocdn.com/tps/i4/T1NdXKXotzXXXXXXXX-1-1.gif",
            threshold: 50,
            container: window
        };
        if (F) {
            A.extend(G, F)
        }
        var I = this,
        C = A('textarea[class="data-lazyload"]');
        this.each(function() {
            H(this)
        });
        function H(J) {
            var K = A(J);
            if (K.attr("data-src")) {
                K.attr("src", G.placeholder)
            }
        }
        function E() {
            C.each(function() {
                if (D(this, G.container)) {
                    var L = A(this).parent(),
                    K = A(this).val();
                    L[0].innerHTML = K;
                    var M = A("img", L[0]);
                    M.each(function() {
                        H(this)
                    });
                    this.loaded = true;
                    var J = A.grep(C, 
                    function(N) {
                        return ! N.loaded
                    });
                    C = A(J);
                    A.merge(I, A.makeArray(M));
                    A(G.container).trigger("scroll")
                }
            })
        }
        function B() {
            I.each(function() {
                var K = A(this);
                if (K.attr("data-src") && D(this, G.container)) {
                    K.hide().attr("src", K.attr("data-src")).fadeIn();
                    K.removeAttr("data-src");
                    K.loaded = true;
                    var J = A.grep(I, 
                    function(L) {
                        return ! L.loaded
                    });
                    I = A(J)
                }
            })
        }
        A(G.container).bind("scroll resize", 
        function() {
            E();
            B()
        });
        function D(T, S) {
            var L = A(T),
            J = A(S),
            U = J.width(),
            P = J.height(),
            N = J.scrollLeft(),
            V = J.scrollTop(),
            K = L.width(),
            R = L.height(),
            O = L.offset(),
            Q = O.left,
            M = O.top;
            return (M + R * G.threshold / 100) <= (P + V) && (Q + K * G.threshold / 100) <= (U + N)
        }
        A(G.container).trigger("scroll")
    }
})(jQuery);
/*publish time:2011-08-06 11:07:41*/
 (function(A) {
    A.fn.th_select = function(N, K) {
        var F = {
            node_downBtn: A(this).find("*").eq(1),
            node_text: A(this).find("*").eq(0),
            time: 2000
        };
        var B = A.extend(F, N);
        var G = B.node_downBtn;
        var I = B.node_text;
        var E = B.time;
        var H = A(this);
        var J = H.find("a");
        var L = H.find("ul");
        var C = H.find("li");
        var D = 0;
        M();
        function M() {
            G.click(function(O) {
                O.preventDefault();
                H.find("ul").css("display") == "block" ? H.find("ul").fadeOut("normal") : H.find("ul").fadeIn("normal")
            });
            C.click(function(O) {
                O.preventDefault();
                I.text(A(this).text());
                L.fadeOut("normal");
                if (typeof K !== "undefined") {
                    K(A(this).text())
                }
            });
            L.add(G).mouseout(function() {
                if (L.css("display") == "block") {
                    D = setTimeout(function() {
                        L.fadeOut("normal")
                    },
                    E)
                }
            }).mouseover(function() {
                clearTimeout(D)
            })
        }
    }
})(jQuery);
/*publish time:2011-08-08 15:16:05*/
 (function(A) {
    A.fn.tabswitch = function(D) {
        var E = {
            event: "mouseover",
            delay: 100,
            tabClass: "tab-head",
            currClass: "curr",
            contentClass: "tab-content"
        };
        if (D) {
            A.extend(E, D)
        }
        var C = this;
        function B(H, J, G) {
            var I = J;
            I.addClass(G).siblings("li").removeClass(G);
            var K = A("." + E.contentClass, C).eq(H),
            F = K.find('>script[type="text/templ"]');
            if (F.length > 0) {
                K[0].innerHTML = F.html()
            }
            K.fadeIn().siblings("." + E.contentClass).hide()
        }
        A("." + E.tabClass + " li", C).each(function(G) {
            var I = A(this),
            H = null,
            F = E.currClass;
            I.bind(E.event, 
            function() {
                if (E.event === "mouseover") {
                    H = setTimeout(function() {
                        B(G, I, F)
                    },
                    E.delay)
                } else {
                    B(G, I, F)
                }
            });
            if (E.event === "mouseover") {
                I.bind("mouseout", 
                function() {
                    if (typeof H !== "undefined") {
                        clearTimeout(H)
                    }
                })
            }
        })
    }
})(jQuery);

(function($){
	jQuery.fn.carousel = function(opt) {
		var settings = {
			isAuto: false, //自动滚动
			pageItemCount: 3, //一屏的元素个数
			delay: 15000, //定时切换时间
			duration: 500, //动画执行时间
			cls_cont_wrap: '.slideUl', //包裹元素class
			cls_slideLi: '.slideLi', //元素class
			cls_prev: '.moveleft', //上一页class
			cls_next: '.moveright' //下一页class
		}

		if (opt) {
			opt = jQuery.extend(settings,opt);
		}

		var jq_context = this,
			width = jq_context.width(),
			timerid = null,
			isAuto = opt.isAuto,
			pageItemCount = opt.pageItemCount,
			delay = opt.delay,
			duration = opt.duration,
			cls_slideLi = opt.cls_slideLi,
			cls_prev = opt.cls_prev,
			cls_next = opt.cls_next,
			cls_cont_wrap = opt.cls_cont_wrap,
			jq_prev = $(cls_prev),
			jq_next = $(cls_next),
			jq_cont_wrap = jq_context.find(cls_cont_wrap),
			jq_items = jq_context.find(cls_slideLi),
			pageCount = parseInt(jq_items.length / pageItemCount,10) + (jq_items.length % pageItemCount > 0 ? 1 : 0), //页总数
			currIndex = 0; //当前页索引

		return jq_context.each(function() {
			var jq_this = $(this);

			//只有一页
			if (pageCount === 1) {
				jq_prev.addClass(cls_prev.substr(1,cls_prev.length) + '_dis');
				jq_next.addClass(cls_next.substr(1,cls_next.length) + '_dis');
			}

			//开始动画
			function startAnim() {
				if (currIndex > pageCount - 1) currIndex = 0;
				if (currIndex == 0) {
					jq_prev.addClass(cls_prev.substr(1,cls_prev.length) + '_dis');
					jq_next.removeClass(cls_next.substr(1,cls_next.length) + '_dis');
				}
				else if (currIndex == pageCount - 1) {
					jq_next.addClass(cls_next.substr(1,cls_next.length) + '_dis');
					jq_prev.removeClass(cls_prev.substr(1,cls_prev.length) + '_dis');
				}
				else {
					jq_prev.removeClass(cls_prev.substr(1,cls_prev.length) + '_dis');
					jq_next.removeClass(cls_next.substr(1,cls_next.length) + '_dis');
				}

				jq_cont_wrap.stop(true,true).animate({left:currIndex * width * -1},duration);
			}
			//console.log(jq_items.length)
			function auto() {
				timerid = setTimeout(function(){
					currIndex++;
					startAnim();

					timerid = setTimeout(arguments.callee,delay);
				},delay);
			}

			//如果允许自动切换
			if (isAuto) {
				auto();

				var arr = [jq_this,jq_prev,jq_next];
				for (var i = 0; i < arr.length; i++) {
					var item = arr[i];
					item.hover(function(){
						if (timerid) {
							clearTimeout(timerid);
							timerid = null;
						}
					},function(){
						auto();
					});
				}
			}

			//上一页
			jq_prev.click(function() {
				currIndex--;
				if (currIndex < 0) {
					currIndex = 0;
					//第一页
					//TODO
					return;
				}
				startAnim();
			});

			//下一页
			jq_next.click(function() {
				currIndex++;
				if (currIndex > pageCount - 1) {
					currIndex = pageCount - 1;
					//最后一页
					//TODO
					return;
				}
				startAnim();
			});
		})
	}
})(jQuery);

// SLIDE screen
(function() {
	var LI_WIDTH = [583, 199, 199, 198], 
		LI_DOM = [$('.slide_screen li.liA'), $('.slide_screen li.liB'), $('.slide_screen li.liC'), $('.slide_screen li.liD')], 
		LI_BTN = $('.slide_screen .libtn'),
		COUNT =  3, SPEED = 1000, DISTIM = 6000, LI_COUNT = 4;
	var cur = 1, next_cur = 2, runid, isclick = true;

	init();
	initEvent();

	runid = setInterval(run, DISTIM);
	function init() {
		LI_BTN.find('li').eq(cur-1).addClass('selected');

		for(var i=0; i<LI_COUNT; i++) {
			LI_DOM[i].find('.window').css({'top':0, 'left':0, 'position':'absolute'});
			LI_DOM[i].find('.window').css('width', LI_WIDTH[i]*COUNT);
		}

	}
	function initEvent() {
		LI_BTN.click(function(ev){
			if(isclick && $(ev.target).attr("_index") !== undefined) {
				isclick = false;
				LI_BTN.find('li').eq(cur-1).removeClass('selected');
				clearInterval(runid);
				runid = null;
				cur = parseInt($(ev.target).attr("_index"));
				next_cur = cur + 1;
				LI_BTN.find('li').eq(cur-1).addClass('selected');
				for(var i=0; i<LI_COUNT; i++) {
					LI_DOM[i].find('.window').stop(true,true).animate({"left": -(cur-1)*LI_WIDTH[i]}, SPEED, function(){
						if(runid===null)runid = setInterval(run, DISTIM);
						isclick = true;
					});
				}
			}
		});
	}
	function run() {
		isclick = false;
		LI_BTN.find('li').eq(cur-1).removeClass('selected');
		if(cur != COUNT){
			for(var i=0; i<LI_COUNT; i++) {
				LI_DOM[i].find('.window').stop(true,true).animate({"left": -(next_cur-1)*LI_WIDTH[i]}, SPEED, function() {
					isclick = true;
				});
			}
			cur++;
			next_cur = cur + 1;
		}
		else {
			for(var i=0; i<LI_COUNT; i++) {
				LI_DOM[i].find('.piece:lt('+(COUNT-1)+')').clone().insertAfter(LI_DOM[i].find('.piece').last());
				LI_DOM[i].find('.piece:lt('+(COUNT-1)+')').remove();
				LI_DOM[i].find('.window').css('left', '0px');

                LI_DOM[i].find('.window').stop(true,true).animate({"left": -LI_WIDTH[i]}, SPEED, function() {
	            	$(this).find('.piece').first().clone().insertAfter($(this).find('.piece').last());
	            	$(this).find('.piece').first().remove();
	            	$(this).css('left', '0px');
	            	isclick = true;
                });
			}
			cur = 1;
			next_cur = cur + 1;
		}
		LI_BTN.find('li').eq(cur-1).addClass('selected');
	}
})();


(function($){
	jQuery.fn.carousel = function(opt) {
		var settings = {
			isAuto: false, //自动滚动
			pageItemCount: 3, //一屏的元素个数
			delay: 15000, //定时切换时间
			duration: 500, //动画执行时间
			cls_cont_wrap: '.slideUl', //包裹元素class
			cls_slideLi: '.slideLi', //元素class
			cls_prev: '.moveleft', //上一页class
			cls_next: '.moveright' //下一页class
		}

		if (opt) {
			opt = jQuery.extend(settings,opt);
		}

		var jq_context = this,
			width = jq_context.width(),
			timerid = null,
			isAuto = opt.isAuto,
			pageItemCount = opt.pageItemCount,
			delay = opt.delay,
			duration = opt.duration,
			cls_slideLi = opt.cls_slideLi,
			cls_prev = opt.cls_prev,
			cls_next = opt.cls_next,
			cls_cont_wrap = opt.cls_cont_wrap,
			jq_prev = $(cls_prev),
			jq_next = $(cls_next),
			jq_cont_wrap = jq_context.find(cls_cont_wrap),
			jq_items = jq_context.find(cls_slideLi),
			pageCount = parseInt(jq_items.length / pageItemCount,10) + (jq_items.length % pageItemCount > 0 ? 1 : 0), //页总数
			currIndex = 0; //当前页索引

		return jq_context.each(function() {
			var jq_this = $(this);

			//只有一页
			if (pageCount === 1) {
				jq_prev.addClass(cls_prev.substr(1,cls_prev.length) + '_dis');
				jq_next.addClass(cls_next.substr(1,cls_next.length) + '_dis');
			}

			//开始动画
			function startAnim() {
				if (currIndex > pageCount - 1) currIndex = 0;
				if (currIndex == 0) {
					jq_prev.addClass(cls_prev.substr(1,cls_prev.length) + '_dis');
					jq_next.removeClass(cls_next.substr(1,cls_next.length) + '_dis');
				}
				else if (currIndex == pageCount - 1) {
					jq_next.addClass(cls_next.substr(1,cls_next.length) + '_dis');
					jq_prev.removeClass(cls_prev.substr(1,cls_prev.length) + '_dis');
				}
				else {
					jq_prev.removeClass(cls_prev.substr(1,cls_prev.length) + '_dis');
					jq_next.removeClass(cls_next.substr(1,cls_next.length) + '_dis');
				}

				jq_cont_wrap.stop(true,true).animate({left:currIndex * width * -1},duration);
			}
			//console.log(jq_items.length)
			function auto() {
				timerid = setTimeout(function(){
					currIndex++;
					startAnim();

					timerid = setTimeout(arguments.callee,delay);
				},delay);
			}

			//如果允许自动切换
			if (isAuto) {
				auto();

				var arr = [jq_this,jq_prev,jq_next];
				for (var i = 0; i < arr.length; i++) {
					var item = arr[i];
					item.hover(function(){
						if (timerid) {
							clearTimeout(timerid);
							timerid = null;
						}
					},function(){
						auto();
					});
				}
			}

			//上一页
			jq_prev.click(function() {
				currIndex--;
				if (currIndex < 0) {
					currIndex = 0;
					//第一页
					//TODO
					return;
				}
				startAnim();
			});

			//下一页
			jq_next.click(function() {
				currIndex++;
				if (currIndex > pageCount - 1) {
					currIndex = pageCount - 1;
					//最后一页
					//TODO
					return;
				}
				startAnim();
			});
		})
	}
})(jQuery);

// SLIDE screen
(function() {
	var LI_WIDTH = [583, 199, 199, 198], 
		LI_DOM = [$('.slide_screen li.liA'), $('.slide_screen li.liB'), $('.slide_screen li.liC'), $('.slide_screen li.liD')], 
		LI_BTN = $('.slide_screen .libtn'),
		COUNT =  3, SPEED = 1000, DISTIM = 6000, LI_COUNT = 4;
	var cur = 1, next_cur = 2, runid, isclick = true;

	init();
	initEvent();

	runid = setInterval(run, DISTIM);
	function init() {
		LI_BTN.find('li').eq(cur-1).addClass('selected');

		for(var i=0; i<LI_COUNT; i++) {
			LI_DOM[i].find('.window').css({'top':0, 'left':0, 'position':'absolute'});
			LI_DOM[i].find('.window').css('width', LI_WIDTH[i]*COUNT);
		}

	}
	function initEvent() {
		LI_BTN.click(function(ev){
			if(isclick && $(ev.target).attr("_index") !== undefined) {
				isclick = false;
				LI_BTN.find('li').eq(cur-1).removeClass('selected');
				clearInterval(runid);
				runid = null;
				cur = parseInt($(ev.target).attr("_index"));
				next_cur = cur + 1;
				LI_BTN.find('li').eq(cur-1).addClass('selected');
				for(var i=0; i<LI_COUNT; i++) {
					LI_DOM[i].find('.window').stop(true,true).animate({"left": -(cur-1)*LI_WIDTH[i]}, SPEED, function(){
						if(runid===null)runid = setInterval(run, DISTIM);
						isclick = true;
					});
				}
			}
		});
	}
	function run() {
		isclick = false;
		LI_BTN.find('li').eq(cur-1).removeClass('selected');
		if(cur != COUNT){
			for(var i=0; i<LI_COUNT; i++) {
				LI_DOM[i].find('.window').stop(true,true).animate({"left": -(next_cur-1)*LI_WIDTH[i]}, SPEED, function() {
					isclick = true;
				});
			}
			cur++;
			next_cur = cur + 1;
		}
		else {
			for(var i=0; i<LI_COUNT; i++) {
				LI_DOM[i].find('.piece:lt('+(COUNT-1)+')').clone().insertAfter(LI_DOM[i].find('.piece').last());
				LI_DOM[i].find('.piece:lt('+(COUNT-1)+')').remove();
				LI_DOM[i].find('.window').css('left', '0px');

                LI_DOM[i].find('.window').stop(true,true).animate({"left": -LI_WIDTH[i]}, SPEED, function() {
	            	$(this).find('.piece').first().clone().insertAfter($(this).find('.piece').last());
	            	$(this).find('.piece').first().remove();
	            	$(this).css('left', '0px');
	            	isclick = true;
                });
			}
			cur = 1;
			next_cur = cur + 1;
		}
		LI_BTN.find('li').eq(cur-1).addClass('selected');
	}
})();