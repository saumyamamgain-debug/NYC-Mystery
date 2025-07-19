const game = {
    currentScene: 'livingRoom',
    insightPoints: 0,
    collectedClues: [],
    hintRechargeTime: 0, // In seconds
    maxHintRecharge: 60, // 1 minute
    // ... other game state
};

function showScene(sceneId) {
    // Hide all scenes
    document.querySelectorAll('.game-scene').forEach(scene => {
        scene.style.display = 'none';
    });
    // Show the target scene
    document.getElementById(sceneId).style.display = 'block';
    game.currentScene = sceneId;
}

// Initial load
window.onload = () => {
    // Render initial UI (character selection or living room)
    showScene('livingRoom'); // Assuming livingRoom is the ID of your first scene div
    startHintRechargeTimer();
};
