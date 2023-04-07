$(document).ready(function(){
    // 1. jQuery UI플러그인 : 효과 메서드들의 추가 기능 제공 플러그인
    // show(effect type,시간관련), hide(effect type,시간관련), toggle(effect type,시간관련) => effect type 지정
    // effect type = blind, bounce, clip, explode, fold, highlight, shake 등


    // 순서대로 shake , fold, explode 효과넣기 

    $('ul li').eq(0).on('click',function(){
        $('img').stop().show('shake','slow');
    });
    $('ul li').eq(1).on('click',function(){
        $('img').stop().hide('fold','slow');
    });
    $('ul li').eq(2).on('click',function(){
        $('img').stop().toggle('explode','slow');
    });

    // 2. jQuery Core에서는 속성값이 숫자형인것만 가능
    //    jQuery UI 플러그인에서는 대부분 속성 사용 가능

    // 실습. 마지막 버튼 클릭시
    //       배경색 블랙, 글자색 실버
    //       버튼 클릭후 3초후에 글자색 레드, 글자두께 700
    //       이 되도록 애니메이션 코딩하세요

    $('ul li').eq(-1).on('click',function(){
        $('footer').stop().animate({backgroundColor:'#111',color:'silver'},500);
        $('footer span').stop().delay(3000).animate({color:'red',fontWeight:'700'},500);
    });

});