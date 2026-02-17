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
  Stack,
} from '@mui/material';
import { alpha, keyframes } from '@mui/material/styles';
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

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
`;

// Exchange logo components (styled text logos)
const ExchangeLogo = ({ name, color }) => (
  <Box
    sx={{
      px: 3,
      py: 1.5,
      borderRadius: 2,
      bgcolor: alpha(color, 0.1),
      border: `1px solid ${alpha(color, 0.3)}`,
      transition: 'all 0.3s ease',
      animation: `${float} 4s ease-in-out infinite`,
      '&:hover': {
        bgcolor: alpha(color, 0.15),
        borderColor: color,
        transform: 'scale(1.05)',
      },
    }}
  >
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: '1.1rem',
        color: color,
        letterSpacing: name === 'BINANCE' ? 2 : 1,
      }}
    >
      {name}
    </Typography>
  </Box>
);

const exchanges = [
  { name: 'COINBASE', color: '#0052FF' },
  { name: 'BINANCE', color: '#F0B90B' },
  { name: 'BITVAVO', color: '#0066FF' },
  { name: 'KUCOIN', color: '#23AF91' },
];

// Feature section data
const featureSections = [
  {
    id: 'exchanges',
    icon: ExchangeIcon,
    title: 'Multi-Exchange Infrastructure',
    description: 'Unified API layer connecting you to 4 major exchanges. Execute trades, manage positions, and monitor balances from a single command center.',
    color: colors.accent.primary,
    benefits: [
      { icon: CheckIcon, text: 'Coinbase Advanced Trade - Full order book access' },
      { icon: CheckIcon, text: 'Bitvavo - European market connectivity' },
      { icon: CheckIcon, text: 'Binance - Global liquidity and pairs' },
      { icon: CheckIcon, text: 'KuCoin - Altcoin and emerging market access' },
      { icon: SecurityIcon, text: 'Cross-exchange position aggregation' },
      { icon: SecurityIcon, text: 'AES-256 encrypted credential vault' },
    ],
  },
  {
    id: 'bots',
    icon: BotIcon,
    title: '5 Specialized Trading Bots',
    description: 'Each bot engineered for specific market conditions. From systematic accumulation to volatility capture and trend following.',
    color: colors.trading.buy,
    benefits: [
      { icon: DcaIcon, text: 'DCA Bot - Systematic accumulation with custom intervals and sizing' },
      { icon: GridIcon, text: 'Grid Bot - Capture profits from range-bound volatility' },
      { icon: CloseIcon, text: 'Closer Bot - Automated take-profit and trailing stop execution' },
      { icon: BumperIcon, text: 'Bumper Bot - Momentum detection with dynamic entry/exit' },
      { icon: StrategyIcon, text: 'Strateger Bot - Custom rule engine with multi-indicator logic' },
    ],
  },
  {
    id: 'analysis',
    icon: AnalysisIcon,
    title: 'Professional Technical Analysis',
    description: '15+ technical indicators with real-time signal generation. Multi-timeframe analysis for comprehensive market insight.',
    color: colors.accent.secondary,
    benefits: [
      { icon: TimelineIcon, text: 'RSI, MACD, Bollinger Bands, Stochastic oscillator' },
      { icon: TimelineIcon, text: 'Moving Averages - SMA, EMA, WMA configurations' },
      { icon: TimelineIcon, text: 'Volume profile and order flow indicators' },
      { icon: SpeedIcon, text: 'Real-time signal generation engine' },
      { icon: AlertIcon, text: 'Price alerts and indicator-based triggers' },
      { icon: AssessmentIcon, text: 'Multi-timeframe confluence analysis' },
    ],
  },
  {
    id: 'portfolio',
    icon: PortfolioIcon,
    title: 'Real-Time Portfolio Analytics',
    description: 'Live P&L tracking across all exchanges and positions. Monitor performance, drawdowns, and allocation with institutional-grade metrics.',
    color: colors.accent.warning,
    benefits: [
      { icon: TrendingIcon, text: 'Real-time unrealized and realized P&L calculation' },
      { icon: VisibilityIcon, text: 'Live position monitoring with entry/exit tracking' },
      { icon: HistoryIcon, text: 'Complete trade journal with execution details' },
      { icon: AssessmentIcon, text: 'Sharpe ratio, win rate, and risk metrics' },
      { icon: CheckIcon, text: 'Cross-exchange portfolio consolidation' },
    ],
  },
  {
    id: 'builder',
    icon: BuilderIcon,
    title: 'Strategy Builder and Backtesting',
    description: 'Visual strategy constructor with historical backtesting. Validate your edge before deploying capital with paper trading.',
    color: colors.accent.info,
    benefits: [
      { icon: BuilderIcon, text: 'Visual rule builder with drag-and-drop logic' },
      { icon: ScienceIcon, text: 'Historical backtesting with realistic fills and fees' },
      { icon: PlayIcon, text: 'Paper trading mode for live market testing' },
      { icon: StrategyIcon, text: 'Multi-indicator condition combinations' },
      { icon: CheckIcon, text: 'Strategy templates and version control' },
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
      {/* Hero Section with Exchange Logos */}
      <Box
        sx={{
          py: 8,
          background: `radial-gradient(ellipse at top right, ${alpha(colors.accent.primary, 0.15)} 0%, transparent 50%),
                       radial-gradient(ellipse at bottom left, ${alpha(colors.accent.secondary, 0.1)} 0%, transparent 50%),
                       ${colors.background.primary}`,
          borderBottom: `1px solid ${colors.border.default}`,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
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
              PLATFORM CAPABILITIES
            </Typography>
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
              One Platform. Four Exchanges. Unlimited Potential.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: colors.text.secondary,
                maxWidth: 700,
                mx: 'auto',
                mb: 5,
                fontWeight: 400,
              }}
            >
              Execute across Coinbase, Binance, Bitvavo, and KuCoin with unified position management,
              automated bots, and real-time analytics.
            </Typography>

            {/* Exchange Logos */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 4 }}
            >
              {exchanges.map((exchange, index) => (
                <Box
                  key={exchange.name}
                  sx={{
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <ExchangeLogo name={exchange.name} color={exchange.color} />
                </Box>
              ))}
            </Stack>

            {/* Stats */}
            <Stack
              direction="row"
              spacing={6}
              justifyContent="center"
              sx={{
                pt: 4,
                borderTop: `1px solid ${alpha(colors.border.default, 0.3)}`,
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: colors.accent.primary }}>
                  5
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.muted, textTransform: 'uppercase', letterSpacing: 1 }}>
                  Trading Bots
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: colors.accent.primary }}>
                  15+
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.muted, textTransform: 'uppercase', letterSpacing: 1 }}>
                  Indicators
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: colors.accent.primary }}>
                  24/7
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.muted, textTransform: 'uppercase', letterSpacing: 1 }}>
                  Automation
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Features Grid */}
      <Container maxWidth="lg" sx={{ mt: 6, pt: 4 }}>
        <Grid container spacing={4}>
          {featureSections.map((feature) => (
            <Grid item xs={12} md={6} key={feature.id}>
              <FeatureCard feature={feature} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Bottom CTA Section */}
      <Box
        sx={{
          mt: 8,
          py: 8,
          textAlign: 'center',
          bgcolor: alpha(colors.accent.primary, 0.05),
          borderTop: `1px solid ${colors.border.default}`,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
            Deploy Your Trading Edge
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Self-hosted infrastructure. Your API keys stay on your hardware.
            Full control over your trading automation.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 4 }}
          >
            <Chip
              icon={<SecurityIcon />}
              label="AES-256 Encryption"
              variant="outlined"
              sx={{ borderColor: colors.trading.buy, color: colors.trading.buy, py: 2.5 }}
            />
            <Chip
              icon={<SpeedIcon />}
              label="Sub-Second Execution"
              variant="outlined"
              sx={{ borderColor: colors.accent.primary, color: colors.accent.primary, py: 2.5 }}
            />
            <Chip
              icon={<TrendingIcon />}
              label="24/7 Automated Trading"
              variant="outlined"
              sx={{ borderColor: colors.accent.secondary, color: colors.accent.secondary, py: 2.5 }}
            />
          </Stack>
          <Typography variant="body2" sx={{ color: colors.text.muted, fontStyle: 'italic' }}>
            Powered by the ALK token ecosystem
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default FeaturesPage;
