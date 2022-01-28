import ReplayIcon from '@mui/icons-material/Replay';

function PlayAgain( { handleReplay, gameWon } ){
    return (
        <button aria-label='play again' id='alert_2' onClick={handleReplay}>
          <div>
            <h2>
              {gameWon? "Congrats!" : "Oops!"}
            </h2>
            <p className="regular_case">
              {gameWon? "You solved the Wordle!" : "Better luck next time."}
            </p>
            <p className="regular_case">
              Play again?
            </p>
            <div>
              <ReplayIcon />
            </div>
          </div>
        </button>
    )
};

export default PlayAgain;