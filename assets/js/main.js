
//Get Full Year
var fullYear = new Date().getFullYear();
document.getElementById("fullYear").innerHTML = fullYear;

//banner slider
var swiper = new Swiper('.banner-swiper', {
    effect: 'fade',
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
});

// product slider
var swiper = new Swiper('.product-swiper', {
    // slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3
        },
    }
});

//service slider
var swiper = new Swiper('.service-swiper', {
    // slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: false,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3
        },
        1200: {
            slidesPerView: 6,
            slidesPerGroup: 8
        }
    }
});

//clients slider
var swiper = new Swiper('.clients-swiper', {
    // slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: false,
    navigation: {
        nextEl: '.clients-button-next',
        prevEl: '.clients-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3
        },
    }
});


$('#quoteAccordion').on('show.bs.collapse', function () {
    var subCollapseId1 = document.getElementById("subCollapseId1");
    subCollapseId1.classList.add("fa-minus");
    subCollapseId1.classList.remove("fa-plus");
})
$('#quoteAccordion').on('hide.bs.collapse', function () {
    var subCollapseId2 = document.getElementById("subCollapseId1");
    subCollapseId2.classList.add("fa-plus");
    subCollapseId2.classList.remove("fa-minus");
})

$('#quoteAccordion2').on('show.bs.collapse', function () {
    var subCollapseId3 = document.getElementById("subCollapseId2");
    subCollapseId3.classList.add("fa-minus");
    subCollapseId3.classList.remove("fa-plus");
})
$('#quoteAccordion2').on('hide.bs.collapse', function () {
    var subCollapseId4 = document.getElementById("subCollapseId2");
    subCollapseId4.classList.add("fa-plus");
    subCollapseId4.classList.remove("fa-minus");
})

