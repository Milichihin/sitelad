var $menu = $(".header");
var $menuOffsetTop = $menu.offset().top;
var $menuHeight = $menu.outerHeight();
var $menuParent = $menu.parent();
var $menuParentPaddingTop = parseFloat($menuParent.css("padding-top"));

checkWidth();

function checkWidth() {
  // for mobile - you need change 1920 to 992
  if (window.matchMedia("(max-width: 1920px)").matches) {
    if ($menu.length !== 0) {
      $(window).scroll(onScroll);
    }
  }
}

function onScroll() {
  if ($(window).scrollTop() > $menuOffsetTop) {
    $menu.addClass("fixed");
    $menuParent.css({ "padding-top": $menuParentPaddingTop + $menuHeight });
  } else {
    $menu.removeClass("fixed");
    $menuParent.css({ "padding-top": $menuParentPaddingTop });
  }
}