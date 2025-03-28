// Game Renderer
console.log('Loading game renderer...');

// Render story games
function renderStoryGames() {
    console.log('Rendering story games...');
    const container = document.getElementById('story-games-container');
    if (!container || !window.gamesData) {
        console.error('Story games container or data not found!');
        return;
    }
    
    let html = '';
    
    window.gamesData.storyGames.forEach(game => {
        html += `
        <div id="${game.id}" class="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
            <!-- Tag bar -->
            <div class="bg-pink-100 text-pink-800 py-2 px-4 text-center font-medium">
                <span>${game.tag || 'Visual Novel'}</span>
            </div>
            
            <!-- Image area -->
            <div class="w-full h-48">
                <img src="${game.image}" alt="${game.title}" class="w-full h-full object-cover">
            </div>
            
            <!-- Content area -->
            <div class="p-4">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${game.title}</h3>
                <p class="text-gray-600 mb-4 text-sm">${game.description}</p>
                
                <!-- Tags area -->
                <div class="mb-4">
                    <span class="text-gray-600 mr-2 text-sm">Perfect for:</span>
                    <span class="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">${game.perfectFor || 'Visual Novel Enthusiasts'}</span>
                </div>
                
                <!-- Game button - Using native link -->
                <a href="${game.url}" target="_blank" class="block w-full py-3 bg-pink-500 text-white text-center rounded-lg hover:bg-pink-600 transition">
                    Play Now 🎮
                </a>
            </div>
        </div>`;
    });
    
    container.innerHTML = html;
    console.log('Story games rendering complete');
}

// Render healing games
function renderHealingGames() {
    console.log('Rendering healing games...');
    const container = document.getElementById('healing-games-container');
    if (!container || !window.gamesData) {
        console.error('Healing games container or data not found!');
        return;
    }
    
    let html = '';
    
    window.gamesData.healingGames.forEach(game => {
        html += `
        <div id="${game.id}" class="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
            <!-- Tag bar -->
            <div class="bg-pink-100 text-pink-800 py-2 px-4 text-center font-medium">
                <span>${game.tag || 'Healing Game'}</span>
            </div>
            
            <!-- Image area -->
            <div class="w-full h-48">
                <img src="${game.image}" alt="${game.title}" class="w-full h-full object-cover">
            </div>
            
            <!-- Content area -->
            <div class="p-4">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${game.title}</h3>
                <p class="text-gray-600 mb-4 text-sm">${game.description}</p>
                
                <!-- Tags area -->
                <div class="mb-4">
                    <span class="text-gray-600 mr-2 text-sm">Perfect for:</span>
                    <span class="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">${game.perfectFor || 'Relaxation'}</span>
                </div>
                
                <!-- Game button - Using native link -->
                <a href="${game.url}" target="_blank" class="block w-full py-3 bg-pink-500 text-white text-center rounded-lg hover:bg-pink-600 transition">
                    Play Now 🎮
                </a>
            </div>
        </div>`;
    });
    
    container.innerHTML = html;
    console.log('Healing games rendering complete');
}

// Render cooperative games
function renderCoopGames() {
    console.log('Rendering cooperative games...');
    const container = document.getElementById('coop-games-container');
    if (!container || !window.gamesData) {
        console.error('Cooperative games container or data not found!');
        return;
    }
    
    let html = '';
    
    window.gamesData.coopGames.forEach(game => {
        html += `
        <div id="${game.id}" class="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
            <!-- Tag bar -->
            <div class="bg-pink-100 text-pink-800 py-2 px-4 text-center font-medium">
                <span>${game.tag || 'Co-op Game'}</span>
            </div>
            
            <!-- Image area -->
            <div class="w-full h-48">
                <img src="${game.image}" alt="${game.title}" class="w-full h-full object-cover">
            </div>
            
            <!-- Content area -->
            <div class="p-4">
                <h3 class="text-xl font-bold text-gray-800 mb-2">${game.title}</h3>
                <p class="text-gray-600 mb-4 text-sm">${game.description}</p>
                
                <!-- Tags area -->
                <div class="mb-4">
                    <span class="text-gray-600 mr-2 text-sm">Perfect for:</span>
                    <span class="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">${game.perfectFor || 'Multiplayer Fun'}</span>
                </div>
                
                <!-- Game button - Using native link -->
                <a href="${game.url}" target="_blank" class="block w-full py-3 bg-pink-500 text-white text-center rounded-lg hover:bg-pink-600 transition">
                    Play Now 🎮
                </a>
            </div>
        </div>`;
    });
    
    container.innerHTML = html;
    console.log('Cooperative games rendering complete');
}

// Render featured games
function renderFeaturedGames() {
    console.log('Rendering featured games...');
    const container = document.getElementById('featured-games-container');
    if (!container || !window.gamesData) {
        console.error('Featured games container or data not found!');
        return;
    }
    
    let html = '';
    
    window.gamesData.featured.forEach(game => {
        html += `
        <div id="${game.id}" class="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                <!-- Image area -->
                <div class="w-full h-64 relative">
                    <div class="absolute top-3 right-3 bg-white bg-opacity-90 rounded-full px-4 py-1.5 z-10 flex items-center shadow-md">
                        <span class="text-amber-500 text-lg">★★★★${game.rating >= 4.5 ? '★' : ''}</span>
                        <span class="text-gray-700 ml-1.5 font-medium">${game.rating}</span>
                    </div>
                    <img src="${game.image}" alt="${game.title}" class="w-full h-full object-cover">
                </div>
                
                <!-- Content area -->
                <div class="p-5">
                    <div class="flex items-center mb-3">
                        <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm mr-3 font-medium">${game.category}</span>
                        <span class="text-gray-500 text-sm">Playtime: ${game.playtime}</span>
                    </div>
                    <h3 class="text-2xl font-bold text-gray-800 mb-3">${game.title}</h3>
                    <p class="text-gray-600 mb-5 text-sm leading-relaxed">
                        ${game.description}
                    </p>
                    <div class="mb-4">
                        <span class="text-gray-600 mr-2 text-sm">Perfect for:</span>
                        <span class="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">${game.perfectFor}</span>
                    </div>
                    <!-- Game button - Using native link -->
                    <a href="${game.fullUrl}" target="_blank" class="block w-full py-3 bg-pink-500 text-white text-center rounded-lg hover:bg-pink-600 transition">
                        Play Now 🎮
                    </a>
                </div>
            </div>
        </div>`;
    });
    
    container.innerHTML = html;
    console.log('Featured games rendering complete');
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, preparing to render game cards...');
    
    // Ensure game data is loaded
    if (typeof window.gamesData !== 'undefined') {
        console.log('Game data found, starting rendering...');
        renderFeaturedGames();
        renderStoryGames();
        renderHealingGames();
        renderCoopGames();
        console.log('All game cards rendering complete!');
    } else {
        console.error('Error: Game data not loaded!');
        // Add delayed check
        setTimeout(function() {
            if (typeof window.gamesData !== 'undefined') {
                console.log('Game data found after delay, starting rendering...');
                renderFeaturedGames();
                renderStoryGames();
                renderHealingGames();
                renderCoopGames();
                console.log('All game cards rendering complete!');
            } else {
                console.error('Critical error: Game data still not found after delay, check if games-data.js is correctly loaded');
                alert('Error loading game data, please refresh the page or contact site administrator');
            }
        }, 1000);
    }
}); 