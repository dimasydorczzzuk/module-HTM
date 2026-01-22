// Тема 13: Canvas малювання
function initCanvas() {
    const canvas = document.getElementById('creativeCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');

        let grd = ctx.createLinearGradient(0, 0, 200, 0);
        grd.addColorStop(0, "#007bff");
        grd.addColorStop(1, "#00d2ff");

        ctx.fillStyle = grd;
        ctx.fillRect(20, 20, 160, 110);

        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("HTML5 Canvas", 100, 85);
    }
}

window.addEventListener('load', initCanvas);


// Тема 9: Функція для форми
function calculateSum() {
    const a = parseFloat(document.getElementById('numA').value);
    const b = parseFloat(document.getElementById('numB').value);
    const display = document.getElementById('mathResult');

    if (isNaN(a) || isNaN(b)) {
        display.innerText = "Будь ласка, введіть обидва числа!";
        display.style.color = "red";
    } else {
        display.innerText = `Сума чисел: ${a + b}`;
        display.style.color = "#007bff";
    }
}

function calculateMultiply() {
    const a = parseFloat(document.getElementById('numA').value);
    const b = parseFloat(document.getElementById('numB').value);
    const display = document.getElementById('mathResult');

    if (isNaN(a) || isNaN(b)) {
        display.innerText = "Будь ласка, введіть обидва числа!";
        display.style.color = "red";
    } else {
        display.innerText = `Добуток чисел: ${a * b}`;
        display.style.color = "#007bff";
    }
}

// Тема 8: Кнопка JS
function runTheme8Task() {
    alert("Функція JavaScript успішно запущена з кнопки Теми 8!");
    console.log("Button clicked at: " + new Date().toLocaleTimeString());
}

document.querySelectorAll('.dropdown-nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('main-menu').classList.remove('show');
        document.getElementById('arrow').textContent = '▼';
    });
});

function toggleMenu() {
    const menu = document.getElementById('main-menu');

    if (!menu.classList.contains('show')) {
        menu.style.display = 'flex';
        setTimeout(() => {
            menu.classList.add('show');
        }, 10);
    } else {
        menu.classList.remove('show');
        setTimeout(() => {
            menu.style.display = 'none';
        }, 300);
    }
}

document.querySelectorAll('.dropdown-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('main-menu');
        menu.classList.remove('show');
        setTimeout(() => {
            menu.style.display = 'none';
        }, 300);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.side-nav a, .dropdown-nav a');

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});