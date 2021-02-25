var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,
    delay: 10000,
    speed: 1000,
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    effect: 'fade',
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
})       
var mySwiper2 = new Swiper('.swiper-container2', {
    autoplay: true,
    delay: 10000,
    speed: 1000,
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    effect: 'fade',
    // 如果需要分页器
    // pagination: {
    //     el: '.swiper-pagination2',
    // },
    // // 如果需要前进后退按钮
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
})     