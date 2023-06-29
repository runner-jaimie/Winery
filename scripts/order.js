//move to order.html when clicked single wine image
$(document).ready(function () {
    $('.gallery img').click(function () {
        window.location.href = 'order.html';
    });
});

//show each detail large image in the box when clicked small image
$('.show-detail img').click(function () {
    if (this.src != null) {
        let val = this.src.substring(0, this.src.length - 4);
        document.getElementById('detail-wine').src = val + "-l.png";
    }
});

//magnify product image
$('#detail-wine').mouseover(function () {
    let val = this.src.substring(0, this.src.length - 6);
    let zoomImageSrc = val + ".jpg";
    $('.zoom').magnify({
        speed: 200,
        src: zoomImageSrc
    });
});