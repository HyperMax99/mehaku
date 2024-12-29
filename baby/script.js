document.getElementById('confettiButton').addEventListener('click', function() {
    // Confetti Effect
    const duration = 5 * 1000; // 5 seconds
    const animationEnd = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 10,
            spread: 50,
            origin: { x: Math.random(), y: Math.random() }
        });

        if (Date.now() < animationEnd) {
            requestAnimationFrame(frame);
        }
    })();

    // Show the Modal
    document.getElementById('modal').style.display = 'flex';
});

// Close Modal
document.getElementById('closeModalButton').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});
