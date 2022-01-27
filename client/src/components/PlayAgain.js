import ReplayIcon from '@mui/icons-material/Replay';

function PlayAgain( { handleReplay, gameWon } ){
    return (
        <button aria-label='play again' id='alert_2' onClick={handleReplay}>
          {gameWon? "Congrats!" : "Sorry!"}
          <br/>
          Play again?
          {/* <ReplayIcon /> */}
        </button>
    )
};

export default PlayAgain;