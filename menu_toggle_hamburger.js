Drupal.behaviors.menu_toggle_hamburger = function (context) {
  $("#mobile-menu-toggle", context).click(function (e, context) {
    if (typeof(Drupal.settings.menu_toggle_hamburger) == 'undefined') {
      return false;
    }
    $(Drupal.settings.menu_toggle_hamburger.css_class).slideToggle('fast');
    if ($(this).hasClass('mobile-menu-toggle-open')) {
      $(this).removeClass('mobile-menu-toggle-open');
    }
    else {
      $(this).addClass('mobile-menu-toggle-open');
    }
    e.preventDefault();
  });
};
