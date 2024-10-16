import { device } from "../../styles/adaptability";
import styled from "styled-components";
import useUser from "./useUser";

const StyledUserAva = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  gap: 0.5rem;
`;

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;

  @media ${device.mobile} {
    width: 2rem;
    height: 2rem;
  }
`;

const Span = styled.span`
  @media ${device.tablet} {
    font-size: 1.5rem;
  }

  @media ${device.mobile} {
    font-size: 1.2rem;
  }
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <StyledUserAva>
      <Avatar src={avatar || "default-ava.png"} alt="ava" />
      <Span>{fullName}</Span>
    </StyledUserAva>
  );
}

export default UserAvatar;
