"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var select = document.querySelector('.personal__select');
  select.addEventListener('click', function (e) {
    select.classList.toggle('active');
  });
  document.body.addEventListener('click', function (e) {
    if (select.classList.contains('active') && e.target.parentNode !== select) {
      select.classList.remove('active');
    }
  });
  var progBar = document.querySelector('.js__progressbar_gradient'),
      range = document.querySelector('input[type=range]'),
      radioBtns = document.querySelectorAll('input[type=radio]');
  radioBtns.forEach(function (el) {
    el.addEventListener('click', function (e) {
      switch (e.target.getAttribute('id')) {
        case '0':
          progBar.style.width = '0px';
          range.value = '0';
          break;

        case '1':
          progBar.style.width = '24.5%';
          range.value = '25';
          break;

        case '2':
          progBar.style.width = '50.5%';
          range.value = '50';
          break;

        case '3':
          progBar.style.width = '100%';
          range.value = '100';
          break;

        default:
          progBar.style.width = '0px';
          range.value = '0';
          break;
      }
    });
  });
  range.addEventListener('change', function (e) {
    if (e.target.value === '75') {
      e.target.value = '100';
    }

    switch (e.target.value) {
      case '0':
        progBar.style.width = '0px';
        break;

      case '25':
        progBar.style.width = '24.5%';
        break;

      case '50':
        progBar.style.width = '50.5%';
        break;

      case '100':
        progBar.style.width = '100%';
        break;

      default:
        progBar.style.width = '0px';
        break;
    }
  });

  function checkWidth() {
    if (screen.width <= 471) {
      radioBtns.forEach(function (el) {
        el.addEventListener('click', function (e) {
          switch (e.target.getAttribute('id')) {
            case '0':
              progBar.style.width = '0px';
              range.value = '0';
              break;

            case '1':
              progBar.style.width = '40%';
              range.value = '25';
              break;

            case '2':
              progBar.style.width = '70%';
              range.value = '50';
              break;

            case '3':
              progBar.style.width = '100%';
              range.value = '100';
              break;

            default:
              progBar.style.width = '0px';
              range.value = '0';
              break;
          }
        });
      });
    }
  }

  window.addEventListener('resize', checkWidth);
  checkWidth(); // -------------Smooth scroll--------------------------

  $("a[href^=#]").click(function () {
    var _href = $(this).attr("href");

    $("a[href^=#]").removeClass('active');
    $(this).addClass('active');
    $("html, body").animate({
      scrollTop: $(_href).offset().top - 70 + "px"
    });
    return false;
  });
  var menuBtn = document.querySelector('.header__menu-btn'),
      menu = document.querySelector('.header__list');
  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('show');
  });
});