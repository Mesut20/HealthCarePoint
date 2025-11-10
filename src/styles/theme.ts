export interface Theme {
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
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: '#d4af8c', // Warm beige
    secondary: '#b8956a', // Darker beige  
    accent: '#a67c52', // Accent beige brown
    background: '#faf9f7', // Light cream background
    white: '#ffffff',
    text: '#3d3529', // Warm dark brown text
    textLight: '#8b7355', // Light brown text
    lightGray: '#f5f2ed', // Warm light gray
    darkGray: '#5a4d3a', // Warm dark gray
    success: '#7a8471', // Sage green
    warning: '#d4940b' // Warm amber
  },
  fonts: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  },
  borderRadius: {
    small: '6px',
    medium: '12px',
    large: '20px'
  }
};