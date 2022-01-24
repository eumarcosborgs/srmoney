import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  @media (max-width: 1080px) {
    html {
        font-size: 93.75%
    }
  }
  
  @media (max-width: 720px) {
    html {
        font-size: 57.5%
    }
  }
  
  body {
    background: ${theme.lightBackground};
    color: ${theme.black};
  }
  
  body, input, select, textarea, button {
    font: 400 1rem "Montserrat", sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;