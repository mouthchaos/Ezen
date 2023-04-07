window.onload = function(){
    // 1-1. 개별 열기/닫기 버튼
    // 여러개있을때는 전체 선택하려면 All 선택(중요!)
    var opens = document.querySelectorAll('.open1')
    console.log('opens : ' ,opens);
    var closes = document.querySelectorAll('.close1')
    console.log('colses : ',closes);

    // 1-2. 모두열기/모두닫기 버튼
    var open = document.querySelector('.open')
    var close = document.querySelector('.close')
    console.log('open : ', open);
    console.log('close : ', open);

    // 1-3. 각각 콘텐츠 
    var content;
    content = document.querySelectorAll('.content');
    console.log('content : ',content);
    // 인접형제선택자 연습
    // content = document.querySelectorAll('article>h2+p');
    // content = document.querySelectorAll('article>h2~p');
    // console.log('content : ',content);

    // 2-1. 모두 열기 구현
    // 클릭했을때 모두 열리도록 구현, 선언적함수 스타일로 코딩
    // 소스캡쳐, 넘버링
    open.addEventListener('click', allOpen);
    close.addEventListener('click', allClose);
    function allOpen(){
        for(var i=0;i<content.length;i++){
            content[i].style.display = 'block';
        };
    };
    function allClose(){
        for(var i=0;i<content.length;i++){
            content[i].style.display = 'none';
        };
    };

        // 3. 개별 열기/닫기 버튼
        for(var i=0;i<opens.length;i++){
            opens[i].addEventListener('click',eachOpen);
            closes[i].addEventListener('click',eachClose);
        };
        // 3-1. 개별 열기 구현
        function eachOpen(){
            // 제이쿼리와 다름, parent(). next()
            var cnt = this.parentElement.nextElementSibling; 
            cnt.style.display = 'block';
        };
        // 3-2. 개별 열기 구현
        function eachClose(){
            var cCnt = this.parentElement.nextElementSibling;
            cCnt.style.display = 'none';
        }

}