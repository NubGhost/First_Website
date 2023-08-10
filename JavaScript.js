function updateScore() {

    document.querySelector('h2').innerHTML = `Wins ${score.wins} Losses ${score.losses}  Ties ${score.ties}`;

  }
  function changeImage(computerMove) {
      var img = document.getElementById('image');
    if (computerMove === 'rock')
      img.src = "images/rock-emoji.png";
    else if (computerMove === 'scissors')
      img.src = "images/scissors-emoji.png";
    else if (computerMove === 'paper')
      img.src = "images/paper-emoji.png";


  }

  function resetScoreMassage() {
    document.querySelector('h3').innerHTML = `Score Has Been Rest`;
  }
  
  function playGame(playerMove) {
    const computerMove = pickComputerMove();

   

    let result = '';
    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You Lose';
      } else if (computerMove === 'paper') {
        result = 'You Win';
      } else if (computerMove === 'scissors') {
        result = 'tie';
      }
    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You Win';
      } else if (computerMove === 'paper') {
        result = 'tie';
      } else if (computerMove === 'scissors') {
        result = 'You Lose';
      }
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'tie';
      } else if (computerMove === 'paper') {
        result = 'You Lose';
      } else if (computerMove === 'scissors') {
        result = 'You Win';
      }
    }

    if (result === 'You Win') {
      score.wins += 1;
    } else if (result === 'You Lose') {
      score.losses += 1;
    } else if (result === 'tie') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScore();
    document.querySelector('h3').innerHTML = `You picked ${playerMove} . computer picked ${computerMove}. ${result}`;
    changeImage(computerMove);

  }


  function pickComputerMove() {
    let computerMove;
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      //the pc choose rock
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      //the pc choose paper
      computerMove = 'paper';
    } else {
      //the pc choose scissors
      computerMove = 'scissors';
    }
    return computerMove;
  }

  let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  
 