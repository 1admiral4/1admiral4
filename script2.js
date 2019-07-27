// $(".box").click(function(){
//     $(this).animate({
//         opacity: 0.25
//         left: "+=50",
//         height: "toogle"
//     }, 200),
// })

$("#uname").keydown(function(){
    let size = document.getElementById('uname').value.length;

    if (size < 8) {
    $('.msg').text("username must be 8 characters");
    }
    else {
    $('.msg').text("")
    }
})