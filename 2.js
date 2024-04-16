var main = document.querySelector("#main");
var cursors = document.querySelectorAll(".cursor");

window.addEventListener("mousemove", function (dets) {
  var delay = 0;

  for (let i = 0; i < cursors.length; i++) {
    console.log();
    cursors[i].style.transform = `translate(${dets.x}px, ${dets.y}px)`;

    //   cursors[i].style.transition = `${1-3}s`
  }
});
