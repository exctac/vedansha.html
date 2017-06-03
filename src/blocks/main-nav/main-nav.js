(function(){
  $('.main-nav__toggler').each(function () {
    $(this).click(function () {
      $(this).parent().toggleClass('main-nav--open')
    })
  })
}());
