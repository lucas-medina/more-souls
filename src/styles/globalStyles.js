import { createGlobalStyle } from 'styled-components'
import pageStyles from './base/page';
import resetStyles from './base/reset';
import fontStyles from './base/fonts';
import animationStyles from './base/animations';

export const GlobalStyles = createGlobalStyle`
  ${resetStyles}
  ${pageStyles}
  ${fontStyles}
  ${animationStyles}
`;