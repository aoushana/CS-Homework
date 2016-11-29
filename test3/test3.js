var robot = document.getElementById("robot");
function moveRobot() {
  var left = parseInt(robot.style.left.replace("px", ""))
  if (isNaN(left)) {
    left = 0;
  }
  left += 1;
  if (left > window.innerWidth) {
    left = robot.width * -1;
  }
  // Assign styles to robot aka left/updates the style
  robot.style.left = left + "px";

}
// setInterval(moveRobot, 20);

var button = document.getElementById("toggle");
var isStarted = false;
var intervalHandle;
button.addEventListener("click", function(){
  if (isStarted == false) {
    intervalHandle = setInterval(moveRobot, 20);
    isStarted = true
    button.innerHTML = "Stop"
  }
  else{
    clearInterval(intervalHandle);
    isStarted = false
    button.innerHTML = "START"
  }
});
