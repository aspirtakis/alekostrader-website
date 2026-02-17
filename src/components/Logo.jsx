import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../theme/tradingTheme';

const Logo = ({
  onClick,
  showTagline = false,
  size = 'medium' // 'small', 'medium', 'large'
}) => {
  const sizes = {
    small: { icon: 28, title: '1rem', tagline: '0.625rem' },
    medium: { icon: 36, title: '1.25rem', tagline: '0.7rem' },
    large: { icon: 48, title: '1.75rem', tagline: '0.8rem' },
  };

  const currentSize = sizes[size] || sizes.medium;

  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
      }}
    >
      {/* ALK Token Logo */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: currentSize.icon,
          height: currentSize.icon,
          borderRadius: '50%',
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${colors.accent.primary} 0%, ${colors.accent.secondary} 100%)`,
          padding: '3px',
        }}
      >
        <img
          src="/alk-token.png"
          alt="ALK"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
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
            Powered by ALK Token
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Logo;
