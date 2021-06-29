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
      radioBtns = document.querySelectorAll('input[type=radio]'),
      wrapper = document.querySelector('.js__wrapper');
  radioBtns.forEach(function (el) {
    el.addEventListener('click', function (e) {
      switch (e.target.getAttribute('id')) {
        case '0':
          progBar.style.width = '0px';
          range.value = '0';
          wrapper.classList.add('first');
          wrapper.classList.remove('fourth');
          break;

        case '1':
          progBar.style.width = '25.7%';
          range.value = '25';
          wrapper.classList = 'js__wrapper';
          break;

        case '2':
          progBar.style.width = '50%';
          range.value = '50';
          wrapper.classList = 'js__wrapper';
          break;

        case '3':
          progBar.style.width = '100%';
          range.value = '100';
          wrapper.classList.remove('first');
          wrapper.classList.add('fourth');
          break;

        default:
          progBar.style.width = '0px';
          range.value = '0';
          wrapper.classList.add('first');
          wrapper.classList.remove('fourth');
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
        wrapper.classList.add('first');
        wrapper.classList.remove('fourth');
        break;

      case '25':
        progBar.style.width = '25.7%';
        wrapper.classList = 'js__wrapper';
        break;

      case '50':
        progBar.style.width = '50%';
        wrapper.classList = 'js__wrapper';
        break;

      case '100':
        progBar.style.width = '100%';
        wrapper.classList.remove('first');
        wrapper.classList.add('fourth');
        break;

      default:
        progBar.style.width = '0px';
        wrapper.classList.add('first');
        wrapper.classList.remove('fourth');
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
              wrapper.classList.add('first');
              wrapper.classList.remove('fourth');
              break;

            case '1':
              progBar.style.width = '40%';
              range.value = '25';
              wrapper.classList = 'js__wrapper';
              break;

            case '2':
              progBar.style.width = '70%';
              range.value = '50';
              wrapper.classList = 'js__wrapper';
              break;

            case '3':
              progBar.style.width = '100%';
              range.value = '100';
              wrapper.classList.remove('first');
              wrapper.classList.add('fourth');
              break;

            default:
              progBar.style.width = '0px';
              range.value = '0';
              wrapper.classList.add('first');
              wrapper.classList.remove('fourth');
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
      menu = document.querySelector('.menu'),
      menuLink = menu.querySelectorAll('.menu__link');
  menuBtn.addEventListener('click', function () {
    document.body.classList.toggle('show');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('show');
  });
  menuLink.forEach(function (link) {
    link.addEventListener('click', function (e) {
      document.body.classList.toggle('show');
      menuBtn.classList.toggle('active');
      menu.classList.toggle('show');
    });
  });
  $('.personal__select').each(function () {
    var _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450;


    _this.hide();

    _this.wrap('<div class="personal__select"></div>');

    $('<div>', {
      "class": 'new-select',
      text: selectedOption.text()
    }).insertAfter(_this);

    var selectHead = _this.next('.new-select');

    $('<label>', {
      "class": 'select__label',
      text: 'Год рождения'
    }).insertAfter(_this);
    $('<div>', {
      "class": 'new-select__list'
    }).insertAfter(selectHead);
    var selectList = selectHead.next('.new-select__list');

    for (var i = 1; i < selectOptionLength; i++) {
      $('<div>', {
        "class": 'new-select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      }).attr('data-value', selectOption.eq(i).val()).appendTo(selectList);
    }

    var selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on');
        selectList.slideDown(duration);
        selectItem.on('click', function () {
          var chooseItem = $(this).data('value');
          $('select').val(chooseItem).attr('selected', 'selected');
          selectHead.text($(this).find('span').text());
          selectList.slideUp(duration);
          selectHead.removeClass('on');
        });
      } else {
        $(this).removeClass('on');
        selectList.slideUp(duration);
      }
    });
  });
  var Scrollbar = window.Scrollbar;
  Scrollbar.init(document.querySelector('.new-select__list'));
});