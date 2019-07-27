$(document).ready(function(){
    $("h1").click(function(){
        $("p").toggle();
    }),

    $("#btn1").hover(function(){
        $("#box1").slideToggle("slow");
    }),

    $("input1").mouseenter(function(){
       alert("Mouse Entered");
    }),

    // $("input1").mouseleave(function(){
    //     alert("Mouse Entered");
    //  }),

    $("#btn2").click(function(){
        $("#box2").fadeToggle("slow");
    }),

    $("a").click(function(){
        $(this).toggleClass("bg-blue");
    }),

    $(".input1").focus(function(){
        $(this).addClass("bg-blue")
    }),

    $(".input1").blur(function(){
        $(this).removeClass("bg-blue")
    }),

    $(".boxx").hover(function(){
        $(this).toggleClass("transform")
    }),

   $("#js-box-1").delay(500).fadeIn();
   $("#js-box-2").delay(1000).fadeIn();
   $("#js-box-3").delay(1500).fadeIn();
   $("#js-box-4").delay(2000).fadeIn();

})