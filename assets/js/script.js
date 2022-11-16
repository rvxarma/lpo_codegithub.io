// Greensock
var tl = new TimelineMax();

/*tl.add(
	TweenMax.to('.video-container', 1, {scale: 0.5, transformOrigin: "50%, 50%", ease:Power2.easeInOut})
)*/

tl.add(
	TweenMax.to(".svg-container", 1, {scale: 10, opacity:0, transformOrigin: "50%, 50%", ease:Power2.easeInOut}),
	"-=1"
)

// ScrollMagic
var controller = new ScrollMagic.Controller();

// container pin
var startpin = new ScrollMagic.Scene({
	duration: 2000,
	offset: 800

})
	.setPin(".container-lpo")
	.addTo(controller);

// tween
var firstSection = document.querySelector("#firts-sec")
new ScrollMagic.Scene({
	duration: 2000,
	offset: firstSection.offsetHeight
})
	.setTween(tl)
	.addTo(controller);

$('video').get(0).play();

//console.log(window.innerHeight);