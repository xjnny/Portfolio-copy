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


$(document).ready(function($) {
			$('.my-slider').unslider();
});



$(document).ready(function() {
  $('#contact-form').submit(function(e) {
      var name = $('#inputName')
      var email = $('#inputEmail')
      var message = $('#inputMessage')
    
      if(name.val() == "" || email.val() == "" || message.val() == "") {
        $('.submit-fail').fadeIn(400).delay(1500).fadeOut(400);
        return false;
      }
      else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/gilbycreative@gmail.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        $('.submit-success').fadeIn(400).delay(1500).fadeOut(400);
		$('.submit-fail').hide;
      }
    });
  
  $('.submit-fail, .submit-success').click(function() {
    $(this).hide();
  })
});
  