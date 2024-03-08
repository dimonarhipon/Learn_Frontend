var preloaderBlock = document.querySelector(".preloader-block");
var preloaderSpinner = document.querySelector(
  ".preloader-block .app-spinner"
);

preloaderBlock.addEventListener("animationend", (e) => {
  if (e.target === preloaderBlock) {
    preloaderBlock.classList.add("preloader-block_hidden");
    document.body.style.overflow = "auto";
  }
});

var showPreloaderBlock = () => {
  preloaderSpinner.classList.remove("hide");
  preloaderBlock.classList.remove("close");
  preloaderBlock.classList.remove("preloader-block_hidden");
};

var hidePreloaderBlock = () => {
  preloaderSpinner.classList.add("hide");
  preloaderBlock.classList.add("close");
};

var startTime = Date.now();




var maxShowLoader = setTimeout(function () {
  hidePreloaderBlock();
}, 3000);


var hidePreloader = function(maxTime) {
  var intervalId = setInterval(function() {

    if (new Date().getTime() - startTime > maxTime) {
      hidePreloaderBlock();
      clearTimeout(maxShowLoader);
      clearInterval(intervalId);
    }
  }, 200);
}
