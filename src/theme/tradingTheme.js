import { createTheme, alpha } from '@mui/material/styles';

// Trading color palette
const colors = {
  // Base colors
  background: {
    primary: '#0d1117',
    secondary: '#161b22',
    tertiary: '#21262d',
    paper: '#1c2128',
  },
  // Text colors
  text: {
    primary: '#e6edf3',
    secondary: '#8b949e',
    muted: '#484f58',
  },
  // Trading colors
  trading: {
    buy: '#00c853',
    buyHover: '#00e676',
    buyLight: alpha('#00c853', 0.15),
    sell: '#ff5252',
    sellHover: '#ff6b6b',
    sellLight: alpha('#ff5252', 0.15),
    profit: '#00c853',
    loss: '#ff5252',
    neutral: '#8b949e',
  },
  // Accent colors
  accent: {
    primary: '#58a6ff',
    secondary: '#7c3aed',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
  // Border colors
  border: {
    default: '#30363d',
    active: '#58a6ff',
  },
};

const tradingTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.accent.primary,
      light: alpha(colors.accent.primary, 0.2),
      dark: '#1f6feb',
    },
    secondary: {
      main: colors.accent.secondary,
    },
    success: {
      main: colors.trading.buy,
      light: colors.trading.buyLight,
    },
    error: {
      main: colors.trading.sell,
      light: colors.trading.sellLight,
    },
    warning: {
      main: colors.accent.warning,
    },
    info: {
      main: colors.accent.info,
    },
    background: {
      default: colors.background.primary,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
    divider: colors.border.default,
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
      color: colors.text.primary,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: colors.text.primary,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: colors.text.primary,
    },
    h4: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: colors.text.primary,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 600,
      color: colors.text.primary,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: colors.text.primary,
    },
    body1: {
      fontSize: '0.875rem',
      color: colors.text.primary,
    },
    body2: {
      fontSize: '0.8125rem',
      color: colors.text.secondary,
    },
    caption: {
      fontSize: '0.75rem',
      color: colors.text.muted,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.background.primary,
          scrollbarColor: `${colors.border.default} ${colors.background.secondary}`,
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            width: 8,
            height: 8,
          },
          '&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track': {
            background: colors.background.secondary,
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            background: colors.border.default,
            borderRadius: 4,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: colors.background.paper,
          border: `1px solid ${colors.border.default}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: colors.background.paper,
          border: `1px solid ${colors.border.default}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 6,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedSuccess: {
          backgroundColor: colors.trading.buy,
          '&:hover': {
            backgroundColor: colors.trading.buyHover,
          },
        },
        containedError: {
          backgroundColor: colors.trading.sell,
          '&:hover': {
            backgroundColor: colors.trading.sellHover,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: colors.background.secondary,
            '& fieldset': {
              borderColor: colors.border.default,
            },
            '&:hover fieldset': {
              borderColor: colors.border.active,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.accent.primary,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.secondary,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.border.default}`,
          padding: '12px 16px',
        },
        head: {
          backgroundColor: colors.background.tertiary,
          fontWeight: 600,
          color: colors.text.secondary,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: alpha(colors.accent.primary, 0.05),
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 40,
        },
        indicator: {
          height: 3,
          borderRadius: '3px 3px 0 0',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          minHeight: 40,
          padding: '8px 16px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.background.secondary,
          borderBottom: `1px solid ${colors.border.default}`,
          boxShadow: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.background.secondary,
          borderRight: `1px solid ${colors.border.default}`,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          margin: '2px 8px',
          '&.Mui-selected': {
            backgroundColor: alpha(colors.accent.primary, 0.15),
            '&:hover': {
              backgroundColor: alpha(colors.accent.primary, 0.2),
            },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: colors.background.tertiary,
          border: `1px solid ${colors.border.default}`,
          fontSize: '0.75rem',
        },
      },
    },
  },
});

// Export colors for use in components
export { colors };
export default tradingTheme;
