function fadeAnime(){

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeLeftTrigger').each(function(){ //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top-50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeLeft');
        // 画面内に入ったらfadeInというクラス名を追記
        }
        });
    
    //関数でまとめることでこの後に違う動きを追加することが出来ます
    $('.fadeRightTrigger').each(function(){ //fadeInDownTriggerというクラス名が
        var elemPos = $(this).offset().top-50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeRight');
        // 画面内に入ったらfadeDownというクラス名を追記
        }
        });
    
    
    }//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
    
        $(window).scroll(function (){
            fadeAnime();/* アニメーション用の関数を呼ぶ*/
        });
