/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem;
  gap: 0.3rem;
  background-color: var(--lightest-bg-color);
  border-radius: 1rem;
`;

const FilterBtn = styled.button`
  border: 3px dashed transparent;
  height: fit-content;
  background-color: transparent;
  padding: 0.7rem;
  border-radius: 1rem;

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
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

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
        >
          {opt.label}
        </FilterBtn>
      ))}
    </StyledFilter>
  );
}

export default Filter;
