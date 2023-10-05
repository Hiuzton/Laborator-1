var video = document.getElementById("video");

video.addEventListener("touchstart", capteaza);
video.addEventListener("mousedown", capteaza);

function on_cam_success(stream) {
  video.srcObject = stream;
}

function on_cam_error(err) {
  alert("Eroare: " + err.message);
}

var constraints = { audio: false, video: { width: 1280, height: 720 } }; // Setează dimensiunile dorite pentru video
navigator.mediaDevices
  .getUserMedia(constraints)
  .then(on_cam_success)
  .catch(on_cam_error);

function capteaza() {
  var canvas = document.getElementById("canvas");
  canvas.width = 720;
  canvas.height = 1280;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, 720, 1280);

  // Crează o imagine nouă din canvas
  var newImage = new Image();
  newImage.src = canvas.toDataURL("image/jpeg");

  // Afișează imaginea în lista de imagini
  var imageList = document.getElementById("image-list");
  imageList.appendChild(newImage);
}
