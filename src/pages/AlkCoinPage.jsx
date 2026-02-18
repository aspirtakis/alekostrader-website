/**
 * AlkCoinPage - ALK Token (Solana) Showcase Page
 * Displays information about the ALK token ecosystem
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Stack,
  Chip,
  IconButton,
  CircularProgress,
} from '@mui/material';
import { alpha, keyframes } from '@mui/material/styles';
import {
  Rocket as RocketIcon,
  ShowChart as ChartIcon,
  People as CommunityIcon,
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
  OpenInNew as OpenInNewIcon,
} from '@mui/icons-material';
import { colors } from '../theme/tradingTheme';

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
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

// Real Token info
const TOKEN_CONTRACT = 'FD2imiDmjYDrh4A66JWKLvrrSLXvZh5Jep1Kx67Z6WXu';
const RAYDIUM_SWAP_URL = 'https://raydium.io/swap/?inputMint=sol&outputMint=FD2imiDmjYDrh4A66JWKLvrrSLXvZh5Jep1Kx67Z6WXu';
const JUPITER_SWAP_URL = 'https://jup.ag/swap/SOL-FD2imiDmjYDrh4A66JWKLvrrSLXvZh5Jep1Kx67Z6WXu';
const RAYDIUM_POOL_URL = 'https://raydium.io/liquidity/increase/?mode=add&pool_id=EmNCv3QoGe4d2H7yPJeFDmgC7GfYrbbaE7sMeko1gxsA';
const SOLSCAN_URL = 'https://solscan.io/token/FD2imiDmjYDrh4A66JWKLvrrSLXvZh5Jep1Kx67Z6WXu';

// Tokenomics data (real)
const tokenomics = [
  { label: 'Total Supply', value: '1B', sublabel: 'Fixed cap, immutable' },
  { label: 'Circulating', value: '939M', sublabel: 'Publicly tradeable' },
  { label: 'Liquidity Locked', value: '61M', sublabel: 'SOL & USDC pools' },
  { label: 'Mint Authority', value: 'Revoked', sublabel: 'Deflationary by design' },
  { label: 'Decimals', value: '6', sublabel: 'Solana SPL Standard' },
];

// Utility features
const utilities = [
  {
    icon: BoltIcon,
    title: 'Fee Reduction Protocol',
    description: 'Tiered discount structure: Hold ALK to reduce platform trading fees by up to 50% based on your holdings',
  },
  {
    icon: RocketIcon,
    title: 'Institutional Bot Access',
    description: 'Stake ALK to unlock advanced algorithmic strategies, backtesting suites, and enterprise-grade automation',
  },
  {
    icon: CommunityIcon,
    title: 'Protocol Governance',
    description: 'Participate in on-chain governance: vote on development priorities, fee structures, and ecosystem allocations',
  },
  {
    icon: DiamondIcon,
    title: 'Yield Generation',
    description: 'Provide liquidity to ALK/SOL and ALK/USDC pools to earn proportional trading fee distributions',
  },
  {
    icon: FireIcon,
    title: 'Deflationary Mechanism',
    description: 'Automated buyback: 1% of platform revenue allocated to token burns, systematically reducing supply',
  },
  {
    icon: LayersIcon,
    title: 'Membership Tiers',
    description: 'Progressive benefits: Larger positions unlock priority support, early feature access, and reduced withdrawal fees',
  },
];

// Roadmap items
const roadmap = [
  { quarter: 'Q1 2026', items: ['DEX Launch via Raydium AMM', 'Dual-pool Liquidity Provision', 'Token Verification & Audit'], completed: true },
  { quarter: 'Q2 2026', items: ['Phantom Wallet Integration', 'Platform Fee Discount System', 'Strategic Holder Airdrop'], completed: false },
  { quarter: 'Q3 2026', items: ['Tier-1 CEX Listing Applications', 'Non-custodial Staking Launch', 'Governance Module Deployment'], completed: false },
  { quarter: 'Q4 2026', items: ['Wormhole Bridge Integration', 'NFT Membership Passes', 'Full DAO Transition'], completed: false },
];

// Price fetching hook
const useAlkPrice = () => {
  const [price, setPrice] = useState(null);
  const [priceChange24h, setPriceChange24h] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        // Jupiter Price API
        const response = await fetch(
          `https://api.jup.ag/price/v2?ids=${TOKEN_CONTRACT}`
        );
        const data = await response.json();

        if (data.data && data.data[TOKEN_CONTRACT]) {
          setPrice(data.data[TOKEN_CONTRACT].price);
        }

        // Try to get 24h change from Birdeye or DexScreener
        try {
          const dexResponse = await fetch(
            `https://api.dexscreener.com/latest/dex/tokens/${TOKEN_CONTRACT}`
          );
          const dexData = await dexResponse.json();
          if (dexData.pairs && dexData.pairs[0]) {
            setPriceChange24h(parseFloat(dexData.pairs[0].priceChange?.h24 || 0));
            // Use DexScreener price as fallback
            if (!price) {
              setPrice(parseFloat(dexData.pairs[0].priceUsd));
            }
          }
        } catch (e) {
          console.log('DexScreener fetch failed, using Jupiter only');
        }
      } catch (error) {
        console.error('Price fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return { price, priceChange24h, loading };
};

// Hero Section
const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [alkBalance, setAlkBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const { price: alkPrice, priceChange24h, loading: priceLoading } = useAlkPrice();

  const handleCopy = () => {
    navigator.clipboard.writeText(TOKEN_CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const connectWallet = async () => {
    try {
      if (window.solana && window.solana.isPhantom) {
        setLoading(true);
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
        setWalletConnected(true);
        await fetchAlkBalance(response.publicKey.toString());
      } else {
        window.open('https://phantom.app/', '_blank');
      }
    } catch (error) {
      console.error('Wallet connection error:', error);
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      if (window.solana) {
        await window.solana.disconnect();
        setWalletConnected(false);
        setWalletAddress('');
        setAlkBalance(null);
      }
    } catch (error) {
      console.error('Disconnect error:', error);
    }
  };

  const fetchAlkBalance = async (address) => {
    try {
      const response = await fetch('https://api.mainnet-beta.solana.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'getTokenAccountsByOwner',
          params: [
            address,
            { mint: TOKEN_CONTRACT },
            { encoding: 'jsonParsed' },
          ],
        }),
      });
      const data = await response.json();
      if (data.result?.value?.[0]) {
        const balance = data.result.value[0].account.data.parsed.info.tokenAmount.uiAmount;
        setAlkBalance(balance);
      } else {
        setAlkBalance(0);
      }
    } catch (error) {
      console.error('Balance fetch error:', error);
      setAlkBalance(0);
    }
  };

  // Check if wallet is already connected
  useEffect(() => {
    const checkConnection = async () => {
      if (window.solana && window.solana.isPhantom && window.solana.isConnected) {
        try {
          const response = await window.solana.connect({ onlyIfTrusted: true });
          setWalletAddress(response.publicKey.toString());
          setWalletConnected(true);
          await fetchAlkBalance(response.publicKey.toString());
        } catch (error) {
          // Not connected or user hasn't trusted the site
        }
      }
    };
    checkConnection();
  }, []);

  const formatBalance = (balance) => {
    if (balance === null) return '...';
    if (balance >= 1e9) return (balance / 1e9).toFixed(2) + 'B';
    if (balance >= 1e6) return (balance / 1e6).toFixed(2) + 'M';
    if (balance >= 1e3) return (balance / 1e3).toFixed(2) + 'K';
    return balance.toFixed(2);
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
                label="Live on Solana"
                sx={{
                  mb: 3,
                  bgcolor: alpha(solanaColors.green, 0.2),
                  border: `1px solid ${alpha(solanaColors.green, 0.5)}`,
                  color: solanaColors.green,
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
                ALK
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: colors.text.primary,
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                The Native Utility Token of AlekosTrader
              </Typography>

              {/* Live Price Display */}
              <Paper
                sx={{
                  p: 2,
                  mb: 3,
                  bgcolor: alpha(solanaColors.green, 0.1),
                  border: `1px solid ${alpha(solanaColors.green, 0.3)}`,
                  borderRadius: 2,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Box>
                  <Typography variant="caption" sx={{ color: colors.text.secondary }}>
                    Live Price
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: solanaColors.green,
                      fontFamily: 'monospace',
                    }}
                  >
                    {priceLoading ? (
                      <CircularProgress size={20} sx={{ color: solanaColors.green }} />
                    ) : alkPrice ? (
                      `$${alkPrice < 0.01 ? alkPrice.toFixed(6) : alkPrice.toFixed(4)}`
                    ) : (
                      '---'
                    )}
                  </Typography>
                </Box>
                {priceChange24h !== null && !priceLoading && (
                  <Chip
                    icon={priceChange24h >= 0 ? <TrendingUpIcon /> : <TrendingUpIcon sx={{ transform: 'rotate(180deg)' }} />}
                    label={`${priceChange24h >= 0 ? '+' : ''}${priceChange24h.toFixed(2)}%`}
                    size="small"
                    sx={{
                      bgcolor: priceChange24h >= 0 ? alpha(solanaColors.green, 0.2) : alpha('#ff4444', 0.2),
                      color: priceChange24h >= 0 ? solanaColors.green : '#ff4444',
                      fontWeight: 600,
                      '& .MuiChip-icon': {
                        color: priceChange24h >= 0 ? solanaColors.green : '#ff4444',
                      },
                    }}
                  />
                )}
              </Paper>

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
                Access institutional-grade trading tools, reduce platform fees, and participate in protocol governance. Built on Solana for sub-second finality.
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
                      fontSize: { xs: '0.7rem', md: '0.875rem' },
                      wordBreak: 'break-all',
                    }}
                  >
                    {TOKEN_CONTRACT}
                  </Typography>
                  <IconButton size="small" onClick={handleCopy} sx={{ color: colors.text.secondary }}>
                    {copied ? <CheckIcon sx={{ color: solanaColors.green }} /> : <CopyIcon />}
                  </IconButton>
                </Stack>
              </Paper>

              {/* Wallet Connection */}
              {walletConnected ? (
                <Paper
                  sx={{
                    p: 2,
                    mb: 4,
                    bgcolor: alpha(solanaColors.green, 0.1),
                    border: `1px solid ${alpha(solanaColors.green, 0.3)}`,
                    borderRadius: 2,
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box>
                      <Typography variant="caption" sx={{ color: colors.text.secondary }}>
                        Your ALK Balance
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: solanaColors.green }}>
                        {formatBalance(alkBalance)} ALK
                      </Typography>
                      <Typography variant="caption" sx={{ color: colors.text.secondary, fontFamily: 'monospace' }}>
                        {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                      </Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={disconnectWallet}
                      sx={{ borderColor: solanaColors.green, color: solanaColors.green }}
                    >
                      Disconnect
                    </Button>
                  </Stack>
                </Paper>
              ) : (
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={loading ? <CircularProgress size={20} /> : <WalletIcon />}
                  onClick={connectWallet}
                  disabled={loading}
                  sx={{
                    mb: 4,
                    py: 1.5,
                    px: 4,
                    fontWeight: 600,
                    borderColor: alpha(solanaColors.purple, 0.5),
                    color: solanaColors.purple,
                    '&:hover': {
                      borderColor: solanaColors.purple,
                      bgcolor: alpha(solanaColors.purple, 0.1),
                    },
                  }}
                >
                  {loading ? 'Connecting...' : 'Connect Phantom Wallet'}
                </Button>
              )}

              {/* CTA Buttons */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<SwapIcon />}
                  onClick={() => window.open(RAYDIUM_SWAP_URL, '_blank')}
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
                  onClick={() => window.open(SOLSCAN_URL, '_blank')}
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
                  View on Solscan
                </Button>
              </Stack>

              {/* Additional Links */}
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button
                  variant="text"
                  size="small"
                  startIcon={<OpenInNewIcon />}
                  onClick={() => window.open(JUPITER_SWAP_URL, '_blank')}
                  sx={{ color: colors.text.secondary }}
                >
                  Jupiter
                </Button>
                <Button
                  variant="text"
                  size="small"
                  startIcon={<OpenInNewIcon />}
                  onClick={() => window.open(RAYDIUM_POOL_URL, '_blank')}
                  sx={{ color: colors.text.secondary }}
                >
                  Liquidity Pool
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
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/alk-token.png"
                  alt="ALK Token"
                  style={{
                    width: '80%',
                    height: '80%',
                    objectFit: 'contain',
                  }}
                />
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
            Transparent Token Economics
          </Typography>
          <Typography variant="body1" sx={{ color: colors.text.secondary }}>
            Mint authority permanently revoked. Verifiable on-chain. No additional tokens can ever be created.
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
                    fontSize: { xs: '1.5rem', md: '2rem' },
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
            Integrated Platform Utility
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.text.secondary,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            ALK serves as the economic layer connecting fee structures, access tiers, and governance across the AlekosTrader platform
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
            Development Roadmap
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
            Begin Your Position in ALK
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
            Acquire ALK on Raydium to unlock platform benefits, participate in governance, and join the AlekosTrader ecosystem
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              onClick={() => window.open(RAYDIUM_SWAP_URL, '_blank')}
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
              Buy ALK Now
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
