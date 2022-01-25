import Button from "@mui/material/Button";

function LoginBtn() {
  return (
    <Button
      variant="contained"
      disableElevation
      href="/login"
      sx={{ px: 3 }}
    >
      Login
    </Button>
  );
}

export default LoginBtn;
