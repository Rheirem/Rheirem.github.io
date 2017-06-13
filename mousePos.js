$('#canvas').mousemove(function(e) {
  mousePos = getMousePosition(e);
});

function getMousePosition(e) {
  var rect = c.getBoundingClientRect();
  var root = document.documentElement;
  var mouseX = e.clientX - rect.left - root.scrollLeft;
  var mouseY = e.clientY - rect.top - root.scrollTop;
  return {
    x: mouseX,
    y: mouseY
  }
};
