import React, { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useHistory } from "react-router-dom";
import * as api from "../../../Util/api";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import "./ProfileS.css";

const ProfileS = ({ email }) => {
  const history = useHistory();

  const [sProfile, setSProfile] = useState({
    fullName: "Full Name",
    phoneNum: "0481-111-111",
    timeLimit: "4 hours",
    homeAddress: "address",
    preferName: "prefer Name",
    email: "init@test.com",
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
    getSprofile();
  }, []);

  const getSprofile = async () => {
    try {
      const getSprofileResponse = await api.getSprofile({
        email,
      });
      if (getSprofileResponse.status === 200) {
        setSProfile({
          fullName: getSprofileResponse.data.fullName,
          phoneNum: getSprofileResponse.data.phoneNum,
          email: getSprofileResponse.data.email,
          timeLimit: getSprofileResponse.data.timeLimit,
          homeAddress: getSprofileResponse.data.homeAddress,
          preferName: getSprofileResponse.data.preferName,
        });
      }
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

  const onSubmit = async ({
    fullName,
    phoneNum,
    email,
    timeLimit,
    homeAddress,
    preferName,
  }) => {
    console.log(fullName, phoneNum, email);

    try {
      const sProfileResponse = await api.changeSprofile({
        fullName,
        phoneNum,
        email,
        timeLimit,
        homeAddress,
        preferName,
      });
      if (sProfileResponse.status === 200) {
        setSProfile({
          fullName: sProfileResponse.data.fullName,
          phoneNum: sProfileResponse.data.phoneNum,
          email: sProfileResponse.data.email,
          timeLimit: sProfileResponse.data.timeLimit,
          homeAddress: sProfileResponse.data.homeAddress,
          preferName: sProfileResponse.data.preferName,
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
      setPasswordWarning({
        show: true,
        info: "Password Change Failed!",
      });
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
          initialValues={sProfile}
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
                htmlFor="timeLimit"
                style={{ display: "block" }}
                className="itemLabel"
              >
                Working hours limit
              </label>
              <Field
                disabled="true"
                label="timeLimit"
                name="timeLimit"
                id="timeLimit"
                autoFocus
                autoComplete="timeLimit"
              />
              <ErrorMessage name="timeLimit">
                {(msg) => <span className="error">{msg}</span>}
              </ErrorMessage>

              <label
                htmlFor="preferName"
                style={{ display: "block" }}
                className="itemLabel"
              >
                Preferred Name
              </label>
              <Field
                label="preferName"
                name="preferName"
                id="preferName"
                autoFocus
                autoComplete="preferName"
              />
              <ErrorMessage name="preferName">
                {(msg) => <span className="error">{msg}</span>}
              </ErrorMessage>

              <label
                htmlFor="homeAddress"
                style={{ display: "block" }}
                className="itemLabel"
              >
                Home Address
              </label>
              <Field
                label="homeAddress"
                name="homeAddress"
                id="homeAddress"
                autoFocus
                autoComplete="homeAddress"
              />
              <ErrorMessage name="homeAddress">
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
                htmlFor="phoneNum"
                style={{ display: "block" }}
                className="itemLabel"
              >
                Phone Number
              </label>
              <Field
                label="phoneNum"
                id="phoneNum"
                type="phoneNum"
                name="phoneNum"
                autoComplete="phoneNum"
              />
              <div>
                <ErrorMessage name="phoneNum">
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
              initialValues={sProfile}
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

export default ProfileS;
