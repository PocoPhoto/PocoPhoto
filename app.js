const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const header = document.querySelector('.nav');
const img = document.querySelector('.blocks');


window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(header, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(img, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');

    
    

    TL.play();
})

var i = 1
function changerImage(){
    if(i == 0) {
        document.getElementById('monImage').src="ressources/Papillionvert.png";

        document.getElementById('monImage2').src="ressources/Papillionbleu.png";

        document.getElementById('monImage3').src="ressources/Papillionrouge.png";
        i = i + 1
    }
    else if(i == 1){
        document.getElementById('monImage').src="ressources/abeille1.png";

        document.getElementById('monImage2').src="ressources/abeille2.png";

        document.getElementById('monImage3').src="ressources/abeille3.png";
        i = 0
    }

}



