import React from "react";
import styled from "styled-components";

const FooterBlock = styled.div`
   width: 100%;
   background-color: #833AE0;
   position: absolute;
   bottom: 0;
   padding: 15px 0 15px 30px;
   font-family: 'Roboto', sans-serif;
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    p{
        font-size: 22px;
        line-height: 24px;
        letter-spacing: 0.03em;
        color: #FFDC40;
    }
  }
`;
const CurrentBalance = styled.p`
    font-size: 36px;
    span{
      font-size: 18px;
    }
`;
class Footer extends React.Component{
    render() {
        return(
          <FooterBlock>
              <div>
                  <p>Balance:</p>
                  <CurrentBalance>568.<span>76$</span></CurrentBalance>
              </div>
          </FooterBlock>
        );
    }
}
export default Footer;