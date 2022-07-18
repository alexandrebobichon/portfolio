class carrouselClass {

    constructor(modal) {
        this.content = {};
        this.modal = modal;
        this.sections = [];
    }

    // Animation card
    anime36card = () => {
        this.modal.getAnimations().map((animation) => {
            animation.finished.then(() => {
                this.modal.className = "modalDisplay";
            }).catch((err) => {
                return err;
            });
        });
    }

    // Get all section
    allSection = () => {
        for (const child of this.modal.childNodes) {
            if (child.innerHTML !== undefined && child.tagName !== 'I') {
                this.sections.push(child);
            }
        }
        return this.sections;
    };

    // Change the carrousel display
    carrouselChange = (type, icone) => {

        for (const key in this.content) {
            if (Object.hasOwnProperty.call(this.content, key)) {
                const tabData = this.content[key];
                const maxVal = tabData.length;

                if (key === type) {

                    for (const section of this.sections) {

                        // take the good section
                        if (section.id === type) {

                            // reset the section card
                            section.innerHTML = '';
                            let index = parseInt(section.getAttribute('index-car'));

                            const indexToUse = () => {
                                if (icone === '+') {
                                    index < maxVal - 1 ? index++ : index = 0;
                                } else {
                                    index > 0 ? index-- : index = maxVal - 1;
                                }
                                return index;
                            }

                            // Set index
                            indexToUse();

                            // Set the display
                            let valUse = tabData[index];
                            section.setAttribute('index-car', index);
                            SetInCard(valUse, section);
                        }
                    }
                }

            }
        }
    }

    // Set the carrousel functionning
    setCarrouselInCard = () => {

        // set content
        for (const section of this.sections) {
            let dataCarrousel = section.getAttribute('data-car');
            this.content[section.id] = [...JSON.parse(dataCarrousel)];
        }

        // set animation card carrousel and the data change
        rigthArrow.addEventListener('click', () => {
            const type = this.modal.getAttribute('type');

            this.modal.className = 'modalDisplay cardTurnRigth';

            // Set the carrousel changement
            this.carrouselChange(type, '+');
            this.anime36card();
        });

        leftArrow.addEventListener('click', () => {
            const type = this.modal.getAttribute('type');

            this.modal.className = "modalDisplay cardTurnLeft";

            // Set the carrousel changement
            this.carrouselChange(type, '-');
            this.anime36card();
        });
    }
};