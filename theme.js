let themeToggle = document.getElementById('themeToggle');
const profileImage = document.getElementById('profileImage');
const nightImage = 'IMAGE/MIAOU.jpg';
const dayImage = 'IMAGE/MAOMAO1.jfif';

if (!themeToggle) {
    themeToggle = document.createElement('button');
    themeToggle.type = 'button';
    themeToggle.id = 'themeToggle';
    themeToggle.className = 'theme-toggle';
    themeToggle.textContent = 'Mode jour';

    const header = document.querySelector('header');
    const pageControls = header?.querySelector('.page-controls');
    if (pageControls) {
        pageControls.appendChild(themeToggle);
    } else if (header) {
        header.appendChild(themeToggle);
    } else {
        document.body.prepend(themeToggle);
    }
}

function updateThemeButton() {
    const isDayMode = document.body.classList.contains('day-mode');
    document.documentElement.classList.toggle('day-mode', isDayMode);
    themeToggle.textContent = isDayMode ? 'Mode nuit' : 'Mode jour';
    if (profileImage) {
        profileImage.src = isDayMode ? dayImage : nightImage;
    }
}

if (localStorage.getItem('siteTheme') === 'day') {
    document.body.classList.add('day-mode');
}
updateThemeButton();

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('day-mode');
    const isDayMode = document.body.classList.contains('day-mode');
    localStorage.setItem('siteTheme', isDayMode ? 'day' : 'night');
    updateThemeButton();
});
