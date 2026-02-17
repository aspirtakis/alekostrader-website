import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  alpha,
} from '@mui/material';
import {
  AccountBalance as ExchangeIcon,
  SmartToy as BotIcon,
  ShowChart as AnalysisIcon,
  AccountBalanceWallet as PortfolioIcon,
  Build as BuilderIcon,
  CheckCircle as CheckIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  TrendingUp as TrendingIcon,
  Loop as DcaIcon,
  GridOn as GridIcon,
  Close as CloseIcon,
  TrendingUp as BumperIcon,
  Psychology as StrategyIcon,
  Timeline as TimelineIcon,
  Notifications as AlertIcon,
  Assessment as AssessmentIcon,
  History as HistoryIcon,
  Visibility as VisibilityIcon,
  Science as ScienceIcon,
  PlayArrow as PlayIcon,
} from '@mui/icons-material';
import { colors } from '../theme/tradingTheme';

// Feature section data
const featureSections = [
  {
    id: 'exchanges',
    icon: ExchangeIcon,
    title: 'Multi-Exchange Support',
    description: 'Connect and trade across multiple cryptocurrency exchanges from a single unified interface. Manage all your trading accounts in one place.',
    color: colors.accent.primary,
    benefits: [
      { icon: CheckIcon, text: 'Coinbase Advanced Trade integration' },
      { icon: CheckIcon, text: 'Bitvavo exchange support' },
      { icon: CheckIcon, text: 'Binance connectivity' },
      { icon: CheckIcon, text: 'KuCoin trading access' },
      { icon: SecurityIcon, text: 'Unified interface for all exchanges' },
      { icon: SecurityIcon, text: 'AES-256 encrypted API key storage' },
    ],
  },
  {
    id: 'bots',
    icon: BotIcon,
    title: 'Trading Bots',
    description: 'Automate your trading strategies with our suite of powerful trading bots. From simple DCA to advanced momentum detection.',
    color: colors.trading.buy,
    benefits: [
      { icon: DcaIcon, text: 'DCA Bot - Dollar Cost Averaging with customizable intervals' },
      { icon: GridIcon, text: 'Grid Bot - Profit from market volatility with grid trading' },
      { icon: CloseIcon, text: 'Closer Bot - Automated take-profit and position closing' },
      { icon: BumperIcon, text: 'Bumper Bot - Momentum detection and trend following' },
      { icon: StrategyIcon, text: 'Strateger Bot - Rule-based trading with custom conditions' },
    ],
  },
  {
    id: 'analysis',
    icon: AnalysisIcon,
    title: 'Technical Analysis',
    description: 'Access professional-grade technical analysis tools with over 15 indicators. Get real-time signals and set custom alerts for market movements.',
    color: colors.accent.secondary,
    benefits: [
      { icon: TimelineIcon, text: 'RSI, MACD, Bollinger Bands, Stochastic' },
      { icon: TimelineIcon, text: 'Moving Averages (SMA, EMA, WMA)' },
      { icon: TimelineIcon, text: 'Volume indicators and oscillators' },
      { icon: SpeedIcon, text: 'Real-time signal generation' },
      { icon: AlertIcon, text: 'Custom price and indicator alerts' },
      { icon: AssessmentIcon, text: 'Multi-timeframe analysis' },
    ],
  },
  {
    id: 'portfolio',
    icon: PortfolioIcon,
    title: 'Portfolio Management',
    description: 'Track your portfolio performance in real-time. Monitor positions, analyze P/L, and review your complete trade history.',
    color: colors.accent.warning,
    benefits: [
      { icon: TrendingIcon, text: 'Real-time P/L tracking across all positions' },
      { icon: VisibilityIcon, text: 'Position monitoring with live updates' },
      { icon: HistoryIcon, text: 'Complete trade history and analytics' },
      { icon: AssessmentIcon, text: 'Performance metrics and statistics' },
      { icon: CheckIcon, text: 'Multi-exchange portfolio aggregation' },
    ],
  },
  {
    id: 'builder',
    icon: BuilderIcon,
    title: 'Strategy Builder',
    description: 'Create custom trading strategies with our visual rule builder. Backtest your strategies and practice with paper trading before going live.',
    color: colors.accent.info,
    benefits: [
      { icon: BuilderIcon, text: 'Visual drag-and-drop rule builder' },
      { icon: ScienceIcon, text: 'Historical backtesting engine' },
      { icon: PlayIcon, text: 'Paper trading mode for risk-free testing' },
      { icon: StrategyIcon, text: 'Combine multiple indicators and conditions' },
      { icon: CheckIcon, text: 'Save and share strategy templates' },
    ],
  },
];

const FeatureCard = ({ feature }) => {
  const IconComponent = feature.icon;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 8px 24px ${alpha(feature.color, 0.25)}`,
          borderColor: feature.color,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: 2,
              bgcolor: alpha(feature.color, 0.15),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconComponent sx={{ fontSize: 32, color: feature.color }} />
          </Box>
          <Typography variant="h5" fontWeight={600}>
            {feature.title}
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3, lineHeight: 1.6 }}
        >
          {feature.description}
        </Typography>

        {/* Benefits List */}
        <List dense disablePadding>
          {feature.benefits.map((benefit, index) => {
            const BenefitIcon = benefit.icon;
            return (
              <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <BenefitIcon
                    sx={{
                      fontSize: 18,
                      color: feature.color,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={benefit.text}
                  primaryTypographyProps={{
                    variant: 'body2',
                    color: 'text.primary',
                  }}
                />
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

const FeaturesPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          background: `linear-gradient(180deg, ${alpha(colors.accent.primary, 0.1)} 0%, transparent 100%)`,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            fontWeight={700}
            sx={{ mb: 2, color: 'text.primary' }}
          >
            Powerful Trading Tools
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
          >
            Everything you need to trade cryptocurrency professionally. Multi-exchange support,
            automated bots, technical analysis, and portfolio management in one platform.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Chip
              label="Multi-Exchange"
              sx={{ bgcolor: alpha(colors.accent.primary, 0.15), color: colors.accent.primary }}
            />
            <Chip
              label="5 Trading Bots"
              sx={{ bgcolor: alpha(colors.trading.buy, 0.15), color: colors.trading.buy }}
            />
            <Chip
              label="15+ Indicators"
              sx={{ bgcolor: alpha(colors.accent.secondary, 0.15), color: colors.accent.secondary }}
            />
            <Chip
              label="Real-time Analytics"
              sx={{ bgcolor: alpha(colors.accent.warning, 0.15), color: colors.accent.warning }}
            />
          </Box>
        </Container>
      </Box>

      {/* Features Grid */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {featureSections.map((feature) => (
            <Grid item xs={12} md={6} key={feature.id}>
              <FeatureCard feature={feature} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Bottom CTA Section */}
      <Box sx={{ mt: 8, py: 6, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={600} sx={{ mb: 2 }}>
            Ready to Start Trading?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Connect your exchange, configure your bots, and let automation work for you.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Chip
              icon={<SecurityIcon />}
              label="Secure API Storage"
              variant="outlined"
              sx={{ borderColor: colors.trading.buy, color: colors.trading.buy }}
            />
            <Chip
              icon={<SpeedIcon />}
              label="Low Latency Execution"
              variant="outlined"
              sx={{ borderColor: colors.accent.primary, color: colors.accent.primary }}
            />
            <Chip
              icon={<TrendingIcon />}
              label="24/7 Bot Trading"
              variant="outlined"
              sx={{ borderColor: colors.accent.secondary, color: colors.accent.secondary }}
            />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FeaturesPage;
