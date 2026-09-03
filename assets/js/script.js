// JavaScript for Restaurant Concept
// dropdown menu
const dropdown = document.querySelector('.dropdown');
const dropbtn = document.querySelector('.dropbtn');

if (dropdown && dropbtn) {
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  dropbtn.addEventListener('click', function (event) {
    event.stopPropagation();
    const isOpen = dropdown.classList.contains('active');
    dropdown.classList.toggle('active', !isOpen);
    dropbtn.setAttribute('aria-expanded', String(!isOpen));
  });

  document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('active');
      dropbtn.setAttribute('aria-expanded', 'false');
    }
  });

  dropdownContent?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', function () {
      dropdown.classList.remove('active');
      dropbtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// interactive photo gallery
const galleryItems = document.querySelectorAll('.gallery-item');
const featureImage = document.getElementById('featureImage');
const featuredTitle = document.getElementById('featuredTitle');
const featuredCaption = document.getElementById('featuredCaption');

galleryItems.forEach((item) => {
  item.addEventListener('click', function () {
    const image = this.dataset.image;
    const title = this.dataset.title;
    const caption = this.dataset.caption;

    if (!image || !title || !caption || !featureImage || !featuredTitle || !featuredCaption) return;

    featureImage.src = image;
    featureImage.alt = title;
    featuredTitle.textContent = title;
    featuredCaption.textContent = caption;

    galleryItems.forEach((galleryItem) => galleryItem.classList.remove('active'));
    this.classList.add('active');
  });
});

// smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

