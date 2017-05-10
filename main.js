$(document).ready(function(){
  var original = $('.character-original');
  var replacement = $('.character-replacement');
  
  $('.character-wrapper').mouseover(function(){
        $(this).find(original).css("display", "none");
        $(this).find(replacement).css("display", "inline");
    });
  $('.character-wrapper').mouseout(function(){
        $(this).find(original).css("display", "inline");
        $(this).find(replacement).css("display", "none");
    });
});
