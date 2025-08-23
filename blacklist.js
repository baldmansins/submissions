// Fade-in tiles one by one
window.addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('.blacklist-tile');
    tiles.forEach((tile, index) => {
        setTimeout(() => {
            tile.classList.add('show');
        }, index * 300);
    });
});
