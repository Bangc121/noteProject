"use client";

import { useEffect, useLayoutEffect, useState } from "react";

import CustomModal from "../components/Modal";
import Link from "next/link";
import { socket } from "@/service/socket";

type ChatComponentProps = {
  id: string;
  name: string;
  messages: Message[];
};

export type Message = {
  id: string;
  text: string;
  time: string;
  user: string;
};

export default function LobbyPage() {
  const [visible, setVisible] = useState(false);
  const [rooms, setRooms] = useState<ChatComponentProps[] | undefined>();

  useLayoutEffect(() => {
    function fetchGroups() {
      fetch("http://localhost:4000/api")
        .then((res) => res.json())
        .then((data) => {
          console.log("setRooms(data)", data);
          setRooms(data);
        })
        .catch((err) => console.error(err));
    }
    fetchGroups();
  }, []);

  useEffect(() => {
    socket.on("roomsList", (rooms) => {
      console.log("rooms", rooms);
      setRooms(rooms);
    });
  }, [socket]);

  return (
    <>
      <h1>채팅 페이지</h1>
      <button onClick={() => setVisible(true)}>채팅생성</button>
      <ul>
        {rooms?.length ?? 0 > 0
          ? rooms?.map((item) => (
              <li key={item.id}>
                <Link href={`/chat/${item.id}`}>{item.name}</Link>
              </li>
            ))
          : null}
      </ul>
      {visible ? (
        <CustomModal isOpen={visible} onRequestClose={() => setVisible(false)}>
          채팅방 생성
        </CustomModal>
      ) : null}
    </>
  );
}
