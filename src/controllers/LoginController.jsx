import React from "react";
import LoginView from "../views/LoginView";
import { schema } from "../schema";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";

const LoginController = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    validationSchema: schema,

    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });
  return <LoginView formik={formik} />;
};

export default LoginController;
