/**
 * ArchitecturePage - Visual architecture with animations showing security and user control
 */

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
} from '@mui/material';
import { alpha, keyframes } from '@mui/material/styles';
import {
  Storage as DatabaseIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  AccountBalance as ExchangeIcon,
  Devices as DevicesIcon,
  Memory as RaspberryIcon,
  Hub as HubIcon,
  Lock as LockIcon,
  Sync as SyncIcon,
  Shield as ShieldIcon,
  VpnKey as KeyIcon,
  Home as HomeIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';
import { colors } from '../theme/tradingTheme';

// Keyframe animations
const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 200, 150, 0.3);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 200, 150, 0.6);
    transform: scale(1.02);
  }
`;

const dataFlow = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const shieldPulse = keyframes`
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 10px rgba(0, 200, 150, 0.5));
  }
  50% {
    transform: scale(1.1);
    filter: drop-shadow(0 0 25px rgba(0, 200, 150, 0.8));
  }
`;

const lockRotate = keyframes`
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
`;

const connectionPulse = keyframes`
  0% {
    stroke-dashoffset: 100;
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.3;
  }
`;

const ripple = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

// Architecture layers
const architectureLayers = [
  {
    title: 'Client Interface',
    subtitle: 'Web / Mobile Application',
    icon: DevicesIcon,
    color: '#61DAFB',
    items: ['React SPA Dashboard', 'Real-time WebSocket Charts', 'Bot Management Console', 'Portfolio Analytics'],
  },
  {
    title: 'Execution Engine',
    subtitle: 'Self-Hosted Node.js Runtime',
    icon: HubIcon,
    color: '#68A063',
    items: ['Order Execution Engine', 'Strategy State Machine', 'WebSocket Pub/Sub Server', 'RESTful API Gateway'],
  },
  {
    title: 'Persistence Layer',
    subtitle: 'SQLite / PostgreSQL',
    icon: DatabaseIcon,
    color: '#336791',
    items: ['Trade Execution Logs', 'Algorithm Configurations', 'Strategy Parameters', 'Performance Metrics'],
  },
  {
    title: 'Exchange Connectivity',
    subtitle: 'Direct API Integration',
    icon: ExchangeIcon,
    color: '#F7931A',
    items: ['Coinbase Advanced', 'Binance Spot/Futures', 'Bitvavo', 'KuCoin'],
  },
];

// Bot types
const botTypes = [
  {
    name: 'DCA Engine',
    description: 'Systematic accumulation algorithm with configurable time-weighted average pricing',
    icon: '📅',
    color: '#4CAF50',
    features: ['Multi-asset', 'Cron scheduling', 'Variance reduction'],
  },
  {
    name: 'Grid Engine',
    description: 'Range-bound market maker capturing bid-ask spread across defined price levels',
    icon: '📊',
    color: '#2196F3',
    features: ['Multi-asset', 'Dynamic grid spacing', 'Auto-rebalancing'],
  },
  {
    name: 'Strateger Engine',
    description: 'Rule-based execution framework with custom indicator composition and backtesting',
    icon: '🧠',
    color: '#9C27B0',
    features: ['Multi-asset', 'Technical indicators', 'Historical validation'],
  },
  {
    name: 'Closer Engine',
    description: 'Position management system with tiered profit-taking and trailing stop mechanics',
    icon: '🎯',
    color: '#FF9800',
    features: ['Multi-asset', 'Partial exits', 'Risk scaling'],
  },
  {
    name: 'Bumper Engine',
    description: 'Momentum detection algorithm for capturing rapid price movements with auto-exit logic',
    icon: '🚀',
    color: '#E91E63',
    features: ['Multi-asset', 'Volume analysis', 'Automated exits'],
  },
];

// Security control points
const securityPoints = [
  {
    icon: HomeIcon,
    title: 'On-Premise Deployment',
    description: 'Deploy on your infrastructure: dedicated server, Raspberry Pi, or local workstation. Zero cloud dependency.',
    color: '#4CAF50',
  },
  {
    icon: KeyIcon,
    title: 'Local Key Vault',
    description: 'API credentials secured with AES-256-GCM encryption at rest. Keys never leave your network perimeter.',
    color: '#2196F3',
  },
  {
    icon: DatabaseIcon,
    title: 'Data Sovereignty',
    description: 'Complete ownership of trade history, configurations, and analytics. Export or purge at will.',
    color: '#9C27B0',
  },
  {
    icon: VisibilityOffIcon,
    title: 'Zero Telemetry',
    description: 'No usage tracking, analytics collection, or external callbacks. Your trading activity remains private.',
    color: '#FF9800',
  },
];

// Hero Section with animated shield
const HeroSection = () => (
  <Box
    sx={{
      py: 12,
      background: `linear-gradient(135deg, ${alpha(colors.accent.primary, 0.1)} 0%, ${alpha(colors.accent.secondary, 0.05)} 100%)`,
      borderBottom: `1px solid ${colors.border.default}`,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Animated background particles */}
    {[...Array(6)].map((_, i) => (
      <Box
        key={i}
        sx={{
          position: 'absolute',
          width: 8,
          height: 8,
          borderRadius: '50%',
          bgcolor: alpha(colors.accent.primary, 0.3),
          animation: `${floatAnimation} ${3 + i * 0.5}s ease-in-out infinite`,
          top: `${20 + i * 15}%`,
          left: `${10 + i * 15}%`,
        }}
      />
    ))}

    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Chip
          label="INFRASTRUCTURE ARCHITECTURE"
          sx={{
            mb: 3,
            bgcolor: alpha(colors.accent.primary, 0.15),
            color: colors.accent.primary,
            fontWeight: 600,
          }}
        />
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 800,
            mb: 2,
            background: `linear-gradient(135deg, ${colors.text.primary} 0%, ${colors.accent.primary} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Self-Sovereign Trading Infrastructure
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: colors.text.secondary, maxWidth: 700, mx: 'auto', mb: 4 }}
        >
          On-premise deployment. Non-custodial architecture. Your credentials, your database, your execution environment.
          AlekosTrader operates exclusively within your network perimeter.
        </Typography>

        {/* Animated Shield */}
        <Box
          sx={{
            width: 120,
            height: 120,
            mx: 'auto',
            position: 'relative',
            animation: `${shieldPulse} 3s ease-in-out infinite`,
          }}
        >
          <ShieldIcon
            sx={{
              fontSize: 120,
              color: colors.accent.primary,
            }}
          />
          <LockIcon
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: 40,
              color: colors.background.primary,
            }}
          />
        </Box>
      </Box>
    </Container>
  </Box>
);

