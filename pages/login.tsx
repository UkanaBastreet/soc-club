import Head from "next/head";
import { useRouter } from "next/router";
import React, { FormEvent, useEffect, useState } from "react";
import { Button, Input } from "ukana-kit";

const RegistrationPage = () => {
  const [values, setValues] = useState({ email: "test", password: "test" });

  const router = useRouter();
  useEffect(() => {}, []);
  async function submitHandler(e: FormEvent) {
    e.preventDefault();
    const res = await fetch(
      "https://soc-club-ukanabastreet.vercel.app/auth/login",
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

    // router.push("/users");
  }
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <form className="registration__form" onSubmit={submitHandler}>
        <h1>Login</h1>
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
export default RegistrationPage;
