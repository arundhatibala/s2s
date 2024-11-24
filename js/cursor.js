var clientX = -300, clientY = -300;
var linkList = [];
var outerCursor = document.querySelector(".cursor--outer");

var initCursor = function() {
    if (outerCursor && window.innerWidth > 768) {
        document.addEventListener("mousemove", function(e) {
            clientX = e.clientX;
            clientY = e.clientY;
        });

        var render = function() {
            TweenMax.set(outerCursor, { x: clientX, y: clientY, ease: Power1.easeOut });
            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);
    } else {
        if (outerCursor) outerCursor.style.display = "none";
        document.body.style.cursor = "default";
    }
};

initCursor();

function growOnHover() {
    linkList = document.getElementsByClassName("link");
    for (var i = 0; i < linkList.length; i++) {
        let link = linkList[i];
        link.addEventListener("mouseleave", function() {
            TweenMax.to(outerCursor, 1, { scale: 1 });
        });
    }
}
