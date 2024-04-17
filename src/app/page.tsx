import Counter from "./components/Counter";
import Image from "next/image";
import os from "os";
import styles from "./page.module.css";

export default function Home() {
  console.log("hihihihi");
  console.log(os.hostname());
  return (
    <>
      <h1>Home</h1>
      <Counter />
    </>
  );
}

// 앱폴더는 서버 컴포넌트, 브라우저에서 할 수 있는 일들은 서버컴포넌트에서 불가능
// 정말 필요한 부분만 작은단위로 컴포넌트를 만드는게 중요 -> 클라이언트 컴포넌트
