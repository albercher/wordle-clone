
function AboutButton({ handleShowAbout, showAbout }) {
  return (
    <button id="about-button" onClick={handleShowAbout}>
      {!showAbout ? "About this project" : "Return to game"}
    </button>
  );
}

export default AboutButton;
