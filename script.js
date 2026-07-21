document.addEventListener('DOMContentLoaded', function () {
var toggle = document.querySelector('.menu-toggle');
var nav = document.querySelector('.main-nav');
if (toggle && nav) {
toggle.addEventListener('click', function () {
nav.classList.toggle('open');
if (nav.classList.contains('open')) {
nav.style.display = 'flex';
nav.style.position = 'absolute';
nav.style.top = '72px';
nav.style.left = '0';
nav.style.right = '0';
nav.style.background = '#fff';
nav.style.flexDirection = 'column';
nav.style.padding = '20px 32px';
nav.style.borderBottom = '1px solid #E2E8E8';
nav.style.gap = '18px';
} else {
nav.removeAttribute('style');
}
});
}

var form = document.querySelector('.contact-form');
if (form) {
form.addEventListener('submit', function (e) {
e.preventDefault();
var btn = form.querySelector('button[type="submit"]');
var status = form.querySelector('.form-status');
var original = btn.textContent;
var data = new FormData(form);
var encoded = new URLSearchParams(data).toString();
btn.disabled = true;
btn.textContent = 'Enviando...';
fetch('/', {
method: 'POST',
headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
body: encoded
}).then(function () {
btn.textContent = 'Mensaje enviado ✓';
if (status) status.textContent = 'Gracias por escribirnos, te vamos a responder pronto.';
form.reset();
}).catch(function () {
btn.textContent = original;
if (status) status.textContent = 'Hubo un problema al enviar. Escribinos directo a oficina@asociacionemanuel.org';
}).finally(function () {
btn.disabled = false;
setTimeout(function () { btn.textContent = original; }, 4000);
});
});
}

var newsletter = document.querySelector('.newsletter-form');
if (newsletter) {
newsletter.addEventListener('submit', function (e) {
e.preventDefault();
var msg = newsletter.querySelector('[data-newsletter-msg]');
if (msg) msg.textContent = '¡Gracias! Te vamos a mantener al tanto de nuestro trabajo.';
newsletter.reset();
});
}
});
