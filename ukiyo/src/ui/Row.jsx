import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horiz" &&
    css`
      justify-content: space-between;
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
