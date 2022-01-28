function HowToPlay({ handleShowHowTo }) {
  return (
    <div className="overlay" id="how-to-play">
      <div id="header-cont">
        <h2 id="header">How to play</h2>
        <div id="close" onClick={handleShowHowTo}>
          X
        </div>
      </div>
      <section id="instructions">
        <p className={"how_to"}>
          Guess the <strong>WORDLE</strong> in 6 tries.
        </p>
        <p className={"how_to"}>
          Each guess must be a valid 5 letter word. Hit the enter button to
          submit.
        </p>
        <p className={"how_to_margin"}>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
        <div className="grid_row">
          <div className="cell_2" id="a0">{"A"}</div>
          <div className="cell" id="a1">{"B"}</div>
          <div className="cell" id="a2">{"O"}</div>
          <div className="cell" id="a3">{"U"}</div>
          <div className="cell" id="a4">{"T"}</div>
        </div>
        <p className={"how_to_margin"}>
        The letter A is in the word and in the correct spot.
        </p>
        <div className="grid_row">
          <div className="cell" id="a0">{"A"}</div>
          <div className="cell" id="a1">{"B"}</div>
          <div className="cell_1" id="a2">{"O"}</div>
          <div className="cell" id="a3">{"U"}</div>
          <div className="cell" id="a4">{"T"}</div>
        </div>
        <p className={"how_to_margin"}>
        The letter O is in the word but in the wrong spot.
        </p>
        <div className="grid_row">
          <div className="cell" id="a0">{"A"}</div>
          <div className="cell" id="a1">{"B"}</div>
          <div className="cell" id="a2">{"O"}</div>
          <div className="cell_0" id="a3">{"U"}</div>
          <div className="cell" id="a4">{"T"}</div>
        </div>
        <p className={"how_to_margin"}>
        The letter U is not in word in any spot.
        </p>
      </section>
    </div>
  );
}

export default HowToPlay;
