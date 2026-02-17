import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Stack,
  Divider,
  Link,
} from '@mui/material';
import { alpha, keyframes } from '@mui/material/styles';
import {
  ShowChart as ChartIcon,
  AccountBalance as ExchangeIcon,
  SmartToy as BotIcon,
  Timeline as IndicatorIcon,
  PieChart as AnalyticsIcon,
  Build as BuildIcon,
  NotificationsActive as AlertIcon,
  LinkOutlined as ConnectIcon,
  Settings as ConfigureIcon,
  TrendingUp as GrowIcon,
  ArrowForward as ArrowIcon,
  Storage as ServerIcon,
  Memory as RaspberryPiIcon,
  Cloud as CloudIcon,
  CloudOff as NoCloudIcon,
  Security as SecurityIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';
import { colors } from '../theme/tradingTheme';

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Feature data
const features = [
  {
    icon: ExchangeIcon,
    title: 'Multi-Exchange Support',
    description: 'Connect to Coinbase, Bitvavo, Binance, KuCoin and more. You choose where to trade.',
  },
  {
    icon: BotIcon,
    title: 'Execute Your Strategies',
    description: 'Deploy up to 5 bots running YOUR strategies - DCA, Grid, or custom rules you define.',
  },
  {
    icon: BuildIcon,
    title: 'Professional Trading Tool',
    description: 'Like a precision screwdriver for traders. You set the parameters, the tool executes.',
  },
  {
    icon: AnalyticsIcon,
    title: 'Portfolio Analytics',
    description: 'Track your decisions with real-time P&L, performance metrics, and allocation views.',
  },
  {
    icon: SecurityIcon,
    title: 'Your Keys, Your Control',
    description: 'Self-hosted on your hardware. Your API keys, your strategies, your responsibility.',
  },
  {
    icon: AlertIcon,
    title: 'Real-time Monitoring',
    description: 'Get notified when your conditions are met. You decide what matters.',
  },
];

// Deployment options data
const deploymentOptions = [
  {
    icon: ServerIcon,
    title: 'On-Premise Server',
    description: 'Run on your own hardware with full control over your trading infrastructure.',
    features: ['Maximum security', 'Custom hardware', 'Enterprise-grade'],
  },
  {
    icon: RaspberryPiIcon,
    title: 'Raspberry Pi',
    description: 'Perfect for 24/7 low-power operation. Run your bots on a $50 device.',
    features: ['Low power usage', 'Silent operation', 'Cost effective'],
    badge: 'Popular',
  },
  {
    icon: CloudIcon,
    title: 'Self-Hosted VPS',
    description: 'Deploy to any VPS provider like DigitalOcean, Linode, or AWS.',
    features: ['Always online', 'Global locations', 'Easy setup'],
  },
];

// Pricing tiers data
const pricingTiers = [
  {
    name: 'Starter',
    price: '$49',
    period: 'one-time',
    description: 'Perfect for getting started with automated trading',
    features: ['2 Trading Bots', '1 Exchange', 'Basic Analytics', 'Email Support'],
  },
  {
    name: 'Pro',
    price: '$149',
    period: 'one-time',
    description: 'For serious traders who want more power',
    features: ['5 Trading Bots', '4 Exchanges', 'Advanced Analytics', 'Priority Support', 'Strategy Builder'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$399',
    period: 'one-time',
    description: 'Unlimited power for professional traders',
    features: ['Unlimited Bots', 'All Exchanges', 'Full Analytics Suite', '24/7 Support', 'Custom Strategies', 'API Access'],
  },
];

// How it works steps
const steps = [
  {
    icon: ConnectIcon,
    title: 'Connect Your Exchange',
    description: 'Link your exchange with API keys. Your funds stay on the exchange, under your control.',
  },
  {
    icon: ConfigureIcon,
    title: 'Define Your Strategy',
    description: 'You set the rules, parameters, and risk levels. The tool executes what YOU define.',
  },
  {
    icon: AnalyticsIcon,
    title: 'Monitor & Adjust',
    description: 'Track performance, analyze results, and refine your approach. You are in control.',
  },
];

// Hero Section Component
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `radial-gradient(ellipse at top right, ${alpha(colors.accent.primary, 0.2)} 0%, transparent 50%),
                     radial-gradient(ellipse at bottom left, ${alpha(colors.accent.secondary, 0.15)} 0%, transparent 50%),
                     ${colors.background.primary}`,
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(colors.accent.primary, 0.1)} 0%, transparent 70%)`,
          top: '10%',
          right: '10%',
          animation: `${float} 6s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(colors.accent.secondary, 0.1)} 0%, transparent 70%)`,
          bottom: '20%',
          left: '5%',
          animation: `${float} 8s ease-in-out infinite`,
          animationDelay: '-2s',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box sx={{ animation: `${float} 10s ease-in-out infinite` }}>
              <Typography
                variant="overline"
                sx={{
                  color: colors.accent.primary,
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 2,
                  display: 'block',
                }}
              >
                PROFESSIONAL TRADING TOOL
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: 3,
                  background: `linear-gradient(135deg, ${colors.text.primary} 0%, ${colors.accent.primary} 50%, ${colors.accent.secondary} 100%)`,
                  backgroundSize: '200% 200%',
                  animation: `${gradientShift} 5s ease infinite`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Your Strategies. Your Decisions. Your Control.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: colors.text.secondary,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  mb: 2,
                  maxWidth: 550,
                }}
              >
                A professional trading tool for experienced traders. Define your own strategies,
                backtest with realistic simulation, then execute manually or automated.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: colors.text.muted,
                  fontWeight: 500,
                  mb: 4,
                  maxWidth: 500,
                  p: 1.5,
                  borderRadius: 1,
                  bgcolor: alpha(colors.trading.sell, 0.1),
                  border: `1px solid ${alpha(colors.trading.sell, 0.2)}`,
                }}
              >
                AlekosTrader is a tool - not financial advice. All trading decisions and outcomes
                are your responsibility. Test your strategies with our backtesting before going live.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/pricing')}
                  endIcon={<ArrowIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontWeight: 600,
                    fontSize: '1rem',
                    background: `linear-gradient(135deg, ${colors.accent.primary} 0%, ${colors.accent.secondary} 100%)`,
                    boxShadow: `0 4px 20px ${alpha(colors.accent.primary, 0.4)}`,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${colors.accent.primary} 20%, ${colors.accent.secondary} 100%)`,
                      boxShadow: `0 6px 30px ${alpha(colors.accent.primary, 0.5)}`,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get AlekosTrader
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/features')}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderColor: alpha(colors.accent.primary, 0.5),
                    color: colors.accent.primary,
                    '&:hover': {
                      borderColor: colors.accent.primary,
                      bgcolor: alpha(colors.accent.primary, 0.1),
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Features
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${alpha(colors.accent.primary, 0.2)} 0%, ${alpha(colors.accent.secondary, 0.2)} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: `${pulse} 3s ease-in-out infinite`,
                  border: `2px solid ${alpha(colors.accent.primary, 0.3)}`,
                  boxShadow: `0 0 60px ${alpha(colors.accent.primary, 0.3)}`,
                }}
              >
                <ChartIcon sx={{ fontSize: 120, color: colors.accent.primary }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Features Section Component
const FeaturesSection = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: colors.background.secondary,
        borderTop: `1px solid ${colors.border.default}`,
        borderBottom: `1px solid ${colors.border.default}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: colors.accent.primary,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: 'block',
            }}
          >
            FEATURES
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Professional Tools for Serious Traders
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.text.secondary,
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            AlekosTrader is like a high-quality screwdriver - it helps you execute YOUR strategies
            with precision. You define the rules, set the parameters, and take responsibility for
            your trading decisions. Test with our realistic backtesting before going live.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: alpha(colors.background.paper, 0.6),
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 40px ${alpha(colors.accent.primary, 0.15)}`,
                    borderColor: colors.accent.primary,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    bgcolor: alpha(colors.accent.primary, 0.15),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <feature.icon sx={{ fontSize: 28, color: colors.accent.primary }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Deployment Options Section Component
const DeploymentSection = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: colors.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
            <Box
              sx={{
                px: 2,
                py: 0.5,
                borderRadius: 2,
                bgcolor: alpha(colors.accent.primary, 0.15),
                border: `1px solid ${alpha(colors.accent.primary, 0.3)}`,
              }}
            >
              <Typography variant="caption" sx={{ color: colors.accent.primary, fontWeight: 600 }}>
                Self-Hosted
              </Typography>
            </Box>
            <Box
              sx={{
                px: 2,
                py: 0.5,
                borderRadius: 2,
                bgcolor: alpha(colors.trading.sell, 0.15),
                border: `1px solid ${alpha(colors.trading.sell, 0.3)}`,
              }}
            >
              <Stack direction="row" spacing={0.5} alignItems="center">
                <NoCloudIcon sx={{ fontSize: 14, color: colors.trading.sell }} />
                <Typography variant="caption" sx={{ color: colors.trading.sell, fontWeight: 600 }}>
                  No Cloud Required
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Run It Your Way
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: colors.text.secondary,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Your keys, your server, your control
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {deploymentOptions.map((option, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: alpha(colors.background.secondary, 0.8),
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 40px ${alpha(colors.accent.primary, 0.15)}`,
                    borderColor: colors.accent.primary,
                  },
                }}
              >
                {option.badge && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      bgcolor: colors.accent.secondary,
                      color: colors.background.primary,
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    {option.badge}
                  </Box>
                )}
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 2,
                    bgcolor: alpha(colors.accent.primary, 0.15),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <option.icon sx={{ fontSize: 32, color: colors.accent.primary }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5 }}>
                  {option.title}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.secondary, mb: 3 }}>
                  {option.description}
                </Typography>
                <Stack spacing={1}>
                  {option.features.map((feature, i) => (
                    <Stack key={i} direction="row" spacing={1} alignItems="center">
                      <CheckIcon sx={{ fontSize: 16, color: colors.trading.buy }} />
                      <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// How It Works Section Component
const HowItWorksSection = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: colors.background.primary,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: colors.accent.secondary,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: 'block',
            }}
          >
            HOW IT WORKS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            You Control Every Step
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.text.secondary,
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            Connect, configure, and execute - all on your terms
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {steps.map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  position: 'relative',
                  height: '100%',
                }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      position: 'absolute',
                      top: 50,
                      right: -60,
                      width: 120,
                      height: 2,
                      background: `linear-gradient(90deg, ${colors.accent.primary}, ${colors.accent.secondary})`,
                      opacity: 0.3,
                    }}
                  />
                )}

                {/* Step number */}
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${alpha(colors.accent.primary, 0.2)} 0%, ${alpha(colors.accent.secondary, 0.2)} 100%)`,
                    border: `2px solid ${alpha(colors.accent.primary, 0.3)}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                    position: 'relative',
                  }}
                >
                  <step.icon sx={{ fontSize: 40, color: colors.accent.primary }} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -8,
                      right: -8,
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      bgcolor: colors.accent.secondary,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.875rem',
                    }}
                  >
                    {index + 1}
                  </Box>
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                  {step.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.text.secondary,
                    maxWidth: 280,
                    mx: 'auto',
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Pricing Preview Section Component
const PricingPreviewSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: colors.background.secondary,
        borderTop: `1px solid ${colors.border.default}`,
        borderBottom: `1px solid ${colors.border.default}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box
            sx={{
              display: 'inline-block',
              px: 2,
              py: 0.5,
              borderRadius: 2,
              bgcolor: alpha(colors.trading.buy, 0.15),
              border: `1px solid ${alpha(colors.trading.buy, 0.3)}`,
              mb: 3,
            }}
          >
            <Typography variant="caption" sx={{ color: colors.trading.buy, fontWeight: 600 }}>
              One-Time Purchase - No Subscriptions
            </Typography>
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Simple, Transparent Pricing
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.text.secondary,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Pay once, own forever. No monthly fees, no hidden costs.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {pricingTiers.map((tier, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: tier.popular
                    ? alpha(colors.accent.primary, 0.1)
                    : alpha(colors.background.paper, 0.6),
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  position: 'relative',
                  border: tier.popular
                    ? `2px solid ${colors.accent.primary}`
                    : `1px solid ${colors.border.default}`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 40px ${alpha(colors.accent.primary, 0.15)}`,
                  },
                }}
              >
                {tier.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      bgcolor: colors.accent.primary,
                      color: colors.background.primary,
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    Most Popular
                  </Box>
                )}
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {tier.name}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: tier.popular ? colors.accent.primary : colors.text.primary,
                    }}
                  >
                    {tier.price}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      color: colors.text.secondary,
                      ml: 1,
                    }}
                  >
                    {tier.period}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: colors.text.secondary, mb: 3 }}>
                  {tier.description}
                </Typography>
                <Divider sx={{ mb: 3, borderColor: colors.border.default }} />
                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  {tier.features.map((feature, i) => (
                    <Stack key={i} direction="row" spacing={1} alignItems="center">
                      <CheckIcon sx={{ fontSize: 18, color: colors.trading.buy }} />
                      <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
                <Button
                  variant={tier.popular ? 'contained' : 'outlined'}
                  fullWidth
                  onClick={() => navigate('/pricing')}
                  sx={{
                    py: 1.5,
                    fontWeight: 600,
                    ...(tier.popular && {
                      background: `linear-gradient(135deg, ${colors.accent.primary} 0%, ${colors.accent.secondary} 100%)`,
                      boxShadow: `0 4px 20px ${alpha(colors.accent.primary, 0.4)}`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${colors.accent.primary} 20%, ${colors.accent.secondary} 100%)`,
                      },
                    }),
                    ...(!tier.popular && {
                      borderColor: alpha(colors.accent.primary, 0.5),
                      color: colors.accent.primary,
                      '&:hover': {
                        borderColor: colors.accent.primary,
                        bgcolor: alpha(colors.accent.primary, 0.1),
                      },
                    }),
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Started
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Footer Component
const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = {
    Product: [
      { label: 'Features', path: '/features' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Dashboard', path: '/login' },
      { label: '$ALK Token', path: '/alk' },
    ],
    Resources: [
      { label: 'Documentation', path: '/docs' },
      { label: 'API Reference', path: '/api' },
      { label: 'Blog', path: '/blog' },
    ],
    Company: [
      { label: 'About', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Careers', path: '/careers' },
    ],
    Legal: [
      { label: 'Privacy', path: '/privacy' },
      { label: 'Terms', path: '/terms' },
      { label: 'Security', path: '/security' },
    ],
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 8,
        bgcolor: colors.background.primary,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 1,
                  bgcolor: alpha(colors.accent.primary, 0.15),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 1.5,
                }}
              >
                <ChartIcon sx={{ fontSize: 24, color: colors.accent.primary }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${colors.accent.primary} 0%, ${colors.accent.secondary} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AlekosTrader
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: colors.text.secondary, maxWidth: 280 }}>
              Professional trading tool for experienced traders. Define your strategies, backtest, then execute.
            </Typography>
          </Grid>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={6} sm={3} md={2} key={category}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 2, color: colors.text.primary }}
              >
                {category}
              </Typography>
              <Stack spacing={1}>
                {links.map((link) => (
                  <Link
                    key={link.label}
                    component="button"
                    variant="body2"
                    onClick={() => navigate(link.path)}
                    sx={{
                      color: colors.text.secondary,
                      textDecoration: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      '&:hover': {
                        color: colors.accent.primary,
                      },
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: colors.border.default }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: colors.text.muted }}>
            {new Date().getFullYear()} AlekosTrader. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: colors.text.muted }}>
            Powered by Multi-Exchange APIs
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

// Disclaimer Section Component
const DisclaimerSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: alpha(colors.trading.sell, 0.05),
        borderTop: `1px solid ${alpha(colors.trading.sell, 0.2)}`,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: colors.text.primary,
            }}
          >
            Important: This Is A Tool, Not Financial Advice
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body1" sx={{ color: colors.text.secondary }}>
              <strong>AlekosTrader is a professional trading tool</strong> designed for experienced traders
              who understand cryptocurrency markets and trading risks. It is NOT a "set and forget" money-making machine.
            </Typography>
            <Typography variant="body1" sx={{ color: colors.text.secondary }}>
              <strong>You are fully responsible</strong> for all trading decisions, strategy configurations,
              and any resulting profits or losses. AlekosTrader and its creators bear no responsibility
              for your trading outcomes.
            </Typography>
            <Typography variant="body1" sx={{ color: colors.text.secondary }}>
              <strong>Always test your strategies</strong> using our realistic backtesting and simulation
              features before deploying with real funds. Past performance does not guarantee future results.
            </Typography>
            <Box
              sx={{
                mt: 3,
                p: 2,
                borderRadius: 2,
                bgcolor: alpha(colors.trading.sell, 0.1),
                border: `1px solid ${alpha(colors.trading.sell, 0.3)}`,
              }}
            >
              <Typography variant="body2" sx={{ color: colors.text.secondary, fontStyle: 'italic' }}>
                "AlekosTrader is like a precision screwdriver - it helps you execute YOUR strategies efficiently.
                But just like a screwdriver doesn't build the furniture for you, AlekosTrader doesn't make
                trading decisions for you. You define the rules. You set the parameters. You own the results."
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

// Main Landing Page Component
const LandingPage = () => {
  return (
    <Box sx={{ bgcolor: colors.background.primary, minHeight: '100vh' }}>
      <HeroSection />
      <FeaturesSection />
      <DeploymentSection />
      <HowItWorksSection />
      <PricingPreviewSection />
      <DisclaimerSection />
      <Footer />
    </Box>
  );
};

export default LandingPage;
