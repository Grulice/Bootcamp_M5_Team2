import styled from "styled-components";
//Подробную информацию о работе данного компонента можно найти в файле README.md
export const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - 90px - 90px);
  -webkit-box-shadow: inset 0px 6px 6px -6px gray;
  -moz-box-shadow: inset 0px 6px 6px -6px gray;
  box-shadow: inset 0px 6px 6px -6px gray;
  margin-top: 20px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  h2 {
    text-align: center;
  }
  a {
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    & > div > div {
      border-bottom: 0.5px dashed lightgrey;
    }
    & > div > div:hover {
      border-bottom: none;
    }
    &:last-child > div > div {
      border-bottom: none;
    }
  }
`;
export const StocksContainer = styled.div`
  width: 100%;
`;
