function HowToPlay({ handleShowHowTo }) {
  return (
    <div class="overlay" id="how-to-play">
      <div id="header-cont">
        <h2 id="header">How to play</h2>
        <div id="close" onClick={handleShowHowTo}>
          X
        </div>
      </div>
      <section id="instructions">
        <p>
          Guess the <strong>WORDLE</strong> in 6 tries.
        </p>
        <p>
          Each guess must be a valid 5 letter word. Hit the enter button to
          submit.
        </p>
        <p>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
      </section>
    </div>
  );
}

export default HowToPlay;
