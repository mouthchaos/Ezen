$(function(){
    // scrollTo 플러그인 사용 - 논리적인게 아니라 이 회사에서 만든거임. 그냥 쓰면된다
    // $('.gnb a').click(function(){
    //     // scrollTo(링크될 # || Y축픽셀값(포지션 잡은이유), 애니메이션 시간)
    //     $(window).scrollTo(this.hash || 0,500);
    // });

    // // animate 부드러운 스크롤탑 이동
    // // animate(메서드), 속성 scrollTop, 이벤트
    // $('.top').click(function(e){
    //     // 기본적으로 무조건 빼줘야함, 이벤트 겹쳐있으면
    //     e.preventDefault(); 
    //     $('html,body').stop().animate({scrollTop:0},1000,'swing');
    // });
    // // 스크롤 100px이상 되었을때 TOP 버튼 나오도록 코딩
    // var sa = 100;
    // $(window).scroll(function(){
    //     // 값이 숫자로 나옴
    //     var num = $(window).scrollTop(); 
    //     // console.log(num);

    //     if(num>=sa){
    //         $('aside').stop().fadeIn();
    //     }else {
    //         $('aside').stop().fadeOut();
    //     };
    // });
    // 연습
    // 1. scrollTo 플러그인 사용하여 gnb 클릭하면 해당 이미지로 500밀리세컨속도로 이동
    $('.gnb a').on('click',function(){
        $(window).scrollTo(this.hash || 0,500);
    });
    // 2. GO TO TOP버튼 1000 속도로 맨 위로 올라가게 코딩
    $('.top').click(function(e){
        e.preventDefault();
        $(window).stop().animate({scrollTop:0},1000,'swing');
    })
    // 3. 스크롤 100px 이상 되었을때 TOP 버튼 나오도록 코딩
    $(window).scroll(function(){
        var num = $(window).scrollTop()
        if(num>=100){
            $('aside').stop().fadeIn();
        }else{
            $('aside').stop().fadeOut();
        }
    })

});