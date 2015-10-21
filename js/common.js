$(document).ready(function() {

	$(".portfolio_item").each(function(i){
		$(this).find("a").attr("href", '#work_' + i);
		$(this).find(".portfolio_descr").attr("id", 'work_' + i)
	})

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content, .popup-content-mobile").magnificPopup({type: "inline", midClick: true, closeOnContentClick: true, showCloseBtn:true});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOut");
	$(".animation_3").animated("fadeInRight", "fadeOut");

	$(".left .resume_item").animated("fadeInLeft", "fadeOut");
	$(".right .resume_item").animated("fadeInRight", "fadeOut");
	$(".resume_container h3,.resume_icon").animated("fadeIn", "fadeOut");


	function heightDetect() {
		$(".main_head").css("height", $((window).height))
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$("input,select,textarea").jqBootstrapValidation();
	$(".top_menu ul li a").mPageScroll2id();
	$(".arrow_bounce,.arrow_top").mPageScroll2id();

});

$(".menu").click(function() {
	$(".sandwich").toggleClass("active");
});

$(".menu").click(function() {
	if ($(".top_menu").is(":visible")) {
		$(".top_text").removeClass("h_opacify")
		$(".top_menu").fadeOut(600); 
		$(".top_menu li a").removeClass("fadeInUp animated")
	} else {
		$(".top_text").addClass("h_opacify")
		$(".top_menu").fadeIn(600);
		$(".top_menu li a").addClass("fadeInUp animated")
	};
});

$(".top_menu li a").click(function() {
	$(".top_menu").fadeOut(600); 
	$(".sandwich").toggleClass("active");
	$(".top_text").removeClass("h_opacify");
}).append("<span>");


$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});