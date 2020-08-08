import { Link } from "react-scroll";
import styled from "styled-components";
import {
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

  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}  
  ${typography}
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