// Animated connection line component
const ConnectionLine = ({ delay = 0 }) => (
  <Box
    sx={{
      position: 'absolute',
      right: -30,
      top: '50%',
      width: 60,
      height: 4,
      display: { xs: 'none', md: 'block' },
      overflow: 'hidden',
      zIndex: 1,
    }}
  >
    {/* Static line */}
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: 2,
        top: '50%',
        transform: 'translateY(-50%)',
        bgcolor: alpha(colors.accent.primary, 0.2),
        borderRadius: 1,
      }}
    />
    {/* Animated pulse */}
    <Box
      sx={{
        position: 'absolute',
        width: 20,
        height: 4,
        borderRadius: 2,
        background: `linear-gradient(90deg, transparent, ${colors.accent.primary}, transparent)`,
        animation: `${dataFlow} 2s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  </Box>
);

// Architecture Flow with animated connections
const ArchitectureFlowSection = () => (
  <Box sx={{ py: 10, bgcolor: colors.background.primary }}>
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', fontWeight: 700, mb: 2 }}
      >
        System Architecture Overview
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: 'center', color: colors.text.secondary, mb: 6, maxWidth: 600, mx: 'auto' }}
      >
        End-to-end TLS encryption on all external connections. All data persisted locally within your infrastructure boundary.
      </Typography>

      <Grid container spacing={3} alignItems="stretch">
        {architectureLayers.map((layer, index) => (
          <Grid item xs={12} md={3} key={layer.title}>
            <Box sx={{ position: 'relative', height: '100%' }}>
              {/* Animated Connection */}
              {index < architectureLayers.length - 1 && (
                <ConnectionLine delay={index * 0.5} />
              )}

              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: alpha(layer.color, 0.1),
                  border: `2px solid ${alpha(layer.color, 0.3)}`,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  animation: `${pulseGlow} ${4 + index}s ease-in-out infinite`,
                  animationDelay: `${index * 0.3}s`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 60px ${alpha(layer.color, 0.3)}`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    bgcolor: alpha(layer.color, 0.2),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    position: 'relative',
                  }}
                >
                  <layer.icon sx={{ fontSize: 28, color: layer.color }} />
                  {/* Security indicator */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -4,
                      right: -4,
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      bgcolor: colors.trading.buy,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LockIcon sx={{ fontSize: 10, color: '#fff' }} />
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {layer.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: colors.text.muted, display: 'block', mb: 2 }}
                >
                  {layer.subtitle}
                </Typography>
                <Stack spacing={1}>
                  {layer.items.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        bgcolor: alpha(layer.color, 0.1),
                        fontSize: '0.8rem',
                        color: colors.text.secondary,
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Encrypted connection indicator */}
      <Box
        sx={{
          mt: 6,
          p: 4,
          borderRadius: 3,
          bgcolor: alpha(colors.trading.buy, 0.1),
          border: `2px solid ${alpha(colors.trading.buy, 0.3)}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            animation: `${floatAnimation} 2s ease-in-out infinite`,
          }}
        >
          <LockIcon sx={{ color: colors.trading.buy, fontSize: 32 }} />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 600, color: colors.trading.buy }}>
          TLS 1.3 Encryption • No External Dependencies • Air-Gapped Operation Capable
        </Typography>
      </Box>
    </Container>
  </Box>
);

// YOU Control Everything Section
const ControlSection = () => (
  <Box
    sx={{
      py: 10,
      bgcolor: colors.background.secondary,
      borderTop: `1px solid ${colors.border.default}`,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Background animated ripples */}
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 400,
        borderRadius: '50%',
        border: `2px solid ${alpha(colors.accent.primary, 0.1)}`,
        animation: `${ripple} 4s ease-out infinite`,
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 400,
        borderRadius: '50%',
        border: `2px solid ${alpha(colors.accent.primary, 0.1)}`,
        animation: `${ripple} 4s ease-out infinite`,
        animationDelay: '1s',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 400,
        borderRadius: '50%',
        border: `2px solid ${alpha(colors.accent.primary, 0.1)}`,
        animation: `${ripple} 4s ease-out infinite`,
        animationDelay: '2s',
      }}
    />

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 2,
            background: `linear-gradient(135deg, ${colors.accent.primary} 0%, ${colors.accent.secondary} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Complete Operational Control
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          No intermediary services. No cloud dependencies. No third-party data access.
          Full sovereignty over your trading infrastructure and execution environment.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {securityPoints.map((point, index) => (
          <Grid item xs={12} sm={6} md={3} key={point.title}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                textAlign: 'center',
                bgcolor: alpha(point.color, 0.05),
                border: `2px solid ${alpha(point.color, 0.2)}`,
                borderRadius: 4,
                transition: 'all 0.3s ease',
                animation: `${floatAnimation} ${3 + index * 0.3}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
                '&:hover': {
                  transform: 'scale(1.05)',
                  borderColor: point.color,
                  boxShadow: `0 20px 60px ${alpha(point.color, 0.2)}`,
                },
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  bgcolor: alpha(point.color, 0.15),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3,
                  position: 'relative',
                }}
              >
                <point.icon sx={{ fontSize: 40, color: point.color }} />
                <CheckIcon
                  sx={{
                    position: 'absolute',
                    bottom: -4,
                    right: -4,
                    fontSize: 24,
                    color: colors.trading.buy,
                    bgcolor: colors.background.secondary,
                    borderRadius: '50%',
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: point.color }}>
                {point.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {point.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

// Trading Bots Section
const TradingBotsSection = () => (
  <Box
    sx={{
      py: 10,
      bgcolor: colors.background.primary,
      borderTop: `1px solid ${colors.border.default}`,
    }}
  >
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Algorithmic Execution Engines
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Five specialized trading algorithms with multi-asset support. Execute concurrent strategies across your configured pairs.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {botTypes.map((bot, index) => (
          <Grid item xs={12} sm={6} md={4} key={bot.name}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                bgcolor: alpha(bot.color, 0.05),
                border: `1px solid ${alpha(bot.color, 0.2)}`,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                animation: `${floatAnimation} ${3 + index * 0.2}s ease-in-out infinite`,
                animationDelay: `${index * 0.1}s`,
                '&:hover': {
                  transform: 'translateY(-8px)',
                  borderColor: bot.color,
                  boxShadow: `0 20px 50px ${alpha(bot.color, 0.2)}`,
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    bgcolor: alpha(bot.color, 0.15),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}
                >
                  {bot.icon}
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {bot.name}
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: colors.text.secondary, mb: 2 }}
              >
                {bot.description}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {bot.features.map((feature) => (
                  <Chip
                    key={feature}
                    label={feature}
                    size="small"
                    sx={{
                      bgcolor: alpha(bot.color, 0.1),
                      color: bot.color,
                      fontWeight: 500,
                      fontSize: '0.7rem',
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

// Security Visualization Section
const SecurityVisualization = () => (
  <Box
    sx={{
      py: 10,
      bgcolor: colors.background.secondary,
      borderTop: `1px solid ${colors.border.default}`,
    }}
  >
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Security Model Comparison
        </Typography>
      </Box>

      {/* Visual comparison */}
      <Grid container spacing={4}>
        {/* Traditional (Cloud) */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 4,
              bgcolor: alpha('#f44336', 0.05),
              border: `2px solid ${alpha('#f44336', 0.2)}`,
              borderRadius: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#f44336', textAlign: 'center' }}>
              Custodial Cloud Platforms
            </Typography>
            <Stack spacing={2}>
              {[
                'API credentials stored on third-party infrastructure',
                'Trade data persisted in external databases',
                'Potential exposure to platform breaches',
                'Service availability dependent on provider uptime',
                'Recurring subscription model',
              ].map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      bgcolor: alpha('#f44336', 0.2),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#f44336',
                      fontSize: '0.9rem',
                    }}
                  >
                    ✕
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>

        {/* AlekosTrader */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 4,
              bgcolor: alpha(colors.trading.buy, 0.05),
              border: `2px solid ${alpha(colors.trading.buy, 0.3)}`,
              borderRadius: 3,
              animation: `${pulseGlow} 3s ease-in-out infinite`,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 3, color: colors.trading.buy, textAlign: 'center' }}
            >
              AlekosTrader Non-Custodial
            </Typography>
            <Stack spacing={2}>
              {[
                'AES-256-GCM encrypted credentials on local storage',
                'SQLite/PostgreSQL database under your control',
                'Zero external data transmission',
                'Infrastructure availability determined by your SLA',
                'Perpetual license with annual maintenance option',
              ].map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      bgcolor: alpha(colors.trading.buy, 0.2),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: colors.trading.buy,
                      fontSize: '0.9rem',
                    }}
                  >
                    ✓
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      {/* Bottom message */}
      <Box
        sx={{
          mt: 6,
          p: 4,
          borderRadius: 3,
          background: `linear-gradient(135deg, ${alpha(colors.accent.primary, 0.1)} 0%, ${alpha(colors.accent.secondary, 0.1)} 100%)`,
          border: `1px solid ${colors.border.default}`,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 2,
            mb: 2,
          }}
        >
          <ShieldIcon sx={{ fontSize: 40, color: colors.accent.primary }} />
          <LockIcon sx={{ fontSize: 40, color: colors.accent.secondary }} />
          <HomeIcon sx={{ fontSize: 40, color: colors.trading.buy }} />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Non-Custodial by Design
        </Typography>
        <Typography variant="body1" color="text.secondary">
          AlekosTrader provides execution infrastructure. You retain complete sovereignty over credentials, data, and operations.
        </Typography>
      </Box>
    </Container>
  </Box>
);

// Deployment Options Section
const DeploymentSection = () => (
  <Box sx={{ py: 10, bgcolor: colors.background.primary }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Deployment Options
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Flexible deployment across bare metal, virtualized, or containerized environments
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {[
          {
            icon: '🍓',
            title: 'Edge Computing',
            description: 'Raspberry Pi 4 deployment for low-power continuous operation.',
            specs: ['ARM Cortex-A72 (4GB+ RAM)', 'Fanless silent operation', '~5W TDP'],
            popular: true,
          },
          {
            icon: '🖥️',
            title: 'Bare Metal Server',
            description: 'Maximum throughput on dedicated x86/x64 hardware.',
            specs: ['Full resource allocation', 'Linux / Windows Server', 'Custom storage configuration'],
          },
          {
            icon: '☁️',
            title: 'Cloud VPS',
            description: 'Virtual machine deployment on major cloud providers.',
            specs: ['DigitalOcean / Linode', 'AWS EC2 / GCP Compute', '99.9% uptime SLA available'],
          },
        ].map((option, index) => (
          <Grid item xs={12} md={4} key={option.title}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                position: 'relative',
                bgcolor: option.popular
                  ? alpha(colors.accent.primary, 0.08)
                  : colors.background.paper,
                border: `2px solid ${option.popular ? colors.accent.primary : colors.border.default}`,
                borderRadius: 3,
                animation: `${floatAnimation} ${3 + index * 0.3}s ease-in-out infinite`,
              }}
            >
              {option.popular && (
                <Chip
                  label="Most Popular"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: -12,
                    right: 16,
                    bgcolor: colors.accent.primary,
                    color: '#fff',
                    fontWeight: 600,
                  }}
                />
              )}
              <Box sx={{ fontSize: '3rem', mb: 2 }}>{option.icon}</Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                {option.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {option.description}
              </Typography>
              <Stack spacing={1}>
                {option.specs.map((spec) => (
                  <Box
                    key={spec}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      color: colors.text.secondary,
                      fontSize: '0.875rem',
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: colors.trading.buy,
                      }}
                    />
                    {spec}
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

// Main Component
const ArchitecturePage = () => {
  return (
    <Box sx={{ bgcolor: colors.background.primary, minHeight: '100vh' }}>
      <HeroSection />
      <ControlSection />
      <ArchitectureFlowSection />
      <TradingBotsSection />
      <SecurityVisualization />
      <DeploymentSection />
    </Box>
  );
};

export default ArchitecturePage;
