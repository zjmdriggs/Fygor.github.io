var flag = true;
$(document).ready(function(){
    var current;

    $("body").css("background-image", "url('codeImages/BoardCanvas.jpg')")

    if(flag){
        current = $("#about-link");
        flag = false;
    }

    $("li").click(function(){
        current.removeClass("active");
        current = $(this);
        current.addClass("active");
    });
});
