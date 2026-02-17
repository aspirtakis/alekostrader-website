/**
 * AlkCoinPage - ALK Token (Solana) Showcase Page
 * Displays information about the ALK token ecosystem
 */

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
  Chip,
  IconButton,
} from '@mui/material';
import { alpha, keyframes } from '@mui/material/styles';
import {
  Rocket as RocketIcon,
  ShowChart as ChartIcon,
  People as CommunityIcon,
  Security as SecurityIcon,
  AccountBalanceWallet as WalletIcon,
  SwapHoriz as SwapIcon,
  TrendingUp as TrendingUpIcon,
  Bolt as BoltIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Telegram as TelegramIcon,
  ContentCopy as CopyIcon,
  CheckCircle as CheckIcon,
  LocalFireDepartment as FireIcon,
  Diamond as DiamondIcon,
  Layers as LayersIcon,
} from '@mui/icons-material';
import { colors } from '../theme/tradingTheme';

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px ${alpha('#9945FF', 0.4)}; }
  50% { box-shadow: 0 0 40px ${alpha('#9945FF', 0.6)}, 0 0 60px ${alpha('#14F195', 0.3)}; }
`;

// Solana brand colors
const solanaColors = {
  purple: '#9945FF',
  green: '#14F195',
  dark: '#1A1A2E',
};

// Token info
const TOKEN_CONTRACT = 'ALK...coming soon';

// Tokenomics data
const tokenomics = [
  { label: 'Total Supply', value: '1,000,000,000', sublabel: '1 Billion ALK' },
  { label: 'Liquidity Pool', value: '40%', sublabel: '400M ALK locked' },
  { label: 'Community', value: '30%', sublabel: 'Airdrops & Rewards' },
  { label: 'Development', value: '20%', sublabel: 'Platform Growth' },
  { label: 'Team', value: '10%', sublabel: '2-year vesting' },
];

// Utility features
const utilities = [
  {
    icon: BoltIcon,
    title: 'Trading Fee Discounts',
    description: 'Hold ALK for up to 50% off trading fees on AlekosTrader platform',
  },
  {
    icon: RocketIcon,
    title: 'Premium Bot Access',
    description: 'Stake ALK to unlock exclusive trading bot strategies and features',
  },
  {
    icon: CommunityIcon,
    title: 'Governance Rights',
    description: 'Vote on platform development, new features, and ecosystem proposals',
  },
  {
    icon: DiamondIcon,
    title: 'Staking Rewards',
    description: 'Earn passive income by staking ALK in our liquidity pools',
  },
  {
    icon: FireIcon,
    title: 'Deflationary Burns',
    description: '1% of all trading fees used to buy back and burn ALK tokens',
  },
  {
    icon: LayersIcon,
    title: 'Tier Benefits',
    description: 'Higher ALK holdings unlock premium support and features',
  },
];

// Roadmap items
const roadmap = [
  { quarter: 'Q1 2024', items: ['Token Launch on Raydium', 'Initial Liquidity Lock', 'Community Airdrop'], completed: true },
  { quarter: 'Q2 2024', items: ['CEX Listings', 'Staking Platform Launch', 'Governance Portal'], completed: true },
  { quarter: 'Q3 2024', items: ['Fee Discount Integration', 'Mobile App Launch', 'Partnership Announcements'], completed: false },
  { quarter: 'Q4 2024', items: ['Cross-chain Bridge', 'NFT Integration', 'DAO Launch'], completed: false },
];

// Hero Section
const HeroSection = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TOKEN_CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `radial-gradient(ellipse at top right, ${alpha(solanaColors.purple, 0.25)} 0%, transparent 50%),
                     radial-gradient(ellipse at bottom left, ${alpha(solanaColors.green, 0.2)} 0%, transparent 50%),
                     ${colors.background.primary}`,
      }}
    >
      {/* Animated background orbs */}
      <Box
        sx={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(solanaColors.purple, 0.15)} 0%, transparent 70%)`,
          top: '5%',
          right: '5%',
          animation: `${float} 8s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(solanaColors.green, 0.12)} 0%, transparent 70%)`,
          bottom: '15%',
          left: '10%',
          animation: `${float} 10s ease-in-out infinite`,
          animationDelay: '-3s',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ animation: `${float} 12s ease-in-out infinite` }}>
              {/* Solana Badge */}
              <Chip
                icon={<BoltIcon sx={{ color: solanaColors.green }} />}
                label="Powered by Solana"
                sx={{
                  mb: 3,
                  bgcolor: alpha(solanaColors.purple, 0.2),
                  border: `1px solid ${alpha(solanaColors.purple, 0.5)}`,
                  color: solanaColors.purple,
                  fontWeight: 600,
                  '& .MuiChip-icon': { ml: 1 },
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 3,
                  background: `linear-gradient(135deg, ${solanaColors.purple} 0%, ${solanaColors.green} 100%)`,
                  backgroundSize: '200% 200%',
                  animation: `${gradientShift} 4s ease infinite`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                $ALK
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: colors.text.primary,
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                The AlekosTrader Ecosystem Token
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: colors.text.secondary,
                  fontWeight: 400,
                  lineHeight: 1.7,
                  mb: 4,
                  maxWidth: 500,
                }}
              >
                Unlock premium features, earn staking rewards, and govern the future of decentralized trading.
              </Typography>

              {/* Contract Address */}
              <Paper
                sx={{
                  p: 2,
                  mb: 4,
                  bgcolor: alpha(solanaColors.purple, 0.1),
                  border: `1px solid ${alpha(solanaColors.purple, 0.3)}`,
                  borderRadius: 2,
                }}
              >
                <Typography variant="caption" sx={{ color: colors.text.secondary, display: 'block', mb: 1 }}>
                  Contract Address (Solana)
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'monospace',
                      color: solanaColors.green,
                      flex: 1,
                    }}
                  >
                    {TOKEN_CONTRACT}
                  </Typography>
                  <IconButton size="small" onClick={handleCopy} sx={{ color: colors.text.secondary }}>
                    {copied ? <CheckIcon sx={{ color: solanaColors.green }} /> : <CopyIcon />}
                  </IconButton>
                </Stack>
              </Paper>

              {/* CTA Buttons */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<SwapIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontWeight: 600,
                    fontSize: '1rem',
                    background: `linear-gradient(135deg, ${solanaColors.purple} 0%, ${solanaColors.green} 100%)`,
                    boxShadow: `0 4px 20px ${alpha(solanaColors.purple, 0.4)}`,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${solanaColors.purple} 20%, ${solanaColors.green} 100%)`,
                      boxShadow: `0 6px 30px ${alpha(solanaColors.purple, 0.5)}`,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Buy on Raydium
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<ChartIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderColor: alpha(solanaColors.purple, 0.5),
                    color: solanaColors.purple,
                    '&:hover': {
                      borderColor: solanaColors.purple,
                      bgcolor: alpha(solanaColors.purple, 0.1),
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Chart
                </Button>
              </Stack>

              {/* Social Links */}
              <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                <IconButton
                  sx={{
                    color: colors.text.secondary,
                    '&:hover': { color: solanaColors.purple },
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: colors.text.secondary,
                    '&:hover': { color: solanaColors.green },
                  }}
                >
                  <TelegramIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: colors.text.secondary,
                    '&:hover': { color: colors.text.primary },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Token Logo */}
              <Box
                sx={{
                  width: 320,
                  height: 320,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${alpha(solanaColors.purple, 0.3)} 0%, ${alpha(solanaColors.green, 0.3)} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: `${glow} 3s ease-in-out infinite`,
                  border: `3px solid ${alpha(solanaColors.purple, 0.5)}`,
                  position: 'relative',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '6rem',
                    fontWeight: 900,
                    background: `linear-gradient(135deg, ${solanaColors.purple} 0%, ${solanaColors.green} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-0.05em',
                  }}
                >
                  ALK
                </Typography>
                {/* Orbiting particles */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    animation: 'spin 20s linear infinite',
                    '@keyframes spin': {
                      from: { transform: 'rotate(0deg)' },
                      to: { transform: 'rotate(360deg)' },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      bgcolor: solanaColors.green,
                      transform: 'translateX(-50%)',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Tokenomics Section
const TokenomicsSection = () => {
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
              color: solanaColors.purple,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: 'block',
            }}
          >
            TOKENOMICS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Fair & Transparent Distribution
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {tokenomics.map((item, index) => (
            <Grid item xs={6} sm={4} md={2.4} key={index}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: alpha(colors.background.paper, 0.6),
                  border: `1px solid ${colors.border.default}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: solanaColors.purple,
                    boxShadow: `0 8px 30px ${alpha(solanaColors.purple, 0.2)}`,
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    background: `linear-gradient(135deg, ${solanaColors.purple} 0%, ${solanaColors.green} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1,
                  }}
                >
                  {item.value}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {item.label}
                </Typography>
                <Typography variant="caption" sx={{ color: colors.text.secondary }}>
                  {item.sublabel}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Utility Section
const UtilitySection = () => {
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
              color: solanaColors.green,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: 'block',
            }}
          >
            UTILITY
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Real Value, Real Utility
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.text.secondary,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            ALK isn't just another token - it's the backbone of the AlekosTrader ecosystem
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {utilities.map((item, index) => (
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
                    boxShadow: `0 12px 40px ${alpha(solanaColors.purple, 0.15)}`,
                    borderColor: solanaColors.purple,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${alpha(solanaColors.purple, 0.2)} 0%, ${alpha(solanaColors.green, 0.2)} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <item.icon sx={{ fontSize: 28, color: solanaColors.purple }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Roadmap Section
const RoadmapSection = () => {
  return (
    <Box
      sx={{
        py: 12,
        bgcolor: colors.background.secondary,
        borderTop: `1px solid ${colors.border.default}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: solanaColors.purple,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: 'block',
            }}
          >
            ROADMAP
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Our Journey Ahead
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {roadmap.map((phase, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: phase.completed
                    ? alpha(solanaColors.green, 0.1)
                    : alpha(colors.background.paper, 0.6),
                  border: `2px solid ${phase.completed ? solanaColors.green : colors.border.default}`,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {phase.completed && (
                  <CheckIcon
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      color: solanaColors.green,
                    }}
                  />
                )}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: phase.completed ? solanaColors.green : solanaColors.purple,
                    mb: 2,
                  }}
                >
                  {phase.quarter}
                </Typography>
                <Stack spacing={1}>
                  {phase.items.map((item, i) => (
                    <Stack key={i} direction="row" spacing={1} alignItems="center">
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: phase.completed ? solanaColors.green : solanaColors.purple,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          color: phase.completed ? colors.text.primary : colors.text.secondary,
                          textDecoration: phase.completed ? 'line-through' : 'none',
                        }}
                      >
                        {item}
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

// CTA Section
const CTASection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: 12,
        background: `linear-gradient(135deg, ${alpha(solanaColors.purple, 0.2)} 0%, ${alpha(solanaColors.green, 0.15)} 100%)`,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 3,
            }}
          >
            Ready to Join the ALK Community?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.text.secondary,
              mb: 4,
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            Start trading on AlekosTrader and earn ALK rewards for your activity
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/pricing')}
              sx={{
                py: 1.5,
                px: 4,
                fontWeight: 600,
                background: `linear-gradient(135deg, ${solanaColors.purple} 0%, ${solanaColors.green} 100%)`,
                '&:hover': {
                  background: `linear-gradient(135deg, ${solanaColors.purple} 20%, ${solanaColors.green} 100%)`,
                },
              }}
            >
              Start Trading
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<TelegramIcon />}
              sx={{
                py: 1.5,
                px: 4,
                fontWeight: 600,
                borderColor: solanaColors.purple,
                color: solanaColors.purple,
                '&:hover': {
                  borderColor: solanaColors.green,
                  bgcolor: alpha(solanaColors.purple, 0.1),
                },
              }}
            >
              Join Telegram
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

// Main Page Component
const AlkCoinPage = () => {
  return (
    <Box sx={{ bgcolor: colors.background.primary, minHeight: '100vh' }}>
      <HeroSection />
      <TokenomicsSection />
      <UtilitySection />
      <RoadmapSection />
      <CTASection />
    </Box>
  );
};

export default AlkCoinPage;
