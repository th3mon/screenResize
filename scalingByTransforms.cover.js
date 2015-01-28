function resizeCanvas (stage, canvas) {
  'use strict';

  var scaleX = canvas.width / window.innerWidth;
  var scaleY = canvas.height / window.innerHeight;
  var scaleToCover = Math.max(scaleX, scaleY);

  stage.style.transformOrigin = '0 0';
  stage.style.transform = 'scale(' + scaleToCover + ')';
}

window.addEventListener('resize', resizeCanvas, false);
