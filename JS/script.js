$(function(){
	$(".changecolor").click(function(e){
		e.preventDefault();
		$("body").toggleClass("open");
		$(".a").toggleClass("open");
		$(".contact").toggleClass("open");
		$(".changecolor").toggleClass("open");
		$(".burger").toggleClass("open");
		$(".top-nav").toggleClass("open");
		$("section").toggleClass("open");
		$("article").toggleClass("open");
		$("footer").toggleClass("open");
		$(".opinion").toggleClass("open");
		$(".after-opinion-line").toggleClass("open");
		$(".social-media").toggleClass("open");
		$(".main-right").toggleClass("open");
		$(".main-left").toggleClass("open");
		$(".project-representative").toggleClass("open");
	});
});

$(function(){
	$(".burger").hover(function(e){
		e.preventDefault();
		$(".burger").toggleClass("nn");
		$(".upline").toggleClass("nn");
		$(".downline").toggleClass("nn");
	});
});

$(function(){
	$(".burger").click(function(e){
		e.preventDefault();
		$(".burger").toggleClass("op");
		$(".overlay").toggleClass("op");
		$(".upline").toggleClass("op");
		$(".downline").toggleClass("op");
		$("body").toggleClass("op");
		$("header").toggleClass("op");
		$("nav").toggleClass("op");
		$("section").toggleClass("op");
		$("article").toggleClass("op");
		$("main").toggleClass("op");
		$("footer").toggleClass("op");
	});
});

$(function(){
	$(".changeimg").click(function(e){
		e.preventDefault();
		$(".mySlides").toggleClass("imgChange");
	});
});
