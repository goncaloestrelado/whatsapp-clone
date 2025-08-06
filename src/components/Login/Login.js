import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import "./Login.css";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="Login">
      <div className="login_container">
        <img src="/images/whatsgood.png" alt="" />
        <div className="login_text">
          <h1>Sign in to WhatsGood</h1>
          <br />
          <span>
            This is a portfolio clone of WhatsApp Web <br /> made by{" "}
            <a href="https://github.com/goncaloestrelado" style={{ color: "#0a8d48" }}>
              Gonçalo Estrelado
            </a>
            <br />
            <small>Built using React, Firebase, Material-UI, and Google Authentication.</small>
          </span>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
      <span className="login_disclaimer">
        This site is a non-commercial demo project for portfolio purposes only. <br /> It uses Google Login safely and
        does not collect or store user data. <br /> This project is not affiliated with WhatsApp.
      </span>
    </div>
  );
}

export default Login;
