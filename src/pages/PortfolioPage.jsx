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
  AccountBalanceWallet as WalletIcon,
  PieChart as PieIcon,
  Sync as SyncIcon,
  Assessment as AssessmentIcon,
  CheckCircle as CheckIcon,
  ArrowForward as ArrowIcon,
  Visibility as ViewIcon,
  TrendingUp as PnlIcon,
  Search as SearchIcon,
  SwapHoriz as SwapIcon,
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
              '&:hover': { bgcolor: alpha(color, 0.15) },
              transition: 'all 0.2s ease',
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

const PortfolioPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          textAlign: 'center',
          background: `radial-gradient(ellipse at top right, ${alpha(colors.accent.primary, 0.15)} 0%, transparent 50%),
                       radial-gradient(ellipse at bottom left, ${alpha(colors.trading.buy, 0.1)} 0%, transparent 50%),
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
            PORTFOLIO MANAGEMENT
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
            All Your Assets. One Dashboard.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: colors.text.secondary,
              maxWidth: 650,
              mx: 'auto',
              fontWeight: 400,
            }}
          >
            Manage each exchange independently or see everything combined.
            Binance, Bitvavo, Coinbase, and Phantom wallet — unified in a single view.
          </Typography>
        </Container>
      </Box>

      {/* Combined Summary Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: colors.background.primary,
          borderBottom: `1px solid ${colors.border.default}`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Chip
                icon={<PieIcon sx={{ fontSize: 18 }} />}
                label="Combined View"
                sx={{
                  mb: 3,
                  bgcolor: alpha(colors.accent.primary, 0.15),
                  color: colors.accent.primary,
                  border: `1px solid ${alpha(colors.accent.primary, 0.3)}`,
                  fontWeight: 600,
                  '& .MuiChip-icon': { color: colors.accent.primary },
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2.4rem' },
                  fontWeight: 700,
                  mb: 2,
                  background: `linear-gradient(135deg, ${colors.text.primary} 0%, ${colors.accent.primary} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Portfolio Summary
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: colors.text.secondary, mb: 4, lineHeight: 1.8, fontSize: '1rem' }}
              >
                See your total holdings across all connected exchanges in one place.
                Combined portfolio value, number of positions, and per-exchange breakdown — updated in real time.
              </Typography>
              <Stack spacing={2}>
                {[
                  { icon: SyncIcon, title: 'Multi-Exchange Aggregation', text: 'Binance, Bitvavo, Coinbase, and Phantom wallet balances combined automatically.' },
                  { icon: PieIcon, title: 'Asset Allocation Chart', text: 'Visual breakdown of your holdings — see which assets dominate your portfolio at a glance.' },
                  { icon: ViewIcon, title: 'Per-Provider Overview', text: 'Each exchange shows its own value, position count, and top holdings side by side.' },
                  { icon: CheckIcon, title: 'Connection Status', text: 'Live connection indicators for each provider — know instantly if an exchange is connected.' },
                ].map((feature, i) => (
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
                        bgcolor: alpha(colors.accent.primary, 0.08),
                        borderColor: alpha(colors.accent.primary, 0.3),
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 40, height: 40, borderRadius: 1.5,
                        bgcolor: alpha(colors.accent.primary, 0.15),
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}
                    >
                      <feature.icon sx={{ fontSize: 20, color: colors.accent.primary }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.25 }}>{feature.title}</Typography>
                      <Typography variant="body2" sx={{ color: colors.text.secondary }}>{feature.text}</Typography>
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={{ animation: `${float} 6s ease-in-out infinite` }}>
                <Box
                  component="img"
                  src="/screenshots/portfolio-summary-full.png"
                  alt="Portfolio Summary"
                  sx={{
                    width: '100%',
                    borderRadius: 3,
                    border: `1px solid ${colors.border.default}`,
                    boxShadow: `0 20px 60px ${alpha(colors.accent.primary, 0.2)}`,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Per-Provider Detail Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: colors.background.secondary,
          borderBottom: `1px solid ${colors.border.default}`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center" direction="row-reverse">
            <Grid item xs={12} md={5}>
              <Chip
                icon={<WalletIcon sx={{ fontSize: 18 }} />}
                label="Per Exchange"
                sx={{
                  mb: 3,
                  bgcolor: alpha(colors.trading.buy, 0.15),
                  color: colors.trading.buy,
                  border: `1px solid ${alpha(colors.trading.buy, 0.3)}`,
                  fontWeight: 600,
                  '& .MuiChip-icon': { color: colors.trading.buy },
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2.4rem' },
                  fontWeight: 700,
                  mb: 2,
                  background: `linear-gradient(135deg, ${colors.text.primary} 0%, ${colors.trading.buy} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Manage Each Exchange Independently
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: colors.text.secondary, mb: 4, lineHeight: 1.8, fontSize: '1rem' }}
              >
                Drill into any connected exchange for full asset management.
                See every position, its P&L, allocation, order history, and execute trades — all from one place.
              </Typography>
              <Stack spacing={2}>
                {[
                  { icon: AssessmentIcon, title: 'All-Time Summary per Asset', text: 'Total orders, volume, net position, fees, total P&L, and realized P&L for every coin.' },
                  { icon: PnlIcon, title: 'Live P&L Tracking', text: 'Real-time unrealized P&L with current price, average entry, and percentage change.' },
                  { icon: SearchIcon, title: 'Search & Filter Assets', text: 'Quickly find any asset. Sort by value, P&L, allocation, or balance.' },
                  { icon: SwapIcon, title: 'Deposits & Withdrawals', text: 'Track all fund flows — deposits, withdrawals, and net flow per exchange.' },
                ].map((feature, i) => (
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
                        bgcolor: alpha(colors.trading.buy, 0.08),
                        borderColor: alpha(colors.trading.buy, 0.3),
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 40, height: 40, borderRadius: 1.5,
                        bgcolor: alpha(colors.trading.buy, 0.15),
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}
                    >
                      <feature.icon sx={{ fontSize: 20, color: colors.trading.buy }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.25 }}>{feature.title}</Typography>
                      <Typography variant="body2" sx={{ color: colors.text.secondary }}>{feature.text}</Typography>
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={{ animation: `${float} 6s ease-in-out infinite`, animationDelay: '-2s' }}>
                <Box
                  component="img"
                  src="/screenshots/portfolio-provider-detail.png"
                  alt="Per-Exchange Portfolio Detail"
                  sx={{
                    width: '100%',
                    borderRadius: 3,
                    border: `1px solid ${colors.border.default}`,
                    boxShadow: `0 20px 60px ${alpha(colors.trading.buy, 0.2)}`,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Supported Exchanges */}
      <Box sx={{ py: 8, bgcolor: colors.background.primary, borderBottom: `1px solid ${colors.border.default}` }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', mb: 4 }}>
            Supported Exchanges
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {[
              { name: 'Binance', color: '#F0B90B' },
              { name: 'Bitvavo', color: '#0066FF' },
              { name: 'Coinbase', color: '#0052FF' },
              { name: 'Phantom (SOL)', color: '#AB9FF2' },
            ].map((ex) => (
              <Grid item xs={6} sm={3} key={ex.name}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: ex.color,
                      boxShadow: `0 8px 30px ${alpha(ex.color, 0.2)}`,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      color: ex.color,
                      letterSpacing: 1,
                    }}
                  >
                    {ex.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 10, textAlign: 'center', bgcolor: colors.background.primary }}>
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Take Control of Your Portfolio
          </Typography>
          <Typography variant="body1" sx={{ color: colors.text.secondary, mb: 4 }}>
            See everything in one place. Manage each exchange on its own. Your keys, your data.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/contact')}
              endIcon={<ArrowIcon />}
              sx={{
                py: 1.5, px: 4, fontWeight: 600,
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
                py: 1.5, px: 4, fontWeight: 600,
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

export default PortfolioPage;
