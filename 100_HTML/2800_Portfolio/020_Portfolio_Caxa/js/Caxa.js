$(document).ready(function(){
    $('.btn1').click(function(){
        $('.head1 h2').eq(0).stop().hide();
        $('.head1 h2').eq(1).stop().hide();
        $('.btn1').stop().hide();
    });
    $('.btn2').click(function(){
        $('.head1').stop().slideUp();
    });
});