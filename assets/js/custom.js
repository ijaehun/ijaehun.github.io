// Custom JavaScript for Blog Enhancement
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 카테고리 카드 호버 효과 개선
    const categoryCards = document.querySelectorAll('.initial-content a div');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // 2. 부드러운 스크롤 애니메이션
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. 포스트 아이템 애니메이션
    const postItems = document.querySelectorAll('.archive__item, .archive-item');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    postItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });

    // 4. 네비게이션 메뉴 개선
    const navItems = document.querySelectorAll('.nav__items a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#3498db';
            this.style.color = 'white';
            this.style.transform = 'translateX(5px)';
            this.style.borderRadius = '6px';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.color = '';
            this.style.transform = 'translateX(0)';
        });
    });

    // 5. 검색 기능 개선 (있는 경우)
    const searchInput = document.querySelector('.search-input, #search');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.style.borderColor = '#3498db';
            this.style.boxShadow = '0 0 0 3px rgba(52, 152, 219, 0.1)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.style.borderColor = '#e9ecef';
            this.style.boxShadow = 'none';
        });
    }

    // 6. 목차(TOC) 스크롤 스파이
    const tocLinks = document.querySelectorAll('.toc__menu a');
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    if (tocLinks.length > 0 && headings.length > 0) {
        const tocObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    tocLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                            link.style.color = '#3498db';
                            link.style.fontWeight = 'bold';
                        }
                    });
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '-100px 0px -100px 0px'
        });

        headings.forEach(heading => {
            if (heading.id) {
                tocObserver.observe(heading);
            }
        });
    }

    // 7. 이미지 지연 로딩
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // 8. 버튼 클릭 효과
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.4);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 9. 스크롤 위치에 따른 헤더 스타일 변경
    const header = document.querySelector('.masthead');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                header.style.backdropFilter = 'none';
            }
        });
    }

    // 10. 다크모드 토글 (선택사항)
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });

        // 저장된 다크모드 설정 적용
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }

    console.log('✨ Blog enhancement loaded successfully!');
});

// CSS 애니메이션 정의
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .toc__menu a.active {
        border-left: 3px solid #3498db !important;
        padding-left: 12px !important;
    }
    
    .lazy {
        filter: blur(5px);
        transition: filter 0.3s;
    }
`;
document.head.appendChild(style);