import React from "react";
import Auth from "./Auth";
import { withRouter } from "react-router-dom";

export const AppLayout = props => {
  return (
    <div>
      <h1>App Layout</h1>
      <button
        onClick={() => {
          Auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};
