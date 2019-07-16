

function rotateAround(cx, around, radians){
    cx.translate(around.x, around.y); //move origin to rotation point
    cx.rotate(radians); // rotate
    cx.translate(-around.x, -around.y); //move origin back
  }


/**
* Draws a star using the given context
* @param {CanvasRenderingContext2D} cx
* @param {Vec} center
* @param {Number} radius
* @param {Number} numPoints
* @param {String} color
*/
function drawStar(cx, center, radius, numPoints, color){
    let rad = 0, nextRad;
    let getNextPoint = rad => center.plus(new Vec(Math.cos(rad),Math.sin(rad)).times(radius));
    let currentPoint = getNextPoint(rad);
    cx.beginPath();
    cx.fillStyle = color;
    cx.moveTo(currentPoint.x, currentPoint.y);
    for (let i=0; i < numPoints; i ++){
      rad = rad + 2*Math.PI / numPoints;
      currentPoint = getNextPoint(rad);
      cx.quadraticCurveTo(center.x, center.y, currentPoint.x, currentPoint.y);
    }
    cx.fill();
  }
