$(window).load(function() {


$('.block-freetile-reviews').freetile(
			{
				animate: true,
				callback: function()
        {
				
				}
			});
$('[data-toggle="tooltip"]').tooltip();
 $('.vertical-middle').hover(
 function () {
      $(this).parent().find(".content-block").css('opacity','1');
      $(this).css('opacity','1');
    },
    function () {
   
    } 
 );
 $('.fix-block-hover-gallary').hover(
 function () {
      $(this).find(".content-block").css('opacity','1');
       $(this).find(".vertical-middle").css('opacity','1');
    },
    function () {
     $(this).find(".content-block").css('opacity','0');
     $(this).find(".vertical-middle").css('opacity','0');
    } 
 );
$('.nameHeading').click(function(){

   rel = $(this).attr('rel');
   $('.nameHeading').css('color','#000');
   if(rel == 'all'){
    $('.block-list-gallary').css('display','inline-block');
     $(this).css('color','#72B023');
   }else {
    $('.block-list-gallary').css('display','none');
    $('.' + rel).css('display','inline-block');
    $(this).css('color','#72B023');
   }
   
  });


 $('.question').click(function() { 
      var attr=$(this).attr("rel");
      $(this).parent().addClass('active-answer-bg');
      if( $("." + attr).hasClass('active-answer') ){   
          $("." + attr).removeClass('active-answer'); 
          $(".active-answer-bg ." + attr).slideUp(500,function(){}); 
          $(this).parent().removeClass('active-answer-bg');
      }else{
          $("." + attr).addClass('active-answer');
          $(this).parent().addClass('active-answer-bg');
          $("." + attr).slideDown(500,function(){});
      }
      
      

  });  
$('.answer-bg').click(function() { 
  $(this).slideUp(500,function(){}); 
  $(this).parent().removeClass('active-answer-bg');
  $(this).removeClass('active-answer'); 
});    
$(window).scroll(function () {
            var top = $(document).scrollTop();
           
            if (top > 50) {$('.mainmenu-fix').css('transform','translateY(0)');} 
            else {$('.mainmenu-fix').css('transform',' translateY(-85px)'); }
            
            
            /* if (top > 50) {$('.mainmenu-fix').css('opacity','1');} 
            else {$('.mainmenu-fix').css('opacity','0'); }
             ----------------------------
                mobile scroll
            ------------------------------  */
            if (top > 150) {$('.mobile-menu-servise').addClass('mainmenu-fix-mobile');} 
            else {$('.mobile-menu-servise').removeClass('mainmenu-fix-mobile'); } 
            
    });
    
    $('form.ajax_callback').submit( function(){
        var form = $(this);
        var callback_id = $(this).attr('rel');
        $(this).find('input[type=submit]').attr('disabled','disabled');
        yaCounter46481418.reachGoal('mycallback');
        $.ajax( {
            type: "POST",
            url: form.attr( 'action' ),
            data: form.serialize(),
            success: function( response ) {
                if(response == 1) form.hide('slow', function() { 
                    var need_phone = $(this).find('input[name=f_phone]').val();
                    $(this).parent().find('.callback_number').html( need_phone );
                    $('#'+callback_id).show(); 
                } ) 
            }
        } );
        setTimeout(function(){ 
          $('form.ajax_callback').find('input[type=submit]').removeAttr('disabled'); 
        }, 3000);
        return false;
    } );    
    
});
(function ($) {
 "use strict";
 /*----------------------------
    jQuery couner
------------------------------  */
  $('.counter-block').counterUp({
            delay: 10,
            time: 1000
        });
        
   $('#file_logo').styler({
      fileBrowse: 'Обзор',
      filePlaceholder:'Выбрать логотип...',
    
    });    
    $('#more_files').styler({
      fileBrowse: 'Обзор',
      filePlaceholder:'Дополнительные файлы...',
    
    }); 
   $('a[href^="#"]').click(function(){
      var target = $(this).attr('href').split('#');
      var new_target = "a[name="+target[1]+"]";
      $('html, body').animate({scrollTop: $(new_target).offset().top}, 1000);
      return false; 
   });   
/*----------------------------
    jQuery MeanMenu
------------------------------ */
	
	
/*----------------------------
    wow js active
------------------------------ */
    new WOW().init();
 
/*----------------------------
    Product Carousel active
------------------------------ */  
    
   

 
/*--------------------------
    ScrollUp
---------------------------- */	 
	$.scrollUp({
        scrollText: '<img src="/new/img/up.png" alt="Up">',
        scrollSpeed: 600,
        animation: 'fade'
    });		
    
   $(".text-promokod").hover(
    function () {
      $(".text-promokod .description-promokod").fadeIn("fast");
    },
    function () {
      $(".text-promokod .description-promokod").fadeOut("fast");
    } 
  );
/*--------------------------
    Sticky Js 
---------------------------- 
    $(".sticker").sticky({topSpacing:0});	 */



	$('.meanmenu-reveal-servise').on('click', function() {    
         $('.meanmenu-reveal-servise').hide();
         $('.meancloseservise').fadeIn().addClass('meancloseserviseAnimate');
		 $('nav#menu-servise ul').slideDown();
         //$('.mainmenu-fix-mobile').css('height','100%');
         //if($('.mainmenu-fix-mobile').hasClass('mainmenu-fix-mobile')){$('body').css('overflow','hidden');}
	});

    $('.slideDown-text').on('click', function() {		  
      $('.meanmenu-reveal-servise').hide(); 
      $('.slideDown-text').attr('rel','ds');
      $('.meancloseservise').fadeIn().addClass('meancloseserviseAnimate');
	  $('nav#menu-servise ul').slideDown();
      // $('.mainmenu-fix-mobile').css('height','100%');
      //if($('.mainmenu-fix-mobile').hasClass('mainmenu-fix-mobile')){$('body').css('overflow','hidden');}
	});
    $('.meancloseservise').on('click', function() {     
      $('.meanmenu-reveal-servise').show();
      $('.meancloseservise').hide().removeClass('meancloseserviseAnimate');
	  $('nav#menu-servise ul').slideUp();
      //$('.mainmenu-fix-mobile').css('height','auto');
      //if($('.mainmenu-fix-mobile').hasClass('mainmenu-fix-mobile')){$('body').css('overflow','inherit');}
	});
    
    $('input.want_similar').change( function(){
        var project_id   = $(this).val();
        var project_name = $('#project_name_'+project_id).html();
        
        console.log($(this).is(':checked'));
        
        if( $(this).is(':checked') ){
            $.get('/index/ajax.html',{'template' : 999, 'action' : 'add_similar', 'project_id' : project_id}, function(data){
            });
            $('#want_similar_projects').append('<span class="want_similar_wrap" rel="'+project_id+'">'+project_name+' <span class="want_similar_close">&nbsp;</span></span>');
            $('.footer-block-list-portfolio').show();
            $('.want_similar_close').click( function(){
                var project_id = $(this).parent().attr('rel');
                
                $('#want_similar_projects span[rel='+project_id+']').empty().remove();
                $('.want_similar[value="'+project_id+'"]').attr('checked',false);

                if( $('#want_similar_projects span').length == 0 ){ 
                    $('.footer-block-list-portfolio').hide();
                }
                $.get('/index/ajax.html',{'template' : 999, 'action' : 'delete_similar', 'project_id' : project_id}, function(data){
                });
            } );
        }else{
            $('#want_similar_projects span[rel='+project_id+']').empty().remove();
            if( $('#want_similar_projects span').length == 0 ) $('.footer-block-list-portfolio').hide();
            $.get('/index/ajax.html',{'template' : 999, 'action' : 'delete_similar', 'project_id' : project_id}, function(data){
            });
        }
    } );
    $('a.want_similar_link').click( function(){
        var project_id = $(this).attr('rel');

        if( $('input.want_similar[rel='+project_id+']').is(':checked') ){
            $('input.want_similar[rel='+project_id+']').prop('checked', false);
            $('.checked-icon').removeClass('active');
        }else{
            $('input.want_similar[rel='+project_id+']').prop('checked', true);
            $('.checked-icon').addClass('active');
        }
        $('input.want_similar[rel='+project_id+']').trigger('change');
        return false;
    } );
    $('.want_similar_close').click( function(){
        var project_id = $(this).parent().attr('rel');
               
        $('#want_similar_projects span[rel='+project_id+']').empty().remove();
        $('.want_similar[value="'+project_id+'"]').attr('checked',false);

        if( $('#want_similar_projects span').length == 0 ){ 
            $('.footer-block-list-portfolio').hide();
        }
        $.get('/index/ajax.html',{'template' : 999, 'action' : 'delete_similar', 'project_id' : project_id}, function(data){  
        });
    } );  
      
    $('.close-block-similar').click( function(){
        $('.checked-icon').removeClass('active');
        $('input.want_similar').prop('checked', false);
        $('.footer-block-list-portfolio').hide();
        $.get('/index/ajax.html',{'template' : 999, 'action' : 'delete_similar_all'}, function(data){
        });
    });
    
    $(document).scroll(function() {
      var h   = $(this).scrollTop();
      var img = parseInt($('.full-img-page').outerHeight());

      //console.log(h > 408+img-700);
      if (h > 408+img-700) {      
        $('.prevLinkNew').hide();
        $('.nextLinkNew').hide();
      } else {
        $('.prevLinkNew').show();
        $('.nextLinkNew').show();
      }
    });    
    
    $('#my_sum').change( function(){
        var totalSum = parseFloat($(this).val())*1019;
        totalSum     = (totalSum/1000).toFixed(2);
        $('#totalSum').html(totalSum);
        $('#yk_sum').val(totalSum);
    } ); 
    
    //$('#payment_form').submit( function(){
       //var my_sum         = $('#my_sum').val();
       //var customerNumber = $('input[name=customerNumber]').val();
       //$('input[name=customerNumber]').val(customerNumber + ' ('+my_sum+')');       
    //} );
    
  $('input[name=sendme]').change( function(){
    if( $(this).prop('checked') ){
        $('#brif_email_field').removeClass('hidden');
    }else{
        $('#brif_email_field').addClass('hidden');
    }
  } );    
  
  $('#brifForm').submit( function(){
      $(this).find('input[type=submit]').attr('disabled','disabled');
  } );

  var reviewsElement  = $('.over-block-reviews');
  var window2          = $(window);
  var reviewsTop      = reviewsElement.position().top;
  var reviewsHeight   = reviewsElement.height();
  var reviewScrolled  = false;
  window2.scroll(function() {
      var screenWidth     = window2.width()
      var screenHeight    = window2.height();
      if ( screenWidth < 991 && window2.scrollTop() >= (reviewsTop - 140)  && reviewScrolled == false) {
          $('.over-block-reviews .owl-next').trigger('click');
          reviewScrolled = true;
      }
  });
    
jQuery('.close_fix_graf').click( function(){
      jQuery('.fix_footer_graf').empty().remove();
      console.log(1230);
      jQuery.get('/',{'action' : 'close_modal'});
  } );
    
})(jQuery);
 