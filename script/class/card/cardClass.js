class cardClass {

    constructor(

    ) {
        this.closeBtn = document.getElementById('close');
        this.rigthArrow = document.getElementsByClassName('rigth')[0];
        this.leftArrow = document.getElementsByClassName('left')[0];
        this.modal = document.getElementById('modal');
    }

    // action: modal display none and go to the top
    up = (anime = null, type) => {

        this.modal.className = 'modalDisplay modalUp';

        this.modal.getAnimations().map((animation) => {
            animation.finished.then(() => {
                modal.style.display = 'none';
                for (const section of modal.childNodes) {
                    if (section.innerHTML !== undefined && section.tagName !== 'I') {
                        section.style.display = 'none';
                    }
                }
                if (anime !== null) anime(type, false);
            }).catch((err) => {
                return err;
            });
        });
    };

    // action: modal display flex and appear
    down = (type, wait = false) => {

        this.modal.style.display = 'block';
        this.modal.className = 'modalDisplay modalDown';

        if (!wait) {
            for (const section of modal.childNodes) {
                if (section.innerHTML !== undefined && section.tagName !== 'I') {
                    section.style.display = 'none';
                    if (type === section.id) section.style.display = 'flex';
                }
            }
        } else {
            modal.getAnimations().map((animation) => {
                animation.finished.then(() => {
                    for (const section of modal.childNodes) {

                        if (section.innerHTML !== undefined && section.tagName !== 'I') {
                            if (type === section.id) section.style.display = 'flex';
                        }
                    }
                })
            })
        }
    };

    // init close action
    close = () => {
        this.closeBtn.addEventListener('click', () => {
            this.up();
        });
    }

    // init action display on click
    CardDisplayOnClick(type, that) {

        const modal = this.modal;
        const modalType = modal.getAttribute('type');

        // animation
        that.animate([
            // étapes/keyframes
            { transform: 'scale(1)' },
            { transform: 'scale(0.9)' },
            { transform: 'scale(1)' }
        ], {
            // temporisation
            duration: 500,
            iterations: 1
        });

        this.modal.setAttribute("type", type);

        // Change cat animation
        if (modal.style.display === 'block' && modalType !== type) {
            this.up(this.down, type);
        }

        // display the modal
        if (modal.style.display !== 'block') {
            this.down(type);
        }

        // Show the annimation up whit async
        else if (modalType === type) {
            this.up();
        };

        // Show DATA in modal
        for (let child of modal.childNodes) {
            const div = child.childNodes[1];

            if (child.id === modal.getAttribute('type')) {
                div.style.display = 'flex';
            } else if (div !== undefined) {
                div.style.display = 'none';
            }
        }
    }
};