$(document).ready(function(){
	var lazyLoadInstance = new LazyLoad({
	  // Your custom settings go here
	});
	
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
	
	let bgArr = [".main", ".bg-1", ".bg-2", ".bg-3", ".bg-4", ".bg-5", ".bg-6", ".bg-7"];
	
	let links = [];
	for (i = 0; i < 8; i++) {
		links.push(`#link-${i}`);
	}
	
	for (i = 0; i < 8; i++) {
		$(`${links[i]}`).on("click", {"idx": i}, function(e) {
			hideAllExcept(bgArr[e.data.idx]);
		});
	}

	refreshData();
	
	let contents = document.getElementsByClassName("content")
	for (c of contents) {
		c.style.display = "none"
	}
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
