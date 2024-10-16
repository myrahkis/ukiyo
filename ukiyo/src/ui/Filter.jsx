/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { device } from "../styles/adaptability";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem;
  gap: 0.3rem;
  background-color: var(--lightest-bg-color);
  border-radius: 1rem;

  @media ${device.mobile} {
    width: fit-content;
    margin-top: 0.5rem;
  }
`;

const FilterBtn = styled.button`
  border: 3px dashed transparent;
  height: fit-content;
  background-color: transparent;
  padding: 0.7rem;
  border-radius: 1rem;
  color: ${(props) => props.isDark && "var(--light-text-color)"};

  ${(props) =>
    props.active &&
    css`
      cursor: not-allowed;
      background-color: var(--emphasis-color);
      color: var(--light-text-color);
    `}

  &:hover {
    background-color: var(--emphasis-color);
    color: var(--light-text-color);
    transition: all 0.3s;
  }

  &:focus {
    border: 3px dashed var(--emphasis-color);
  }

  @media ${device.mobile} {
    font-size: 1.2rem;
    border: 1px dashed transparent;
    padding: 0.5rem;

    &:focus {
      border: 1px dashed var(--emphasis-color);
    }
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  const { isDark } = useDarkMode();

  function clickHandle(value) {
    searchParams.set(filterField, value);

    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((opt) => (
        <FilterBtn
          key={opt.value}
          onClick={() => clickHandle(opt.value)}
          active={opt.value === currentFilter}
          isDark={isDark}
        >
          {opt.label}
        </FilterBtn>
      ))}
    </StyledFilter>
  );
}

export default Filter;
