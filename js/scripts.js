let pages = document.querySelectorAll('.page');
let container = document.getElementById('container');
let currentIndex = 0;

document.body.addEventListener('click', () => {
    if (currentIndex < pages.length - 1) {
        let nextPage = pages[currentIndex + 1];
        nextPage.style.transform = `rotateX(-90deg) translateY(-${1080 * (currentIndex + 1)}px)`;
        
        setTimeout(() => {
            nextPage.style.transition = 'transform 1s';
            nextPage.style.transform = `rotateX(0deg) translateY(-${1080 * (currentIndex + 1)}px)`;
            currentIndex++;
        }, 0);
    }
});
