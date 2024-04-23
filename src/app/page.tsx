"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import Counter from "./components/Counter";
import Image from "next/image";
import os from "os";
import styles from "./page.module.css";

type LoginData = {
  username: string;
};

export default function Home() {
  console.log(os.hostname());
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginData>();
  const onSubmit: SubmitHandler<LoginData> = (data) => console.log(data);

  return (
    <>
      <h1>Home</h1>
      <Image
        src={"https://images.unsplash.com/photo-1441986300917-64674bd600d8"}
        alt="Shop"
        height={400}
        width={400}
      />
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue="username"
          {...register("username", { required: true })}
        />
        {errors.username && <span>This field is required</span>}
        <input type="submit" />
      </form> */}
    </>
  );
}

// 앱폴더는 서버 컴포넌트, 브라우저에서 할 수 있는 일들은 서버컴포넌트에서 불가능
// 정말 필요한 부분만 작은단위로 컴포넌트를 만드는게 중요 -> 클라이언트 컴포넌트
