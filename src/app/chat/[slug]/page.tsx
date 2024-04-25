"use client";

import { useEffect, useLayoutEffect, useState } from "react";

import { Message } from "../page";
import { socket } from "@/service/socket";

type Props = {
  params: {
    slug: string;
  };
};

export default function ChatPage({ params: { slug } }: Props) {
  const [chatMessages, setChatMessages] = useState<Message[]>();
  const [message, setMessage] = useState("");
  const [user, setUser] = useState<string | undefined>("");

  const handleNewMessage = () => {
    const hour =
      new Date().getHours() < 10
        ? `0${new Date().getHours()}`
        : `${new Date().getHours()}`;

    const mins =
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes()}`
        : `${new Date().getMinutes()}`;

    socket.emit("newMessage", {
      message,
      room_id: slug,
      user,
      timestamp: { hour, mins },
    });
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const getUsername = async () => {
    try {
      const value = localStorage.getItem("username");
      if (value !== null) {
        setUser(value);
      }
    } catch (e) {
      console.error("Error while loading username!");
    }
  };

  useLayoutEffect(() => {
    // navigation.setOptions({ title: name });
    console.log("idididididid", slug);
    getUsername();
    socket.emit("findRoom", slug);
    socket.on("foundRoom", (roomChats) => {
      console.log("wefwef", roomChats);
      setChatMessages(roomChats);
    });
  }, []);

  useEffect(() => {
    socket.on("foundRoom", (roomChats) => {
      console.log("wefwef", roomChats);
      setChatMessages(roomChats);
    });
  }, [socket]);

  return (
    <>
      <h1>{slug}</h1>
      <input type="text" onChange={onChange} />
      <button onClick={() => handleNewMessage()}>전송</button>
    </>
  );
}
