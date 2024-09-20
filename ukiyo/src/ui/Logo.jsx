import styled from "styled-components";
import Row from "../ui/Row";

const StyledLogo = styled.img`
  width: 6rem;
  height: 6rem;
`;

const H1 = styled.h1`
  color: var(--light-bg-color);
  font-size: 2.5rem;
  font-weight: 800;
  font-style: italic;
`;

function Logo() {
  return (
    <Row>
      <StyledLogo src="/logo.svg" alt="logo" />
      <H1>UKIYO</H1>
    </Row>
  );
}

export default Logo;
