function initTabs() {
    document.querySelectorAll('.tabs').forEach(tabGroup => {
        const buttons = tabGroup.querySelectorAll('.tab-button');
        const panels = tabGroup.querySelectorAll('.tab-panel');
        
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Deactivate all tabs
                buttons.forEach(btn => btn.classList.remove('active'));
                panels.forEach(panel => panel.classList.remove('active'));
                
                // Activate clicked tab
                button.classList.add('active');
                panels[index].classList.add('active');
            });
        });
    });
}

function initLightbox() {
    // Create lightbox container if it doesn't exist
    if (!document.querySelector('.lightbox')) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img src="" alt="">
        `;
        document.body.appendChild(lightbox);
    }

    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    // Add click handlers to all lightbox triggers
    document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const imgSrc = trigger.href || trigger.querySelector('img').src;
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
        });
    });

    // Close lightbox on click outside or close button
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxClose) {
            lightbox.classList.remove('active');
        }
    });

    // Close lightbox on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });
}

function initQuizzes() {
    document.querySelectorAll('.quiz').forEach(quiz => {
        const submitButton = quiz.querySelector('.quiz-submit');
        const feedback = quiz.querySelector('.quiz-feedback');
        const options = quiz.querySelectorAll('input[type="radio"]');
        
        submitButton.addEventListener('click', () => {
            const selected = quiz.querySelector('input[type="radio"]:checked');
            if (!selected) return;
            
            const isCorrect = selected.dataset.correct === "true";
            feedback.classList.remove('hidden');
            feedback.classList.toggle('correct', isCorrect);
            feedback.classList.toggle('incorrect', !isCorrect);
            feedback.textContent = isCorrect ? 
                'Correct! Well done!' : 
                'Incorrect. Try again!';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initLightbox();
    initQuizzes();
}); 