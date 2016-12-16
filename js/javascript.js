$(function(){

  $("#btn0").click(function(){
      $(".navbar, .fondMauve, .btn-success, .footer, .star-light-1").animate( {backgroundColor:"rgb(64, 46, 98)", color:"white"}, 500 );
      $(".fondRose").animate( {backgroundColor:"rgb(231, 221, 251)", color:"#white"}, 500 );
      $(".footer-below").animate( {backgroundColor:"rgb(12, 1, 24)", color:"#white"}, 500 );
      $(".star-light-2").animate( {borderColor: "rgb(64, 46, 98)", backgroundColor:"rgb(231, 221, 251)", color:"rgb(64, 46, 98)"}, 500 );
      $('.form-control').focus(function(){
          $(this).css({"borderColor": "rgba(64, 46, 98,0.6)", "boxShadow":"0px 0px 8px rgba(64, 46, 98,0.6)"});
      });
      $('.form-control').blur(function(){
          $(this).css({"borderColor": "#ccc", "boxShadow":"0 0px 0px rgba(0, 0, 0, .075)"});
      });
      // $('.aboutMe').css("background-image", 'url(' + "image/imageMauve.png" + ')');
  });

  $("#btn1").click(function(){
      $(".navbar, .fondMauve, .btn-success, .footer, .star-light-1").animate( {backgroundColor:"rgb(179,0,35)", color:"white"}, 500 );
      $(".fondRose").animate( {backgroundColor:"rgb(247, 223, 223)", color:"#white"}, 500 );
      $(".footer-below").animate( {backgroundColor:"rgb(64, 0, 0)", color:"#white"}, 500 );
      $(".star-light-2").animate( {borderColor: "rgb(179,0,35)", backgroundColor:"rgb(247, 223, 223)", color:"rgb(179,0,35)"}, 500 );
      $('.form-control').focus(function(){
          $(this).css({"borderColor": "rgba(179,0,35,0.6)", "boxShadow":"0px 0px 8px rgba(179,0,35,0.6)"});
      });
      $('.form-control').blur(function(){
          $(this).css({"borderColor": "#ccc", "boxShadow":"0 0px 0px rgba(0, 0, 0, .075)"});
      });
      // $('.aboutMe').css("background-image", 'url(' + "image/imageRouge.png" + ')');
  });

  $("#btn2").click(function(){
      $(".navbar, .fondMauve, .btn-success, .footer, .star-light-1").animate( {backgroundColor:"rgb(118,162,187)", color:"white"}, 500 );
      $(".fondRose").animate( {backgroundColor:"rgb(233, 246, 254)", color:"#white"}, 500 );
      $(".footer-below").animate( {backgroundColor:"rgb(26, 40, 48)", color:"#white"}, 500 );
      $(".star-light-2").animate( {borderColor: "rgb(118,162,187)", backgroundColor:"rgb(233, 246, 254)", color:"rgb(118,162,187)"}, 500 );
      $('.form-control').focus(function(){
          $(this).css({"borderColor": "rgba(118,162,187,0.6)", "boxShadow":"0px 0px 8px rgba(118,162,187,0.6)"});
      });
      $('.form-control').blur(function(){
          $(this).css({"borderColor": "#ccc", "boxShadow":"0 0px 0px rgba(0, 0, 0, .075)"});
      });
      // $('.aboutMe').css("background-image", 'url(' + "image/imageBleu.png" + ')');
  });

  $("#btn3").click(function(){
      $(".navbar, .fondMauve, .btn-success, .footer, .star-light-1").animate( {backgroundColor:"rgb(233,137,79)", color:"white"}, 500 );
      $(".fondRose").animate( {backgroundColor:"rgb(251, 234, 203)", color:"#white"}, 500 );
      $(".footer-below").animate( {backgroundColor:"rgb(78, 30, 1)", color:"#white"}, 500 );
      $(".star-light-2").animate( {borderColor: "rgb(233,137,79)", backgroundColor:"rgb(251, 234, 203)", color:"rgb(233,137,79)"}, 500 );
      $('.form-control').focus(function(){
          $(this).css({"borderColor": "rgba(233,137,79,0.6)", "boxShadow":"0px 0px 8px rgba(233,137,79,0.6)"});
      });
      $('.form-control').blur(function(){
          $(this).css({"borderColor": "#ccc", "boxShadow":"0 0px 0px rgba(0, 0, 0, .075)"});
      });
      // $('.aboutMe').css("background-image", 'url(' + "image/imageOrange.png" + ')');
  });

  $("#btn4").click(function(){
      $(".navbar, .fondMauve, .btn-success, .footer, .star-light-1").animate( {backgroundColor:"rgb(100,161,128)", color:"white"}, 500 );
      $(".fondRose").animate( {backgroundColor:"rgb(231, 252, 241)", color:"#white"}, 500 );
      $(".footer-below").animate( {backgroundColor:"rgb(27, 45, 35)", color:"#white"}, 500 );
      $(".star-light-2").animate( {borderColor: "rgb(100,161,128)", backgroundColor:"rgb(231, 252, 241)", color:"rgb(100,161,128)"}, 500 );
      $('.form-control').focus(function(){
          $(this).css({"borderColor": "rgba(100,161,128,0.6)", "boxShadow":"0px 0px 8px rgba(100,161,128,0.6)"});
      });
      $('.form-control').blur(function(){
          $(this).css({"borderColor": "#ccc", "boxShadow":"0 0px 0px rgba(0, 0, 0, .075)"});
      });
      // $('.aboutMe').css("background-image", 'url(' + "image/imageVert.png" + ')');
  });

  $("#btn5").click(function(){
      $(".navbar, .fondMauve, .btn-success, .footer, .star-light-1").animate( {backgroundColor:"rgb(73, 73, 73)", color:"white"}, 500 );
      $(".fondRose").animate( {backgroundColor:"rgb(232, 232, 232)", color:"#white"}, 500 );
      $(".footer-below").animate( {backgroundColor:"rgb(13, 13, 13)", color:"#white"}, 500 );
      $(".star-light-2").animate( {borderColor: "rgb(73, 73, 73)", backgroundColor:"rgb(232, 232, 232)", color:"rgb(73, 73, 73)"}, 500 );
      $('.form-control').focus(function(){
          $(this).css({"borderColor": "rgba(73, 73, 73,0.6)", "boxShadow":"0px 0px 8px rgba(73, 73, 73,0.6)"});
      });
      $('.form-control').blur(function(){
          $(this).css({"borderColor": "#ccc", "boxShadow":"0 0px 0px rgba(0, 0, 0, .075)"});
      });
      // $('.aboutMe').css("background-image", 'url(' + "image/imageGris.png" + ')');
  });
});

$(document).ready(function() {
		$('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});
