// 탭버튼 클릭시 해당내용 나오고 다른버튼 누르면 숨기고 그 해당내용 나오게하기
$('.tab_btn li').click(function(){
    const idx = $(this).index();

    $('.tab_btn li').removeClass('on');
    $(this).addClass('on');

    $('section .list').hide();
    $('section .list').eq(idx).stop().show();
});




// Like 클릭시 빨간색하트, 좋아요수변경
$('.like').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        // $(this).css({color:"#979797"});
        $(this).html('<i class="fa fa-heart" aria-hidden="true"><span>&nbsp;Like 1</span></i>');

    }else{
        $(this).addClass('active');
        
        // $(this).css({color:"red"});
        $(this).html('<i class="fa fa-heart" aria-hidden="true"><span>&nbsp;Like 2</span></i>');

        // $('.like p').css({color:"#979797"});
        $('.like i').css({color:"red"});

    }
});