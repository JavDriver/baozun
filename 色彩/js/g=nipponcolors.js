(function ($) {
    var locationWrapper = {
        put: function (hash, win) {
            (win || window).location.hash = encodeURIComponent(hash);
        }, get: function (win) {
            var hash = ((win || window).location.hash).replace(/^#/, '');
            return $.browser.fx ? hash : decodeURIComponent(hash);
        }
    };
    var iframeWrapper = {
        id: "__jQuery_history", init: function () {
            var html = '<iframe id="' + this.id + '" style="display:none" src="javascript:false;" />';
            $("body").prepend(html);
            return this;
        }, _document: function () {
            return $("#" + this.id)[0].contentWindow.document;
        }, put: function (hash) {
            var doc = this._document();
            doc.open();
            doc.close();
            locationWrapper.put(hash, doc);
        }, get: function () {
            return locationWrapper.get(this._document());
        }
    };
    var _ = {
        appState: undefined, callback: undefined, init: function (callback) {
        }, check: function () {
        }, load: function (hash) {
        }
    };
    $.history = _;
    var SimpleImpl = {
        init: function (callback) {
            _.callback = callback;
            var current_hash = locationWrapper.get();
            _.appState = current_hash;
            if (current_hash) {
                _.callback(current_hash);
            }
            setInterval(_.check, 100);
        }, check: function () {
            var current_hash = locationWrapper.get();
            if (current_hash != _.appState) {
                _.appState = current_hash;
                _.callback(current_hash);
            }
        }, load: function (hash) {
            if (hash != _.appState) {
                locationWrapper.put(hash);
                _.appState = hash;
                _.callback(hash);
            }
        }
    };
    var IframeImpl = {
        init: function (callback) {
            _.callback = callback;
            var current_hash = locationWrapper.get();
            _.appState = current_hash;
            iframeWrapper.init().put(current_hash);
            if (current_hash) {
                _.callback(current_hash);
            }
            setInterval(_.check, 100);
        }, check: function () {
            var current_hash = iframeWrapper.get();
            if (current_hash != _.appState) {
                locationWrapper.put(current_hash);
                _.appState = current_hash;
                _.callback(current_hash);
            }
        }, load: function (hash) {
            if (hash != _.appState) {
                locationWrapper.put(hash);
                iframeWrapper.put(hash);
                _.appState = hash;
                _.callback(hash);
            }
        }
    };
    if ($.browser.msie && ($.browser.version < 8 || document.documentMode < 8)) {
        $.extend(_, IframeImpl);
    } else {
        $.extend(_, SimpleImpl);
    }
})(jQuery);
jQuery.fn.iphoneSwitch = function (start_state, switched_on_callback, switched_off_callback, options) {
    var state = start_state == 'on' ? start_state : 'off';
    var settings = {
        mouse_over: 'pointer',
        mouse_out: 'default',
        switch_on_container_path: 'images/iphone_switch_container.png',
        switch_off_container_path: 'images/iphone_switch_container.png',
        switch_path: 'images/iphone_switch.png',
        switch_height: 23,
        switch_width: 74
    };
    if (options) {
        jQuery.extend(settings, options);
    }
    return this.each(function () {
        var container;
        var image;
        container = jQuery('<div class="iphone_switch_container" style="height:' + settings.switch_height + 'px; width:' + settings.switch_width + 'px; position: relative; overflow: hidden"></div>');
        image = jQuery('<img class="iphone_switch" style="height:' + settings.switch_height + 'px; width:' + settings.switch_width + 'px; background-image:url(' + settings.switch_path + '); background-repeat:none; background-position:' + (state == 'on' ? 0 : -35) + 'px" src="' + (state == 'on' ? settings.switch_on_container_path : settings.switch_off_container_path) + '" /></div>');
        jQuery(this).html(jQuery(container).html(jQuery(image)));
        jQuery(this).mouseover(function () {
            jQuery(this).css("cursor", settings.mouse_over);
        });
        jQuery(this).mouseout(function () {
            jQuery(this).css("background", settings.mouse_out);
        });
        jQuery(this).click(function () {
            if (state == 'on') {
                jQuery(this).find('.iphone_switch').animate({backgroundPosition: -35}, "slow", function () {
                    switched_off_callback();
                });
                state = 'off';
            }
            else {
                jQuery(this).find('.iphone_switch').animate({backgroundPosition: 0}, "slow", function () {
                    switched_on_callback();
                });
                state = 'on';
            }
        });
    });
};
;var $xhr;
$(function () {
    var flagObj = new Object;
    flagObj["animate"] = false;
    flagObj["anitype"] = "fadeOut";
    var colNameArray = new Array();
    var colName;
    var thisColNum;
    var colTitleStr;
    var colRubyStr
    var url;
    var imgH;
    var ncRGB;
    var ncCMYK;
    var $mask = $("#mask");
    var $switch = $("#switch");
    var $colors = $("#colors");
    var $colorTitle = $("#colorTitle");
    var $colorRuby = $("#colorRuby");
    var $CMYKcolor = $("#CMYKcolor");
    var $RGBcolor = $("#RGBcolor");
    var $bgWrap = $("body, #bgWrap");
    var $data = $("#data");
    $("input", $("#RGBvalue")).click(function () {
        $(this).select();
        return false;
    });
    $.history.init(function (hash) {
        if (hash) {
            colorTween(hash);
        }
    });
    $("a", $("#colors")).each(function () {
        var tempColName = ($(this).text()).replace(/(.*), /, "").toLowerCase();
        colNameArray.push(tempColName);
        $(this).click(function () {
            document.location.hash = tempColName;
        });
    });
    function checkChange() {
        var hash = document.location.hash.substr(1);
        if (colName != hash.toUpperCase() && hash != "") {
            colorTween(hash);
        }
    }

    function colorTween(_hash) {
        $mask.show();
        var hash = _hash.toUpperCase();
        if (flagObj["animate"] == false && colName != hash) {
            flagObj["animate"] = true;
            colName = hash;
            $switch.addClass("progress");
            abortAjax();
            $xhr = $.ajax({
                type: "POST", url: "/php/io.php", data: {"color": hash}, dataType: "json", success: function (data) {
                    ncIndex = data.index;
                    ncCMYK = data.cmyk;
                    ncRGB = data.rgb;
                    colTitleStr = ($("#col" + ncIndex, $colors).text()).replace(/, (.*)/, "");
                    colRubyStr = hash;
                    url = "../images/title_" + ncIndex + ".png";
                    var img = new Image();
                    img.onload = function (i) {
                        imgH = this.height;
                        $colorTitle.addClass("fadeOut");
                        $colorRuby.addClass("fadeOut").css({top: imgH + "px"});
                        var matrix3d = $("#col" + ncIndex, $colors).css("-webkit-transform");
                        if (matrix3d != "none") {
                            matrix3d = matrix3d.split(", ");
                            matrix3d = Math.abs(matrix3d[13]) | 0;
                            if (matrix3d > 900) {
                                matrix3d = 900;
                            }
                            else if (matrix3d < 200) {
                                matrix3d = 300;
                            }
                            $("#colorContainer").css({webkitPerspective: matrix3d});
                        }
                        $bgWrap.css({backgroundColor: "#" + ncRGB});
                    }
                    img.src = url;
                }
            });
        }
    }

    colorTitle.addEventListener('webkitAnimationEnd', function (event) {
        if (flagObj["anitype"] == "fadeOut") {
            flagObj["anitype"] = "fadeIn";
            $colorTitle.removeClass("fadeOut").css({height: imgH + "px", backgroundImage: "url(" + url + ")"}).text(colTitleStr).addClass("fadeIn");
            $colorRuby.removeClass("fadeOut").text(colRubyStr).addClass("fadeIn");
            var cPercent = ncCMYK.substr(0, 3) | 0;
            var mPercent = ncCMYK.substr(3, 3) | 0;
            var yPercent = ncCMYK.substr(6, 3) | 0;
            var kPercent = ncCMYK.substr(9, 3) | 0;
            $ddC = $("dd.c .cont", $CMYKcolor);
            $ddM = $("dd.m .cont", $CMYKcolor);
            $ddY = $("dd.y .cont", $CMYKcolor);
            $ddK = $("dd.k .cont", $CMYKcolor);
            var cPercentNow = $ddC.text() | 0;
            $ddC.text(cPercent);
            var mPercentNow = $ddM.text() | 0;
            $ddM.text(mPercent);
            var yPercentNow = $ddY.text() | 0;
            $ddY.text(yPercent);
            var kPercentNow = $ddK.text() | 0;
            $ddK.text(kPercent);
            var $cRline = $("dd.c .r .line", $CMYKcolor);
            var $cLline = $("dd.c .l .line", $CMYKcolor);
            if (cPercent > cPercentNow) {
                $cRline.css({webkitTransitionDelay: "0s"});
                $cLline.css({webkitTransitionDelay: "0.5s"});
            }
            else {
                $cRline.css({webkitTransitionDelay: "0.5s"});
                $cLline.css({webkitTransitionDelay: "0s"});
            }
            if (cPercent > 50) {
                $("dd.c .r .line", $CMYKcolor).css({webkitTransform: "rotate(180deg)"});
                $("dd.c .l .line", $CMYKcolor).delay(500).css({webkitTransform: "rotate(" + cPercent * 3.6 + "deg)"});
            }
            else if (cPercent <= 50) {
                $("dd.c .r .line", $CMYKcolor).css({webkitTransform: "rotate(" + cPercent * 3.6 + "deg)"});
                $("dd.c .l .line", $CMYKcolor).css({webkitTransform: "rotate(180deg)"});
            }
            var $mRline = $("dd.m .r .line", $CMYKcolor);
            var $mLline = $("dd.m .l .line", $CMYKcolor);
            if (mPercent > mPercentNow) {
                $mRline.css({webkitTransitionDelay: "0s"});
                $mLline.css({webkitTransitionDelay: "0.5s"});
            }
            else {
                $mRline.css({webkitTransitionDelay: "0.5s"});
                $mLline.css({webkitTransitionDelay: "0s"});
            }
            if (mPercent > 50) {
                $("dd.m .r .line", $CMYKcolor).css({webkitTransform: "rotate(180deg)"});
                $("dd.m .l .line", $CMYKcolor).css({webkitTransform: "rotate(" + mPercent * 3.6 + "deg)"});
            }
            else if (mPercent <= 50) {
                $("dd.m .r .line", $CMYKcolor).css({webkitTransform: "rotate(" + mPercent * 3.6 + "deg)"});
                $("dd.m .l .line", $CMYKcolor).css({webkitTransform: "rotate(180deg)"});
            }
            var $yRline = $("dd.y .r .line", $CMYKcolor);
            var $yLline = $("dd.y .l .line", $CMYKcolor);
            if (yPercent > yPercentNow) {
                $yRline.css({webkitTransitionDelay: "0s"});
                $yLline.css({webkitTransitionDelay: "0.5s"});
            }
            else {
                $yRline.css({webkitTransitionDelay: "0.5s"});
                $yLline.css({webkitTransitionDelay: "0s"});
            }
            if (yPercent > 50) {
                $("dd.y .r .line", $CMYKcolor).css({webkitTransform: "rotate(180deg)"});
                $("dd.y .l .line", $CMYKcolor).css({webkitTransform: "rotate(" + yPercent * 3.6 + "deg)"});
            }
            else if (yPercent <= 50) {
                $("dd.y .r .line", $CMYKcolor).css({webkitTransform: "rotate(" + yPercent * 3.6 + "deg)"});
                $("dd.y .l .line", $CMYKcolor).css({webkitTransform: "rotate(180deg)"});
            }
            var $kRline = $("dd.k .r .line", $CMYKcolor);
            var $kLline = $("dd.k .l .line", $CMYKcolor);
            if (kPercent > kPercentNow) {
                $kRline.css({webkitTransitionDelay: "0s"});
                $kLline.css({webkitTransitionDelay: "0.5s"});
            }
            else {
                $kRline.css({webkitTransitionDelay: "0.5s"});
                $kLline.css({webkitTransitionDelay: "0s"});
            }
            if (kPercent > 50) {
                $("dd.k .r .line", $CMYKcolor).css({webkitTransform: "rotate(180deg)"});
                $("dd.k .l .line", $CMYKcolor).css({webkitTransform: "rotate(" + kPercent * 3.6 + "deg)"});
            }
            else if (kPercent <= 50) {
                $("dd.k .r .line", $CMYKcolor).css({webkitTransform: "rotate(" + kPercent * 3.6 + "deg)"});
                $("dd.k .l .line", $CMYKcolor).css({webkitTransform: "rotate(180deg)"});
            }
            $("dd.r > span", $RGBcolor).text(parseInt(ncRGB.substr(0, 2), 16));
            $("dd.g > span", $RGBcolor).text(parseInt(ncRGB.substr(2, 2), 16));
            $("dd.b > span", $RGBcolor).text(parseInt(ncRGB.substr(4, 2), 16));
            $("input", $RGBcolor).attr("value", "#" + ncRGB);
        }
        else if (flagObj["anitype"] == "fadeIn") {
            flagObj["animate"] = false;
            flagObj["anitype"] = "fadeOut";
            $colorTitle.removeClass("fadeIn");
            $colorRuby.removeClass("fadeIn");
            $switch.removeClass("progress");
            $mask.hide();
            checkChange();
        }
    }, false);
    colors.addEventListener('webkitAnimationStart', function (event) {
        document.location.hash = colNameArray[Math.floor(Math.random() * 250)];
    }, false);
    colors.addEventListener('webkitAnimationIteration', function (event) {
        document.location.hash = colNameArray[Math.floor(Math.random() * 250)];
    }, false);
    $('#switch').iphoneSwitch("off", function () {
        $("body").addClass("munsell");
        $("#colorBox").addClass("munsell");
    }, function () {
        $("body").removeClass("munsell");
        $("#colorBox").removeClass("munsell");
    });
});
function abortAjax() {
    if ($xhr) {
        $xhr.abort();
        $xhr = false;
    }
}