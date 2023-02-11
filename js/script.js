function scrollHandler(){
  
  if($(window).scrollTop()>=$('.navbar').height()) $('.to-top-btn').fadeIn(1000);
  else $('.to-top-btn').fadeOut(1000);
  
  let windowBottom = $(window).scrollTop() + $(window).height();
  $('.playlist').each(function(){
    if($(this).outerHeight()/2 + $(this).position().top <= windowBottom) $(this).animate({'opacity':'1'}, 1500);
  })
  
}

$(window).on('scroll', scrollHandler);
$('.to-top-btn').on('click', function(){
 
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

scrollHandler();
