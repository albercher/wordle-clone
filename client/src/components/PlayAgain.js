import ReplayIcon from '@mui/icons-material/Replay';

function PlayAgain( { handleReplay, gameWon, whew } ){

  let header;

  if (gameWon) {
    if (whew) {
      header = "Whew!"
    }
    else {
      header = "Congrats!"
    }
  }
  else {
    header = "Oops!"
  }
  
    return (
        <button aria-label='play again' id='alert_2' onClick={handleReplay}>
          <div>
            <h2>
              {header}
            </h2>
            <p className="regular_case">
              {gameWon? "You solved the Wordle!" : "Better luck next time."}
            </p>
            <div>
              <ReplayIcon id={"replay"}/>
            </div>
            <p className="regular_case no_margin">
              Play again?
            </p>
          </div>
        </button>
    )
};

export default PlayAgain;