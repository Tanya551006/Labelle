document.addEventListener('DOMContentLoaded', () => {
  const galleryImgs = document.querySelectorAll('.product-view__gallery-img');
  const mainGalleryImg = document.querySelector('.product-view__gallery-main-img');

  Array.from(galleryImgs).forEach(img => {
    img.addEventListener('click', function() {
      const src = this.src;

      mainGalleryImg.src = src;
    })
  })
})