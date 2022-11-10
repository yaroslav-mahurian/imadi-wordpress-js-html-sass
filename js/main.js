import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import Select from './libs/select';

/* Select init */
const select = new Select();


/* ONE MODEL PAGE */
const oneModelSubmitBtn = document.querySelector('#one-model-submit');

const optionBlocks = document.querySelectorAll("[data-product-option]");
const optionsBlockArr = Array.from(optionBlocks);
const modelTitleEl = document.querySelector("[data-model-title]");

if(modelTitleEl) {
  
}

if(oneModelSubmitBtn) {
  oneModelSubmitBtn.addEventListener("mousedown", function(e) {
    e.preventDefault();
    const modelTitle = modelTitleEl.innerText;
    if(optionsBlockArr.length !== 0) {
      let optionsSelectedAll = "";
      optionsBlockArr.forEach( function(optionsBlock) {
        let optionTitle = "";
        let optionsSelected = "";
        const choosenOptionsEls = optionsBlock.querySelectorAll('input[type="checkbox"]:checked');
        
        let choosenOptionsAll = "";
        choosenOptionsEls.forEach(function(choosenOptionEl) {
          let choosenOptionsElValue =  choosenOptionEl.dataset.value;
          if (choosenOptionsElValue != "") {
            optionTitle = optionsBlock.querySelector("[data-product-option-title]").innerText;
            choosenOptionsAll += `${choosenOptionsElValue} `;
            optionsSelected = `${optionTitle}: ${choosenOptionsAll} || `;
          } else {
            choosenOptionsAll = 'Not selected';
          }
        });
        
        
        optionsSelectedAll += optionsSelected;
      });
      console.log(optionsSelectedAll);
      document.querySelector("#dynamichidden-model-options").value = optionsSelectedAll;
    }
    document.querySelector("#dynamichidden-model-title").value = modelTitle;
  });
}




/* Calculate PAGE */

const calculateSubmitBtn = document.querySelector('#calculate-submit');
const calculateSelects = document.querySelectorAll("#calculateSelect");
const calculateSelectsArr = Array.from(calculateSelects);

let calculateCheckboxes, calculateCheckboxesArr;


if(calculateSubmitBtn) {
  calculateSubmitBtn.addEventListener("mousedown", function(e) {
    e.preventDefault();
    calculateCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    calculateCheckboxesArr = Array.from(calculateCheckboxes);
    let calculateSelectsData = "";
    let calculateCheckboxesData = "";
    let calculateGeneralData = "";
    let calculateCheckboxesGeneral = "";
    if(calculateCheckboxesArr.length !== 0) {
      calculateCheckboxesArr.forEach(function(calculateCheckbox) {
        let calculateCheckboxesTitle = "";
        if(calculateCheckbox.closest('.bapf_sfilter')) {
          calculateCheckboxesTitle = calculateCheckbox.closest('.bapf_sfilter').dataset.name;
        } else {
          calculateCheckboxesTitle = calculateCheckbox.closest('.select__item').dataset.name;
        }
        const calculateCheckboxesVal = calculateCheckbox.dataset.name;
        
        calculateCheckboxesGeneral = `${calculateCheckboxesTitle}: ${calculateCheckboxesVal}; `;
        calculateCheckboxesData += calculateCheckboxesGeneral;
      });
    } else {
      calculateCheckboxesData = `Not selected; `;
    }

    if(calculateSelectsArr.length !== 0) {
      calculateSelectsArr.forEach(function(calculateSelect) {
        const calculateSelectTitle = calculateSelect.dataset.name;
        const calculateSelectVal = calculateSelect.innerText;
        
        const calculateSelectGeneral = `${calculateSelectTitle}: ${calculateSelectVal}; `;
        calculateSelectsData += calculateSelectGeneral;
      });
    }
    calculateGeneralData = `${calculateCheckboxesData} || ${calculateSelectsData}`;
    document.querySelector("#dynamichidden-calculate-options").value = calculateGeneralData;
  });
}

     





// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination]);


/* HEADER MENU */
const headerBurger = document.querySelector('#headerBurger');
if(headerBurger) {
  headerBurger.addEventListener("click", function() {
    headerBurger.classList.toggle("is-active");
    menuWrapper.classList.toggle("nav--active");
  }); 
}

window.onload = function() {
  const header = document.querySelector("#header");
if (header) {
  const headerHeight = header.scrollHeight;
  let headerOffsetTop = offset(header).top;

  if(window.innerWidth >= 999) {
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > headerOffsetTop) {
        header.classList.add("header-fixed");
        header.nextElementSibling.style.marginTop = headerHeight + "px";
      } else {
        header.classList.remove("header-fixed");
        header.nextElementSibling.style.marginTop = 0;
      }
    });
  }
}
};


/* Popular Models */
const popularModelsBlock = document.querySelector("#popularModels");
if(popularModelsBlock) {
  const swiperModels = new SwiperCore('.swiper-models', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 23,
    autoHeight: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '#swiperModelsBtnNext',
      prevEl: '#swiperModelsBtnPrev',
    },

    //Pagination
    pagination: {
      el: '.models-pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'swiper-section-pagination__el models-pagination__el',
      bulletActiveClass: 'swiper-section-pagination__el--active models-pagination__el--active'
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      0: {
        slidesPerView: 1,
      },

      479: {
        slidesPerView: 1,
        pagination: false,
      },
      
      767: {
        slidesPerView: 2,
      },

      999: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
    }
  });
}

