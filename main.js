$(document).ready(function() {
  var original = $('.character-original');
  var replacement = $('.character-replacement');

  $('.character-wrapper').mouseover(function() {
    $(this).find(original).css("display", "none");
    $(this).find(replacement).css("display", "inline");
  });
  $('.character-wrapper').mouseout(function() {
    $(this).find(original).css("display", "inline");
    $(this).find(replacement).css("display", "none");
  });
});

$(document).ready(function($) {
  $('.my-slider').unslider({
    infinite: true,
    arrows: true,
    keys: true
  });

});

$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    var name = $('#inputName')
    var email = $('#inputEmail')
    var message = $('#inputMessage')

    if (name.val() == "" || email.val() == "" || message.val() == "") {
      $('.submit-fail').fadeIn(400).delay(1500).fadeOut(400);
      return false;
    } else {
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


// $(document).ready(function() {
// 	$('#fullpage').fullpage();
// });


// var width = $('.underline').width();
//
// var steps = 10;
// var height = 5;
// var step_size = width/steps;
//
// var d_animated = ['M0', '1'];
// var d_normal = ['M0', '1'];
//
// for (var i=1; i<=steps; i++) {
//   d_normal.push(step_size*(-0.5 + i), 1, step_size*i, 1);
//   d_animated.push(step_size*(-0.5 + i), height, step_size*i, 1);
// }
//
// $(document).ready(function() {
//   $('.underline--path').attr('d', d_normal.join(' '));
//
//   $('.link').hover(function() {
//     $('.underline--animation').attr({from: d_normal.join(' '), to: d_animated.join(' ')})
//   	$('.underline--animation')[0].beginElement();
//   }, function() {
//     $('.underline--animation').attr({to: d_normal.join(' '), from: d_animated.join(' ')})
//   	$('.underline--animation')[0].beginElement();
//   });
//
// });
