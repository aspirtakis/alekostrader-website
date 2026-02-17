/**
 * ArchitecturePage - Visual architecture diagram and technology overview
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
import { alpha } from '@mui/material/styles';
import {
  Storage as DatabaseIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  SmartToy as BotIcon,
  ShowChart as ChartIcon,
  AccountBalance as ExchangeIcon,
  Devices as DevicesIcon,
  Memory as RaspberryIcon,
  Code as CodeIcon,
  Api as ApiIcon,
  Hub as HubIcon,
  Lock as LockIcon,
  Sync as SyncIcon,
  Analytics as AnalyticsIcon,
  Notifications as NotificationsIcon,
  TrendingUp as TrendingIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { colors } from '../theme/tradingTheme';

// Technology categories with colors
const techCategories = {
  frontend: { color: '#61DAFB', label: 'Frontend' },
  backend: { color: '#68A063', label: 'Backend' },
  database: { color: '#336791', label: 'Database' },
  exchange: { color: '#F7931A', label: 'Exchanges' },
  infra: { color: '#9945FF', label: 'Infrastructure' },
};

// Technology stack
const technologies = [
  { name: 'React', category: 'frontend', icon: '⚛️' },
  { name: 'Material UI', category: 'frontend', icon: '🎨' },
  { name: 'Zustand', category: 'frontend', icon: '🐻' },
  { name: 'Socket.IO', category: 'frontend', icon: '🔌' },
  { name: 'Node.js', category: 'backend', icon: '🟢' },
  { name: 'Express', category: 'backend', icon: '🚀' },
  { name: 'WebSocket', category: 'backend', icon: '📡' },
  { name: 'SQLite', category: 'database', icon: '🗄️' },
  { name: 'Coinbase API', category: 'exchange', icon: '💰' },
  { name: 'Binance API', category: 'exchange', icon: '📊' },
  { name: 'Bitvavo API', category: 'exchange', icon: '🔷' },
  { name: 'KuCoin API', category: 'exchange', icon: '🟡' },
  { name: 'Raspberry Pi', category: 'infra', icon: '🍓' },
  { name: 'Docker', category: 'infra', icon: '🐳' },
  { name: 'Linux', category: 'infra', icon: '🐧' },
];

// Architecture layers
const architectureLayers = [
  {
    title: 'Your Device',
    subtitle: 'Browser / Mobile',
    icon: DevicesIcon,
    color: '#61DAFB',
    items: ['React Dashboard', 'Real-time Charts', 'Bot Controls', 'Portfolio View'],
  },
  {
    title: 'AlekosTrader Core',
    subtitle: 'Self-Hosted Server',
    icon: HubIcon,
    color: '#68A063',
    items: ['Trading Engine', 'Strategy Executor', 'WebSocket Server', 'REST API'],
  },
  {
    title: 'Data Layer',
    subtitle: 'Local Database',
    icon: DatabaseIcon,
    color: '#336791',
    items: ['Trade History', 'Bot Configs', 'Strategies', 'Analytics'],
  },
  {
    title: 'Exchanges',
    subtitle: 'Direct API Connection',
    icon: ExchangeIcon,
    color: '#F7931A',
    items: ['Coinbase', 'Binance', 'Bitvavo', 'KuCoin'],
  },
];

// Bot types
const botTypes = [
  {
    name: 'DCA Bot',
    description: 'Dollar Cost Averaging - Automated periodic buying',
    icon: '📅',
    color: '#4CAF50',
    features: ['Scheduled buys', 'Multiple intervals', 'Smart timing'],
  },
  {
    name: 'Grid Bot',
    description: 'Grid Trading - Profit from market volatility',
    icon: '📊',
    color: '#2196F3',
    features: ['Price grid levels', 'Auto rebalancing', 'Range trading'],
  },
  {
    name: 'Strateger',
    description: 'Strategy Builder - Custom rule-based trading',
    icon: '🧠',
    color: '#9C27B0',
    features: ['Custom indicators', 'Multi-condition', 'Backtesting'],
  },
  {
    name: 'Closer',
    description: 'Position Manager - Smart profit taking',
    icon: '🎯',
    color: '#FF9800',
    features: ['Take profit targets', 'Tiered closing', 'Stop loss'],
  },
  {
    name: 'Bumper',
    description: 'Momentum Detector - Catch price pumps',
    icon: '🚀',
    color: '#E91E63',
    features: ['Pump detection', 'Quick entries', 'Auto exits'],
  },
];

// Security features
const securityFeatures = [
  { icon: LockIcon, title: 'Self-Hosted', description: 'Your server, your control' },
  { icon: SecurityIcon, title: 'API Keys Local', description: 'Keys never leave your device' },
  { icon: RaspberryIcon, title: 'Hardware Bound', description: 'License tied to your hardware' },
  { icon: CloudIcon, title: 'No Cloud Required', description: 'Works completely offline' },
];

// Hero Section
const HeroSection = () => (
  <Box
    sx={{
      py: 12,
      background: `linear-gradient(135deg, ${alpha(colors.accent.primary, 0.1)} 0%, ${alpha(colors.accent.secondary, 0.05)} 100%)`,
      borderBottom: `1px solid ${colors.border.default}`,
    }}
  >
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Chip
          label="SYSTEM ARCHITECTURE"
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
          How AlekosTrader Works
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: colors.text.secondary, maxWidth: 700, mx: 'auto' }}
        >
          A fully self-hosted trading platform that runs on your hardware,
          connecting directly to exchanges with your API keys
        </Typography>
      </Box>
    </Container>
  </Box>
);

// Architecture Flow Diagram
const ArchitectureFlowSection = () => (
  <Box sx={{ py: 10, bgcolor: colors.background.primary }}>
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', fontWeight: 700, mb: 6 }}
      >
        System Architecture
      </Typography>

      <Grid container spacing={3} alignItems="stretch">
        {architectureLayers.map((layer, index) => (
          <Grid item xs={12} md={3} key={layer.title}>
            <Box sx={{ position: 'relative', height: '100%' }}>
              {/* Connection Arrow */}
              {index < architectureLayers.length - 1 && (
                <Box
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    right: -24,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: colors.text.muted,
                    fontSize: '2rem',
                    zIndex: 1,
                  }}
                >
                  →
                </Box>
              )}

              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: alpha(layer.color, 0.1),
                  border: `2px solid ${alpha(layer.color, 0.3)}`,
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 40px ${alpha(layer.color, 0.2)}`,
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
                  }}
                >
                  <layer.icon sx={{ fontSize: 28, color: layer.color }} />
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

      {/* Data Flow Description */}
      <Box
        sx={{
          mt: 6,
          p: 4,
          borderRadius: 3,
          bgcolor: alpha(colors.accent.primary, 0.05),
          border: `1px solid ${colors.border.default}`,
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <SyncIcon sx={{ fontSize: 40, color: colors.accent.primary }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Real-Time Data Flow
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  WebSocket connections for instant updates
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <SpeedIcon sx={{ fontSize: 40, color: colors.trading.buy }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Low Latency Execution
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Direct exchange API connections
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LockIcon sx={{ fontSize: 40, color: colors.accent.secondary }} />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Secure by Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  All data stays on your hardware
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </Box>
);

// Trading Bots Section
const TradingBotsSection = () => (
  <Box
    sx={{
      py: 10,
      bgcolor: colors.background.secondary,
      borderTop: `1px solid ${colors.border.default}`,
      borderBottom: `1px solid ${colors.border.default}`,
    }}
  >
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          5 Powerful Trading Bots
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Each bot executes YOUR strategies - you define the rules, parameters, and risk levels
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {botTypes.map((bot) => (
          <Grid item xs={12} sm={6} md={4} key={bot.name}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                bgcolor: alpha(bot.color, 0.05),
                border: `1px solid ${alpha(bot.color, 0.2)}`,
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  borderColor: bot.color,
                  boxShadow: `0 12px 40px ${alpha(bot.color, 0.15)}`,
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

// Technology Stack Section
const TechStackSection = () => (
  <Box sx={{ py: 10, bgcolor: colors.background.primary }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Technology Stack
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Built with modern, battle-tested technologies
        </Typography>
      </Box>

      {/* Category Legend */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        flexWrap="wrap"
        useFlexGap
        sx={{ mb: 4 }}
      >
        {Object.entries(techCategories).map(([key, { color, label }]) => (
          <Chip
            key={key}
            label={label}
            sx={{
              bgcolor: alpha(color, 0.15),
              color: color,
              fontWeight: 600,
              border: `1px solid ${alpha(color, 0.3)}`,
            }}
          />
        ))}
      </Stack>

      {/* Tech Grid */}
      <Grid container spacing={2} justifyContent="center">
        {technologies.map((tech) => {
          const category = techCategories[tech.category];
          return (
            <Grid item key={tech.name}>
              <Paper
                sx={{
                  px: 3,
                  py: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  bgcolor: alpha(category.color, 0.08),
                  border: `1px solid ${alpha(category.color, 0.2)}`,
                  borderRadius: 2,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    borderColor: category.color,
                  },
                }}
              >
                <Box sx={{ fontSize: '1.2rem' }}>{tech.icon}</Box>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {tech.name}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  </Box>
);

// Security Section
const SecuritySection = () => (
  <Box
    sx={{
      py: 10,
      bgcolor: colors.background.secondary,
      borderTop: `1px solid ${colors.border.default}`,
    }}
  >
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Security First Architecture
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Your API keys and trading data never leave your server
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {securityFeatures.map((feature) => (
          <Grid item xs={12} sm={6} md={3} key={feature.title}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                bgcolor: alpha(colors.accent.secondary, 0.05),
                border: `1px solid ${colors.border.default}`,
                borderRadius: 3,
                height: '100%',
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  bgcolor: alpha(colors.accent.secondary, 0.15),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                }}
              >
                <feature.icon sx={{ fontSize: 32, color: colors.accent.secondary }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
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
          Run AlekosTrader wherever you want
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {[
          {
            icon: '🍓',
            title: 'Raspberry Pi',
            description: 'Low-power 24/7 operation. Perfect for home trading.',
            specs: ['4GB RAM minimum', 'Silent operation', '~5W power usage'],
            popular: true,
          },
          {
            icon: '🖥️',
            title: 'Home Server',
            description: 'Maximum performance on your own hardware.',
            specs: ['Full control', 'Any Linux/Windows', 'Unlimited resources'],
          },
          {
            icon: '☁️',
            title: 'VPS / Cloud',
            description: 'Deploy to any cloud provider worldwide.',
            specs: ['DigitalOcean', 'AWS / GCP', 'Always online'],
          },
        ].map((option) => (
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
      <ArchitectureFlowSection />
      <TradingBotsSection />
      <TechStackSection />
      <SecuritySection />
      <DeploymentSection />
    </Box>
  );
};

export default ArchitecturePage;
