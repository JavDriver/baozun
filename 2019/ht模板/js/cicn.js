$(document).ready(function(){
    var p
    $('#selectbig').change(function(){
        var p1 = $(this).children('option:selected').val();//这就是selected的值
        $('.conten').css("width",p1);
        p = p1;
    })

    $('#selectsmall').change(function(){
        var p2 = $(this).children('option:selected').val();//这就是selected的值
        if(p2 == 2 && p == 750){
            $('.conten ul li').css({'width':'48.5%','margin-right':'3%'});
            $('.conten ul li:nth-child(2n)').css('margin-right','0');
            $('.conten ul li>div>span').css('height','473px');
        }else if(p2 == 4 && p == 990){
            $('.conten ul').addClass("act4")
            $('.conten ul li').css({'width':'24.3%','margin-right':'0.93%'});
            $('.conten ul li>div>span').css({'height':'306px','margin-bottom':'11px'});
            $('.conten ul li p').css({'font-size':'18px','margin-bottom':'0px','line-height':'28px','letter-spacing': '-1px'});
            $('.conten ul li em').css('font-size','16px');
            $('.logof').css({'width':'82%','height':'55px','right':'-1px'});
            $('.logof h3').css({'font-size':'18px','top':'3px','left':'22px'});
            $('.logof h3 cite').css({'font-size':'15px'});
            $('.logof h3 i').css({'font-size':'14px','top':'-4px','left':'0'});
            $('.logof h4').css({'font-size':'24px','top':'29px','right':'87px'});
            $('.logof h2').css({'font-size':'48px','top':'-15px','right':'5px'});
            $('.logof h2 i').css({'font-size':'34px','top':'5px','left':'-16px'});
        }else if(p2 == 3 && p == 990){
            $('.conten ul li').css({'width':'32%','margin-right':'2%'});
            $('.conten ul li:nth-child(3n)').css('margin-right','0');
            $('.conten ul li>div>span').css({'height':'421px','margin-bottom':'14px'});
            $('.conten ul li p').css({'font-size':'24px','margin-bottom':'4px','line-height':'28px','letter-spacing': '-1px'});
            $('.conten ul li em').css('font-size','22px');
            $('.logof').css({'width':'82%','height':'58px','right':'-1px'});
            $('.logof h3').css({'font-size':'18px','top':'3px','left':'22px'});
            $('.logof h3 cite').css({'font-size':'15px'});
            $('.logof h3 i').css({'font-size':'14px','top':'-4px','left':'0'});
            $('.logof h4').css({'font-size':'24px','top':'31px','right':'87px'});
            $('.logof h2').css({'font-size':'48px','top':'0px','right':'10px'});
            $('.logof h2 i').css({'font-size':'32px','top':'5px','left':'-16px'});
        }else if(p2 == 4 && p == 1200){
            $('.conten ul li').css({'width':'24.3%','margin-right':'0.93%'});
            $('.conten ul li:nth-child(4n)').css('margin-right','0');
            $('.conten ul li>div>span').css({'height':'389px','margin-bottom':'15px'});
            $('.conten ul li p').css({'font-size':'24px','margin-bottom':'4px','line-height':'30px','letter-spacing': '1px'});
            $('.conten ul li em').css('font-size','22px');
              $('.logof').css({
                  'bottom': '-21px',
                  'width':'88%'
              });
                $('.cont-lefc').css({
                    'left': '-4px'
                });
              $('.logof h3').css({
                  'font-size': '22px',
                  'margin-bottom': '-6px',
                  'margin-top': '4px'
              });
              $('.logof h3 cite').css({
                  'font-size': '20px'
              });
              
              $('.logof h4').css({
                  'font-size': '20px'
              });
               $('.logof h4 i').css({
                   'font-size': '23px'
               });
              $('.logof h2').css({
                  'font-size': '50px',
                  'margin-top': '16px'
              });
              $('.logof h2 i').css({
                  'font-size': '40px',
                  'top': '-8px'
              });
        }else if(p2 == 4 && p == 1430){
            $('.conten ul li').css({'width':'24.3%','margin-right':'0.93%'});
            $('.conten ul li:nth-child(4n)').css('margin-right','0');
            $('.conten ul li>div>span').css({'height':'462px','margin-bottom':'15px'});
            $('.conten ul li p').css({'font-size':'24px','margin-bottom':'0px','line-height':'28px','letter-spacing': '-1px'});
            $('.conten ul li em').css('font-size','22px');
        }else if(p2 == 5 && p == 1200) {
            $('.conten ul li').css({'width': '19.28%', 'margin-right': '0.9%'});
            $('.conten ul li:nth-child(5n)').css('margin-right', '0');
            $('.conten ul li>div>span').css({'height': '308px', 'margin-bottom': '15px'});
            $('.conten ul li p').css({'font-size': '19px', 'margin-bottom': '0px', 'line-height': '28px', 'letter-spacing': '-1px'});
            $('.conten ul li em').css('font-size', '18px');
        }else if(p2 == 5 && p == 990) {
            $('.conten ul li').css({'width': '19.28%', 'margin-right': '0.9%'});
            $('.conten ul li:nth-child(5n)').css('margin-right', '0');
            $('.conten ul li>div>span').css({'height': '255px', 'margin-bottom': '8px'});
            $('.conten ul li p').css({'font-size': '16px', 'margin-bottom': '0px', 'line-height': '25px', 'letter-spacing': '-1px'});
            $('.conten ul li em').css('font-size', '15px');
        }

    })


$('.sport').click(function(){
    $('.conten ul li p').css({'font-family':'"benttons超紧缩粗体","方正兰亭黑简"','font-size':'24px'});
})

    $('.pink').click(function(){
        $('.conten ul li p').css({'font-family':'"PinkSans130","方正兰亭黑简"','font-size':'28px'});
    })

    $('.qg').click(function(){
        $('.conten ul li em').html('零点抢购 >');
    })



})