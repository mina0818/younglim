$(function(){

$('.up1').each(function(index,item){

    gsap.fromTo(item,{
        yPercent:100,
        opacity:0,
    },{
        scrollTrigger:{
        trigger:item,
        start:"top 100%",
        // markers:true,
        },
        opacity:1,
        yPercent:0,
        duration:1.5,
        delay:1,
    })
})
$('.up2').each(function(index,item){

    gsap.fromTo(item,{
        yPercent:100,
        opacity:0,
    },{
        scrollTrigger:{
        trigger:item,
        start:"top 100%",
        // markers:true,
        },
        opacity:1,
        yPercent:0,
        duration:1.5,
        delay:1.4,
    })
})
$('.up3').each(function(index,item){

    gsap.fromTo(item,{
        yPercent:100,
        opacity:0,
    },{
        scrollTrigger:{
        trigger:item,
        start:"top 100%",
        // markers:true,
        },
        opacity:1,
        yPercent:0,
        duration:1.5,
        delay:1.8,
    })
})

$('.list_slider').each(function(index,item){

    if($(this).data('y')){
      yVal = $(this).data('y');
    }else{
      yVal = 20
    }

    gsap.fromTo(item,{
      opacity:0,
      yPercent:yVal,
    },{
      scrollTrigger:{
        trigger:item,
        start:"top 80%",
        // markers:true,
      },
      opacity:1,
      yPercent:0,
      duration:1,
    })
  })
  
  gsap.to(".motion",{
    scrollTrigger:{
      trigger:".tab_con_area",
      // strat:"top top",
      strat:"top 80%",
      end:"bottom top",
      scrub:0.3,
    //   markers:true,
    },
    yPercent:-30,
    ease: "none",
  })
  
  gsap.to(".motion_back",{
    scrollTrigger:{
      trigger:".tab_con_area",
      // strat:"top top",
      strat:"top 80%",
      end:"bottom top",
      scrub:0.3,
    //   markers:true,
    },
    yPercent:-30,
    ease: "none",
  })

  /* $('.motion_show').each(function(index,item){
    if($(this).data('y')){
      yVal = $(this).data('y');
    //   console(y);
    }else{
      yVal = 100
    }

    gsap.fromTo(item,{
    //   opacity:0,
      yPercent:yVal,
    },{
      scrollTrigger:{
        trigger:item,
        start:"top 80%",
        markers:true,
      },
      opacity:1,
      yPercent:0,
      duration:1,
    })
  }) */


  $('.video_area .wrap').each(function(index,item){

    if($(this).data('y')){
      yVal = $(this).data('y');
    }else{
      yVal = 20
    }

    gsap.fromTo(item,{
      opacity:0,
      yPercent:yVal,
    },{
      scrollTrigger:{
        trigger:item,
        start:"top 80%",
        // markers:true,
      },
      opacity:1,
      yPercent:0,
      duration:1,
    })
  })
  $('.product_area').each(function(index,item){

    if($(this).data('y')){
      yVal = $(this).data('y');
    }else{
      yVal = 20
    }

    gsap.fromTo(item,{
      opacity:0,
      yPercent:yVal,
    },{
      scrollTrigger:{
        trigger:item,
        start:"top 80%",
        // markers:true,
      },
      opacity:1,
      yPercent:0,
      duration:1,
    })
  })
  $('.designer_pick').each(function(index,item){

    if($(this).data('y')){
      yVal = $(this).data('y');
    }else{
      yVal = 20
    }

    gsap.fromTo(item,{
      opacity:0,
      yPercent:yVal,
    },{
      scrollTrigger:{
        trigger:item,
        start:"top 80%",
        // markers:true,
      },
      opacity:1,
      yPercent:0,
      duration:1,
    })
  })
  $('.banner_cont .wrap').each(function(index,item){

    if($(this).data('y')){
      yVal = $(this).data('y');
    }else{
      yVal = 20
    }

    gsap.fromTo(item,{
      opacity:0,
      yPercent:yVal,
    },{
      scrollTrigger:{
        trigger:item,
        start:"top 80%",
        // markers:true,
      },
      opacity:1,
      yPercent:0,
      duration:1,
    })
  })




})//END