// import "../gamecontainer.css";

import User from "./User";
import LoginBtn from "./LoginBtn";

import IconButton from "@mui/material/IconButton";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

function Header({ user, setUser, handleShowHowTo }) {
  return (
    <header>
      <HelpOutlineRoundedIcon
        id="open"
        onClick={handleShowHowTo}
        sx={{ zIndex: 1000 }}
      />
      <div id="title">wordle</div>
      {user ? (
        <User user={user} setUser={setUser} />
      ) : (
        <LoginBtn setUser={setUser} />
      )}
    </header>
  );
}

export default Header;
