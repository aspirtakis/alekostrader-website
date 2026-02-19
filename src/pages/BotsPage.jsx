import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
  Button,
} from '@mui/material';
import { alpha, keyframes } from '@mui/material/styles';
import {
  Loop as DcaIcon,
  Psychology as StrategyIcon,
  TrendingUp as BumpIcon,
  CheckCircle as CheckIcon,
  Settings as SettingsIcon,
  Storage as LogsIcon,
  AccountTree as MultiPairIcon,
  Edit as EditorIcon,
  Code as RulesIcon,
  PlayArrow as ApplyIcon,
  Memory as NeuralIcon,
  Radar as ScanIcon,
  Speed as SpeedIcon,
  ArrowForward as ArrowIcon,
  AccountBalanceWallet as PortfolioIcon,
  Computer as PcIcon,
  Dns as ServerIcon,
  Wifi as NetworkIcon,
  Cloud as VpsIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';
import { colors } from '../theme/tradingTheme';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
`;

// Screenshot gallery with tabs
const ScreenshotGallery = ({ screenshots, color }) => {
  const [active, setActive] = useState(0);

  if (screenshots.length === 1) {
    return (
      <Box
        component="img"
        src={screenshots[0].src}
        alt={screenshots[0].label}
        sx={{
          width: '100%',
          borderRadius: 3,
          border: `1px solid ${colors.border.default}`,
          boxShadow: `0 20px 60px ${alpha(color, 0.2)}`,
        }}
      />
    );
  }

  return (
    <Box>
      {/* Active screenshot */}
      <Box
        component="img"
        src={screenshots[active].src}
        alt={screenshots[active].label}
        sx={{
          width: '100%',
          borderRadius: 3,
          border: `1px solid ${colors.border.default}`,
          boxShadow: `0 20px 60px ${alpha(color, 0.2)}`,
          mb: 2,
        }}
      />
      {/* Thumbnail tabs */}
      <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" useFlexGap>
        {screenshots.map((ss, i) => (
          <Chip
            key={i}
            label={ss.label}
            onClick={() => setActive(i)}
            sx={{
              cursor: 'pointer',
              fontWeight: active === i ? 600 : 400,
              bgcolor: active === i ? alpha(color, 0.2) : alpha(colors.background.tertiary, 0.6),
              color: active === i ? color : colors.text.secondary,
              border: `1px solid ${active === i ? color : colors.border.default}`,
              '&:hover': {
                bgcolor: alpha(color, 0.15),
              },
              transition: 'all 0.2s ease',
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

// Bot section component
const BotSection = ({ bot, index, reversed }) => {
  const IconComponent = bot.icon;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: index % 2 === 0 ? colors.background.primary : colors.background.secondary,
        borderBottom: `1px solid ${colors.border.default}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          direction={reversed ? 'row-reverse' : 'row'}
        >
          {/* Text content */}
          <Grid item xs={12} md={5}>
            <Box>
              <Chip
                icon={<IconComponent sx={{ fontSize: 18 }} />}
                label={bot.badge}
                sx={{
                  mb: 3,
                  bgcolor: alpha(bot.color, 0.15),
                  color: bot.color,
                  border: `1px solid ${alpha(bot.color, 0.3)}`,
                  fontWeight: 600,
                  '& .MuiChip-icon': { color: bot.color },
                }}
              />

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2.4rem' },
                  fontWeight: 700,
                  mb: 2,
                  background: `linear-gradient(135deg, ${colors.text.primary} 0%, ${bot.color} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {bot.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: colors.text.secondary,
                  mb: 4,
                  lineHeight: 1.8,
                  fontSize: '1rem',
                }}
              >
                {bot.description}
              </Typography>

              <Stack spacing={2}>
                {bot.features.map((feature, i) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <Paper
                      key={i}
                      sx={{
                        p: 2,
                        bgcolor: alpha(colors.background.paper, 0.5),
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: alpha(bot.color, 0.08),
                          borderColor: alpha(bot.color, 0.3),
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 1.5,
                          bgcolor: alpha(bot.color, 0.15),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <FeatureIcon sx={{ fontSize: 20, color: bot.color }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.25 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                          {feature.text}
                        </Typography>
                      </Box>
                    </Paper>
                  );
                })}
              </Stack>
            </Box>
          </Grid>

          {/* Screenshots */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                animation: `${float} 6s ease-in-out infinite`,
                animationDelay: `${index * -2}s`,
              }}
            >
              <ScreenshotGallery screenshots={bot.screenshots} color={bot.color} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Bot data
const bots = [
  {
    icon: DcaIcon,
    badge: 'Advanced Bot',
    title: 'DCA Bot Advanced',
    color: colors.trading.buy,
    description:
      'The most powerful DCA bot in our arsenal. Run multiple pairs simultaneously with full control over every parameter. Monitor every execution with detailed logs, track performance per pair, and fine-tune your accumulation strategy in real time.',
    screenshots: [
      { src: '/screenshots/dca-bots-dashboard.png', label: 'Bot Dashboard' },
      { src: '/screenshots/portfolio-summary.png', label: 'Portfolio Overview' },
    ],
    features: [
      {
        icon: MultiPairIcon,
        title: 'Multi-Pair Trading',
        text: 'Run DCA strategies across multiple trading pairs at once from a single dashboard.',
      },
      {
        icon: LogsIcon,
        title: 'Full Execution Logs',
        text: 'Every order, every fill, every rebalance — complete transparency with searchable logs.',
      },
      {
        icon: SettingsIcon,
        title: 'Granular Settings',
        text: 'Configure intervals, amounts, price deviations, take-profit levels, and safety orders per pair.',
      },
      {
        icon: CheckIcon,
        title: 'Real-Time Monitoring',
        text: 'Live P&L tracking, average entry prices, and position status for every active pair.',
      },
    ],
  },
  {
    icon: StrategyIcon,
    badge: 'Strategy Engine',
    title: 'Strateger',
    color: colors.accent.secondary,
    description:
      'Your personal strategy workshop. Build custom trading strategies with our visual editor — combine indicators, set conditions, define entries and exits. No coding required. Design it, backtest it, deploy it.',
    screenshots: [
      { src: '/screenshots/strateger-edit-strategy.png', label: 'Strategy Editor' },
      { src: '/screenshots/strateger-trading-rules.png', label: 'Trading Rules' },
      { src: '/screenshots/strateger-indicator-bench.png', label: 'Indicator Test Bench' },
      { src: '/screenshots/strateger-backtester.png', label: 'Backtester' },
      { src: '/screenshots/bump-detector-signals.png', label: 'AI Trade Signals' },
    ],
    features: [
      {
        icon: EditorIcon,
        title: 'Visual Strategy Editor',
        text: 'Intuitive editor to build complex strategies — select indicators, set weights, and configure signals.',
      },
      {
        icon: RulesIcon,
        title: 'Custom Rule Engine',
        text: '17+ rule templates — take-profit, stop-loss, position limits, drawdown protection, and more.',
      },
      {
        icon: ApplyIcon,
        title: 'Backtesting & Simulation',
        text: 'Test strategies against 2000+ days of historical data with visual and tabular results.',
      },
      {
        icon: CheckIcon,
        title: '14 Technical Indicators',
        text: 'RSI, MACD, Bollinger Bands, Stochastic, Fibonacci, ADX, Ichimoku, and more — all testable in real time.',
      },
    ],
  },
  {
    icon: BumpIcon,
    badge: 'AI-Powered',
    title: 'Bump Detector',
    color: colors.accent.warning,
    description:
      'Powered by a neural network trained to detect sudden price movements. The Bump Detector continuously scans the market for unusual activity and momentum shifts, generating trade signals with entry, stop-loss, and multiple profit targets.',
    screenshots: [
      { src: '/screenshots/bump-detector-scanning.png', label: 'Bump Scanner' },
    ],
    features: [
      {
        icon: NeuralIcon,
        title: 'Neural Network Core',
        text: 'Deep learning model trained on historical bump patterns to identify high-probability setups.',
      },
      {
        icon: ScanIcon,
        title: 'Multi-Pair AI Analysis',
        text: 'Analyze up to 4 pairs simultaneously with BUY/SELL signal generation and probability scoring.',
      },
      {
        icon: SpeedIcon,
        title: 'Precise Entry & Exit',
        text: 'Each signal includes entry price, risk (stop-loss), and 3 profit targets with exact dollar amounts.',
      },
      {
        icon: CheckIcon,
        title: 'Signal Management',
        text: 'Track executed, cancelled, and expired signals. Filter by pair, type, and status.',
      },
    ],
  },
];

const BotsPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          textAlign: 'center',
          background: `radial-gradient(ellipse at top right, ${alpha(colors.accent.primary, 0.15)} 0%, transparent 50%),
                       radial-gradient(ellipse at bottom left, ${alpha(colors.accent.secondary, 0.1)} 0%, transparent 50%),
                       ${colors.background.primary}`,
          borderBottom: `1px solid ${colors.border.default}`,
        }}
      >
        <Container maxWidth="md">
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
            TRADING BOTS
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
            Meet the Bots
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: colors.text.secondary,
              maxWidth: 600,
              mx: 'auto',
              fontWeight: 400,
            }}
          >
            Three specialized bots, each built for a different edge. From systematic DCA to custom strategies and AI-powered bump detection.
          </Typography>
        </Container>
      </Box>

      {/* Bot Sections */}
      {bots.map((bot, index) => (
        <BotSection
          key={bot.title}
          bot={bot}
          index={index}
          reversed={index % 2 !== 0}
        />
      ))}

      {/* Self-Hosted Infrastructure Notice */}
      <Box
        sx={{
          py: 10,
          bgcolor: colors.background.secondary,
          borderBottom: `1px solid ${colors.border.default}`,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Chip
              icon={<WarningIcon sx={{ fontSize: 18 }} />}
              label="Important"
              sx={{
                mb: 3,
                bgcolor: alpha(colors.accent.warning, 0.15),
                color: colors.accent.warning,
                border: `1px solid ${alpha(colors.accent.warning, 0.3)}`,
                fontWeight: 600,
                '& .MuiChip-icon': { color: colors.accent.warning },
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.6rem', md: '2rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Your Bots Run on Your Machine
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.text.secondary,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.8,
                fontSize: '1rem',
              }}
            >
              AlekosTrader is fully self-hosted. We do not host or run your bots for you.
              Your machine needs to be running for the bots to operate.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <PcIcon sx={{ fontSize: 36, color: colors.accent.primary, mb: 1.5 }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                  Your PC
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                  Run directly on your desktop or laptop
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <NeuralIcon sx={{ fontSize: 36, color: colors.trading.buy, mb: 1.5 }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                  Raspberry Pi
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                  Low-power 24/7 operation on a $50 device
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <NetworkIcon sx={{ fontSize: 36, color: colors.accent.secondary, mb: 1.5 }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                  Local Network
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                  Runs on your local network — your keys never leave
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <VpsIcon sx={{ fontSize: 36, color: colors.accent.warning, mb: 1.5 }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                  VPS
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                  Unstable network? Get a VPS for 24/7 uptime
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 4,
              p: 3,
              borderRadius: 2,
              bgcolor: alpha(colors.accent.warning, 0.08),
              border: `1px solid ${alpha(colors.accent.warning, 0.25)}`,
              textAlign: 'center',
            }}
          >
            <Typography variant="body1" sx={{ color: colors.text.secondary, lineHeight: 1.8 }}>
              <strong style={{ color: colors.text.primary }}>Your machine must stay on for the bots to run.</strong>
              {' '}If your internet connection is unstable or you can't keep your PC running 24/7,
              we recommend deploying on a VPS (DigitalOcean, Linode, Hetzner, etc.) or a Raspberry Pi for uninterrupted operation.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: 10,
          textAlign: 'center',
          bgcolor: colors.background.primary,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Automate Your Trading?
          </Typography>
          <Typography variant="body1" sx={{ color: colors.text.secondary, mb: 4 }}>
            Get in touch to join the beta and start running these bots on your own infrastructure.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              endIcon={<ArrowIcon />}
              sx={{
                py: 1.5,
                px: 4,
                fontWeight: 600,
                background: `linear-gradient(135deg, ${colors.accent.primary} 0%, ${colors.accent.secondary} 100%)`,
                boxShadow: `0 4px 20px ${alpha(colors.accent.primary, 0.4)}`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${colors.accent.primary} 20%, ${colors.accent.secondary} 100%)`,
                },
              }}
            >
              Contact Us
            </Button>
            <Button
              variant="outlined"
              size="large"
              component="a"
              href="https://t.me/alekostrader"
              target="_blank"
              rel="noopener"
              sx={{
                py: 1.5,
                px: 4,
                fontWeight: 600,
                borderColor: alpha(colors.accent.primary, 0.5),
                color: colors.accent.primary,
                '&:hover': {
                  borderColor: colors.accent.primary,
                  bgcolor: alpha(colors.accent.primary, 0.1),
                },
              }}
            >
              Join Beta Group
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default BotsPage;
