"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState<string | null>("");

  useEffect(() => {
    const item = localStorage.getItem("username");
    setUsername(item);
  }, []);
  return (
    <>
      <h1>home</h1>
      <h1>{username}</h1>
    </>
  );
}
