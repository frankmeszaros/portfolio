import { Link } from 'react-scroll';
import styled from 'styled-components';
import { flexbox, space, layout, color, position, typography, shadow } from 'styled-system';

export const ScrollLink = styled(Link)`
	cursor: pointer;
  ${flexbox}
  ${space}
  ${layout}
  ${color}
  ${position}
  ${typography}
  ${shadow}  
`;

export default styled.a`
	${flexbox}
  ${space}
  ${layout}
  ${color}
  ${position}
  ${typography}
  ${shadow}  
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;
