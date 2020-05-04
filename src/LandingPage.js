import React from "react";
import Auth from "./Auth";

export const LandingPage = props => {
  return (
    <div>
      <h1>Landing Page</h1>
      <button
        onClick={() => {
          //handling callback
          //reference path
          Auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LandingPage;
