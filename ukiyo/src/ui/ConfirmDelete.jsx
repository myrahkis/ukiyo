import styled from "styled-components";

/* eslint-disable react/prop-types */
const StyledConfirmDelete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-start;
  gap: 3rem;
  padding: 2.5rem;
  padding-top: 0;
  width: 35rem;
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Delete = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  text-transform: uppercase;
  background-color: var(--danger-color);
  color: var(--light-text-color);

  &:hover {
    background-color: var(--dark-danger-color);
    transition: background-color 0.3s;
  }
`;

const Cancel = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  text-transform: uppercase;
  background-color: var(--emphasis-color);
  color: var(--light-text-color);

  &:hover {
    background-color: var(--dark-emphasis-color);
    transition: background-color 0.3s;
  }
`;

function ConfirmDelete({ subject, onConfirm, onClose, disabled }) {
  return (
    <StyledConfirmDelete>
      <h2>Deletion confirmation.</h2>
      <p>
        Are you sure you want to delete <strong>{subject}</strong>? This cannot
        be undone!
      </p>
      <BtnsWrapper>
        <Cancel onClick={onClose} disabled={disabled}>
          Cancel
        </Cancel>
        <Delete onClick={onConfirm} disabled={disabled}>
          Delete
        </Delete>
      </BtnsWrapper>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
