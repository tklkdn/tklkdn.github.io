$(document).ready(function(){
	var controller = new ScrollMagic.Controller();
	
	var wipeAnimation = new TimelineMax()
		.fromTo(".slide.two", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo(".slide.three", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo(".slide.four", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo(".slide.five", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo(".slide.six", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo(".slide.seven", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo(".slide.eight", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo(".slide.nine", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
		
	new ScrollMagic.Scene({
		triggerElement: "#main",
		triggerHook: "onLeave",
		duration: "300%"
	})
		.setPin("#main")
		.setTween(wipeAnimation)
		.addTo(controller);
});