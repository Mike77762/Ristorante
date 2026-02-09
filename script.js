const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const prenotaForm = document.getElementById('prenotaForm');
const messaggio = document.getElementById('messaggio');
const navLinks = document.querySelectorAll('.nav-menu a');

// ============================================
// 1. MENU MOBILE
// ============================================
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// 2. SMOOTH SCROLL
// ============================================
navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 60;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// 3. FORM PRENOTAZIONE
// ============================================
prenotaForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    messaggio.textContent = '✅ Grazie! La tua prenotazione è stata ricevuta. Ti contatteremo presto!';
    messaggio.classList.add('show');
    
    prenotaForm.reset();
    
    setTimeout(function() {
        messaggio.classList.remove('show');
    }, 5000);
});

console.log('Sito Trattoria Da Mario caricato!');