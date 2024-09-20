document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling untuk navigasi
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Handling form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const pesan = document.getElementById('pesan').value;

        // Di sini Anda bisa menambahkan kode untuk mengirim data ke server
        // Untuk contoh ini, kita hanya akan menampilkan alert
        alert(`Terima kasih, ${nama}! Pesan Anda telah diterima.\nKami akan menghubungi Anda di ${email} segera.`);
        contactForm.reset();
    });

    // Animasi fade-in untuk peralatan
    const peralatanItems = document.querySelectorAll('.peralatan-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    peralatanItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
});