const thunder = document.getElementById('thunder');
thunder.width = window.innerWidth;
thunder.height = window.innerHeight;
const ctx = thunder.getContext('2d');

var minSegmentHeight = 2;
var groundHeight = thunder.width/4;
var color = "hsl(180, 80%, 80%)";
var roughness = 2;
var maxDifference = thunder.width / 15;
ctx.globalCompositeOperation = "lighter";
ctx.strokeStyle = color;
ctx.shadowColor = color;
ctx.fillStyle = color;
ctx.fillStyle = "hsla(0, 0%, 10%, 0.2)";

function drawTree(startX, startY, len, angle, branchWidth) {
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = "source-over";
    ctx.globalCompositeOperation = "lighter";
    ctx.shadowBlur = 15;
    var lightning = createLightning();
    ctx.beginPath();
    ctx.save();
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY); 
    ctx.rotate(angle * Math.PI/15);
    ctx.moveTo(0, 0);
    ctx.rotate(Math.PI/2);
    for (var i = 0; i < lightning.length; i++) {
        ctx.lineTo(lightning[i].x, lightning[i].y);
      }
    ctx.stroke();
    if (len < 10) {
        ctx.restore();
        return;
    }

    function createLightning() {
      var segmentHeight = groundHeight - startY;
      var lightning = [];
      lightning.push({x: startX, y: startY});
      lightning.push({x: Math.random() * (startX - 100) + 50, y: groundHeight + (Math.random() - 0.9) * 50});
      var currDiff = maxDifference;
      while (segmentHeight > minSegmentHeight) {
        var newSegments = [];
        for (var i = 0; i < lightning.length - 1; i++) {
          var start = lightning[i];
          var end = lightning[i + 1];
          var midX = (start.x + end.x) / 2;
          var newX = midX + (Math.random() * 2 - 1) * currDiff;
          newSegments.push(start, {x: newX, y: (start.y + end.y) / 2});
        }
        
        newSegments.push(lightning.pop());
        lightning = newSegments;
        
        currDiff /= roughness;
        segmentHeight /= 2;
      }
      return lightning;
      requestAnimationFrame(drawTree());
    }
    drawTree(0, len, len*0.8, angle+1, branchWidth * 0.6);
    drawTree(0, len, len*0.8, angle-1, branchWidth * 0.3);
    ctx.restore();
}

function drawTree2(startX, startY, len, angle, branchWidth, rotate1, rotate2, angle1, angle2, branchWidth12) {
    ctx.beginPath();
    ctx.save();
    ctx.strokeStyle = color;
    ctx.shadowColor = color;
    ctx.fillStyle = color;
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.fillStyle = "hsla(0, 0%, 10%, 0.2)";
    ctx.shadowBlur = 0;
    ctx.globalCompositeOperation = "source-over";
    ctx.globalCompositeOperation = "lighter";
    ctx.shadowBlur = 15;
    ctx.rotate(angle * Math.PI/rotate1);
    ctx.moveTo(0, 0);
    ctx.rotate(Math.PI/rotate2);
    ctx.lineTo(0, len);   
    ctx.stroke();
    if (len < 10) {
        ctx.restore();
        return;
    }
    drawTree(0, len, len*0.8, angle+angle1, branchWidth12);
    drawTree(0, len, len*0.8, angle+angle2, branchWidth12);
    ctx.restore();
}
setInterval(function(){
    drawTree2(thunder.width+40, thunder.height*0.07, thunder.width/150, 0, 10, 15, 2, -5, -8, 15 * 0.8);
}, 3000);
setInterval(function(){
      ctx.clearRect(0,0,innerWidth,innerHeight);
    }, 30021);
setInterval(function(){
    drawTree2(thunder.width/1.26, thunder.height*0.12, thunder.width/150, 0, 4, 15, 2.5, -5, -9, 10 * 0.4);
}, 3002);
setInterval(function(){
      ctx.clearRect(0,0,innerWidth,innerHeight);
    }, 3003);

setInterval(function(){
    drawTree2(thunder.width/1.48, thunder.height*0.2, thunder.width/150, 0, 4, 15, 2, -7, -9, 10 * 0.4);
}, 3004);
setInterval(function(){
    drawTree2(thunder.width/2, thunder.height*0.19, thunder.width/150, 0, 4, 10, 3, -6, -6, 10 * 0.4);
}, 3005);

setInterval(function(){
      ctx.clearRect(0,0,innerWidth,innerHeight);
    }, 3006);

setInterval(function(){
    drawTree2(thunder.width+40, thunder.height*0.26, thunder.width/150, 0, 4, 35, 2, -8, -8, 5 * 0.5);
}, 5000);

setInterval(function(){
      ctx.clearRect(0,0,innerWidth,innerHeight);
    }, 5001);

function circle1(){
    var circle1 = document.getElementById('circle1')
    circle1.width = window.innerWidth
    circle1.height = window.innerHeight
    var c1 = circle1.getContext('2d')
    c1.strokeStyle = "#000000"
    c1.translate(circle1.width/2, circle1.height/2+55)
    c1.rotate(Math.PI/6)
    c1.arc(0, 0, circle1.width/9+16, 0, 2 * Math.PI);
    c1.lineWidth = 18;
    c1.stroke();
    c1.restore();
}
circle1();
function circle2(){
    var circle2 = document.getElementById('circle2')
    circle2.width = window.innerWidth
    circle2.height = window.innerHeight
    var c2 = circle2.getContext('2d')
    c2.beginPath();
    c2.save();
    c2.strokeStyle = "#660000";
    c2.translate(circle2.width/2, circle2.height/2+55)
    c2.rotate(Math.PI/6)
    c2.arc(0, 0, circle2.width/9, 0, 2 * Math.PI);
    c2.lineWidth = 4;
    c2.stroke();
    c2.restore();
}
circle2();
function circle3(){
    var circle3 = document.getElementById('circle3')
    circle3.width = window.innerWidth
    circle3.height = window.innerHeight
    var c3 = circle3.getContext('2d')
    c3.beginPath();
    c3.save();
    c3.strokeStyle = "#333333";
    c3.translate(circle3.width/2, circle3.height/2+55)
    c3.rotate(Math.PI/6)
    c3.arc(0, 0, circle3.width/9-5, 0, 2 * Math.PI);
    c3.lineWidth = 6;
    c3.stroke();
    c3.restore();
}
circle3();
function circle4(){
    var circle4 = document.getElementById('circle4')
    circle4.width = window.innerWidth
    circle4.height = window.innerHeight
    var c4 = circle4.getContext('2d')
    c4.beginPath();
    c4.save();
    c4.strokeStyle = "#660000";
    c4.translate(circle4.width/2, circle4.height/2+55)
    c4.rotate(Math.PI/6)
    c4.arc(0, 0, circle4.width/9-10, 0, 2 * Math.PI);
    c4.lineWidth = 4;
    c4.stroke();

    // var img = document.querySelector('.charimg');
    // c4.drawImage(img, (circle4.width-img.width)/2, (circle4.height-img.height)/2)

    c4.restore();
}
circle4();

// image center
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
// End image center


