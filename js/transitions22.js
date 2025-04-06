document.addEventListener('DOMContentLoaded', function() {
    function triggerFlashTransition(nextPage) {
        const flashOverlay = document.createElement('div');
        flashOverlay.className = 'flash-overlay';
        document.body.appendChild(flashOverlay);

        setTimeout(() => {
            window.location.href = nextPage;
        }, 500);
    }

    const nextPageBtn = document.getElementById('nextPageBtn');
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', function(e) {
            e.preventDefault();
            triggerFlashTransition('antaresnivo3.html'); 
        });
    }

    const transitionBtn = document.getElementById('transition-btn');
    if (transitionBtn) {
        transitionBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const nextPage = this.getAttribute('data-next-page');
            if (nextPage) {
                triggerFlashTransition(nextPage);
            }
        });
    }
});
