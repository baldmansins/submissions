// Fade-in each column one after another
window.addEventListener('DOMContentLoaded', () => {
    const columns = document.querySelectorAll('.story-column');
    columns.forEach((col, index) => {
        setTimeout(() => {
            col.classList.add('show');
        }, index * 500); // 0ms, 500ms, 1000ms for each column
    });
});
