const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
let toastTimer;
function showToast(message) { const toast = document.querySelector('#toast'); toast.textContent = message; toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 3000); }
document.querySelector('#copy-duns').addEventListener('click', async () => {
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText('211642236');
    else { const field = document.createElement('textarea'); field.value = '211642236'; field.style.position = 'fixed'; field.style.opacity = '0'; document.body.append(field); field.select(); const copied = document.execCommand('copy'); field.remove(); if (!copied) throw new Error('Copy unavailable'); }
    showToast('D‑U‑N‑S number copied');
  } catch { showToast('D‑U‑N‑S number: 211642236'); }
});
