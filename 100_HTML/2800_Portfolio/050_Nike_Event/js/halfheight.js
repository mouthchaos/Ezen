var bw = $(window).width();
var bh = $(window).height();
$('#wrap').css({height:bh});
// 브라우저 높이의 반값 구하기
// 유투브 영상을 적용시키세요
var halfheight = bh/2;
$('.youtube').css({marginTop:halfheight});



console.log(bw,bh,halfheight);