import { Button, Input } from "ukana-kit";
import React, { FormEvent, useState } from "react";
import Head from "next/head";

const RegisterPage = () => {
  const [values, setValues] = useState({
    name: "test name",
    email: "test@email",
    password: "testPassword",
  });

  async function submitHandler(e: FormEvent) {
    e.preventDefault();
    const res = await fetch(
      "https://soc-club-ukanabastreet.vercel.app/auth/registration",
      {
        method: "post",
        body: JSON.stringify(values),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());
    console.log(res);
    res.token && localStorage.setItem("token", res.token);
  }
  return (
    <>
      <Head>
        <title>Registration</title>
      </Head>
      <form className="registration__form" onSubmit={submitHandler}>
        <h1>Registration</h1>
        <label htmlFor="email">name</label>
        <Input
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          value={values.name}
          id="name"
          type="text"
        />
        <label htmlFor="email">email</label>
        <Input
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
          id="email"
          type="text"
        />
        <label htmlFor="password">password</label>
        <Input
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          value={values.password}
          id="password"
          type="text"
        />
        <Button>Sign In</Button>
      </form>
    </>
  );
};

export default RegisterPage;
