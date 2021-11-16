const URL='https://rickandmortyapi.com/api/character/';
const optionsCharacters=document.getElementById('characters-options');
const containerCards=document.getElementById('container-cards');
const listCharacters=[];
const getFetchApi=()=>{
    fetch(URL)
    .then(response=>response.json())
    .then(data=>addedCharacters(data))
    .catch(error=>console.log(error))
};
getFetchApi();
const addedCharacters=(data)=>{
    for(character=0;character<data.results.length;character++){
        listCharacters.push(data.results[character])
    }
    return createOption();
}
const createOption=()=>{
    for(character=0;character<listCharacters.length;character++){
        const optionCharacter=document.createElement('option');
        optionCharacter.textContent=listCharacters[character].name;
        optionCharacter.setAttribute('value',listCharacters[character].id);
        optionsCharacters.appendChild(optionCharacter);
    }
    optionsCharacters.addEventListener('change',getId);
}
const getId=()=>optionsCharacters.value==0?viewAllCharacters():viewCharacter()
const viewAllCharacters=()=>{
    for(character=0;character<listCharacters.length;character++){
        const cardCharacter=document.createElement('div');
        const characterName=document.createElement('h2');
        const characterImage=document.createElement('img');
        const characterSpecie=document.createElement('small');
        const characterStatus=document.createElement('small');
        const separationLine=document.createElement('hr');
        characterName.textContent=listCharacters[character].name;
        characterStatus.textContent=`Status: ${listCharacters[character].status}`;
        characterSpecie.textContent=`Specie: ${listCharacters[character].species}`;
        characterImage.setAttribute('src',listCharacters[character].image);
        characterImage.setAttribute('alt',listCharacters[character].name)
        cardCharacter.classList.add('card');
        characterName.classList.add('card__title');
        characterImage.classList.add('card__image');
        characterSpecie.classList.add('card__title');
        separationLine.classList.add('card-line');
        containerCards.appendChild(cardCharacter);
        cardCharacter.appendChild(characterName);
        cardCharacter.appendChild(characterImage);
        cardCharacter.appendChild(characterSpecie);
        cardCharacter.appendChild(characterStatus);
        cardCharacter.appendChild(separationLine);
        if(listCharacters[character].status=='Alive'){
            characterStatus.classList.add('card__status-alive')
        }
        else if(listCharacters[character].status=='Dead'){
            characterStatus.classList.add('card__status-dead')
        }
        else{
            characterStatus.classList.add('card__status-unknown')
        }
    }
}
const viewCharacter=()=>{
        const cardCharacter=document.createElement('div');
        const characterName=document.createElement('h2');
        const characterImage=document.createElement('img');
        const characterSpecie=document.createElement('small');
        const characterStatus=document.createElement('small');
        const separationLine=document.createElement('hr');
        characterName.textContent=listCharacters[optionsCharacters.value-1].name;
        characterStatus.textContent=`Status: ${listCharacters[optionsCharacters.value-1].status}`;
        characterSpecie.textContent=`Specie: ${listCharacters[optionsCharacters.value-1].species}`;
        characterImage.setAttribute('src',listCharacters[optionsCharacters.value-1].image);
        characterImage.setAttribute('alt',listCharacters[optionsCharacters.value-1].name)
        cardCharacter.classList.add('card');
        characterName.classList.add('card__title');
        characterImage.classList.add('card__image');
        characterSpecie.classList.add('card__title');
        separationLine.classList.add('card-line');
        containerCards.appendChild(cardCharacter);
        cardCharacter.appendChild(characterName);
        cardCharacter.appendChild(characterImage);
        cardCharacter.appendChild(characterSpecie);
        cardCharacter.appendChild(characterStatus);
        cardCharacter.appendChild(separationLine);
        if(listCharacters[optionsCharacters.value-1].status=='Alive'){
            characterStatus.classList.add('card__status-alive')
        }
        else if(listCharacters[optionsCharacters.value-1].status=='Dead'){
            characterStatus.classList.add('card__status-dead')
        }
        else{
            characterStatus.classList.add('card__status-unknown')
        }
}