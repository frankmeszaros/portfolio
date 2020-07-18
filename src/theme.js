// theme.js

const breakpoints = ['40em', '52em', '64em', '80em'];

/* eslint-disable prefer-destructuring */
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export default {
	breakpoints,
	colors: {
		black: '#37323E',
		white: '#fff',
		gray: '#BFBDC1',
		darkGray: '#6D6A75',
		turquoise: '#1B998B',
		green: '#64F58D',
	},
	fonts: ['Nunito Sans', 'sans-serif'],
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 80],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	sizes: ['40em', '52em', '64em', '80em'],
};
