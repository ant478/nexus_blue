$(document).ready(function() {
    $(".menu-element .arrow").click(function(e){
      $(this).siblings(".submenu").toggle();
    });

    $(".menu-button").click(function(e){
      var header_offset = $("#page-header").offset().top;
      var menu_offset = $("#page-menu").offset().top;
      var content_offset = $("#page-content").offset().top;
      var footer_offset = $("#page-footer").offset().top;
      $("#page-header").css({ "position": 'fixed', "top": header_offset, "left": 0 });
      $("#page-menu").css({ "position": 'fixed', "top": menu_offset, "left": 0 });
      $("#page-content").css({ "position": 'fixed', "top": content_offset, "left": 0 });
      $("#page-footer").css({ "position": 'fixed', "top": footer_offset, "left": 0 });
      $("#page-popup-menu").show();
    });

    $(".close-btn").click(function(e){
      $("#page-header").attr('style', '');
      $("#page-menu").attr('style', '');
      $("#page-content").attr('style', '');
      $("#page-footer").attr('style', '');
      $("#page-popup-menu").hide();
    });

    $(".search-button").click(function(e){
      if ($(document).width() < 844) {
        if (!$(".search-field-container").is(":visible")) {
          $(".search-area").css({
            "width": 'calc(100% - 52px)',
            "position": 'absolute',
            "left": 0
          });
        } else {
          $(".search-area").css({"width": 'auto'});
            $(".search-area").css({
              "width": 'auto',
              "position": 'static'
            });
        }

        $(".search-field-container").toggle();
      }
    });
});
