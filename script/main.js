jQuery(document).ready(function () {
  setTimeout(loader, 3000);
  function loader() {
    $(".loader--text").hide();
    $(".cycle").addClass("animate__animated animate__backOutRight");
    $(".main").addClass("animate__animated animate__zoomIn");
  }
  setTimeout(lottie, 3500);
  function lottie() {
    $(".cycle-loader").hide();
  }

  // Active menu Select       ////////////
  const list = document.querySelectorAll(".list");

  function active() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", active));

  // Share button functionality
  $(".share-button").click(function () {
    $(".social-icons").toggle(function () {});
  });

  // Navigation Menu link to respective Tabs
  $("nav li").click(function () {
    //  First remove class "active" from currently active tab
    $("nav li").removeClass("active");

    //  Now add class "active" to the selected/clicked tab
    $(this).addClass("active");

    //  Hide all tab content
    $(".mtabs_content").slideUp();

    //  Here we get the href value of the selected tab
    var selected_tab = $(this).find("a").attr("href");

    $("nav").css({
      "border-bottom-left-radius": "0px",
      "border-bottom-right-radius": "0px",
      "border-top-left-radius": "10px",
      "border-top-right-radius": "10px",
    });
    //  Show the selected tab content
    $(selected_tab).slideDown();

    //  At the end, we add return false so that the click on the link is not executed
    return false;
  });

  // Logo
  var $logo = $(".logo");

  if (location.href.indexOf("#") != -1) {
    $logo.show();
  } else {
    $logo.hide();
  }
  // Show logo
  $("nav .list").click(function () {
    $logo.fadeIn("slow");
  });
  // Hide logo
  $(".tab-profile").click(function () {
    $logo.fadeOut("slow");
    $("nav").css({
      "border-bottom-left-radius": "10px",
      "border-bottom-right-radius": "10px",
      "border-top-left-radius": "0px",
      "border-top-right-radius": "0px",
    });
  });
});
