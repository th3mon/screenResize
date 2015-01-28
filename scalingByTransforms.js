function resizeCanvas (stage, canvas) {
  'use strict';

  var scaleX = canvas.width / window.innerWidth;
  var scaleY = canvas.height / window.innerHeight;
  var scaleToFit = Math.min(scaleX, scaleY);

  stage.style.transformOrigin = '0 0';
  stage.style.transform = 'scale(' + scaleToFit + ')';
}

window.addEventListener('resize', resizeCanvas, false);
