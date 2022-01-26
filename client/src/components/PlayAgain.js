import ReplayIcon from '@mui/icons-material/Replay';

function PlayAgain( { handleReplay } ){
    return (
        <button aria-label='play again' id='play' onClick={handleReplay}>
            <ReplayIcon />
        </button>
    )
};

export default PlayAgain;