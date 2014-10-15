var pFontFactor = 1400 / 40;
var hFontFactor = 1400 / 20;
var regions = ['welcome', 'about', 'involved', 'links', 'contact'];
var visibleRegion = 0;

$(function() {
    $(window).bind('resize', function(){
        resizeFont();
    }).trigger('resize');
});


$(document).ready(function(){
//    pFontFactor = 1400 / ($('div.annotations').css('font-size'));
//    hFontFactor = 1400 / ($('h3.annotation').css('font-size'));

    $(window).on('scroll', function(){
        setActiveRegion();
    });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.position().top
        }, 1000);
        return false;
      }
    }
  });
});

$.fn.is_on_screen = function(){
     
    var win = $(window);
     
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = {right: '0', left: '0', bottom: '0', top: '0'};
     
    //var bounds = this.offset();
    bounds.left = this.offset.left;
    bounds.right = this.offset.right;
    

    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
     
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
     
};


function resizeFont() {
    console.log(pFontFactor);
    var displayWidth = $('#content').width();
    displayWidth = Math.min(1400,displayWidth);

    console.log(displayWidth);
    var pFontSize = Math.floor(displayWidth / pFontFactor);
    var pFormatted = '' + pFontSize.toString() + 'px';

    var hFontSize = Math.floor(displayWidth / hFontFactor);
    var hFormatted = '' + hFontSize.toString() + 'px';

    $('div.annotations').css('font-size',pFormatted);
    $('h3.annotation').css('font-size',hFormatted);
}

function setActiveRegion(){
    var newVisibleRegion = visibleRegion; //check to make sure it is invisible here...
    for (region in regions){
        var regionID = '#' + regions[region];
        newVisibleRegion = $(regionID).is_on_screen() ? region : newVisibleRegion;
    }

    if (newVisibleRegion != visibleRegion) {
        $('#'+regions[newVisibleRegion] +'-link').addClass('active');
        $('#'+regions[newVisibleRegion] +'-link').removeClass('inactive');
        $('#'+regions[visibleRegion] +'-link').addClass('inactive');
        $('#'+regions[visibleRegion] +'-link').removeClass('active');
        visibleRegion = newVisibleRegion;
    }
}
