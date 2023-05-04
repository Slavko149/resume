"use strict";

// SWIPER
////= elements/swiper.js

// Проверка. Устройство с touchscreen или это ПК
// Проверка. Устройство с touchscreen или это ПК
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}

// Подменю(submenu) с touchscreen
////= elements/submenu.js//

if (document.body.classList.value == "_touch") {
  // Проверка. Устройство с touchscreen или это ПК
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
  
  if (isMobile.any()) {
    document.body.classList.add("_touch");
  } else {
    document.body.classList.add("_pc");
  }
}

// Бургер(burger)
const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  });
}

const contactMenu = document.querySelector(".contact-menu");
const links = document.querySelector(".links");

contactMenu.addEventListener("click", function () {
  links.classList.toggle("_close");
});

// Плавное прокручивание
// Плавная прокрутка с использованием класса
// HTML: <a href="#id нужной секции" class="yakor">

document.querySelectorAll("a.yakor").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector("header").clientHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset - 15;

    if (iconMenu.classList.contains("_active")) {
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
      document.body.classList.remove("_lock");
    }

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
    //////////////////////// Закрываем меню бургера
  });
});