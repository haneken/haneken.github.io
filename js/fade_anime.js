function fadeAnime(){

    $('.fadeLeftTrigger').each(function(){ 
        var elemPos = $(this).offset().top-20;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeLeft');
        }
        });
    
    $('.fadeRightTrigger').each(function(){ 
        var elemPos = $(this).offset().top-20; 
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeRight');
        }
        });
    
    
    }
    
        $(window).scroll(function (){
            fadeAnime();/* アニメーション用の関数を呼ぶ*/
        });
