// import "../gamecontainer.css";

import User from "./User";
import LoginBtn from "./LoginBtn";

function Header() {


  return (
    <header>
      {/* <div></div> */}
      <div id="title">wordle</div>
      {/* if user logged in, show user, else show login button */}
      {/* <User /> */}
      <LoginBtn />
    </header>
  );
}

export default Header;
