import React from "react";
import { useState } from "react";

const [formValues, setFormValues] = useState({
  name: "",
  username: "",
  email: "",
  mobile: "",
  checkbox: "false",
});

const handleChange = (e) => {
  setFormValues({ ...formValues, [e.target.name]: e.target.value });
};

export default function RegisterForm() {
  return (
    <>
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
        type="number"
        placeholder="Mobile"
        value={formValues.mobile}
        onChange={handleChange}
        name="mobile"
      />
      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        value={formValues.checkbox}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">Share my registration data with Superapp</label>
      <button>SIGN UP</button>
    </>
  );
}
