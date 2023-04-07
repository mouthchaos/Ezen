window.onload = function(){
    // 1. 개별 열기/닫기 버튼

    var opens = document.querySelectorAll('.open1');
    console.log('opens : ',opens);
    var closes = document.querySelectorAll('.close1');
    console.log('closes : ',closes);

    // 2. 모두열기/모두닫기 버튼
    var open,close;
    open = document.querySelector('.open');
    console.log('open : ',open);
    close = document.querySelector('.close');
    console.log('close : ',close);

    // 3.각각 콘텐츠
    var content;
    content = document.querySelectorAll('.content');
    console.log('content : ',content);


    // content = document.querySelectorAll('article>h2+p');


    // 2-1 모두열기 구현
    // 모두열기 클릭했을때 (경고창) 구현, 선언적함수 스타일로 코딩
    // 소스캡처,넘버링
    open.addEventListener('click',allOpen);
    // 이벤트리스너
    function allOpen(){
        
    }

    // 2-2 모두닫기 구현
    close.addEventListener('click',allClose);
    // 이벤트리스너
    function allClose(){
       
    }
}

