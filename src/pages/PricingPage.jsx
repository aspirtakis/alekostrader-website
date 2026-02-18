import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  alpha,
} from '@mui/material';
import {
  Check as CheckIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  VerifiedUser as VerifiedUserIcon,
  Star as StarIcon,
  Memory as MemoryIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';
import { colors } from '../theme/tradingTheme';

const pricingPlans = [
  {
    name: 'Viewer',
    price: 29,
    description: 'Track your portfolio and monitor markets',
    features: [
      'Trading dashboard',
      'Portfolio tracking',
      'Market overview',
      'Basic support',
    ],
    buttonText: 'Start Free',
    buttonVariant: 'outlined',
    compact: true,
  },
  {
    name: 'Starter',
    price: 90,
    description: 'Begin your trading automation journey',
    features: [
      '1 trading bot',
      '1 exchange connection',
      'Core indicators',
      'Email support',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
  },
  {
    name: 'Basic',
    price: 120,
    description: 'For active traders who need more flexibility',
    features: [
      '2 trading bots',
      '1 exchange connection',
      'Full indicator suite',
      'Priority support',
    ],
    buttonText: 'Get Basic',
    buttonVariant: 'outlined',
  },
  {
    name: 'Pro',
    price: 250,
    description: 'Advanced trading with multi-exchange support',
    popular: true,
    features: [
      '5 trading bots',
      '2 exchange connections',
      'Realistic Strategy Tester',
      'Custom indicators',
      'Priority 24h support',
    ],
    buttonText: 'Go Pro',
    buttonVariant: 'contained',
    hardwareIncluded: true,
    hardwareInfo: 'Includes Raspberry Pi 5 (8GB RAM)',
  },
  {
    name: 'Unlimited',
    price: 400,
    description: 'Full power for serious traders - requires dedicated server',
    features: [
      'Unlimited trading bots',
      '5 exchange connections',
      'Full API access',
      'Custom development',
      'Dedicated support',
    ],
    buttonText: 'Contact Us',
    buttonVariant: 'outlined',
    contactOnly: true,
    serverRequired: true,
  },
];

const featureComparison = [
  { feature: 'Trading Bots', viewer: '-', starter: '1', basic: '2', pro: '5', unlimited: 'Unlimited' },
  { feature: 'Exchange Connections', viewer: '-', starter: '1', basic: '1', pro: '2', unlimited: '5' },
  { feature: 'Portfolio Tracking', viewer: true, starter: true, basic: true, pro: true, unlimited: true },
  { feature: 'Trading Dashboard', viewer: true, starter: true, basic: true, pro: true, unlimited: true },
  { feature: 'Core Indicators', viewer: false, starter: true, basic: true, pro: true, unlimited: true },
  { feature: 'Full Indicator Suite', viewer: false, starter: false, basic: true, pro: true, unlimited: true },
  { feature: 'Realistic Strategy Tester', viewer: false, starter: false, basic: false, pro: true, unlimited: true },
  { feature: 'Custom Indicators', viewer: false, starter: false, basic: false, pro: true, unlimited: true },
  { feature: 'Full API Access', viewer: false, starter: false, basic: false, pro: false, unlimited: true },
  { feature: 'Priority Support', viewer: false, starter: false, basic: true, pro: true, unlimited: true },
  { feature: 'Hardware Included', viewer: '-', starter: '-', basic: '-', pro: 'Pi 5 (8GB)', unlimited: 'Server' },
];

const faqItems = [
  {
    question: 'What is your cancellation policy?',
    answer: 'Subscriptions operate on a no-commitment basis. Cancel at any time without penalties or exit fees. Your access remains active through the end of your current billing period, after which automatic renewal ceases.',
  },
  {
    question: 'Do you offer a trial period?',
    answer: 'All plans include a 14-day evaluation period with full feature access. No payment method required to begin. This allows comprehensive testing of algorithmic strategies and platform capabilities before commitment.',
  },
  {
    question: 'How are plan upgrades handled?',
    answer: 'Upgrades are processed instantly via your account dashboard. Pricing is prorated based on your remaining billing cycle. All existing configurations, algorithms, and historical data are preserved during transition.',
  },
  {
    question: 'How does Hardware ID licensing work?',
    answer: 'Licenses are cryptographically bound to specific device hardware identifiers. This enterprise-standard approach prevents unauthorized distribution while guaranteeing reliable activation on registered devices. License transfers are available through support.',
  },
  {
    question: 'What does the Raspberry Pi Package include?',
    answer: 'The dedicated hardware package includes a Raspberry Pi 4 (4GB RAM), industrial-grade enclosure, official power supply unit, and 32GB industrial SD card with pre-installed, pre-configured trading environment. Arrives deployment-ready.',
  },
];

const PricingCard = ({ plan, onBuy }) => {
  const { name, price, description, features, popular, buttonText, buttonVariant, contactOnly, serverRequired, hardwareIncluded, hardwareInfo } = plan;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: popular ? `2px solid ${colors.accent.primary}` : '1px solid rgba(255,255,255,0.1)',
        transform: popular ? 'scale(1.02)' : 'none',
        zIndex: popular ? 1 : 0,
        backgroundColor: popular ? alpha(colors.accent.primary, 0.05) : colors.background.paper,
      }}
    >
      {popular && (
        <Chip
          icon={<StarIcon sx={{ fontSize: 14 }} />}
          label="POPULAR"
          size="small"
          sx={{
            position: 'absolute',
            top: -10,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: colors.accent.primary,
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.65rem',
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
        <Typography variant="h5" sx={{ mb: 0.5, color: colors.text.primary, fontWeight: 600 }}>
          {name}
        </Typography>
        <Typography variant="caption" sx={{ mb: 2, color: colors.text.secondary, display: 'block', minHeight: 32 }}>
          {description}
        </Typography>

        <Box sx={{ mb: 1.5 }}>
          <Typography
            component="span"
            sx={{ fontSize: '2rem', fontWeight: 700, color: colors.text.primary }}
          >
            €{price}
          </Typography>
          <Typography
            component="span"
            sx={{ fontSize: '0.85rem', color: colors.text.secondary, ml: 0.5 }}
          >
            /year
          </Typography>
        </Box>


        {/* Hardware included badge */}
        {hardwareIncluded && (
          <Chip
            icon={<MemoryIcon sx={{ fontSize: 12 }} />}
            label={hardwareInfo}
            size="small"
            sx={{
              mb: 2,
              backgroundColor: alpha(colors.accent.secondary || '#9c27b0', 0.15),
              color: colors.accent.secondary || '#9c27b0',
              fontWeight: 500,
              fontSize: '0.65rem',
            }}
          />
        )}

        {/* Server required badge */}
        {serverRequired && (
          <Chip
            icon={<SecurityIcon sx={{ fontSize: 12 }} />}
            label="Requires dedicated server"
            size="small"
            sx={{
              mb: 2,
              backgroundColor: alpha(colors.trading.sell, 0.15),
              color: colors.trading.sell,
              fontWeight: 500,
              fontSize: '0.65rem',
            }}
          />
        )}

        <Stack spacing={1} sx={{ mb: 2 }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckIcon sx={{ fontSize: 14, color: colors.trading.buy }} />
              <Typography variant="caption" sx={{ color: colors.text.primary }}>
                {feature}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Button
          fullWidth
          variant={buttonVariant}
          color="primary"
          size="medium"
          onClick={onBuy}
          sx={{
            py: 1,
            fontSize: '0.875rem',
            ...(buttonVariant === 'contained' && {
              backgroundColor: colors.accent.primary,
              '&:hover': {
                backgroundColor: alpha(colors.accent.primary, 0.85),
              },
            }),
          }}
        >
          {buttonText}
        </Button>

        {contactOnly && (
          <Typography variant="caption" sx={{ color: colors.text.muted, display: 'block', mt: 1, textAlign: 'center' }}>
            Contact: info@alekosbot.com
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

const FeatureValue = ({ value }) => {
  if (typeof value === 'boolean') {
    return value ? (
      <CheckIcon sx={{ color: colors.trading.buy, fontSize: 20 }} />
    ) : (
      <CloseIcon sx={{ color: colors.text.muted, fontSize: 20 }} />
    );
  }
  return (
    <Typography variant="body2" sx={{ fontWeight: 500, color: colors.text.primary }}>
      {value}
    </Typography>
  );
};

// Map plan names to tier slugs
const TIER_SLUGS = {
  'Viewer': 'viewer',
  'Starter': 'starter',
  'Basic': 'basic',
  'Pro': 'pro',
  'Unlimited': 'unlimited'
};

const PricingPage = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleBuy = (planName) => () => {
    const tier = TIER_SLUGS[planName];
    const plan = pricingPlans.find(p => p.name === planName);
    if (plan?.contactOnly) {
      window.location.href = 'mailto:info@alekosbot.com?subject=Unlimited Plan Inquiry';
      return;
    }
    navigate(`/checkout?tier=${tier}`);
  };

  return (
    <Box sx={{ minHeight: '100vh', py: 8, backgroundColor: colors.background.primary }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: colors.text.primary,
              mb: 2,
            }}
          >
            Transparent Annual Licensing
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: colors.text.secondary,
              maxWidth: 600,
              mx: 'auto',
              mb: 2,
            }}
          >
            Select the tier aligned with your trading volume and strategy complexity. All plans include platform updates, security patches, and technical support.
          </Typography>
          <Chip
            icon={<SecurityIcon sx={{ fontSize: 16 }} />}
            label="Enterprise-grade Hardware ID Protection on all licenses"
            sx={{
              backgroundColor: alpha(colors.trading.buy, 0.1),
              color: colors.trading.buy,
              fontWeight: 500,
            }}
          />
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={2} sx={{ mb: 8 }} justifyContent="center" alignItems="stretch">
          {pricingPlans.map((plan) => (
            <Grid item xs={12} sm={6} md={2.4} key={plan.name}>
              <PricingCard
                plan={plan}
                onBuy={handleBuy(plan.name)}
              />
            </Grid>
          ))}
        </Grid>

        {/* Feature Comparison Table */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: 'center', mb: 3, color: colors.text.primary }}
          >
            Feature Comparison
          </Typography>
          <TableContainer component={Paper} sx={{ backgroundColor: colors.background.paper }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: '25%', fontSize: '0.8rem' }}>Feature</TableCell>
                  <TableCell align="center" sx={{ fontSize: '0.75rem' }}>Viewer</TableCell>
                  <TableCell align="center" sx={{ fontSize: '0.75rem' }}>Starter</TableCell>
                  <TableCell align="center" sx={{ fontSize: '0.75rem' }}>Basic</TableCell>
                  <TableCell align="center" sx={{ backgroundColor: alpha(colors.accent.primary, 0.1), fontSize: '0.75rem' }}>Pro</TableCell>
                  <TableCell align="center" sx={{ fontSize: '0.75rem' }}>Unlimited</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="caption" sx={{ color: colors.text.primary, fontWeight: 600 }}>
                      Price
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="caption" sx={{ fontWeight: 600, color: colors.text.primary }}>€29</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="caption" sx={{ fontWeight: 600, color: colors.text.primary }}>€90</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="caption" sx={{ fontWeight: 600, color: colors.text.primary }}>€120</Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ backgroundColor: alpha(colors.accent.primary, 0.05) }}>
                    <Typography variant="caption" sx={{ fontWeight: 600, color: colors.accent.primary }}>€250</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="caption" sx={{ fontWeight: 600, color: colors.text.primary }}>€400</Typography>
                  </TableCell>
                </TableRow>
                {featureComparison.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell>
                      <Typography variant="caption" sx={{ color: colors.text.primary }}>
                        {row.feature}
                      </Typography>
                    </TableCell>
                    <TableCell align="center"><FeatureValue value={row.viewer} /></TableCell>
                    <TableCell align="center"><FeatureValue value={row.starter} /></TableCell>
                    <TableCell align="center"><FeatureValue value={row.basic} /></TableCell>
                    <TableCell align="center" sx={{ backgroundColor: alpha(colors.accent.primary, 0.05) }}>
                      <FeatureValue value={row.pro} />
                    </TableCell>
                    <TableCell align="center"><FeatureValue value={row.unlimited} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Crypto Payment Info */}
        <Box
          sx={{
            mb: 6,
            p: 3,
            borderRadius: 2,
            backgroundColor: alpha(colors.accent.primary, 0.08),
            border: `1px solid ${alpha(colors.accent.primary, 0.3)}`,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" sx={{ color: colors.text.primary, mb: 1 }}>
            Multiple Payment Options
          </Typography>
          <Typography variant="body2" sx={{ color: colors.text.secondary }}>
            Pay with EUR (PayPal), SOL, or USDC on Solana network.
          </Typography>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ mb: 10, maxWidth: 800, mx: 'auto' }}>
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', mb: 4, color: colors.text.primary }}
          >
            Frequently Asked Questions
          </Typography>
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleAccordionChange(`panel${index}`)}
              sx={{
                backgroundColor: colors.background.secondary,
                '&:before': { display: 'none' },
                mb: 1,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: colors.text.secondary }} />}
                sx={{ py: 1 }}
              >
                <Typography variant="h5" sx={{ color: colors.text.primary }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ color: colors.text.secondary, lineHeight: 1.7 }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Important Notice */}
        <Box
          sx={{
            textAlign: 'center',
            py: 4,
            px: 3,
            mb: 4,
            backgroundColor: alpha(colors.trading.sell, 0.08),
            borderRadius: 2,
            border: `1px solid ${alpha(colors.trading.sell, 0.2)}`,
          }}
        >
          <SecurityIcon
            sx={{
              fontSize: 40,
              color: colors.trading.sell,
              mb: 2,
            }}
          />
          <Typography
            variant="h5"
            sx={{ color: colors.text.primary, mb: 2, fontWeight: 600 }}
          >
            Risk Disclosure
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: colors.text.secondary, maxWidth: 600, mx: 'auto', mb: 1 }}
          >
            AlekosTrader provides algorithmic execution infrastructure for qualified traders. Users maintain full responsibility for strategy design, risk parameters, and capital allocation decisions.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: colors.text.secondary, maxWidth: 600, mx: 'auto' }}
          >
            Mandatory practice: Validate all strategies using historical backtesting and paper trading before live deployment. Cryptocurrency markets carry substantial risk. Historical performance is not indicative of future results.
          </Typography>
        </Box>

        {/* Money-back Guarantee */}
        <Box
          sx={{
            textAlign: 'center',
            py: 4,
            px: 3,
            backgroundColor: alpha(colors.trading.buy, 0.1),
            borderRadius: 2,
            border: `1px solid ${alpha(colors.trading.buy, 0.3)}`,
          }}
        >
          <VerifiedUserIcon
            sx={{
              fontSize: 48,
              color: colors.trading.buy,
              mb: 2,
            }}
          />
          <Typography
            variant="h3"
            sx={{ color: colors.text.primary, mb: 1 }}
          >
            30-Day Satisfaction Guarantee
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: colors.text.secondary, maxWidth: 500, mx: 'auto' }}
          >
            Full refund available within 30 days if the platform does not meet your operational requirements. No questions asked.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingPage;
