var infoshowButton = document.getElementById('showbutton');
var infoWrap = document.getElementById('wrap');
var infoWrap_show = document.getElementById('wrap_show');
var bodyWrap = document.getElementById('body');

function test() {

    infoWrap.style.display = "none";
    infoWrap_show.style.display = "block";
    bodyWrap.style.margin = 0;

}

infoshowButton.addEventListener("click", function() {
    infoWrap.style.display = "block";
    infoWrap_show.style.display = "none";
    bodyWrap.style.margin = "revert";

});

/* Javascript 샘플 코드 */

