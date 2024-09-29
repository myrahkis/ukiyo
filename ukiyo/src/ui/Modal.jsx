/* eslint-disable react/prop-types */
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  border: 4px dashed var(--dark-bg-color);
  border-radius: 2rem;
  background-color: var(--main-color);
`;

const Blur = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.521);
  backdrop-filter: blur(2px);
`;

const Close = styled.button`
  width: fit-content;
  align-self: flex-end;
  margin-top: 2rem;
  margin-right: 2rem;
  font-size: 1.5;
  font-weight: 800;
  padding: 0.5rem 1rem;
  background-color: var(--danger-color);
  border: none;
  border-radius: 1rem;
  color: var(--light-text-color);

  &:hover {
    background-color: var(--dark-danger-color);
    transition: background-color 0.3s;
  }
`;

const ModalContex = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContex.Provider value={{ openName, close, open }}>
      {children}
    </ModalContex.Provider>
  );
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContex);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Blur>
      <StyledModal ref={ref}>
        <Close onClick={close}>X</Close>
        <div>{children}</div>
      </StyledModal>
    </Blur>,
    document.body
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContex);

  return cloneElement(children, { onClick: () => open(opens) });
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
