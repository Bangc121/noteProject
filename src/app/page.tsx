"use client";

import { useEffect, useState } from "react";

import os from "os";
import { redirect } from "next/navigation";

export default function Home() {
  console.log(os.hostname());

  useEffect(() => {
    if (typeof window !== "undefined") {
      const username = localStorage.getItem("username");
      if (username) {
        redirect("/home");
      } else {
        redirect("/login");
      }
    }
  }, []);
}

// 앱폴더는 서버 컴포넌트, 브라우저에서 할 수 있는 일들은 서버컴포넌트에서 불가능
// 정말 필요한 부분만 작은단위로 컴포넌트를 만드는게 중요 -> 클라이언트 컴포넌트
