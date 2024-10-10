import styled from "styled-components";
import useUser from "./useUser";

const StyledUserAva = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 5rem;
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <StyledUserAva>
      <Avatar src={avatar || "default-ava.png"} alt="ava" />
      <span>{fullName}</span>
    </StyledUserAva>
  );
}

export default UserAvatar;
