$(document).ready(function () {
  //slider + count
  $('.documentation-slider').on('init', function (event, slick) {
    $(this).append(`
    <div class="slider-count">
      <span id="current">1</span>/<span id="total"></span>${slick.slideCount}</span>
    </div>`);
  });

  $('.documentation-slider').slick({
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    infinite: false
  });

  $('.documentation-slider')
    .on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $('.slider-count #current').html(currentSlide + 1);
    });

  // scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data('scroll'),
      blockOffset = $(blockId).offset().top;


    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);


  });

  //E-mail Ajax Send
  $("form").submit(function () { // Событие отправки с формы
    var form_data = $(this).serialize(); // Собираем данные из полей
    $.ajax({
      type: "POST", // Метод отправки
      url: "mail.php", // Путь к PHP обработчику sendform.php
      data: form_data,
      success: function () {
        alert("Сообщение отправлено!");
      }
    });
    event.preventDefault();
  });

});