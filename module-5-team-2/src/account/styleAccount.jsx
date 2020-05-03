import styled from "styled-components";
export const AccountPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const AccountContainer = styled.div`
  width: 100%;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  /* box-shadow: 0 6px 6px -6px gray; */
`;
export const TotalSum = styled.h1`
  text-align: center;
`;
export const Profit = styled.p`
  text-align: center;
  color: ${(props) => (props.sign < 0 ? "red" : "green")};
`;
export const Body = styled.div`
  width: 100%;
  padding: 20px 20%;
  -webkit-box-shadow: inset 0px 6px 6px -6px gray;
  -moz-box-shadow: inset 0px 6px 6px -6px gray;
  box-shadow: inset 0px 6px 6px -6px gray;
`;
export const DecPartSpan = styled.span`
  font-size: 0.7em;
`;
