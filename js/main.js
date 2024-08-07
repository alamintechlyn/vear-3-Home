


$('.slideText').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    dots: true,
    autoplaySpeed: 2000,
  });


//   protfolio slider
$('.protfolioImage').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    dots: false,
    autoplaySpeed: 2000,
  });


// accordian 
document.addEventListener('DOMContentLoaded', function() {
  var headers = document.querySelectorAll('.accordian');
  
  headers.forEach(function(header) {
      var content = header.nextElementSibling;
      var icon = header.querySelector('i');
      content.style.display = 'none'; 
      icon.classList.add('fa-chevron-down'); 

      header.addEventListener('click', function() {
          if (content.style.display === 'none' || content.style.display === '') {
              content.style.display = 'block';
              icon.classList.remove('fa-chevron-down');
              icon.classList.add('fa-chevron-up');
          } else {
              content.style.display = 'none';
              icon.classList.remove('fa-chevron-up');
              icon.classList.add('fa-chevron-down');
          }
      });
  });
});


//  nav toggle button
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggleBtn');
    const nav = document.querySelector('.nav');

    toggleBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});



// protfolio section js

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.protfolioText button');
    const defaultImage = document.querySelector('.defaultImage');
    const portfolioImages = document.querySelectorAll('.protfolioImage');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            portfolioImages.forEach(image => image.classList.remove('active'));
            defaultImage.classList.add('hidden');

            const target = this.getAttribute('data-target');
            document.querySelector(`.protfolioImage.${target}`).classList.add('active');
        });
    });

    defaultImage.classList.remove('hidden');
});







