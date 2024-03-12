

(function ($) {
  "use strict";



  // Preloader
  $("#page").css("display", "none");
  $(window).on("load", function () {
    $("#loader").addClass("loaded");
    $("#page").css("display", "");
  });

  // Cookies
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  if (getCookie("cookie-consent") != "") {
    $("#cookie-popup").attr("style", "display: none;");
  } else {
    $("#cookie-popup").removeAttr("style");
    $("#btn-cookie").click(function () {
      let date = new Date();
      date.setTime(date.getTime() + 31536000000);
      document.cookie = "cookie-consent=true; expires=" + date.toUTCString() + "path=/;";
      $("#cookie-popup").fadeOut(300);
    });
  }

  // Navbar
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".desktop-navbar").addClass("navbar-scroll");
    } else {
      $(".desktop-navbar").removeClass("navbar-scroll");
    }
  });

  $(".js-clone-nav").each(function () {
    var $this = $(this);

    $this.clone().attr("class", "mobile-navbar-wrap").appendTo(".mobile-navbar-body");
  });

  $("body").on("click", ".js-menu-toggle", function (e) {
    var $this = $(this);
    e.preventDefault();

    if ($("body").hasClass("offcanvas-menu")) {
      $("body").removeClass("offcanvas-menu");
      $this.removeClass("active");
    } else {
      $("body").addClass("offcanvas-menu");
      $this.addClass("active");
    }

    if ($("body").hasClass("offcanvas-menu")) {
      $(".mobile-mask").addClass("active");
    } else {
      $(".mobile-mask").removeClass("active");
    }
  });

  $(document).mouseup(function (e) {
    var container = $(".mobile-navbar");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $(".mobile-mask").removeClass("active");
      }
    }
  });

  // $("body").on("click", "#copyadress", function () {
   // navigator.clipboard.writeText("asurenova.online").then(() => {
   //     $(this).tooltip('show');
//
  //      setTimeout(() => $(this).tooltip('hide'), 2000);  // Сообщение исчезнет через 2 секунды
  //  }).catch((error) => {
  //      console.error(error);
  //  });
//}); 



// JavaScript
document.getElementById("copyadress").addEventListener("click", function() {
  var text = "Адрес";
  var element = document.createElement('textarea');
  element.value = text;
  document.body.appendChild(element);
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);

  // Add the pulse animation
  this.classList.add('animate-pulse');

  // Remove the pulse animation after it completes
  var button = this;
  setTimeout(function() {
      button.classList.remove('animate-pulse');
  }, 500);
});




  // Copy IP Button
 // $("body").on("click", "#copyadress", function () {
   // navigator.clipboard.writeText("asurenova.online").then((error) => {
   //   if (error) {
    //    console.error(error);
    //  } else {
    //    alert("IP скопирован");
    //  }
  //  });
 // });

  // Carousel
  new Swiper(".screens-swiper", {
    loop: true,
    autoplay: true,
    autoplay: {
      delay: 2500,
    },
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: -50,
    slideActiveClass: "active",
    navigation: {
      nextEl: ".screens-swiper-button-next",
      prevEl: ".screens-swiper-button-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
    },
  });

  // Partners Carousel
  new Swiper(".partner-swiper", {
    loop: true,
    autoplay: true,
    autoplay: {
      delay: 2500,
    },
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // Testimonials Carousel
  new Swiper(".testimonials-swiper", {
    loop: true,
    autoplay: true,
    autoplay: {
      delay: 2500,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".testimonials-swiper-button-next",
      prevEl: ".testimonials-swiper-button-prev",
    },
    breakpoints: {
      762: {
        slidesPerView: 2,
      },
    },
  });
})(window.jQuery);



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


