"use client";

import { Message } from "../page";
import { useState } from "react";

type Props = {
  params: {
    slug: string;
  };
};
export default function ChatPage({ params: { slug } }: Props) {
  const [chatMessages, setChatMessages] = useState<Message[]>();
  return (
    <>
      <h1>{slug}</h1>
    </>
  );
}
