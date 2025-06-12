document.addEventListener('DOMContentLoaded', function() {
    // 加载动画
    const loader = document.querySelector('.loader');
    loader.style.display = 'none';

    // 轮播图
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelector('.indicators');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function createIndicators() {
        slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            indicator.addEventListener('click', () => setSlide(index));
            indicators.appendChild(indicator);
        });
        updateIndicators();
    }

    function setSlide(index) {
        currentIndex = index;
        updateSlides();
        updateIndicators();
    }

    function updateSlides() {
        const transformValue = -currentIndex * 100 + '%';
        document.querySelector('.slides').style.transform = `translateX(${transformValue})`;
    }

    function updateIndicators() {
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
        updateIndicators();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
        updateIndicators();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    createIndicators();
    const slidesContainer = document.querySelector('.slides');
let intervalId = setInterval(nextSlide, 3000);

slidesContainer.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
});

slidesContainer.addEventListener('mouseleave', () => {
    intervalId = setInterval(nextSlide, 3000);
});

    // 返回顶部按钮
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 深色/浅色模式切换
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // 技能雷达图
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue'],
            datasets: [{
                label: '技能水平',
                data: [90, 85, 80, 70, 60],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
});