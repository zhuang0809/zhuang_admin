var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,
    delay: 10000,
    speed: 1000,
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    effect: 'fade',
    autoplay: {
        disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
var mySwiper2 = new Swiper('.swiper-container2', {
    autoplay: true,
    delay: 10000,
    speed: 1000,
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    effect: 'fade',
    autoplay: {
        disableOnInteraction: false,
    },
})  

var mySwiper3 = new Swiper('.swiper-container3', {
    autoplay: true,
    delay: 15000,
    speed: 5000,
    slidesPerView : 3,  
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    effect: 'coverflow',
    autoplay: {
        disableOnInteraction: false,
    },
}) 

var mySwiper4 = new Swiper('.swiper-container4', {
    autoplay: true,
    delay: 15000,
    speed: 5000,
    slidesPerView : 4,  
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    effect: 'slide',
    autoplay: {
        disableOnInteraction: false,
    },
}) 
// 企业荣誉
$(function(){
    var box = $(".content_wrap")

})