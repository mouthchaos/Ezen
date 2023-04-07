// gnb lnb ham ES6 방식으로 DOM객체 할당하세요
const gnb = document.querySelector('#gnb');
const lnb = document.querySelector('#lnb');
const ham_btn = document.querySelector('.ham');
console.log(ham_btn,gnb,lnb);

// 화살표 함수 ()=>{} function name(){}   -  화살표가뚱뚱해서 Fat arrow함수라고함
ham_btn.addEventListener('click',()=>{
    gnb.classList.toggle('active');
    lnb.classList.toggle('active');
});