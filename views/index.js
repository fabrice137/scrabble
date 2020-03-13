const textOne = document.getElementById('text-one');
const longText = document.getElementById('long-text');
const form = document.getElementById('only-form');
const result = document.getElementById('for-result');


form.addEventListener('submit', e => {
    e.preventDefault();
    let text = textOne.value;
    if(!text){
        text = longText.value;
        longText.value = '';
    }
    else {
        text = 'Sample_Text';
        textOne.value = '';
    }
    copy3times(text);
    console.log(text);

});

function copy3times(anyText) {
    const msgElement = document.createElement('div');
    msgElement.innerText = times3(anyText);
    result.append(msgElement);
}

function times3(text){
    let verynew = '';
    for(let i=0 ; i<3 ; i++) verynew += text + ' ';
    return verynew;
}
