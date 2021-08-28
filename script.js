//（0）全体の囲みは即時関数です、決り文句としてこの枠内に記述を書くと他のjsの影響などを受けなくなります。
(()=>{
'use strict';

$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

$(function(){
    $(window).scroll(function (){
        $(' .down-to-top').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 150){
                $(this).addClass('scrollin');
            }
        });
    });
});

	$(function(){
    $(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});
});

$(function() {
    var headerHeight = 80;//固定ヘッダーの高さを入れる
    $('[href^="#"]').click(function(){
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top-headerHeight;
      $("html, body").animate({scrollTop:position}, 250, "swing");//200はスクロールの移動スピードです
      return false;
    });
  });


})();// END
