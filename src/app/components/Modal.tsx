import React, { useState } from "react";

import Modal from "react-modal";
import { socket } from "@/service/socket";
import styles from "./Modal.module.css";

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<Props> = ({ isOpen, onRequestClose, children }) => {
  const [groupName, setgroupName] = useState("");

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    console.log("e.target.value", e.target.value);
    setgroupName(e.target.value);
  };

  const handleCreateRoom = () => {
    console.log({ groupName });
    socket.emit("createRoom", groupName);

    onRequestClose();
  };

  return (
    <Modal
      className={styles.modal}
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
    >
      <a>Enter your Group Name</a>
      <input type="text" onChange={onChange} value={groupName} />
      <button onClick={handleCreateRoom}>Create</button>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default CustomModal;
