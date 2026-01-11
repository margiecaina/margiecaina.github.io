// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Toggle mobile navigation menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projects.forEach(project => {
      const categories = project.dataset.category;

      if (filter === "all" || categories.includes(filter)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});
