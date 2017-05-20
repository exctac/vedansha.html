(function(){
  $('.main-nav__toggler').each(function () {
    $(this).click(function () {
      console.log('Dawdaw')
      $(this).parent().toggleClass('main-nav--open')
    })
  })
}());
