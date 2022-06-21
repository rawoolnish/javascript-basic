function ageInDays() {
    var BirthYear = prompt('which year were you born?.....Dear Friend')
    var ageInDays = (2022 - BirthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' Days years old.')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset() {
    document.getElementById('ageInDays').remove();
}


//Cat generator

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    alt = "cat img" >
        div.appendChild(image);
}