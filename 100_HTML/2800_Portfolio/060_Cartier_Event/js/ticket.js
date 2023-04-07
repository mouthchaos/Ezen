$('#myBtn').on('click',myFunction);
// EventListener
function myFunction(){
    // 변수할당
    var dots = $('#dots');
    var moreButton = $('#more');
    var btnText = $('#myBtn');
    // css 속성에 변수를주면 분기가 가능 초기값은 default값이된다
    var result =  $('#dots').css('display');
    console.log(result);

    // display가 none이라면
    if(result == 'none'){
        dots.css({display:'inline'});
        btnText.text('+MORE');
        moreButton.css({display:'none'});
    }else{ // display가 none이 아니라면
        dots.css({display:'none'});
        btnText.text('-CLOSE');
        moreButton.css({display:'inline'});
    }
}