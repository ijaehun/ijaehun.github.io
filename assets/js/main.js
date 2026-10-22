// 좁은 화면에서 ☰ 버튼으로 메뉴 열고 닫기
const header = document.querySelector('.site-header');
const toggle = header.querySelector('.site-header__toggle');

function setOpen(open) {
  header.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', open);
}

toggle.addEventListener('click', () => setOpen(!header.classList.contains('is-open')));
header.querySelectorAll('.site-header__nav a').forEach(a => a.addEventListener('click', () => setOpen(false)));
document.addEventListener('click', e => { if (!header.contains(e.target)) setOpen(false); });
