gsap.registerPlugin(ScrollTrigger);

gsap.from('.dish-card',{
    y: 200,
    opacity:0,
    ease: "power4.out",
    duration: 5,
    stagger: .15,
    scrollTrigger: {
        trigger: 'dish-card',
        markers: false,
    }
});

gsap.from('.image-anim', {
    xPercent: -100,
    opacity: 0,
    duration: 5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".image-anim",
        markers: false,
    }
});

gsap.from('.text-leftanim1', {
    xPercent: 100,
    opacity: 0,
    duration: 5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".image-anim",
        markers: false,
    } 
});

gsap.from('.text-rightanim2', {
    xPercent: -100,
    opacity: 0,
    duration: 5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".container-2",
        markers: false,
    } 
});
gsap.from('.text-leftanim3', {
    xPercent: 100,
    opacity: 0,
    duration: 5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".image-anim3",
        markers: false,
    } 
});

gsap.from('.image-anim2', {
    xPercent: 100,
    opacity: 0,
    duration: 5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".image-anim2",
        markers: false,
    }
});

gsap.from('.image-anim3', {
    xPercent: -100,
    opacity: 0,
    duration: 5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".image-anim3",
        markers: false,
    }
});