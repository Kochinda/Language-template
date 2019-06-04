// 以下のような動きのあるWebサイトを作成する
// A- スクロールすると鳥アイコンが表示され、クリックするとページのトップに移動する
// B- HTMLのセクションが左から右に移動して、表示される
// C- CSSのセクションが右から左に移動して、表示される
// D- JavaScriptのセクションにある、2つの画像がフェードイン・アウトされる

// 【挑戦問題】
// E- 各セクションにあるアイコンをクリックすると、LightBoxで表示される
// F- LightBoxの黒背景をクリックすると、LightBoxが閉じる

$(function(){

 //クリックするとページのトップに移動する
    // When the bird icon clicked...
    $('.bird').click(function(){

        $('html').animate({scrollTop: 0}, 1000);

    });

 //スクロールすると
    // A>>when window(page) scrolled..
    $(window).scroll(function(){

        // get scrollTop.value
        let scrollTop = $(document).scrollTop();

        // 鳥アイコンが表示される。
        //bird icon shows at 500px
        if(scrollTop > 500){

            $('.bird').fadeIn();

        } else{
            $('.bird').fadeOut();

        }

    // B >> HTMLのセクションが左から右に移動して、表示される
        // get 'section HTML div'
        let secHtml = $('.html');
        // get secHtml scroll.val
        let thmlTop = secHtml.offset().top;
        // if thmlop is -200 from top of the window
        if(scrollTop > thmlTop -200){
            // show 'section HTML' div' 
            secHtml.animate({left: 0}, 1000);
       }

    // C >> CSSのセクションが右から左に移動して、表示される
        //get 'section CSS div'
        let secCss = $('.css');

        //get 'section CSS div' scroll.val
        let cssTop = secCss.offset().top;

        // if it's -200 from top of the window
        if(scrollTop > cssTop -200){
            // show 'section CSS div'
            secCss.animate({right: 0}, 1000)
        }

    // D >> JavaScriptのセクションにある、2つの画像がフェードイン・アウトされる
        // get 'section js div'
        let secJs = $('.js');
        
        // get 'section js div' scroll.val
        let jsTop = secJs.offset().top;

        // if it's -200 from top of the window
        if(scrollTop > jsTop -200){

           $('.js .section-content').fadeIn('slow');
        
        } else{
           $('.js .section-content').fadeOut('slow');
        }
    });

});