$(document).ready(function(){
	var lazyLoadInstance = new LazyLoad({
	  // Your custom settings go here
	});
	
	$(".bg-1").hide();
	$(".bg-2").hide();
	$(".bg-3").hide();
	$(".bg-4").hide();
	$(".bg-5").hide();
	$(".bg-6").hide();
	$(".bg-7").hide();
	$(".container").hide();
	
	let bgArr = [".main", ".bg-1", ".bg-2", ".bg-3", ".bg-4", ".bg-5", ".bg-6", ".bg-7"];
	
	function hideAllExcept(bg) {
		$(bg).fadeIn(500);
		Array.prototype.forEach.call(bgArr, function(i) {
			if (bg != i) {
				$(i).fadeOut(500);
			}
		})
		if (bg == ".main") {
			$("#home a").css("color", "black");
		} else {
			$("#home a").css("color", "white");
		}
	}
	
	$("#link-0").click(function() {
		hideAllExcept(".main");
	});
	
	$("#link-1").click(function() {
		hideAllExcept(".bg-1");
	});
	
	$("#link-2").click(function() {
		hideAllExcept(".bg-2");
	});
	
	$("#link-3").click(function() {
		hideAllExcept(".bg-3");
	});
	
	$("#link-4").click(function() {
		hideAllExcept(".bg-4");
	});
	
	$("#link-5").click(function() {
		hideAllExcept(".bg-5");
	});
	
	$("#link-6").click(function() {
		hideAllExcept(".bg-6");
	});
	
	$("#link-7").click(function() {
		hideAllExcept(".bg-7");
	});
	
	/*
	$(".sidenav").mouseenter(function() {
		$(".main").fadeOut(500);
		$("#home a").css("color", "white");
	});
	$(".sidenav").mouseleave(function() {
		$(".main").fadeIn(500);
		$("#home a").css("color", "black");
	});

	$("#link-1").mouseenter(function() {
		$(".bg-1").fadeIn(500);
	});
	$("#link-1").mouseleave(function() {
		$(".bg-1").fadeOut(500);
	});

	$("#link-2").mouseenter(function() {
		$(".bg-2").fadeIn(500);
	});
	$("#link-2").mouseleave(function() {
		$(".bg-2").fadeOut(500);
	});

	$("#link-3").mouseenter(function() {
		$(".bg-3").fadeIn(500);
	});
	$("#link-3").mouseleave(function() {
		$(".bg-3").fadeOut(500);
	});

	$("#link-4").mouseenter(function() {
		$(".bg-4").fadeIn(500);
	});
	$("#link-4").mouseleave(function() {
		$(".bg-4").fadeOut(500);
	});

	$("#link-5").mouseenter(function() {
		$(".bg-5").fadeIn(500);
	});
	$("#link-5").mouseleave(function() {
		$(".bg-5").fadeOut(500);
	});

	$("#link-6").mouseenter(function() {
		$(".bg-6").fadeIn(500);
	});
	$("#link-6").mouseleave(function() {
		$(".bg-6").fadeOut(500);
	});

	$("#link-7").mouseenter(function() {
		$(".bg-7").fadeIn(500);
	});
	$("#link-7").mouseleave(function() {
		$(".bg-7").fadeOut(500);
	});
	*/
	refreshData();
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function refreshData()
{
	if (!isScrolledIntoView($("#link-7"))) {
		$(".container").fadeIn(500);
	} else {
		$(".container").fadeOut(500);
	}

    setTimeout(refreshData, 100);
}
