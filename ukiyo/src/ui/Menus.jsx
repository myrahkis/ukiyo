/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";
import { BsThreeDotsVertical } from "react-icons/bs";

const StyledList = styled.ul`
  position: fixed;
  background-color: var(--main-color);
  /* box-shadow: ; */
  border-radius: 2rem;
  top: ${(props) => props.position.y}px;
  right: ${(props) => props.position.x}px;
`;

const MenusContex = createContext();

function Menus({ children }) {
  const [isOpenId, setIsOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setIsOpenId("");
  const open = setIsOpenId;

  return (
    <MenusContex.Provider
      value={{ isOpenId, close, open, position, setPosition }}
    >
      {children}
    </MenusContex.Provider>
  );
}

function Menu({ children }) {
  return <div>{children}</div>;
}

function Toggle({ id }) {
  const { isOpenId, open, close, setPosition } = useContext(MenusContex);

  function clickHandle(e) {
    const rect = e.target.closest("button").getBoundingClientRect(); // получает позицию ближайшей кнопки к клику
    // console.log(rect);
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    isOpenId === "" || isOpenId !== id ? open(id) : close();
  }

  return (
    <button onClick={clickHandle}>
      <BsThreeDotsVertical />
    </button>
  );
}

function List({ id, children }) {
  const { isOpenId, position, close } = useContext(MenusContex);
  const ref = useOutsideClick(() => {
    setTimeout(close, 0); // Добавляем задержку для закрытия, чтобы корректно работало закрытие кнопкой
  });

  if (isOpenId !== id) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children }) {
  return <li>{children}</li>;
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
