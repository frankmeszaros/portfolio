import { Link } from "react-scroll";
import styled from "styled-components";
import {
  background,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
} from "styled-system";

export const ScrollLink = styled(Link)`
  cursor: pointer;
  
  ${background}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}  
  ${typography}

   transition: background-size 0.25s ease-in;

   &:hover {
      background-size: 100% 88%;
   }
`;

export default styled.a`
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}  
  ${space}
  ${typography}
 
  text-decoration: none;

  &:hover {
     text-decoration: underline;
  }
`;
