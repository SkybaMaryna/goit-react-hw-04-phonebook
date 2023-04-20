import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
`;

export const StyledInput = styled.input`
  border-color: lightblue;
  &:hover,
  &:focus {
    border-color: blue;
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: #5c5cc8;
  border-radius: 10px;
  padding: 5px 10px;
  color: white;
`;
