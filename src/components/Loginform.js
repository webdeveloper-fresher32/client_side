import React from "react";
import { TextField, Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Feedbackform from "./Feedbackform";

export default function Loginform() {
  const { isAuthenticated,loginWithRedirect } = useAuth0();
  
  
  return (
    <div className="outer-container">
        {isAuthenticated?<Feedbackform/>:(
      <form action="">
        <h1>LOGIN FORM</h1>
        <TextField
          id="standard-basic"
          label="Enter username..."
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Enter password..."
          variant="standard"
          type="passwprd"
        />
        <Button
          variant="outlined"
          className="login-button"
          onClick={() => loginWithRedirect()}
        >
          Login
        </Button>

      </form>
        )}
    </div>
  );
}
