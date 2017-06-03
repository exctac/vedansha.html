document.addEventListener('DOMContentLoaded', function(){
  if (window.isMobile !== undefined) {
    if(isMobile.tablet || isMobile.phone) {
      $('.article').find('table').wrap('<div class="table-mobile-scroll"></div>')
    }
  }
});