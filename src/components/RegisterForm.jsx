import React from "react";
import { useState } from "react";
import "./RegisterForm.css";
import registerPage from "../assets/register-page.png";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    checkbox: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSignUp = (e) => {
    let isError = false;
    // e.preventDefault();
    if (formValues.name.trim().length === 0) {
      setErrors((prev) => ({ ...prev, name: "Name is Required" }));
      isError = true;
    } else {
      setErrors((prev) => ({ ...prev, name: null }));
    }
    if (formValues.username.trim().length === 0) {
      setErrors((prev) => ({ ...prev, username: "Username is Required" }));
      isError = true;
    } else {
      setErrors((prev) => ({ ...prev, username: null }));
    }
    if (formValues.email.trim().length === 0) {
      setErrors((prev) => ({ ...prev, email: "Email is Required" }));
      isError = true;
    } else {
      setErrors((prev) => ({ ...prev, email: null }));
    }
    if (formValues.mobile.trim().length === 0) {
      setErrors((prev) => ({ ...prev, mobile: "Mobile number is Required" }));
      isError = true;
    } else {
      setErrors((prev) => ({ ...prev, mobile: null }));
    }
    if (formValues.checkbox === false) {
      setErrors((prev) => ({
        ...prev,
        checkbox: "You need to Agree T&Cs is required",
      }));
      isError = true;
    } else {
      setErrors((prev) => ({ ...prev, checkbox: null }));
    }
    if (!isError) {
      navigate("/movies");
    }
  };
  return (
    <>
      <div>
        <div className="left-div">
          <img src={registerPage} />
          <h1>
            Discover new things on <br /> Superapp{" "}
          </h1>
        </div>
        <div className="right-div">
          <div>
            <h1>SuperApp</h1>
            <h3>Create Your New Account</h3>
            <input
              type="text"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
              name="name"
            />
            {errors.name ? (
              <p style={{ color: "red", margin: 0 }}>{errors.name}</p>
            ) : (
              <></>
            )}
            <input
              type="text"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
              name="username"
            />
            {errors.username ? (
              <p style={{ color: "red", margin: 0 }}>{errors.username}</p>
            ) : (
              <></>
            )}
            <input
              type="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              name="email"
            />
            {errors.email ? (
              <p style={{ color: "red", margin: 0 }}>{errors.email}</p>
            ) : (
              <></>
            )}
            <input
              type="text"
              placeholder="Mobile"
              value={formValues.mobile}
              onChange={handleChange}
              name="mobile"
            />
            {errors.mobile ? (
              <p style={{ color: "red", margin: 0 }}>{errors.mobile}</p>
            ) : (
              <></>
            )}
            <section>
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value={formValues.checkbox}
                onChange={handleChange}
              />
              <label htmlFor="checkbox">
                Share my registration data with Superapp
              </label>
            </section>
            {errors.checkbox ? (
              <p style={{ color: "red", marginTop: 0 }}>{errors.checkbox}</p>
            ) : (
              <></>
            )}
            <button onClick={handleSignUp}>SIGN UP</button>
            <p>
              By clicking on Sign up. you agree to Superapp{" "}
              <mark>Terms and Conditions of Use</mark>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <mark>Privacy Policy</mark>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
