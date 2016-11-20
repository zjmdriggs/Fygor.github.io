function alightPaddingForNav() {
    var height = document.getElementById("nav").clientHeight;
    document.body.style.padding = height + " 0 0 0";
    var heightFoot = document.getElementById("footer").clientHeight;
    document.getElementById("content-holder").style.padding = "0 0 " + heightFoot + " 0";
}