/* Button Up */
const buttonUp = document.querySelector("#buttonUp");
if(buttonUp) {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
  
    if (scrolled > coords) {
      buttonUp.classList.add('button-up--active');
    } else {
      buttonUp.classList.remove('button-up--active');
    }
  
  });

  buttonUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

const swiperIntro = new SwiperCore('.swiper-intro', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '#swiperIntroBtnNext',
    prevEl: '#swiperIntroBtnPrev',
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      spaceBetween: 0
    },
    // when window width is >= 640px
  }
});
swiperIntro.on('slideChange', function () {
  introSwipeIcon.style.display = "none";
});

const swiperServices = new SwiperCore('.swiper-services', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 4,
  spaceBetween: 23,
  autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: '#swiperServicesBtnNext',
    prevEl: '#swiperServicesBtnPrev',
  },

  //Pagination
  pagination: {
    el: '.services-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'swiper-section-pagination__el services-pagination__el',
    bulletActiveClass: 'swiper-section-pagination__el--active services-pagination__el--active'
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
    },

    479: {
      slidesPerView: 1,
      pagination: false,
    },
    
    767: {
      slidesPerView: 3,
    },
    // when window width is >= 480px
    1440: {
      slidesPerView: 4,
    },
    // when window width is >= 640px
  }
});

const swiperNews = new SwiperCore('.swiper-news', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 23,
  autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: '#swiperNewsBtnNext',
    prevEl: '#swiperNewsBtnPrev',
  },

  //Pagination
  pagination: {
    el: '.news-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'swiper-section-pagination__el news-pagination__el',
    bulletActiveClass: 'swiper-section-pagination__el--active news-pagination__el--active'
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
    },

    479: {
      slidesPerView: 1,
      pagination: false,
    },
    
    767: {
      slidesPerView: 2,
    },

    999: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
  }
});

const swiperReviews = new SwiperCore('.swiper-reviews', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 50,
  autoHeight: true,

  //Pagination
  pagination: {
    el: '.reviews-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'swiper-section-pagination__el reviews-pagination__el',
    bulletActiveClass: 'swiper-section-pagination__el--active reviews-pagination__el--active'
  },

  // Navigation arrows
  navigation: {
    nextEl: '#swiperReviewsBtnNext',
    prevEl: '#swiperReviewsBtnPrev',
  },
});

const swiperModelGallery = new SwiperCore('.swiper-model-gallery', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 23,
  autoHeight: true,
  

  // Navigation arrows
  navigation: {
    nextEl: '#swiperNewsBtnNext',
    prevEl: '#swiperNewsBtnPrev',
  },

  //Pagination
  pagination: {
    el: '.model-gallery-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'swiper-section-pagination__el model-gallery-pagination__el',
    bulletActiveClass: 'swiper-section-pagination__el--active model-gallery-pagination__el--active'
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
      /* slidesPerView: 1, */
    },

    479: {
      /* slidesPerView: 1, */
      pagination: false,
    },
    
    767: {
      /* slidesPerView: 2, */
    },

    999: {
      /* slidesPerView: 3, */
    },
    // when window width is >= 640px
  }
});

let thisSwiper = [];
const swipersOptionsArr = Array.from(document.querySelectorAll('.swiper-model-options'));
if(swipersOptionsArr) {
  swipersOptionsArr.forEach(function(item) {
    const swiperID = item.getAttribute("id");
  
      thisSwiper[item] = new SwiperCore('#'+swiperID, {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3,
        spaceBetween: 23,
        autoHeight: true,
        observer: true,
        
        // Navigation arrows
        navigation: {
          nextEl: '#'+swiperID+'Next',
          prevEl: '#'+swiperID+'Prev',
        },
        
        //Pagination
        pagination: false,
        
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          0: {
          slidesPerView: 1,
          },
        
          479: {
          slidesPerView: 2,
          pagination: false,
          },
          
          767: {
          slidesPerView: 3,
          },
        
          999: {
          slidesPerView: 4,
          },
          // when window width is >= 640px
        }
        });
  
    
   
  });
}

const swiperInfoOne = new SwiperCore('.swiper-info-one', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 23,
  autoHeight: true,

  //Pagination
  pagination: {
    el: '.info-one-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'swiper-section-pagination__el info-one-pagination__el',
    bulletActiveClass: 'swiper-section-pagination__el--active info-one-pagination__el--active'
  },
});

/* ------------------------------ Mobile vh fix func ------------------------------- */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function offset(elem) {
  // (1)
  var box = elem.getBoundingClientRect();
  
  // (2)
  var body = document.body;
  var docElem = document.documentElement;
  
  // (3)
  var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
  
  // (4)
  var clientTop = docElem.clientTop || body.clientTop || 0;
  var clientLeft = docElem.clientLeft || body.clientLeft || 0;
  
  // (5)
  var top  = box.top +  scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;
  
  return { top: Math.round(top), left: Math.round(left) };
}