const video = document.getElementById('video');

navigator.getUserMedia = ( navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia);

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('assets/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('assets/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('assets/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('assets/models')
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.getElementById('container-video').appendChild(canvas);
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  }, 100);
});



var webcam = document.querySelector('.webcam');
var msgSafari = document.querySelector('.msg-safari');
var textWidth = document.querySelector('.text-width');
var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {
    console.log("Tu es sur chrome")
  } else {
    webcam.classList.add('hide-safari');
    textWidth.classList.add('hide-safari');
    msgSafari.classList.add('show-safari');
  }
}
