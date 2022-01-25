// import "../gamecontainer.css";

import User from "./User";
import LoginBtn from "./LoginBtn";

function Header( { user, setUser } ) {

  return (
    <header>
      <div id="title">wordle</div>
      {user ? <User user={user} setUser={setUser} /> : <LoginBtn setUser={setUser} />}
      {/* <User /> */}
      {/* <LoginBtn /> */}
    </header>
  );
}

export default Header;
