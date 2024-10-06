import styled from "styled-components";

const StyledLoader = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  background-color: rgba(104, 118, 103, 0.3);
`;

function Loader() {
  return (
    <StyledLoader>
      <div className="loader"></div>
    </StyledLoader>
  );
}

export default Loader;
