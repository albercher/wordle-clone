import '../gamecontainer.css'

function About() {
    return (
      <div id="about-popup">
        <p className="about-title" id="top-title">Developed by:</p>
          <div className="dev-profs-container">
            <div className="dev-prof">
              <img alt="prof-img" src="https://avatars.githubusercontent.com/u/91351665?v=4" className="dev-prof-img"/>
              <p className="dev-prof-name">
                Jan<br/>
                Grochulski
              </p>
              <div className="dev-prof-link">
                <img alt="github-icon" src="./github_icon.png" className="link-icon"/>
                <a className="link-a" href="https://github.com/jgrochulski" target="_blank" rel="noopener noreferrer">
                github
                </a>
              </div>
              <div className="dev-prof-link">
                <img alt="linkedin-icon" src="./linkedin_icon.png" className="link-icon"/>
                <a className="link-a" href="https://www.linkedin.com/in/grochulski/" target="_blank" rel="noopener noreferrer">
                linkedin
                </a>
              </div>
            </div>
            {/* split */}
            <div className="dev-prof">
              <img alt="prof-img" src="https://avatars.githubusercontent.com/u/77179350?v=4" className="dev-prof-img"/>
              <p className="dev-prof-name">
                Abbey<br/>
                Bercher
              </p>
              <div className="dev-prof-link">
                <img alt="github-icon" src="./github_icon.png" className="link-icon"/>
                <a className="link-a" href="https://github.com/albercher" target="_blank" rel="noopener noreferrer">
                github
                </a>
              </div>
              <div className="dev-prof-link">
                <img alt="linkedin-icon" src="./linkedin_icon.png" className="link-icon"/>
                <a className="link-a" href="https://www.linkedin.com/in/abbeybercher/" target="_blank" rel="noopener noreferrer">
                linkedin
                </a>
              </div>
            </div>
          </div>
        <p className="about-title">Check our our repo:</p>
          <div className="repo-container">
            <img alt="github-icon" src="./github_icon.png" className="repo-icon"/>
            <a className="repo-link" href="https://github.com/albercher/wordle-clone" target="_blank" rel="noopener noreferrer">
            wordle-clone
            </a>
          </div>
        <p className="about-title">Compare to the original:</p>
          <div className="repo-container">
            <img alt="wordle-logo" src="./wordle_logo_192x192.png" className="repo-icon"/>
            <a className="repo-link" href="https://www.powerlanguage.co.uk/wordle/" target="_blank" rel="noopener noreferrer">
            Wordle
            </a>
          </div>
      </div>
    );
};

export default About;