// DOM 할당
const plusBtn = document.querySelectorAll('.footer_menu>dl>dt');
// 이벤트 리스너 연결
for(let i=0; i<plusBtn.length; i++){
    plusBtn[i].addEventListener('click', showFooterMenu);
}

// 상수에 할당
const CLICKED_CLASS = 'clicked';
const MARKED_CLASS = 'mark';

// 이벤트 리스너
function showFooterMenu(){
    this.nextElementSibling.classList.toggle(CLICKED_CLASS);
    this.classList.toggle(MARKED_CLASS);
}