var jq1 = jQuery.noConflict(true);
var jq2 = jQuery.noConflict(true);

jq1(document).ready(function() {
  let currentSlide = 0;
  const slides = jq1('.carousel-item');
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.removeClass('active');
    slides.eq(index).addClass('active');
  }

  jq1('#nextBtn').click(function() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  });

  jq1('#prevBtn').click(function() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  });

  jq1('.item').click(function() {
    jq1('.item').removeClass('active');
    jq1(this).addClass('active');
  });
});

jq2(document).ready(function() {
  jq2('#openModal').click(function() {
    jq2('#notificationModal').fadeIn();
  });

  jq2('#closeModal, #closeModalBtn').click(function() {
    jq2('#notificationModal').fadeOut();
  });

  jq2(window).click(function(e) {
    if (jq2(e.target).is('#notificationModal')) {
      jq2('#notificationModal').fadeOut();
    }
  });

  jq2('.tooltip-trigger').hover(
    function() {
      jq2(this).find('.tooltip').fadeIn(200);
    },
    function() {
      jq2(this).find('.tooltip').fadeOut(200);
    }
  );
});