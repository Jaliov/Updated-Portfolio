new Swiper(".card-wrapper", {
  // Optional parameters

  loop: true,
  spaceBetween: 50,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  // And if we need scrollbar
});
// element.addEventListener("click", function () {
//   document.querySelector(".disable-links").innerHTML = " ";
// });

document.querySelectorAll(".accordian__button").forEach((button) => {
  button.addEventListener("click", () => {
    const accordianContent = button.nextElementSibling;

    button.classList.toggle("accordian__button--active");

    if (button.classList.contains("accordian__button--active")) {
      accordianContent.style.maxHeight = accordianContent.scrollHeight + "px";
    } else {
      accordianContent.style.maxHeight = 0;
    }
  });
});

function on() {
  document.getElementById("overlay").style.display = "none";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

const nodeList = document.querySelectorAll(".normal__button");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].innerHTML = "Site";
}

const nodeListgit = document.querySelectorAll(".normal__button-git");
for (let i = 0; i < nodeList.length; i++) {
  nodeListgit[i].innerHTML = "Github";
}
