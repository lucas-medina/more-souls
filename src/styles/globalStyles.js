import { createGlobalStyle } from 'styled-components'
import pageStyles from './base/page';
import resetStyles from './base/reset';
import fontStyles from './base/fonts';

export const GlobalStyles = createGlobalStyle`
  ${resetStyles}
  ${pageStyles}
  ${fontStyles}
`;