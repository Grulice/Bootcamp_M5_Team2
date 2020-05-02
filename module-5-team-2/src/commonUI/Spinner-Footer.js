import styled,{keyframes} from "styled-components";

const load7 = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;
export const FooterLoader = styled.span`
&,
&:before,
&:after {  
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: ${load7} 1.8s infinite ease-in-out;
  animation: ${load7} 1.8s infinite ease-in-out;
}
  color: #ffffff;
  font-size: 5px;
  margin: -30px auto 0 auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
&:before,
&:after {
  content: '';
  position: absolute;
  top: 0;
}
&::before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
&:after {
  left: 3.5em;
}
`;
