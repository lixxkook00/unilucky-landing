const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    $('.soft-menu').classList.toggle('open')
    $('.soft-menu__list').classList.toggle('open')
}

$('.soft-menu__list').onclick = (e) => {
    e.stopPropagation()
}

$('.scroll-to-top').onclick = () => {
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
    });
}

// loading animation
window.addEventListener('load', (event) => {
  $('.loading').style.display = "none"
});

// SLIDER

var swiper1 = new Swiper(".swiper-partner", {
    slidesPerView: 4,
    spaceBetween: 10,
    slideToClickedSlide: true,
    // auto
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 480px
        120: {
        slidesPerView: 2,
        spaceBetween: 2
        },
        // when window width is >= 640px
        740: {
        slidesPerView: 3,
        spaceBetween: 4
        },
        1023: {
        slidesPerView: 4,
        spaceBetween: 1
        }
    }
});

swiper1.on('transitionEnd', function() {
    const currentIndex = swiper1.realIndex
    $('#intro-title--wrapper').style.transform = `translateX(-${currentIndex*16.6667}%)`
});

var swiper2 = new Swiper(".swiperFeedback", {
    slidesPerView: 1,
    spaceBetween: 10,
    // auto
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 480px
        120: {
        slidesPerView: 1,
        spaceBetween: 2
        },
        // when window width is >= 640px
        740: {
        slidesPerView: 1,
        spaceBetween: 4
        },
        1023: {
        slidesPerView: 1,
        spaceBetween: 1
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper3 = new Swiper(".swiperPartner", {
    slidesPerView: 3,
    spaceBetween: 10,
    // auto
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 480px
        120: {
        slidesPerView: 2,
        spaceBetween: 2
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
        slidesPerView: 2,
        spaceBetween: 6
        },
        1023: {
        slidesPerView: 4,
        spaceBetween: 6
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper4 = new Swiper(".swiper-product-1", {
    slidesPerView: 3,
    spaceBetween: 10,
    // auto
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
    loop:true,
    loopedSlides: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 4000,
    breakpoints: {
        // when window width is >= 480px
        120: {
        slidesPerView: 3,
        spaceBetween: 2
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
        slidesPerView: 3,
        spaceBetween: 12
        },
        1023: {
        slidesPerView: 6,
        spaceBetween: 12
        }
    },
});

var swiper5 = new Swiper(".swiper-product-2", {
    slidesPerView: 3,
    spaceBetween: 10,
    // auto
    autoplay: {
        delay: 500,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 4000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 480px
        120: {
        slidesPerView: 1,
        spaceBetween: 2
        },
        // when window width is >= 640px
       // when window width is >= 640px
        740: {
        slidesPerView: 2,
        spaceBetween: 12
        },
        1023: {
        slidesPerView: 6,
        spaceBetween: 12
        }
    },
});

function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)

    function updateNumber() {
        if (currentNumber >= finalNumber) {
            clearInterval(interval)
        } else {
            let inc = Math.ceil(finalNumber / (duration / 17))
            if (currentNumber + inc > finalNumber) {
                currentNumber = finalNumber
                clearInterval(interval)
            } else {
                currentNumber += inc
            }
            callback(currentNumber)
        }
    }
}

let animationStatus = false;

document.addEventListener('scroll', function() {

    if(document.getElementById("community").getBoundingClientRect().top < screen.height/2 && !animationStatus){
        animationStatus = true

        animateNumber(1000000, 2000, 0, function(number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('users-count').innerText = formattedNumber + '+';
        })

        animateNumber(100, 2000, 0, function(number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('ctv-count').innerText = formattedNumber + '+';
        })

        animateNumber(300, 2000, 0, function(number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('partner-count').innerText = formattedNumber + '+';
        })

        animateNumber(171 , 3000, 0, function(number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('office-count').innerText = '+'+ formattedNumber + ' tri???u';
        })
    }

    
})

const handleRegisterOnMobile = () => {
    toggleNavMobile()
}

window.addEventListener("load", function(){
    // loading animation
    document.querySelector('#loading').style.display = "none"
    
    // handle show modal
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false
    })

    // document.querySelector(".modal-close-button").onclick = () => {
    //     myModal.hide();
    // }

    // document.querySelector("#registerMobile").onclick = () => {
    //     toggleNavMobile()
    //     myModal.show();
    // }
    
})

const nameThisShit = /:\/\/([^\/]+).unilucky.vn/.exec(window.location.href)
// const nameThisShit = /:\/\/([^\/]+).unilucky.vn/.exec("https://trituetunhienlucky.unilucky.vn/")
const refNameThisShit = nameThisShit[1]
 
$$('.ref-link').forEach((item) => {
    item.href = `https://unilucky.vn/r/${refNameThisShit}`
});