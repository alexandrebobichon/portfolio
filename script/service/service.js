//  json refacto
function refactoService(DataNRefact) {
    const refactoData = [];
    const datas = DataNRefact.data;

    switch (DataNRefact.identifiant) {
        case 'comp':
            for (const data of datas) {
                refactoData.push(new Competence(data.logo, data.nom));
            }
            return refactoData;
        case 'contact':
            for (const data of datas) {
                refactoData.push(new Contact(data.logo, data.ifont, data.type, data.info));
            }
            return refactoData;
        case 'experience':
            for (const data of datas) {
                refactoData.push(new Experience(data.logo, data.boite, data.titre, data.date, data.task, data.techno));
            }
            return refactoData;
        case 'formation':
            for (const data of datas) {
                refactoData.push(new Formation(data.logo, data.nomForm, data.formData));
            }
            return refactoData;
        case 'passion':
            for (const data of datas) {
                refactoData.push(new Passion(data.logo, data.nom, data.info));
            }
            return refactoData;

    }
};


// Make the html construction for the card
function SetInCard(dataToShow, body) {
    let section1 = document.createElement('section');
    let section2 = document.createElement('section');

    section1.className = 'cardSec';
    section2.className = 'cardSec';

    for (const data in dataToShow) {

        let elem = dataToShow[data].elem;
        let bal = dataToShow[data].bal;

        if (dataToShow[data].bal !== '') {
            bal = document.createElement(bal);
            if (typeof elem !== 'object') {
                if (bal.tagName === 'IMG') {
                    bal.src = elem;
                    section1.appendChild(bal);
                    body.appendChild(section1);
                } else {
                    let a = document.createElement('a');
                    bal.innerText = elem;
                    if (elem.includes('https:')) {
                        a.href = elem;
                        a.target = '_blank';
                        a.appendChild(bal);
                        section2.appendChild(a);
                    } else {
                        section2.appendChild(bal);
                    }
                    body.appendChild(section2);
                }
            } else {
                if (bal.tagName === 'UL') {
                    let listeElems = elem;

                    for (const elem of listeElems) {

                        if (typeof elem !== 'object') {
                            let li = document.createElement('li');
                            li.innerText = elem;
                            bal.appendChild(li);
                        } else {
                            for (const key in elem) {
                                if (Object.hasOwnProperty.call(elem, key)) {
                                    let li = document.createElement('li');
                                    li.innerText = `${key}: ${elem[key]}`;
                                    bal.appendChild(li);
                                }
                            }
                        }
                    }
                    section2.appendChild(bal);
                    body.appendChild(section2);
                }
            }
        }
    }
}

function ShowData(body, data, identifiant) {

    // Set the data for the carrousel
    if (body.id === identifiant) body.setAttribute('data-car', JSON.stringify(data));
    body.setAttribute('index-car', 0);

    // Set display first data
    let dataToShow = data[0];

    SetInCard(dataToShow, body);
}

// Setup for get the JSON and use is data
function SetIndexBody(json, id) {
    const getData = JSON.parse(json);
    const readyData = refactoService(getData);
    const bodyIn = document.getElementById(id);

    ShowData(bodyIn, readyData, getData.identifiant);
}