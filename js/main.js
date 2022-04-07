$(function(){

    //1. 스크롤을 내리면 헤더가 사라짐, 위로올리면 보임과 동시에 흰색으로 바뀜

    $("body").on("mousewheel",function(e){ //e적는 이유 값을 가져와야하기 때문 아애 값이 e. 이벤트로 시작..
        var wheel = e.originalEvent.wheelDelta;


        //스크롤 이벤트를 가져온다

        if(wheel>0){
            //스크롤을 올릴때
            $("header").removeClass("hide")
        }else{
            //스크롤을 내릴때
            $("header").addClass("hide")
            $("header").addClass("white")
        }
    })

    $(window).scroll(function(){

        var scrollTop = $(window).scrollTop() //스크롤 탑 위치 가져오기
        console.log(scrollTop)
        // $("header").removeClass("white")
        if(scrollTop<10){
            $("header").removeClass("white")
        }
    })

    
   /*  $("body").on("mousewheel",function(e){ //e적는 이유 값을 가져와야하기 때문 아애 값이 e. 이벤트로 시작..
        var wheel = e.originalEvent.wheelDelta;
        var scrollTop = $(window).scrollTop() //스크롤 탑 위치 가져오기
        console.log(scrollTop)


        //스크롤 이벤트를 가져온다

        if(wheel>0){
            //스크롤을 올릴때
            $("header").removeClass("hide")
            // $("header").removeClass("white")
        }else if((scrollTop=0)){
            $("header").removeClass("white")
        }else{
            //스크롤을 내릴때
            $("header").addClass("hide")
            $("header").addClass("white")
        }
    }) */




    /* var lastScrollTop = 0, dleta = 15;
    //이건 무슨 뜻일까

    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop() //스크롤 탑 위치 가져오기
        if(Math.abs(lastScrollTop - scrollTop) <= dleta) //스크롤 값을 받아온다
        return; //리턴 이거 뭔지 모르겠다
        console.log(scrollTop);

        if((scrollTop > lastScrollTop) && (lastScrollTop>0)){ 
            //만약 스크롤탑이 마지막 스크롤 탑보다 크거나 AND 마지막 스크롤 탑이 0보다 크거나... 하면
            $(".header_con").css("top","-70px")
            $("header").removeClass("white")
            $("header").css("display","none")
            // $(".white .header_con").css("top","-70px")
        }else if((scrollTop < lastScrollTop) && (lastScrollTop>0)){
            //만약 스크롤탑이 마지막 스크롤 한것보다 작고 , 0보다 크면
            $(".header_con").css("top","0px")
            $("header").addClass("white")
            $("header").css("display","block")
        }
        else{
            $(".header_con").css("top","0px")
        }
        lastScrollTop = scrollTop;  */


        /* const curr = $(this).scrollTop();

        if(curr > 0 ){
            $("header").addClass("white")
        }else{
            $("header").removeClass("white")
        } */
    
    /* }) */


    var swiper = new Swiper(".gnb_swiper", {
        loop:true,
        // autoplay:true,
        speed:600,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
        pagination: {
            el: ".gnb_pagination",
            clickable: true,
          },
      });

    $(".header_menu").hover(function(){
        $("header").addClass("white")
    },function(){
        if($(".open_item").hasClass("on")){
            $("header").removeClass("white");
        }
    })


    //open_item 마우스 오버하면 header_menu가 나온다

    $(".gnb_item > a ").mouseover(function(){ //open_item 마우스 오버했을때
        $("header").addClass("white"); //헤더에는 white라는 클래스가 생긴다
        h = $(".header_menu .inner").outerHeight(); //  h = 헤더메뉴 이너의 패딩값을 포함한 높이이다
        console.log(h)

        //$(".header_menu").stop().animate({height:0},300); //우선 header_menu에 높이를 0으로 한다 (이미 높이가 있어버릴수도 있으니..)
        $(".header_menu").stop().animate({height:h},300,function(){ 
            //다시 header_menu의 높이를 h만큼 펼치는데 안쪽 너비가 다른 만큼 자유롭게 펼쳐질 수 있도록 헤이트에 css로 오코 속성을 준다
            $(".header_menu").css({height:"auto"})
        });

        if($(this).parent().hasClass("on")){ //만약 마우스 호버한 gnb_item에 on 있으면
            //$(this).parent(".gnb_item").removeClass("on") // on 없에고 
        }else{ //아니라면(없다면)
            $(".gnb_item").removeClass("on") //일단 모든 gnb_item에 on 빼고
            $(this).parent(".gnb_item").addClass("on") //오버한 gnb_item에 on넣는다
        }
    });

    
    $(".gnb_item").mouseleave(function(){ //open_item 마우스가 떠나면
        $(".gnb_sub").removeClass("on")
        $(".header_menu").css({"min-height":0}) //header_menu 헤이트가 0
    })
    $(".gnb_item.not").mouseleave(function(){ //open_item 마우스가 떠나면
        $(this).removeClass("on") // on 없에고 
    })

    $("header").mouseleave(function(){ //header_menu에서 마우스가 떠나면
        $(".open_item").removeClass("on") //open_item on클래스 지우기
        $("header").removeClass("white");
        $(".header_menu").css({"min-height":0}).stop().animate({height:0},200);
        //header_menu의 css에 헤이트 0 모션으로 .3초에 헤이트 0
    })


    $(".gnb_item.not").mouseover(function(){ //매거진y랑 쇼룸안내에 마우스 오버하면
        $(".open_item").removeClass("on") //on클래스 삭제
        $(".header_menu").css({"min-height":0}).stop().animate({height:0},200);
        //header_menu의 css에 헤이트 0 모션으로 .3초에 헤이트 0
    })


    $(".gnb_menu_item").mouseover(function(){ //gnb_menu_item에 마우스 오버하면
        child = $(this).find(".gnb_sub"); //gnb_menu_item의 자식인 gnb_sub를 찾는다
        h = child.height()+120; //h = gnb_sub의 높이 + 100
        $(".header_menu").css({"min-height":400})//gnb_menu_item에 마우스 오버하면 header_menu 400
        $(".gnb_sub").removeClass("on"); //gnb_sub 에 on클래스 있을걸 대비해 삭제 부터하고
        child.addClass("on") //gnb_sub에 on추가

        $(".header_menu").stop().animate({height:h},300);
    })

    $(".open_item").mouseover(function(){
        idx = $(this).index(); //내가 마우스를 올린 매뉴의 순서
        // console.log(idx);

        $(".header_menu .visible_con").removeClass("active").eq(idx).addClass("active");
        //나와야하는 매뉴 visible_con가 3개인데 active먼저 뺏다가  idx로 마우스 올린 순서대로 active준다
    })

    $(".header_con").mouseover(function(){
        $("header").addClass("white")
    })


   /*  $(".items_con .gnb_menu_list").mouseover(function(){
        $(this).addClass("border_none")
    }) */
    /* $('.r_line a').mouseover(function(){
        if($('.gnb_menu_list').hasClass('border_none')){
            $('.gnb_menu_list').addClass("border_none")
        }else{
            $('.gnb_menu_list').removeClass("border_none")
        }
    })
    $(".gnb_menu").mouseleave(function(){
        $('.gnb_menu_list').removeClass("border_none")
    }) */







    /* $(".header_menu").mouseleave(function(){
        $(".visible_con").removeClass("active");
    }) */

    /* $(".open_item").mouseover(function(){
        $(".right_wrap").addClass("active");
    })
    $(".header_menu").mouseleave(function(){
        $(".right_wrap").removeClass("active");
    }) */





    $(".srh_btn").click(function(e){
        e.preventDefault();
        // console.log("click")

        sh = $(".srh_inner").outerHeight()
        console.log(sh)

        if($(".srh_area").height() > 0){
            $('.srh_area').stop().animate({height:0},300)
        }else{
            $('.srh_area').stop().animate({height:0},300)
            $('.srh_area').stop().animate({height:sh},300)
        }
    })


    var swiper = new Swiper(".main_swiper", {
        loop:true,
        // autoplay:true,
        speed:600,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });

      var swiper = new Swiper(".list_swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
      });


      $(".tab_nav ul li").click(function(e){
        e.preventDefault();
        target = $(this).children("a").attr("href");
        console.log(target)

        
        $(".tab_nav ul li").removeClass('active')
        $(this).addClass('active')
        

        // $(".tab_con_area .group").removeClass("active")
        // $(this).addClass("active")

        $(".tab_con_area .group").removeClass("active")
        $(target).addClass("active")
        })

        var bullet = ['키친/붙박이장','바스/타일','도어','중문','창호','몰딩/월/마루'];
        var swiper = new Swiper(".designer_swiper", {
            pagination: {
              el: ".designer_nav",
              clickable: true,
              renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + "</span></div>";
              },
            },
            navigation: {
                nextEl: ".next",
                prevEl: ".prev",
              },
          });



    $('.play_btn').click(function(e){
        e.preventDefault();
        $('.video_area .videocover').addClass('play');
        $('.video_area iframe').attr('src','https://www.youtube.com/embed/L3GplJfWC-s?autoplay=1')
    })

    

})//end
