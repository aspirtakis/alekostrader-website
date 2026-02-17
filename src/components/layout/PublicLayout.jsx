import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Container,
  Link,
  Typography,
  IconButton,
  useTheme,
  alpha,
} from '@mui/material';
import { GitHub as GitHubIcon } from '@mui/icons-material';
import Logo from '../Logo';
import { colors } from '../../theme/tradingTheme';

const navItems = [
  { label: 'Features', path: '/features' },
  { label: 'Architecture', path: '/architecture' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Documentation', path: '/docs' },
  { label: '$ALK', path: '/alk' },
];

const PublicLayout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Navigation Bar */}
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ minHeight: 64, px: { xs: 0 } }}>
            {/* Logo */}
            <Box sx={{ flexGrow: 0, mr: 4 }}>
              <Logo onClick={() => navigate('/')} size="medium" />
            </Box>

            {/* Navigation Links */}
            <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: location.pathname === item.path ? colors.accent.primary : 'text.secondary',
                    fontWeight: location.pathname === item.path ? 600 : 500,
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: colors.accent.primary,
                      bgcolor: alpha(colors.accent.primary, 0.1),
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Right side actions */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="contained"
                onClick={() => navigate('/pricing')}
                sx={{
                  background: `linear-gradient(135deg, ${colors.accent.primary} 0%, ${colors.accent.secondary} 100%)`,
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 3,
                  '&:hover': {
                    background: `linear-gradient(135deg, ${colors.accent.primary} 20%, ${colors.accent.secondary} 100%)`,
                  },
                }}
              >
                Get AlekosTrader
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: 8,
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <Outlet />
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 6,
          px: 2,
          mt: 'auto',
          bgcolor: colors.background.secondary,
          borderTop: `1px solid ${colors.border.default}`,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: 4,
            }}
          >
            {/* Brand */}
            <Box sx={{ maxWidth: 300 }}>
              <Logo size="medium" showTagline />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Professional trading tool for experienced traders. Define your strategies, backtest with simulation, then execute.
              </Typography>
            </Box>

            {/* Links */}
            <Box sx={{ display: 'flex', gap: 6 }}>
              <Box>
                <Typography variant="subtitle2" color="text.primary" sx={{ mb: 2, fontWeight: 600 }}>
                  Product
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link href="/features" color="text.secondary" underline="hover" sx={{ fontSize: '0.875rem' }}>
                    Features
                  </Link>
                  <Link href="/pricing" color="text.secondary" underline="hover" sx={{ fontSize: '0.875rem' }}>
                    Pricing
                  </Link>
                  <Link href="/docs" color="text.secondary" underline="hover" sx={{ fontSize: '0.875rem' }}>
                    Documentation
                  </Link>
                  <Link href="/alk" color="text.secondary" underline="hover" sx={{ fontSize: '0.875rem' }}>
                    $ALK Token
                  </Link>
                </Box>
              </Box>

              <Box>
                <Typography variant="subtitle2" color="text.primary" sx={{ mb: 2, fontWeight: 600 }}>
                  Company
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link href="#" color="text.secondary" underline="hover" sx={{ fontSize: '0.875rem' }}>
                    About
                  </Link>
                  <Link href="#" color="text.secondary" underline="hover" sx={{ fontSize: '0.875rem' }}>
                    Blog
                  </Link>
                  <Link href="#" color="text.secondary" underline="hover" sx={{ fontSize: '0.875rem' }}>
                    Contact
                  </Link>
                </Box>
              </Box>

              <Box>
                <Typography variant="subtitle2" color="text.primary" sx={{ mb: 2, fontWeight: 600 }}>
                  Legal
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Link href="#" color="text.secondary" underline="hover" sx={{ fontSize: '0.875rem' }}>
                    Privacy Policy
                  </Link>
                  <Link href="#" color="text.secondary" underline="hover" sx={{ fontSize: '0.875rem' }}>
                    Terms of Service
                  </Link>
                  <Link href="#" color="text.secondary" underline="hover" sx={{ fontSize: '0.875rem' }}>
                    Risk Disclosure
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Bottom bar */}
          <Box
            sx={{
              mt: 6,
              pt: 3,
              borderTop: `1px solid ${colors.border.default}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {new Date().getFullYear()} AlekosTrader. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton size="small" sx={{ color: 'text.secondary' }}>
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PublicLayout;
