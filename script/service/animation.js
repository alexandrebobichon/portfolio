// Create the animation background
function animationGradient() {

    const head = document.getElementsByTagName("head")[0];

    //Set the style balise
    const style = document.createElement('style');
    style.type = 'text/css';

    //Set the animation
    const keyFrames = (animation) => { return `@-webkit-keyframes borderAround {  ${animation} }` };
    const backgroundSetup = (color1, color2, pourcentage1, pourcentage2) => {
        return `
            background: linear-gradient(90deg, ${color1} ${pourcentage1}% , ${color2} ${pourcentage2}% );
            background: -webkit-linear-gradient(90deg, ${color1} ${pourcentage1}% , ${color2} ${pourcentage2}% );
            background:-moz-linear-gradient(90deg, ${color1} ${pourcentage1}% , ${color2} ${pourcentage2}% );
            background:-o-linear-gradient(90deg, ${color1} ${pourcentage1}% , ${color2} ${pourcentage2}% );
            background:   linear-gradient(90deg, ${color1} ${pourcentage1}% , ${color2} ${pourcentage2}% );
        `
    };

    let animation = '';
    let keyframe = '';


    // Set the animation
    for (let i = 0; i <= 100; i += 0.25) {
        if (i < 25) {
            let bacroungSettings = backgroundSetup('rgba(96, 226, 109, 1)', 'rgba(0, 212, 255, 1)', i, i + i);
            animation += `${i/2}%{ ${bacroungSettings} }`;
        } else {
            let bacroungSettings = backgroundSetup('rgba(96, 226, 109, 1)', 'rgba(0, 212, 255, 1)', i, i + 25);
            animation += `${i/2}%{ ${bacroungSettings} }`;
        }
    }

    for (let i = 0; i <= 100; i += 0.25) {
        if (i < 25) {
            let bacroungSettings = backgroundSetup('rgba(96, 226, 109, 1)', 'rgba(0, 212, 255, 1)', 100 - (i + i), 100 - i);
            animation += `${i/2+50}%{ ${bacroungSettings} }`;
        } else {
            let bacroungSettings = backgroundSetup('rgba(96, 226, 109, 1)', 'rgba(0, 212, 255, 1)', 75 - i, 100 - i);
            animation += `${i/2+50}%{ ${bacroungSettings} }`;
        }
    }

    keyframe = keyFrames(animation);
    style.innerText = keyframe;

    head.appendChild(style);

}