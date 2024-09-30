/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledList = styled.ul`
  overflow: hidden;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: var(--main-color);
  box-shadow: 5px 4px 10px var(--main-color);
  border: 2px solid var(--dark-bg-color);
  border-radius: 1.5rem;
  top: ${(props) => props.position.y}px;
  right: ${(props) => props.position.x}px;
`;

const StyledToggle = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 1rem;
  padding: 1rem 0.8rem;

  &:hover {
    color: var(--light-text-color);
    background-color: var(--main-color);
    transition: all 0.2s ease-in;
  }
`;

const StyledBtn = styled.li`
  list-style: none;
  border-bottom: 1px solid var(--dark-bg-color);

  &:last-child {
    border: none;

    &:hover {
      background-color: var(--dark-danger-color);
      transition: background-color 0.2s;
    }
  }

  &:hover {
    background-color: var(--dark-bg-color);
    transition: background-color 0.2s;
  }
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

function Toggle({ id, icon }) {
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

  return <StyledToggle onClick={clickHandle}>{icon}</StyledToggle>;
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
  return <StyledBtn>{children}</StyledBtn>;
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
