import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horiz" &&
    css`
      justify-content: center;
      gap: 1rem;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vert" &&
    css`
      flex-direction: column;
      gap: 2rem;
    `}
`;

Row.defaultProps = {
  type: "horiz",
};

export default Row;
