document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector(".modal");
    const photos = document.querySelectorAll(".photo");
    const modalImg = document.querySelector(".modal-content");
    const closeBtn = document.querySelector(".close");
  
    photos.forEach(photo => {
      photo.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
      });
    });
  
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  