import styled from "styled-components";
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 15px 10px;
  &:hover {
    background-color: #f9f5fd;
    box-shadow: #e9e9e9 0 20px 20px 0;
    transform: translateY(-10px);
    cursor: pointer;
  }
  &:active {
    box-shadow: #e9e9e9 0 5px 5px 0;
    transform: translateY(0);
  }
`;
