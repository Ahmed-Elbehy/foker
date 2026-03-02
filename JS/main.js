const navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
const sectionWorking = document.querySelector(".working");
const numberEfactes = document.querySelectorAll(".number-efactes");
const Portfolio = document.getElementById("Portfolio");

// console.log(numberEfactes)

//start item Activ At nav
navLinks.forEach((link) => {
  // console.log(link)
  link.addEventListener("click", (e) => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    console.log(e.target);
    e.target.classList.add("active");
  });
});
//end item Activ At nav

// change nave style on scroll
window.addEventListener("scroll", () => {
  scroll();
  changeNumbersEfactes();
});
//? handle nave on scroll
function scroll() {
  const nav = document.getElementById("nav");
  const header = document.getElementById("header");
  //   console.log(window.scrollY);
  const navHeight = nav.offsetHeight;
  const headerHeight = header.offsetHeight;
  if (window.scrollY > headerHeight - navHeight) {
    nav.style.cssText = "background-color:black";
  } else {
    nav.style.cssText = "background-color:none";
  }
}
//& handle changeNumbersEfactes Atsection working
function changeNumbersEfactes() {
  if (
    window.scrollY <=
    sectionWorking.offsetTop - (1 / 2) * Portfolio.offsetHeight
  ) {
    numberEfactes.forEach((e) => {
      e.innerHTML = 0;
      let dataset = e.getAttribute("dataset");
      let interval = setInterval(() => {
        e.innerHTML++;
        if (e.innerHTML <= dataset || e.innerHTML > 500) {
          clearInterval(interval);
        }
      }, 100);
    });
  }
}

//  < .. handle popup show .. >
// select box
const boxes = document.querySelectorAll("#Portfolio .have-image");
const images = document.querySelectorAll("#Portfolio .have-image img");

// select main div popup parent
const mainPopup = document.getElementById("main-popup");
// select images At popup carousel
const imagesPopup = document.querySelectorAll("#main-popup img");
// handle All action for show image popup && close image popup
boxes.forEach((e) => {
  e.addEventListener("click", () => {
    // console.log(e);
    // console.log(e.querySelector("img").src);
    mainPopup.classList.toggle("main-popup-none");
    mainPopup.classList.toggle("main-popup");
    imagesPopup[0].src = e.querySelector("img").src;
    imagesPopup[0].src != images[1].src
      ? (imagesPopup[1].src = images[1].src)
      : (imagesPopup[1].src = images[0].src);
    imagesPopup[0].src != images[2].src
      ? (imagesPopup[2].src = images[2].src)
      : (imagesPopup[2].src = images[0].src);
    imagesPopup[0].src != images[3].src
      ? (imagesPopup[3].src = images[3].src)
      : (imagesPopup[3].src = images[0].src);
    document.body.style.overflow = "hidden";
    mainPopup.onclick = (e) => {
      if (e.target.classList.contains("main-popup")) {
        closeImagePopup();
      }
    };
  });
});

// handle All action for show link popup && close link popup
const mainPopupLinks = document.getElementById("main-popup-links");
const boxesLinks = document.querySelectorAll("#Portfolio .have-link");
const linkes = document.querySelectorAll("#Portfolio .have-link img");
const projectImage = document.getElementById("project-crard-image");
// console.log(boxesLinks)
// console.log(projectImage);
boxesLinks.forEach((e) => {
  e.addEventListener("click", () => {
    // console.log(e.querySelector("img").src);
    // console.log(projectImage.src);
    projectImage.src = e.querySelector("img").src;
    mainPopupLinks.classList.toggle("main-popup-none");
    mainPopupLinks.classList.toggle("main-popup");
    document.body.style.overflow = "hidden";
    mainPopupLinks.onclick = (e) => {
      if (e.target.classList.contains("main-popup")) {
        closeLinksPopup()
      }
    };
  });
});
// handle close images popup 
function closeImagePopup() {
  mainPopup.classList.toggle("main-popup-none");
  mainPopup.classList.toggle("main-popup");
  document.body.style.overflow = "auto";
}
// handle close links popup
function closeLinksPopup() {
  mainPopupLinks.classList.toggle("main-popup-none");
  mainPopupLinks.classList.toggle("main-popup");
  document.body.style.overflow = "auto";
}

// close by X button
// image popup
const closePopup = document.getElementById("close-popup");
closePopup.addEventListener("click", (e) => {
  closeImagePopup();
  console.log(e.target);
});
// links popup
const closePopupLinks = document.getElementById("main-popup-links");
closePopupLinks.addEventListener("click", (e) => {
  closeLinksPopup();
  
});
