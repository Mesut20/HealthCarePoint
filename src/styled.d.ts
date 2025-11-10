import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      white: string;
      text: string;
      textLight: string;
      lightGray: string;
      darkGray: string;
      success: string;
      warning: string;
    };
    fonts: {
      primary: string;
      heading: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}