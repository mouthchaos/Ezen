// Video 제어버튼 CSS
$('figure').find('button').css({
    position : 'absolute',
    right : '400px',
    top : '50px',
    cursor : 'pointer',
    background : 'none',
    outline : 'none'
});
$('figure').find('i').css({
    fontSize : '30px',
    color : '#fff'
});
$('figure').find('button').eq(0).css({
    right : '540px'
});
$('figure').find('button').eq(1).css({
    right : '470px'
});

// Video 제어 스크립트
$('figure button').eq(0).click(function(){
    $('figure').find('video').get(0).play();
});
$('figure button').eq(1).click(function(){
    $('figure').find('video').get(0).pause();
});
$('figure button').eq(-1).click(function(){
    $('figure').find('video').get(0).load();
});
