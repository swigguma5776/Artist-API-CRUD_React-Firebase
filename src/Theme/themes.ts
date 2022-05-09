import { createTheme } from '@mui/material';

interface PaletteColor { 
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
  }
  

  export const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#CC7818',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      }
    }
  });