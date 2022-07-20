////////////// DATA SETTINGS /////////////

/**
 * Contact
 */
SetIndexBody(contactsJSON, 'contact');

/**
 * Expérience
 */
SetIndexBody(experiencesJSON, 'experience');

/**
 * Formations
 */
SetIndexBody(formationsJSON, 'formation');

/**
 * Compétences
 */
SetIndexBody(competencesJSON, 'comp');

/**
 * Passion
 */
SetIndexBody(passionsJSON, 'passion');

//////////// ELEMENT DISPLAY /////////////

const card = new cardClass();

// Init action
card.close();

// Init elem 
const rigthArrow = card.rigthArrow;
const leftArrow = card.leftArrow;
const type = card.modalType;
const modal = card.modal;
const carrousel = new carrouselClass(modal);

carrousel.allSection();

window.addEventListener('load', function() {

    ////////// CARD CARROUSEL ////////////

    /** CARD */
    carrousel.setCarrouselInCard();

    ////////// ANIMATION ////////////

    /* gradient header */
    animationGradient();

    /* canvas header */
    if (window.innerWidth > 600) animation.animate();
});