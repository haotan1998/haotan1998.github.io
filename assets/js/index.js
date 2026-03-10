// Dark mode based on system preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}

// Fade-in-up animation on scroll using IntersectionObserver
(function () {
  var containers = document.querySelectorAll(
    '.intro-container, .list-container, .text-container'
  );
  if (!('IntersectionObserver' in window)) {
    containers.forEach(function (el) { el.classList.add('fade-in-up'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  containers.forEach(function (el) { observer.observe(el); });
})();
