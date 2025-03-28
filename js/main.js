document.addEventListener('DOMContentLoaded', function() {
    console.log('main.js: DOM loaded successfully');
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            }
        });
    }
    
    // Add global click listener to ensure all game links open in new window
    document.addEventListener('click', function(e) {
        const gameLink = e.target.closest('a[href*="itch.io"], a[href*="github.io"]');
        if (gameLink) {
            e.preventDefault();
            console.log('Game link clicked:', gameLink.href);
            window.open(gameLink.href, '_blank');
        }
    });
    
    console.log('main.js: Event listeners setup complete');
}); 