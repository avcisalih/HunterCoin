import React from "react";
import InputFiledView from "./InputFiledView";
import { inputs } from "../constants";

const LoginView = ({ formik }) => {
  return (
    <div className="login-page">
      <div className="container my-5" style={{ maxWidth: "450px" }}>
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={75} src="/coin.png" />
          <span>HunterCoin</span>
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3 mt-5"
        >
          {inputs.map((data) => (
            <InputFiledView formik={formik} data={data} />
          ))}

          <button type="submit" className="btn btn-warning">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
