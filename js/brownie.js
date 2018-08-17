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
		.fromTo(".slide.ten", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo(".slide.eleven", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo(".slide.twelve", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo(".slide.thirteen", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo(".slide.fourteen", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo(".slide.fifteen", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo(".slide.sixteen", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo(".slide.seventeen", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo(".slide.eighteen", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo(".slide.nineteen", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
		.fromTo(".slide.twenty", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo(".slide.twenty-one", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo(".slide.twenty-two", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
		
	new ScrollMagic.Scene({
		triggerElement: "#main",
		triggerHook: "onLeave",
		duration: "500%"
	})
		.setPin("#main")
		.setTween(wipeAnimation)
		.addTo(controller);
});