class Experience {
    constructor(logo, boite, titre, date, task, techno) {
        this.logo = { bal: 'img', elem: logo };
        this.boite = { bal: 'p', elem: boite };
        this.titre = { bal: 'p', elem: titre };
        this.date = { bal: 'p', elem: date };
        this.task = { bal: 'ul', elem: task };
        this.techno = { bal: 'ul', elem: techno };
    }
}