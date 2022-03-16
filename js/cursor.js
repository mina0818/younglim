$(function(){

//마우스
$('.btn_area.next').hover(function(){
    $('.cursor').addClass('right')
  },function(){
    $('.cursor').removeClass('right')
  })

$('.btn_area').mousemove(function(e){
    // console.log(1);
    $('.cursor').addClass('active')
    child = $('.cursor');


    if($(this).hasClass('swiper-button-disabled')){
      $('.cursor').addClass('disabled');
    }else{
      $('.cursor').removeClass('disabled');
    }


    w = child.width()/2
    h = child.height()/2

    gsap.to('.cursor',{
      x:e.clientX-w,
      y:e.clientY-h,
      duration:0.1
    })

 })

 $('.btn_area').mouseleave(function(){
  $('.cursor').removeClass('active')
 })






/*     //header 마우스
    $('#gnb_n_btn').hover(function(){
        $('.gnb_cursor_right').addClass('active')
        
    },function(){
        $('.gnb_cursor_right').removeClass('active')
    })
    $('#gnb_p_btn').hover(function(){
        $('.gnb_cursor_left').addClass('active')
    },function(){
        $('.gnb_cursor_left').removeClass('active')
    })

    $('.gnb_btn_area.swiper-button-prev').mousemove(function(e){
        w = $('.gnb_cursor').width()/5
        h = $('.gnb_cursor').height()/5

        gsap.to('.gnb_cursor',{
            x:e.clientX-w,
            y:e.clientY-h,
            duration:0.1
        });
    })
    $('.gnb_btn_area.swiper-button-next').mousemove(function(e){
        w = $('.gnb_cursor').width()/1.4
        h = $('.gnb_cursor').height()/2

        gsap.to('.gnb_cursor',{
            x:e.clientX-w,
            y:e.clientY-h,
            duration:0.1
        });
    })


     */

/* 
//main 마우스
$('.main_slider .swiper-button-next').hover(function(){
    $('.main_cursor.right').addClass('active')
    
},function(){
    $('.main_cursor.right').removeClass('active')
})
$('.main_slider .swiper-button-prev').hover(function(){
    $('.main_cursor.left').addClass('active')
},function(){
    $('.main_cursor.left').removeClass('active')
})


$('.main_slider .swiper-button-prev').mousemove(function(e){
    w = $('.main_cursor.left').width()/2
    h = $('.main_cursor.left').height()/2

    gsap.to('.main_cursor.left',{
        x:e.clientX-w,
        y:e.clientY-h,
        duration:0
    });
})
$('.main_slider .swiper-button-next').mousemove(function(e){
    w = $('.main_cursor.right').width()/2
    h = $('.main_cursor.right').height()/2

    gsap.to('.main_cursor.right',{
        x:e.clientX-w,
        y:e.clientY-h,
        duration:0
    });
})

 */

/* 

//designer 마우스
$('#designer_n_btn').hover(function(){
    $('.designer_slide_cursor.right').addClass('active')
    
},function(){
    $('.designer_slide_cursor.right').removeClass('active')
})
$('#designer_p_btn').hover(function(){
    $('.designer_slide_cursor.left').addClass('active')
},function(){
    $('.designer_slide_cursor.left').removeClass('active')
})

$('.designer_swiper .swiper-button-prev').mousemove(function(e){
    w = $('.designer_slide_cursor.left').width()/2
    h = $('.designer_slide_cursor.left').height()/2

    gsap.to('.designer_slide_cursor.left',{
        x:e.clientX-w,
        y:e.clientY-h,
        duration:0.1
    });
})
$('.designer_swiper .swiper-button-next').mousemove(function(e){
    w = $('.designer_slide_cursor.right').width()/2
    h = $('.designer_slide_cursor.right').height()/2

    gsap.to('.designer_slide_cursor.right',{
        x:e.clientX-w,
        y:e.clientY-h,
        duration:0.1
    });
})


//비디오

$('.play_btn').click(function(e){
    e.preventDefault();
    $('.video_area .wrap .video_box').addClass('play');
    $('.video_area .wrap iframe').attr('src','https://www.youtube.com/embed/L3GplJfWC-s?autoplay=1')
    
})


 */













/* 
    // CURSOR
    var cursor = $(".main_cursor")

    var posX = 0,
        posY = 0;
    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, { // 값을 올릴수록 cursor-follower 영역이 늦게 따라옴
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                left: posX - 12,
                top: posY - 12
                }
            });

            TweenMax.set(cursor, {
                css: {
                left: mouseX,
                top: mouseY
                }
            });
        }
    });
 */

});