(function(window, $){
  var richtingen = ['rechts', 'links', 'rechtdoor'];

  $(document).on('click', '.punten li:last-child', function(){
    $('<li class="onbekend">').appendTo($('.punten'));
  });

  $(document).on('click', '.punten li:not(.group)', function(){
    var huidigeRichting = $(this).attr('class');
    var volgendeIndex = (richtingen.indexOf(huidigeRichting) + 1) % richtingen.length;
    $(this).attr('class', richtingen[volgendeIndex]);
  });
})(window, jQuery);