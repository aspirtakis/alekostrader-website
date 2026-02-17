import React from 'react';
import { Box, Typography } from '@mui/material';
import { ShowChart as ChartIcon } from '@mui/icons-material';
import { colors } from '../theme/tradingTheme';

const Logo = ({
  onClick,
  showTagline = false,
  size = 'medium' // 'small', 'medium', 'large'
}) => {
  const sizes = {
    small: { icon: 20, title: '1rem', tagline: '0.625rem' },
    medium: { icon: 24, title: '1.25rem', tagline: '0.7rem' },
    large: { icon: 32, title: '1.75rem', tagline: '0.8rem' },
  };

  const currentSize = sizes[size] || sizes.medium;

  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: currentSize.icon + 8,
          height: currentSize.icon + 8,
          borderRadius: 1,
          background: `linear-gradient(135deg, ${colors.accent.primary} 0%, ${colors.accent.secondary} 100%)`,
        }}
      >
        <ChartIcon sx={{ fontSize: currentSize.icon, color: '#fff' }} />
      </Box>

      {/* Text */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: currentSize.title,
            background: `linear-gradient(135deg, ${colors.accent.primary} 0%, ${colors.accent.secondary} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}
        >
          AlekosTrader
        </Typography>
        {showTagline && (
          <Typography
            sx={{
              fontSize: currentSize.tagline,
              color: colors.text.secondary,
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            Professional Multi-Exchange Trading
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Logo;
