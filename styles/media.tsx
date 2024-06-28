import { css } from 'styled-components';
import { breakpoints } from './breakpoints';

type BreakpointKey = keyof typeof breakpoints;

export const media = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  acc[breakpoint as BreakpointKey] = (styles: any) => css`
    @media (max-width: ${breakpoints[breakpoint as BreakpointKey]}) {
      ${styles}
    }
  `;
  return acc;
}, {} as { [key in BreakpointKey]: (styles: any) => ReturnType<typeof css> });
