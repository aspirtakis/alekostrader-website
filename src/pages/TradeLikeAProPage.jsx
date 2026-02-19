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
  Psychology as AIIcon,
  SmartToy as BotIcon,
  TrendingUp as TrendingIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  CheckCircle as CheckIcon,
  Analytics as AnalyticsIcon,
  AutoGraph as AutoGraphIcon,
  Bolt as BoltIcon,
} from '@mui/icons-material';
import { colors } from '../theme/tradingTheme';

// Animations
const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px ${alpha('#00D4AA', 0.3)}; }
  50% { box-shadow: 0 0 40px ${alpha('#00D4AA', 0.5)}; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const features = [
  {
    icon: AIIcon,
    title: 'AI-Powered Analysis',
    description: 'GPT-4 analyzes 15+ technical indicators in real-time to generate actionable trade signals with entry, stop-loss, and take-profit levels.',
    color: '#00D4AA',
  },
  {
    icon: BotIcon,
    title: '5 Automated Bots',
    description: 'Deploy DCA, Grid, Strateger, Closer, and Bumper bots. Each engineered for specific market conditions and trading strategies.',
    color: '#3B82F6',
  },
  {
    icon: AutoGraphIcon,
    title: 'Risk Management',
    description: 'Professional R:R ratios, tiered take-profit targets, and automated stop-losses protect your capital while maximizing gains.',
    color: '#F59E0B',
  },
  {
    icon: BoltIcon,
    title: 'One-Click Execution',
    description: 'Execute AI-suggested trades instantly. Click to buy or sell with pre-calculated position sizes and risk parameters.',
    color: '#EF4444',
  },
];

const TradeLikeAProPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 10,
          background: `radial-gradient(ellipse at top center, ${alpha(colors.accent.primary, 0.2)} 0%, transparent 50%),
                       radial-gradient(ellipse at bottom right, ${alpha('#00D4AA', 0.15)} 0%, transparent 50%),
                       ${colors.background.primary}`,
          borderBottom: `1px solid ${colors.border.default}`,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="PROFESSIONAL TRADING TOOLS"
              sx={{
                mb: 3,
                bgcolor: alpha(colors.accent.primary, 0.15),
                color: colors.accent.primary,
                fontWeight: 600,
                letterSpacing: 1,
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 800,
                mb: 3,
                background: `linear-gradient(135deg, ${colors.text.primary} 0%, #00D4AA 50%, ${colors.accent.primary} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Trade Like a Pro
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: colors.text.secondary,
                maxWidth: 800,
                mx: 'auto',
                mb: 4,
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Institutional-grade AI analysis meets automated execution.
              Get precise entry points, calculated risk levels, and one-click trade deployment.
            </Typography>

            {/* Stats */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={4}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 4 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#00D4AA' }}>
                  15+
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.muted, textTransform: 'uppercase', letterSpacing: 1 }}>
                  Indicators
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: colors.accent.primary }}>
                  GPT-4
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.muted, textTransform: 'uppercase', letterSpacing: 1 }}>
                  AI Engine
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#F59E0B' }}>
                  5
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.muted, textTransform: 'uppercase', letterSpacing: 1 }}>
                  Trading Bots
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#EF4444' }}>
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

      {/* Trading View Screenshot */}
      <Container maxWidth="lg" sx={{ mt: -4, mb: 8 }}>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 4,
            overflow: 'hidden',
            animation: `${glow} 3s ease-in-out infinite`,
            border: `2px solid ${alpha('#00D4AA', 0.3)}`,
          }}
        >
          <Box
            component="img"
            src="/screenshots/trading-view.png"
            alt="AlekosTrader Trading View"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              py: 2,
              px: 3,
              background: `linear-gradient(to top, ${alpha('#000', 0.9)}, transparent)`,
            }}
          >
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
              Professional Trading Interface
            </Typography>
            <Typography variant="body2" sx={{ color: alpha('#fff', 0.7) }}>
              Real-time charts, order book, AI signals, and multi-pair watchlist — all in one view
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* AI Analysis Screenshot Section */}
      <Container maxWidth="lg" sx={{ mt: -4 }}>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 4,
            overflow: 'hidden',
            animation: `${glow} 3s ease-in-out infinite`,
            border: `2px solid ${alpha('#00D4AA', 0.3)}`,
          }}
        >
          <Box
            component="img"
            src="/screenshots/ai-analysis-detail.png"
            alt="AI Technical Analysis - Trade Suggestions"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              py: 2,
              px: 3,
              background: `linear-gradient(to top, ${alpha('#000', 0.9)}, transparent)`,
            }}
          >
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
              AI Technical Analysis
            </Typography>
            <Typography variant="body2" sx={{ color: alpha('#fff', 0.7) }}>
              Market assessment, trade suggestions with entry/SL/TP, probability scores, and key price levels — one click
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* One-Click Indicators + AI Section */}
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                border: `2px solid ${alpha(colors.accent.secondary, 0.3)}`,
                animation: `${float} 5s ease-in-out infinite`,
                boxShadow: `0 20px 60px ${alpha('#000', 0.3)}`,
              }}
            >
              <Box
                component="img"
                src="/screenshots/indicators-panel.png"
                alt="Indicators Panel with AI Signal Summary"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              variant="overline"
              sx={{
                color: '#00D4AA',
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              ONE-CLICK ANALYSIS
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              All Indicators Calculated at Once
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.text.secondary,
                mb: 3,
                lineHeight: 1.8,
              }}
            >
              Hit one button and AlekosTrader calculates 20+ technical indicators simultaneously —
              Bollinger Bands, ATR, Keltner, VWAP, ROC, Stochastic, MACD, and more. No switching between
              charts or manual calculations.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.text.secondary,
                mb: 3,
                lineHeight: 1.8,
              }}
            >
              The AI then analyzes all indicator results together and generates a clear
              <strong style={{ color: colors.trading.buy }}> Signal Summary</strong> — Bullish, Bearish, or Neutral —
              with a confidence score. One click from raw data to actionable insight.
            </Typography>
            <Stack spacing={1.5}>
              {[
                '20+ indicators computed in parallel',
                'AI-powered signal summary with confidence %',
                'Bullish / Neutral / Bearish breakdown',
                'One click to run full AI Analysis',
              ].map((item, i) => (
                <Stack key={i} direction="row" spacing={1} alignItems="center">
                  <CheckIcon sx={{ fontSize: 20, color: '#00D4AA' }} />
                  <Typography variant="body1" sx={{ color: colors.text.primary }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Features Grid */}
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 6,
          }}
        >
          Professional Trading Arsenal
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    background: alpha(feature.color, 0.05),
                    border: `1px solid ${alpha(feature.color, 0.2)}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: feature.color,
                      boxShadow: `0 8px 30px ${alpha(feature.color, 0.2)}`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        bgcolor: alpha(feature.color, 0.15),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 28, color: feature.color }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.text.secondary, lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Bot Selection Screenshot Section */}
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{
                color: colors.accent.primary,
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              AUTOMATED TRADING
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              Deploy Your Trading Bots
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.text.secondary,
                mb: 4,
                lineHeight: 1.8,
              }}
            >
              Choose from 5 specialized trading bots, each designed for specific market conditions.
              Configure strategies, set risk parameters, and let automation work for you 24/7.
            </Typography>

            <List>
              {[
                { name: 'DCA Bot', desc: 'Systematic accumulation at regular intervals' },
                { name: 'Grid Bot', desc: 'Capture profits from range-bound volatility' },
                { name: 'Strateger Bot', desc: 'Custom rule-based trading strategies' },
                { name: 'Closer Bot', desc: 'Automated take-profit and stop-loss execution' },
                { name: 'Bumper Bot', desc: 'Momentum detection with dynamic entries' },
              ].map((bot, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckIcon sx={{ color: '#00D4AA' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={bot.name}
                    secondary={bot.desc}
                    primaryTypographyProps={{ fontWeight: 600 }}
                    secondaryTypographyProps={{ color: colors.text.muted }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                border: `2px solid ${alpha(colors.accent.primary, 0.3)}`,
                animation: `${float} 4s ease-in-out infinite`,
                boxShadow: `0 20px 60px ${alpha('#000', 0.3)}`,
              }}
            >
              <Box
                component="img"
                src="/add-bot.png"
                alt="Add New Bot"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          mt: 10,
          py: 8,
          textAlign: 'center',
          bgcolor: alpha(colors.accent.primary, 0.05),
          borderTop: `1px solid ${colors.border.default}`,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
            Ready to Trade Like a Professional?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Deploy institutional-grade trading infrastructure on your own hardware.
            Your keys, your data, your edge.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Chip
              icon={<AIIcon />}
              label="AI-Powered Signals"
              variant="outlined"
              sx={{ borderColor: '#00D4AA', color: '#00D4AA', py: 2.5 }}
            />
            <Chip
              icon={<SecurityIcon />}
              label="Self-Hosted"
              variant="outlined"
              sx={{ borderColor: colors.accent.primary, color: colors.accent.primary, py: 2.5 }}
            />
            <Chip
              icon={<SpeedIcon />}
              label="24/7 Automation"
              variant="outlined"
              sx={{ borderColor: '#F59E0B', color: '#F59E0B', py: 2.5 }}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default TradeLikeAProPage;
