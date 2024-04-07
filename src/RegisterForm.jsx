import React, { useState } from "react";
import "./formStyle.css";
import Form from "./Form";

const RegisterForm = () => {
  const [users, setUsers] = useState([]);
  const [showPassword, setPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthdayDate: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      birthdayDate: "",
      gender: "",
      emailAddress: "",
      phoneNumber: "",
      password: "",
    });
  };

  return (
    <Form
      formData={formData}
      handleChange={handleChange}
      showPassword={showPassword}
      setPassword={setPassword}
      submit={submit}
    />
  );
};

export default RegisterForm;
