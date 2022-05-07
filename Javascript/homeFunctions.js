

 //Window Loaded Handler
 $(window).on('load',function() {'use strict';
 $(".loader").fadeOut("slow");
});

jQuery(function($) {'use strict';
 
   
   
   
// Back to Top
if ($('#back-top').length) {
	 var scrollTrigger = 100, // px
	 backToTop = function () {
		  var scrollTop = $(window).scrollTop();
		  if (scrollTop > scrollTrigger) {
			   $('#back-top').addClass('show');
		  } else {
			   $('#back-top').removeClass('show');
		  }
	 };
	 backToTop();
	 $(window).on('scroll', function () {
		  backToTop();
	 });
	 $('#back-top').on('click', function (e) {
		  e.preventDefault();
		  $('html,body').animate({
			   scrollTop: 0
		  }, 700);
	 });
}


// Scroll to  section
$('a.page-scroll').on('click', function(event){		
	 var $anchor = $(this);
	 $('html, body').stop().animate({
		 scrollTop: $($anchor.attr('href')).offset().top-70
	 }, 1200);
	event.preventDefault();;
});

  
// ================= Sliders ================
  // cheffs
  $("#cheffs-slider, #service-slider").owlCarousel({
   autoPlay: false,
   items : 2,
	 pagination : false,
	 navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	 navigation : true,
	 itemsDesktop : [1199,2],
   itemsDesktopSmall : [979,2],
   itemsTablet : [768,2],

});

 
 //Our cheffs On About
 $("#our-cheffs , #news-slider").owlCarousel({
   autoPlay:4000,
   items :3,
	 pagination : false,
	 navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	 navigation : true,
   itemsDesktop : [1199,2],
   itemsDesktopSmall : [979,2],
	 itemsMobile : [480,1],

});
 

	 
// ================== tabbed content On Sidebar =====================
 $(".tab_content").hide();
 $(".tab_content:first").show();

/* if in tab mode */
 $("ul.tabs li").on('click', function() {
	   $(".tab_content").hide();
	   var activeTab = $(this).attr("rel"); 
	   $("#"+activeTab).fadeIn();		
	   
	   $("ul.tabs li").removeClass("active");
	   $(this).addClass("active");

	   $(".tab_drawer_heading").removeClass("d_active");
	   $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
 });
  
 /* if in drawer mode on Mobile Version*/
 $(".tab_drawer_heading").on('click', function() {
	$(".tab_content").hide();
	var d_activeTab = $(this).attr("rel"); 
	$("#"+d_activeTab).fadeIn(1200);
   
	 $(".tab_drawer_heading").removeClass("d_active");
	$(this).addClass("d_active");
   
	 $("ul.tabs li").removeClass("active");
	 $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
 });
  
  
  
//  Filter  gallery 
  $(".zerogrid").mixItUp();
});

