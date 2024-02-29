import React from "react";
import { useState } from "react";
import "./RegisterForm.css";
import registerPage from "../assets/register-page.png";

export default function RegisterForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
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
            <input
              type="text"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
              name="username"
            />
            <input
              type="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              name="email"
            />
            <input
              type="text"
              placeholder="Mobile"
              value={formValues.mobile}
              onChange={handleChange}
              name="mobile"
            />
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
            <button>SIGN UP</button>
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
