var controller = new ScrollMagic.Controller();


window.onscroll = function() {scrollFunction()};

let marginTopVal = 0;
function scrollFunction() {
    let thirdSection = document.getElementById("third");
    let scrollSection = document.getElementById('scroll-section');
    let tvImage = document.getElementById("tv-component-img");
    let trigger = document.getElementById("trigger-event");
    let bounding = thirdSection.getBoundingClientRect();
    // let docHeight = window.innerHeight;

    // let triggerPosition = trigger.getBoundingClientRect().top + window.scrollY;
    if (tvImage.style.transform === "scale(0.6, 0.6)") {
    scrollSection.style.position = "relative";
    scrollSection.style.marginTop = "" + marginTopVal + 'px';
    tvImage.style.transformOrigin = "center center";
    } else if (bounding.bottom >= window.innerHeight) {
    scrollSection.style.display="flex";
    scrollSection.style.position = "sticky";
    scrollSection.style.bottom = "0";
    tvImage.style.transformOrigin = "center center";
    }  else if (tvImage.style.transform !== "matrix(0.6, 0, 0, 0.6, 0, 0)") {
    scrollSection.style.display="flex";
    scrollSection.style.position = "fixed";
    scrollSection.style.bottom = "0";
    scrollSection.style.top = "0";
    scrollSection.style.marginTop = "0";
    tvImage.style.transformOrigin = "center center";
    marginTopVal =  Math.abs(trigger.getBoundingClientRect().top);
    } 
}


// Create scenes
let target = document.getElementById("tv-component-img");
let showText = document.getElementById("show-text");


var t5 = new TimelineMax();
t5.set(showText, {opacity: 0})
.to(showText, 1, {opacity: 1})

new ScrollMagic.Scene({
triggerElement: "#trigger-event-2",
duration: "50%",
triggerHook: "onLeave"
})
.setTween(t5)
.addTo(controller);


var t6 = new TimelineMax();
t6.set(target, {scale: 1.5})
.to(target, 18, {scale: 0.75, marginTop: 300})
.to(target, 11, {scale: 0.6, marginTop: 0})


new ScrollMagic.Scene({
triggerElement: "#trigger-event",
duration: "100%",
triggerHook: "onLeave"
})
.setTween(t6)
.addTo(controller);

var t7 = new TimelineMax();
t7.set(showText, {opacity: 1})
.to(showText, 1, {opacity: 0})

new ScrollMagic.Scene({
triggerElement: "#trigger-event",
duration: "4%",
triggerHook: "onLeave"
})
.setTween(t7)
.addTo(controller);


