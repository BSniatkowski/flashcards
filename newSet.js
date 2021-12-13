var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const setNameInput = document.querySelector('#setName');
const setTagsInput = document.querySelector('#tags');
const setDescriptionInput = document.querySelector('#description');

const createSetButton = document.querySelector('#createSet');

function editModeChanger() {
    if(setNameInput.value != '') {
        document.querySelector('.set-info').remove();

        let setInfo = {
            name: setNameInput.value,
            tags: setTagsInput.value,
            description: setDescriptionInput.value,
            createDate: date
        }

        createStaticSetInfo(setInfo);
        createNewFlashCard();
    } else {
        alert('Name field cannot be empty!')
    }
}

function createStaticSetInfo(data) {
    let staticInfo = document.createElement('div');
    staticInfo.classList.add('staticInfo');

    let name = document.createElement('h2');
    name.innerText = data.name;

    let tags = document.createElement('p');

    if(data.tags == undefined) {
        tags.innerText = 'none';
    } else {
        tags.innerText = data.tags;
    }

    let description = document.createElement('p');
    
    if(data.description == undefined) {
        description.innerText = 'none';
    } else {
        description.innerText = data.description;
    }

    staticInfo.appendChild(name);
    staticInfo.appendChild(tags);
    staticInfo.appendChild(description);

    document.body.appendChild(staticInfo);
}

function createNewFlashCard() {

    let flashcard = document.createElement('form');

    flashcard.classList.add('newFlashcard');

    let name = document.createElement('input');

    name.setAttribute('id', 'flashcardName');

    let definition = document.createElement('input');

    definition.setAttribute('id', 'flashcardDefinition');

    let add = document.createElement('button');

    add.setAttribute('id', 'addFlashcard');
    add.setAttribute('type', 'submit');
    add.innerText = 'Add New FlashCard'

    add.addEventListener('click', (e) => {
        e.preventDefault();
        if(document.querySelector('#flashcardName') != undefined && document.querySelector('#flashcardDefinition') != undefined) {
            createStaticFlashcard();
            document.querySelector('.newFlashcard').remove()
            createNewFlashCard();
        }
    })

    flashcard.appendChild(name);
    flashcard.appendChild(definition);
    flashcard.appendChild(add);

    document.body.appendChild(flashcard);
}

createSetButton.addEventListener('click', function(e) {
    e.preventDefault();
    editModeChanger();
})