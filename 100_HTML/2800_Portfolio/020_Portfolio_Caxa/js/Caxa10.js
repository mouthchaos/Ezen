$(document).ready(function(){
    $('.top_sub>p').eq(1).on('click',function(){
        $('aside').stop().slideUp(1000);
    });
    $('.top_sub>p').eq(-1).on('click',function(){
        $('aside').stop().slideUp(1000);
    });

    
});