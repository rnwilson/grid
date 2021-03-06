import { media, breakpoints, containers } from '../spec';

const styles = {
  grid: {
    boxSizing: 'border-box',
    margin: '0 auto',
  },
  gridFluid: {
    boxSizing: 'border-box',
    margin: '0 auto',
  },
  noPadding: {
    padding: 0,
  },
};

Object.keys(breakpoints).forEach(breakpoint => {
  styles.grid[media(breakpoint)] = {
    width: breakpoint === 'xs' ? '100%' : containers[breakpoint],
  };
});

export default styles;
