"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import Image from "next/image";
import os from "os";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type LoginData = {
  username: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginData>();
  const onSubmit: SubmitHandler<LoginData> = (data) => {
    console.log(data);
    localStorage.setItem("username", data.username);
    router.push("/home");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={styles.input}
              {...register("username", { required: true })}
            />
            <input
              className={styles.input}
              {...register("password", { required: true })}
            />
            <button className={styles.button} type="submit">
              <span>Login</span>
            </button>
            {errors.username && <span>This field is required</span>}
          </form>
        </div>
      </div>
    </>
  );
}
