import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  min-width: 300px;
`;

export const ModalHeader = styled.div`
  font-weight: bold;
  font-size: 16px;
  & span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & button {
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    right: 0;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

export const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ModalFooter = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 10px;
  & button {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    justify-content: center;
    &:hover {
      background-color: #0056b3;
    }
  }
`;
