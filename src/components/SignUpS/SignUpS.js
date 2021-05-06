import React,{useState} from 'react';
import { Formik,Field,ErrorMessage,Form } from 'formik';
import * as Yup from 'yup';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import * as api from '../Util/api';
import './SignUpS.css';

const SignUpS = () => {
  const history = useHistory();

  const [warning, setWarning] = useState(false);

  const initialValues = {
    email: '',
    fullName:'',
    password: '',
    mobile: '',
    address: '',
    workingHours:'',
    preferredName: ''
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter valid email').required('Email Required!'),
    fullName: Yup.string().required('FullName Required!'),
    password: Yup.string().required('Password Required!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    mobile: Yup.string().required('Mobile Required!'),
    address: Yup.string().required('Address Required!'),
    workingHours: Yup.string().required('Limits for working hours per week Required!'),
  })

  const onSubmit = async ({ email, fullName, password, mobile,address,workingHours,preferredName }) => {
    console.log(email, fullName, password, mobile,address,workingHours,preferredName);
    try {
      const signupRes = await api.siguns({ email, fullName, password, mobile,address,workingHours,preferredName})
      if (signupRes.status === 200) {
        history.push('');
      }
    } catch (error) {
      if (error.response.status === 400) {
        setWarning(true);
      }
    }
  }

  return (
    <div className="signup_form">
      <h1 style={{display: "block"}}>Staff SignUp</h1>
      {warning? <span style={{color:"red"}}>Email already exist</span> :null}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <Field
              label="Email"
              name="email"
              id="email"
              autoFocus
              autoComplete="email"
            />
            <ErrorMessage name="email">
            { (msg) => <span className="error" style={{ display: "block" }}>{msg}</span>}
            </ErrorMessage>
            <label htmlFor="full-name" style={{ display: "block" }}>
              Full Name
            </label>
            <Field
              label="Full-Name"
              name="fullName"
              id="fullName"
              autoFocus
              autoComplete="fullName"
            />
            <ErrorMessage name="fullName">
            { (msg) => <span className="error" style={{ display: "block" }}>{msg}</span>}
            </ErrorMessage>
            <label htmlFor="password" style={{ display: "block" }}>
              Initial Password
            </label>
            <Field
              label="Password"
              id="password"
              type="password"
              name="password"
              autoComplete="password"
            />
            <ErrorMessage name="password">
            { (msg) => <span className="error" style={{ display: "block" }}>{msg}</span>}
            </ErrorMessage>
            <label htmlFor="mobile" style={{ display: "block" }}>
              Mobile Number
            </label>
            <Field
              label="mobile number"
              id="mobile"
              type="mobile"
              name="mobile"
              autoComplete="mobile"
            />
            <ErrorMessage name="mobile">
            { (msg) => <span className="error" style={{ display: "block" }}>{msg}</span>}
            </ErrorMessage>
            <label htmlFor="preferredName" style={{ display: "block" }}>
              Preferred Name(Optional)
            </label>
            <Field
              label="Preferred Name"
              id="preferredName"
              type="preferredName"
              name="preferredName"
              autoComplete="preferredName"
            />
            <ErrorMessage name="preferredName">
            { (msg) => <span className="error" style={{ display: "block" }}>{msg}</span>}
            </ErrorMessage>
            <label htmlFor="address" style={{ display: "block" }}>
              Address
            </label>
            <Field
              label="Address"
              id="address"
              type="address"
              name="address"
              autoComplete="address"
            />
            <ErrorMessage name="address">
            { (msg) => <span className="error" style={{ display: "block" }}>{msg}</span>}
            </ErrorMessage>
            <label htmlFor="workingHours" style={{ display: "block" }}>
              Limits for working hours per week
            </label>
            <Field
              label="Working Hours"
              id="workingHours"
              type="workingHours"
              name="workingHours"
              autoComplete="workingHours"
            />
            <ErrorMessage name="workingHours">
            { (msg) => <span className="error" style={{ display: "block" }}>{msg}</span>}
             </ErrorMessage>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{ display: "block", margin:"auto"}}
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpS;
