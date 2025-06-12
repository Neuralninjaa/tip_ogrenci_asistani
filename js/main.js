// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
    // Tema değiştirme işlemleri
    const themeSwitch = document.getElementById('themeSwitch');
    const themeIcon = themeSwitch.querySelector('i');
    const themeText = themeSwitch.querySelector('span');
    
    // Kaydedilmiş temayı kontrol et
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-moon';
        themeText.textContent = 'Açık Tema';
    }

    // Tema değiştirme butonu tıklama olayı
    themeSwitch.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            themeIcon.className = 'fas fa-sun';
            themeText.textContent = 'Koyu Tema';
            localStorage.setItem('theme', 'light');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-moon';
            themeText.textContent = 'Açık Tema';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Mobil menü işlemleri
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Menü ikonunu değiştir
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Aktif menü öğesini vurgula
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }
    });
}); 