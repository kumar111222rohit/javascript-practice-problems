(function () {
  console.log("tooltip env set");
  let tooltip = "",
    tooltipDiv = document.querySelector(".div-tooltip"),
    tooltipElements = Array.from(document.querySelectorAll(".hover-reveal")),
    timer;

  let displayTooltip = function (event) {
    tooltip = this.dataset.tooltip;
    tooltipDiv.innerHTML = tooltip;
    console.log("event.pageY", event.pageY);
    console.log("event.pageX", event.pageX);

    let adjustX = 0;
    let adjustY = 0;

    let tooltipRect = tooltipDiv.getBoundingClientRect();
    console.log(tooltipRect);

    // if (tooltipDiv.pageX + tooltipRect.pageX > window.innerWidth) {
    //   adjustX = -tooltipRect - 5;
    // }
    // if (tooltipRect.pageY < 0) {
    //   adjustY = -tooltipRect - 5;
    // }
    tooltipDiv.style.top = event.pageY + adjustY + "px";
    tooltipDiv.style.left = event.pageX + adjustX + "px";
    // tooltipDiv.style.opacity = 1;
    fadeIn(tooltipDiv);
  };
  // let hideTooltip = function (event, obj) {
  //   // tooltipDiv.style.opacity = 0;
  // };
  // fadeOut tooltip
  let fadeOut = function (element) {
    let initialOpacity = 1;
    if (!timer) {
      timer = setInterval(function () {
        if (initialOpacity <= 0.1) {
          clearInterval(timer);
          timer = null;
          element.style.opacity = 0;
          element.style.display = "none";
        }
        element.style.opacity = initialOpacity;
        initialOpacity -= initialOpacity * 0.1;
      }, 10);
    }
  };
  let fadeIn = function (element) {
    let initialOpacity = 0.1;
    let timer = setInterval(function () {
      if (initialOpacity > 1) {
        clearInterval(timer);
        element.style.opacity = 1;
        element.style.display = "block ";
      }
      element.style.opacity = initialOpacity;
      initialOpacity += initialOpacity * 0.1;
    }, 10);
  };

  tooltipElements.forEach((elem) => {
    let timeout;
    elem.addEventListener(
      "mouseenter",
      function (e) {
        //if we are using arrow function in settimeout we dont need the below line.
        // let that = this;
        // console.log("mouse-entered");
        timeout = setTimeout(function () {
          displayTooltip.call(elem, e);
        }, 400);
      },
      false
    );
    elem.addEventListener("mouseleave", function (e) {
      console.log("mouse-left");
      clearTimeout(timeout);
      // hideTooltip(e, this);
      fadeOut(tooltipDiv);
    });
  });
})();
