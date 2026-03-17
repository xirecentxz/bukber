const btnTidak = document.getElementById('btn-tidak');

function lari() {
    // Pindahkan dari card ke body jika belum
    if (btnTidak.parentNode !== document.body) {
        document.body.appendChild(btnTidak);
    }

    btnTidak.style.position = 'fixed';

    const lebarLayar = window.innerWidth;
    const tinggiLayar = window.innerHeight;
    const lebarTombol = btnTidak.offsetWidth;
    const tinggiTombol = btnTidak.offsetHeight;

    const jarakAman = 30;

    const batasMaxX = lebarLayar - lebarTombol - jarakAman;
    const batasMaxY = tinggiLayar - tinggiTombol - jarakAman;

    const randomX = Math.max(jarakAman, Math.floor(Math.random() * (batasMaxX - jarakAman + 1)) + jarakAman);
    const randomY = Math.max(jarakAman, Math.floor(Math.random() * (batasMaxY - jarakAman + 1)) + jarakAman);

    btnTidak.style.left = randomX + 'px';
    btnTidak.style.top = randomY + 'px';
}

function showSuccess() {
    // Pakai alert sederhana atau bisa diganti modal Bootstrap nanti
    alert('Mantap! Langsung diamankan kursinya. Jangan sampai telat ya!');
}

// Mouse (Laptop)
btnTidak.addEventListener('mouseover', lari);

// Sentuh (HP/Tablet)
btnTidak.addEventListener('touchstart', function(event) {
    event.preventDefault(); 
    lari();
}, { passive: false });
