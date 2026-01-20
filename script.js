// 간단한 탭 전환 기능
document.addEventListener('DOMContentLoaded', () => {
    // 탭 클릭 이벤트
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            console.log(`탭 ${index + 1} 선택됨`);
        });
    });

    // 히어로 섹션 화살표 클릭 이벤트
    const chevronLeft = document.querySelector('.chevron-left');
    const chevronRight = document.querySelector('.chevron-right');

    if (chevronLeft) {
        chevronLeft.addEventListener('click', () => {
            console.log('이전');
        });
    }

    if (chevronRight) {
        chevronRight.addEventListener('click', () => {
            console.log('다음');
        });
    }

    // 푸터 링크 클릭 이벤트
    const footerLinks = document.querySelectorAll('.footer-links p');
    footerLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log(`${link.textContent} 클릭됨`);
        });
    });
});
