import React, { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useHistory } from "react-router-dom";
import * as api from "../../../Util/api";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import "./ProfileM.css";

const ProfileM = () => {
  const history = useHistory();

  const [mProfile, setMProfile] = useState({
    fullName: " ",
    phone: " ",
    email: "",
  });

  const [warning, setWarning] = useState({
    show: false,
    info: "",
  });
  const [passwordWarning, setPasswordWarning] = useState({
    show: false,
    info: "",
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);

  useEffect(() => {
    getMprofile();
  }, []);

  const getMprofile = async () => {
    const email = localStorage.getItem("email");
    try {
      const getMprofileResponse = await api.fetchManagerProfileByEmail({
        email,
      });
      if (getMprofileResponse.status === 200) {
        setMProfile({
          fullName: getMprofileResponse.data.fullName,
          phone: getMprofileResponse.data.phone,
          email: getMprofileResponse.data.email,
        });
        console.log(getMprofileResponse.data);
      }
      console.log(mProfile);
    } catch (error) {
      setWarning({
        show: true,
        info: "Get the Init Data Failed!",
      });
    }
  };

  const onclick = () => {
    setShowPasswordForm(!showPasswordForm);
  };

  const onSubmit = async ({ fullName, phone, email }) => {
    console.log(fullName, phone, email);
    const id = localStorage.getItem("id");
    try {
      const mprofileResponse = await api.changeManagerProfile({
        id,
        fullName,
        phone,
        email,
      });
      if (mprofileResponse.status === 200) {
        setMProfile({
          fullName: mprofileResponse.data.fullName,
          phoneNum: mprofileResponse.data.phoneNum,
          email: mprofileResponse.data.email,
        });
        setWarning({
          show: true,
          info: "Change Profile Successfully!",
        });
      }
    } catch (error) {
      setWarning({
        show: true,
        info: "Change Profile Failed",
      });
    }
  };

  const resetPassword = async ({ email, oldPassword, password }) => {
    try {
      const changePasswordRes = await api.ChangePassword({
        email,
        oldPassword,
        password,
      });

      if (changePasswordRes.status === 200) {
        setPasswordWarning({
          show: true,
          info: "Password Change Successfully!",
        });
        history.push("/login");
      }
    } catch (error) {
      if (error.response.status === 400) {
        setPasswordWarning({
          show: true,
          info: "Password Change Failed!",
        });
      }
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .required("Email Required!"),
    password: Yup.string().required("Password Required!"),
    oldPassword: Yup.string().required(),
  });

  return (
    <div>
      <div className="profileBox">
        <h1 style={{ display: "block" }}>Your Profiles</h1>
        {warning.show ? (
          <span style={{ color: "red" }}>{warning.info}</span>
        ) : null}
        <Formik
          initialValues={mProfile}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <label
                htmlFor="fullName"
                style={{ display: "block" }}
                className="itemLabel"
              >
                Full Name
              </label>
              <Field
                label="fullName"
                name="fullName"
                id="fullName"
                autoFocus
                autoComplete="fullName"
              />
              <ErrorMessage name="fullName">
                {(msg) => <span className="error">{msg}</span>}
              </ErrorMessage>

              <label
                htmlFor="email"
                style={{ display: "block" }}
                className="itemLabel"
              >
                Email
              </label>
              <Field
                label="email"
                id="email"
                type="email"
                name="email"
                autoComplete="email"
              />
              <div>
                <ErrorMessage name="email">
                  {(msg) => <span className="error">{msg}</span>}
                </ErrorMessage>
              </div>

              <label
                htmlFor="phone"
                style={{ display: "block" }}
                className="itemLabel"
              >
                Phone Number
              </label>
              <Field
                label="phone"
                id="phone"
                type="phone"
                name="phone"
                autoComplete="phone"
              />
              <div>
                <ErrorMessage name="phone">
                  {(msg) => <span className="error">{msg}</span>}
                </ErrorMessage>
              </div>

              <div className="itemLabel">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Comfirm Change
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {!showPasswordForm ? (
        <div className="resetPasswordButton">
          <Button variant="contained" color="primary" onClick={onclick}>
            Reset Password
          </Button>
        </div>
      ) : null}

      {showPasswordForm ? (
        <div className="resetBox">
          <div className="resetPassword">
            <h1 style={{ display: "block" }}>Change Your Password</h1>
            {passwordWarning.show ? (
              <span style={{ color: "red" }}>{passwordWarning.info}</span>
            ) : null}

            <Formik
              initialValues={mProfile}
              onSubmit={resetPassword}
              validationSchema={validationSchema}
            >
              {({ isSubmitting }) => (
                <Form>
                  <label
                    htmlFor="password"
                    style={{ display: "block" }}
                    className="itemLabel"
                  >
                    Old Password
                  </label>
                  <Field
                    label="oldPassword"
                    name="oldPassword"
                    type="password"
                    id="oldPassword"
                    autoFocus
                    autoComplete="oldPassword"
                  />
                  <div>
                    <ErrorMessage name="oldPassword">
                      {(msg) => <span className="error">{msg}</span>}
                    </ErrorMessage>
                  </div>

                  <label
                    htmlFor="password"
                    style={{ display: "block" }}
                    className="itemLabel"
                  >
                    New Password
                  </label>
                  <Field
                    label="password"
                    name="password"
                    type="password"
                    id="password"
                    autoFocus
                    autoComplete="password"
                  />
                  <div>
                    <ErrorMessage name="password">
                      {(msg) => <span className="error">{msg}</span>}
                    </ErrorMessage>
                  </div>

                  <div className="itemLabel">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Reset Password
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="cancelResetPasswordButton">
              <Button variant="contained" color="primary" onClick={onclick}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileM;
