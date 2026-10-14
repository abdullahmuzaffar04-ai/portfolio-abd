document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
const currentFile = (location.pathname.split('/').pop() || 'index.html').replace('.html','');
document.querySelectorAll('.links a[data-page]').forEach(link => {
  if (link.dataset.page === currentFile) link.classList.add('active');
});
