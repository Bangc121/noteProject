"use client";

import { redirect } from "next/navigation";
import styles from "./LogoutButton.module.css";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const onLogout = () => {
    localStorage.removeItem("username");
    router.push("/");
  };

  return (
    <button className={styles.button} type="submit" onClick={() => onLogout()}>
      <span>Logout</span>
    </button>
  );
}
