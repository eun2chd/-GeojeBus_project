var infoshowButton = document.getElementById('showbutton');
var infoWrap = document.getElementById('wrap');
var infoWrap_show = document.getElementById('wrap_show');

function test() {

    infoWrap.style.display = "none";
    infoWrap_show.style.display = "block";
    body.style.margin = 0;

}

infoshowButton.addEventListener("click", function() {
    infoWrap.style.display = "block";
    infoWrap_show.style.display = "none";

});