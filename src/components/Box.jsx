import styled from 'styled-components';
import { border, flexbox, space, layout, color, position, typography, shadow, variant } from 'styled-system';

const Box = styled.div`
	${border}
  ${flexbox}
  ${space}
  ${layout}
  ${color}
  ${position}
  ${typography}
  ${shadow}  
`;

export default styled(Box)(
	{
		fontFamily: ['Nunito Sans', 'sans-serif'],
		transition: '400ms',
	},
	variant({
		variants: {
			dark: {
				color: 'white',
				bg: 'black',
			},
			light: {
				color: 'black',
				bg: 'white',
			},
		},
	})
);
