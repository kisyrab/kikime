$(function(){
    $(".img_box2").slick({
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow:4,
        slidesToScroll:4,
        arrows:false,
        initialSlide: 1,
        centerPadding: '70px', 
    });

    //탭메뉴
    // $(".tab li a").click(function(){
    //     $(".con1 h2").removeClass("on");
    //     $(this).addClass("on");
    
    //     $(".con1 ul").hide();
    //     $(this).next().css({display : "flex"})
    
    // })




    bg = $(".tab li").eq(0).attr("bg")
    $(".tab li").eq(0).css({"background" : bg })


    $(".tab li").click(function(){
        bg = $(this).attr("bg")
        $(this).siblings().find("a").addClass("on");
        $(this).find("a").removeClass("on");
        var i = $(this).index()
        console.log(i)
        $(".frame .section").hide();
        // $(".frame .section").eq(i).css({display : "flex"})
        $(".frame .section").eq(i).fadeIn();
        $(".tab li").eq(i).css({"background" : bg })
        $(".tab li").eq(i).siblings().css({"background" : "transparent" })
    })


    $(".tab li").hover(function(){
        var bg = $(this).attr("bg");
        $(this).css({"background" : bg })
    }, function(){
        $(this).siblings().css({"background" : "transparent" })
        
    })//hover


})//j