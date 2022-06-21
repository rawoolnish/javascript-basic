function rpsGame(yourChoice) {
    console.log(yourChoice);
    console.log(yourChoice.src);

    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice:', botChoice)

    results = decideWinner(humanChoice, botChoice); //[0,1] human lost||bot won
    console.log(results);

    message = finalMessage(results);//{'messege:'YOu won ' ,'color':'success'}
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);

}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]

}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scissors': 0, 'rock': 1, 'paper': 0.5 },
        'scissors': { 'scissors': 0.5, 'rock': 0, 'paper': 1 }
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice]
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
};

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You lost!', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'Its tied!', 'color': 'yellow' };
    } else {
        return { 'message': 'You Won!', 'color': 'green' };
    }
};

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div')
    var botDiv = document.createElement('div')
    var messageDiv = document.createElement('div')


    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=250 style='box-shadow:0px 10px 50px rgba(37,50,233,1)'>"
    messageDiv.innerHTML ="<div><h1 style='color:" + finalMessage['color'] + "; font-size:60px;text-shadow: 2px 2px 8px #4b404596; padding:70px;'>" + finalMessage['message'] + "</h1> <button  class='btn' type='button' onclick='window.location.reload();'>Reset</button></div>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=250 style='box-shadow:0px 10px 50px rgba(243,38,24,1)'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

};