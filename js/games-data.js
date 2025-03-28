// Game Data Collection
const gamesData = {
    featured: [
        {
            id: "little-chef",
            title: "Little Chef",
            description: "🧁 Become an adorable little chef in this charming physics-based cooking game! Freely combine various ingredients to create unique dishes. With a complete physics engine, the cooking process is full of fun and surprises. Release your creativity in the kitchen! 🍳",
            category: "Cooking Simulation",
            playtime: "30 minutes",
            rating: 4.8,
            perfectFor: "Cooking Enthusiasts",
            image: "./images/LittleChef.png",
            embedUrl: "https://itch.io/embed/2096860?bg_color=ffffff&amp;fg_color=222222&amp;link_color=D25849&amp;border_width=0",
            fullUrl: "https://truebiger.itch.io/little-chef",
            tip: "Tip: Try different ingredient combinations to create delicious recipes! When making burgers, you can stack multiple layers! 🍔"
        },
        {
            id: "six-cats-under",
            title: "Six Cats Under",
            description: "🐱 As a ghost cat, you'll use supernatural powers to guide six living cats through puzzles and explore a magical feline world. Each cat has a different personality and ability. Through clever clicks and guidance, help them overcome obstacles and uncover hidden secrets together. 🕵️‍♀️",
            category: "Puzzle",
            playtime: "45 minutes",
            rating: 4.5,
            perfectFor: "Cat Lovers",
            image: "./images/SixCatsUnder.jpeg",
            embedUrl: "https://itch.io/embed/646263?bg_color=ffffff&amp;fg_color=222222&amp;link_color=D25849&amp;border_width=0",
            fullUrl: "https://teambeanloop.itch.io/six-cats-under",
            tip: "Tip: Each cat has different abilities - the orange cat can push objects, the black cat excels at jumping, and the white cat can find hidden clues 🔍"
        },
        {
            id: "lilacs-in-the-breeze",
            title: "Lilacs in the Breeze",
            description: "🌸 This heartwarming visual novel tells the story of Talia, a transgender woman, reuniting with her childhood friend. Just as she thinks she can start a new life, her friend's sudden appearance fills her with both anxiety and hope. A touching journey about acceptance, understanding, and love unfolds. 💕",
            category: "Visual Novel",
            playtime: "30 minutes",
            rating: 4.7,
            perfectFor: "Visual Novel Enthusiasts",
            image: "https://img.itch.zone/aW1hZ2UvMzM1MjUzNS8yMDA2NzEwNy5wbmc=/original/ia5eHz.png",
            embedUrl: "",
            fullUrl: "https://crystalgameworks.itch.io/lilacs-in-the-breeze",
            tip: "Tip: This touching story takes about 30 minutes to complete. Explore the emotional bonds between characters. 📖"
        }
    ],
    
    storyGames: [
        {
            id: "cupids-kiss",
            title: "Cupid's Kiss: a short, romance comedy",
            description: "🏹 Your personal Cupid has had enough of your antics! Interact with a grumpy Cupid in this sweet romantic comedy and explore multiple endings. 💘",
            features: "✨ Features: Four different endings, fully voiced, adorable characters, and beautiful interface design",
            image: "https://img.itch.zone/aW1nLzE2OTE2MzUzLnBuZw==/original/LQo9Yw.png",
            url: "https://marysuegames.itch.io/cupids-kiss",
            tag: "Romantic Comedy 💕",
            perfectFor: "Rom-Com Enthusiasts",
            tip: "Tip: Try different dialogue options to unlock all endings! 💬"
        },
        {
            id: "purrgatory",
            title: "purrgatory",
            description: "😺 A visual novel about spending time in the afterlife. Explore a fantastical point-and-click world, make friends with seven charming characters, and remember—things are never as bad as they seem! 🌈",
            features: "✨ Features: Hand-drawn style, heartwarming story, rich interactions, and carefully designed music",
            image: "https://img.itch.zone/aW1nLzEyMjIxMjAwLmdpZg==/original/iTOgtd.gif",
            url: "https://nivrad00.itch.io/purrgatory",
            tag: "Point & Click Adventure 🐈",
            perfectFor: "Narrative Explorers",
            tip: "Tip: Try interacting with different characters to discover hidden dialogues and storylines 🔎"
        },
        {
            id: "dekiai-heart-candy",
            title: "Dekiai Heart Candy Kun",
            description: "💝 Experience living with a slightly twisted boyfriend in this captivating otome game. A double feature of short stories - one sweet, one bitter - where you'll be bound and loved by the man of your choice. 🍬",
            features: "✨ Features: 14 different endings, 25 event CGs, three unique characters (Kei, Chihaya, Inori), and intriguing relationship dynamics",
            image: "./images/DekiaiHeartCandyKun.jpeg",
            url: "https://bbboxxx.itch.io/dekiai-heart-candy-kun",
            tag: "Otome Game 💘",
            perfectFor: "Romance Game Lovers",
            tip: "Tip: Press the TAB key during the story to check the read events on the event chart screen! Explore all choices in the bonus story for 100% completion. 🔄"
        }
    ],
    
    healingGames: [
        {
            id: "cat-cafe",
            title: "an average day at the cat cafe",
            description: "☕ Run a cat cafe and serve various quirky customers. See how long you can keep the cafe in business! 🐈",
            image: "https://img.itch.zone/aW1nLzEwMjAxMzY0LmdpZg==/original/qshzx5.gif",
            url: "https://zephyo.itch.io/an-average-day-at-the-cat-cafe",
            tag: "Cafe Simulator 🍰",
            perfectFor: "Cat & Cafe Lovers",
            tip: "Tip: Try making different drinks and foods to satisfy customer requests 🍰"
        },
        {
            id: "tiny-kingdom",
            title: "Tiny Kingdom",
            description: "🏰 Build your card-based kingdom on a tranquil island in this cozy strategy game. Every decision matters in this charming medieval world, and each card holds the promise of new adventures. 👑",
            image: "./images/TinyKingdom.png",
            url: "https://neltile.itch.io/tiny-kingdom",
            tag: "Card Strategy 🏰",
            perfectFor: "Kingdom Builders",
            tip: "Tip: Place cards strategically as each one interacts with adjacent tiles, creating fascinating synergies to expand your kingdom's potential. 🎮"
        },
        {
            id: "nom-nom",
            title: "NOM NOM - Cozy Forest Café",
            description: "🍽️ Run a charming forest café, remember what customers like, and prepare food to their taste. If a customer gives you a perfect rating, they'll come back the next day! 🦊",
            image: "./images/NOMNOM.png",
            url: "https://anaissalla.itch.io/nomnom",
            tag: "Forest Café Manager 🌲",
            perfectFor: "Cozy Game Enthusiasts",
            tip: "Tip: If you forget a customer's order, you can check your phone. Use the fishing app to send catches to customers who like them, and they'll visit your café. 🍰"
        },
        {
            id: "the-chefs-shift",
            title: "The Chef's Shift",
            description: "👨‍🍳 Take on the role of a chef in this casual cooking simulator to complete various orders. Follow recipes to create delicious dishes and satisfy customers within the time limit! 🍲",
            image: "./images/TheChef'sShift.jpg",
            url: "https://alijaya.itch.io/the-chefs-shift",
            tag: "Cooking Simulator 🍳",
            perfectFor: "Aspiring Chefs",
            tip: "Tip: Manage your time and workflow efficiently by handling multiple orders at once. Keep a close eye on the cooking status of ingredients! ⏱️"
        }
    ],
    
    coopGames: [
        {
            id: "ducklings",
            title: "Ducklings",
            description: "🦆 Relax and become a duck, quack quack! Swim around the pond and rescue as many ducklings as possible. Avoid the boats that zip around as they will hurt you. Upgrade by rescuing more ducklings and become the coolest duck nest in the pond. 🐣",
            controls: "🎮 Controls: Use the mouse to control your duck's movement. Invite friends to team up and rescue ducklings together for a fun cooperative experience.",
            image: "./images/Ducklings.jpeg",
            url: "https://pelicanparty.itch.io/ducklings",
            tag: "Multiplayer Rescue 🦆",
            perfectFor: "Casual Co-op Players",
            tip: "Tip: For the best experience, visit ducklings.io. You can invite your friends to cooperate and save ducklings together! Other ducks in the game are AI and will also try to grab ducklings. 🦆"
        },
        {
            id: "cats-cradle",
            title: "Cat's Cradle",
            description: "🐱 A two-player puzzle platformer about two cats in a long-distance relationship separated by different gravities. They must use a single piece of yarn connecting them to reunite. Work together to solve puzzles and help this adorable couple meet again! 🧶",
            controls: "🎮 Controls: Player one uses arrow keys, player two uses WASD. Close coordination is needed to progress through levels! (Firefox browser recommended for best experience)",
            image: "./images/Cat'sCradle.png",
            url: "https://geoklironomos.itch.io/cats-cradle",
            tag: "Duo Puzzle Platformer 🧩",
            perfectFor: "Puzzle-Solving Partners",
            tip: "Tip: This is a truly cooperative game best played with a friend, family member, or partner. Coordinate different gravities to solve ingeniously designed puzzles! 🌈"
        }
    ]
};

// Export game data
window.gamesData = gamesData; 