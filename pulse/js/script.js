/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 500,
        adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="../icons/chevron_left.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../icons/chevron_right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
    });
  }); */
  $(document).ready(function () {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
  
  
    function toggleForwardBack(item) {
      $(item).each(function (i) {
        $(this).on('click', function (evt) {
          evt.preventDefault();
          $('.catalog-item__forward').eq(i).toggleClass('catalog-item__forward_active');
          $('.catalog-item__back').eq(i).toggleClass('catalog-item__back_active');
        });
      });
    }
  
    toggleForwardBack('.catalog-item__link');
    toggleForwardBack('.catalog-item__return');
  
  
  
  
  
  
    const slider = tns({
      container: '.carousel__inner',
      items: 1,
      slideBy: 'page',
      autoplay: false,
      controls: false,
      nav: false,
      responsive: {
        //   640: {
        //     edgePadding: 20,
        //     gutter: 20,
        //     items: 2
        //   },
        //   768: {
        //     gutter: 30
        //   },
        //   900: {
        //     items: 1
        //   }
      }
    });
  
    document.querySelector('.prev').addEventListener('click', function () {
      slider.goTo('prev');
    });
  
    document.querySelector('.next').addEventListener('click', function () {
      slider.goTo('next');
    });
    //Modal Jquery
  
    $('[data-modal=consultation]').on('click', function () {
      $('.overlay, #consultation').fadeIn('slow');
    });
  
    $('.modal__close').on('click', function () {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
  
    $('.button_mini').on('click', function () {
      $('.overlay, #order').fadeIn('slow');
    });
  
  
    $('.button_mini').each(function (i) {
      $(this).on('click', function () {
        $('#order .modal__subtitle').text($('.catalog-item__title').eq(i).text());
      });
    });
  
  
    function valideForm(form) {
      $(form).validate({
        rules: {
          // simple rule, converted to {required:true}
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          // compound rule
          email: {
            required: true,
            email: true
          }
        },
  
        messages: {
          name: {
            required: "Ну и где имя?",
            minlength: jQuery.validator.format("Тут нужно хотя бы {0} символа!")
          },
          phone: "Ну и где телефон?",
          email: {
            required: "И где почта?",
            email: "Это фигня, почта должна быть как name@domain.com"
          }
        }
      });
    }
  
    valideForm('#consultation form');
    valideForm('#order form');
    valideForm('#consultation-form');
  
  
    $("input[name=phone]").mask("+7 (999) 999-99-99");
  
  
    $('form').submit(function (evt) {
      evt.preventDefault();
  
      if (!$(this).valid()) {
        return;
      }
  
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function () {
        $(this).find("input").val("");
         $('#consultation, #order').fadeOut();
         $('.overlay, #thanks').fadeIn('slow');
  
  
        $('form').trigger('reset');
      });
      return false;
    });
  
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1600) {
        $('.up').fadeIn();
      } else{
        $('.up').fadeOut();
      }
    });
  
    $("a[href^='#']").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        const hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top+"px"
        }, 5000, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  
    new WOW().init();
  
  });
  
  //Modal NativeJS
  /* const consultBtn = document.querySelectorAll('[data-modal=consultation]');
  const orderBtn = document.querySelectorAll('[data-modal=order]');
  const overlay = document.querySelector(".overlay");
  const consultModal = document.querySelector('#consultation');
  const orderModal = document.querySelector('#order');
  const closeBtn = document.querySelectorAll('.modal__close');
  
  console.log(consultModal);
  
  consultBtn.forEach((item) => {
    item.addEventListener('click', function () {
     consultModal.classList.remove('hidden');
      consultModal.classList.add('visible');
      overlay.classList.add('visible');
    });
  
  });
  
  orderBtn.forEach((item) => {
    item.addEventListener('click', function () {
     orderModal.classList.remove('hidden');
      orderModal.classList.add('visible');
      overlay.classList.add('visible');
    });
  
  });
  
  closeBtn.forEach((item) => {
    item.addEventListener('click', function (evt) {
      overlay.classList.remove('visible');
      evt.target.parentNode.classList.remove('visible');
      evt.target.parentNode.classList.add('hidden');
  
      // consultModal.classList.add('visible');
      // overlay.classList.add('visible');
    });
  
  }); */
  
  
  /* let tabs = document.querySelectorAll('.catalog__tab');
  let contents = document.querySelectorAll('.catalog__content');
  
  let links = document.querySelectorAll('.catalog-item__link');
  let returns = document.querySelectorAll('.catalog-item__return');
  let backs = document.querySelectorAll('.catalog-item__back');
  let forwards = document.querySelectorAll('.catalog-item__forward');
  
  
  console.log(tabs, contents);
  
  links.forEach((item, i) => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      forwards[i].classList.remove('catalog-item__forward_active');
      backs[i].classList.add('catalog-item__back_active');
    });
  });
  
  returns.forEach((item, i) => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      backs[i].classList.remove('catalog-item__back_active');
      forwards[i].classList.add('catalog-item__forward_active');
  
    });
  });
  
  tabs.forEach((item, i) => {
    item.addEventListener('click', function () {
      tabs.forEach((item) => {
        item.classList.remove('catalog__tab_active');
      });
      item.classList.add('catalog__tab_active');
  
  
      contents.forEach((item) => {
        item.classList.remove('catalog__content_active');
      });
      contents[i].classList.add('catalog__content_active');
    });
  }); */