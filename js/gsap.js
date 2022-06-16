gsap.registerPlugin(ScrollTrigger);

gsap.to('#mundo', {
    duration: 10,
    rotate: 360,
    scrollTrigger: '#mundo',
    delay: .3,
    ease: 'bounce'
})

gsap.to('.hosting', {
    duration: 2,
    delay: .3,
    x: 0,
    scrollTrigger: '.hosting',
    ease: "none"
})


// ACÁ LE DECIMOS QUE CUANDO EL hosting ESTÉ VISIBLE, AHÍ SE ANIMA EL p_hosting
gsap.to('.p_hosting', {
    duration: 1,
    delay: 2.5,
    opacity: 1,
    scrollTrigger: '.hosting'
})


// Whats App Jump
gsap.from('#whatsapp', {
    // duration: 2.5,
    scale: .1,
    ease: "back.inOut(4)",
    y: 80
});

gsap.to('#whatsapp', {
    duration: 2.5,
    scale: 1,
    ease: "back.inOut(4)",
    y: 0
});
