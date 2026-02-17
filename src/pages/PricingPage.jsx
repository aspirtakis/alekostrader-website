import React, { useState } from 'react';
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
  Checkbox,
  FormControlLabel,
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
    name: 'Trader',
    price: 180,
    description: 'Essential tools for experienced traders getting started',
    features: [
      '2 trading bots max',
      '1 exchange connection',
      'Basic indicators (RSI, MACD)',
      'Email support',
      'Single device license',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
  },
  {
    name: 'Pro Trader',
    price: 250,
    description: 'For serious traders who want maximum flexibility',
    popular: true,
    features: [
      '5 trading bots max',
      '3 exchange connections',
      'All indicators',
      'Strategy builder',
      'Priority support',
      'Single device license',
    ],
    buttonText: 'Start Pro Trial',
    buttonVariant: 'contained',
  },
  {
    name: 'Enterprise',
    price: 800,
    description: 'Full power for professional trading operations',
    features: [
      'Unlimited bots',
      'Unlimited exchanges',
      'Custom strategies',
      'Full API access',
      'Dedicated support',
      '3 device licenses',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outlined',
  },
];

const featureComparison = [
  { feature: 'Exchange Connections', trader: '1', proTrader: '3', enterprise: 'Unlimited' },
  { feature: 'Active Bots', trader: '2', proTrader: '5', enterprise: 'Unlimited' },
  { feature: 'Basic Indicators (RSI, MACD)', trader: true, proTrader: true, enterprise: true },
  { feature: 'All Indicators', trader: false, proTrader: true, enterprise: true },
  { feature: 'Strategy Builder', trader: false, proTrader: true, enterprise: true },
  { feature: 'Custom Strategies', trader: false, proTrader: false, enterprise: true },
  { feature: 'Full API Access', trader: false, proTrader: false, enterprise: true },
  { feature: 'Email Support', trader: true, proTrader: true, enterprise: true },
  { feature: 'Priority Support', trader: false, proTrader: true, enterprise: true },
  { feature: 'Dedicated Support', trader: false, proTrader: false, enterprise: true },
  { feature: 'Device Licenses', trader: '1', proTrader: '1', enterprise: '3' },
];

const faqItems = [
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 14-day free trial on all plans. No credit card required to start. You can explore all features and decide which plan works best for your trading needs.',
  },
  {
    question: 'How do I upgrade?',
    answer: 'Upgrading is easy. Simply go to your account settings and select "Change Plan". The price difference will be prorated for your current billing cycle. All your bots and settings will be preserved.',
  },
  {
    question: 'What is Hardware ID Protection?',
    answer: 'Your license is tied to your device hardware ID for security. This prevents unauthorized sharing while ensuring your license works reliably on your registered devices.',
  },
  {
    question: 'What is included in the Raspberry Pi Package?',
    answer: 'The package includes a Raspberry Pi 4 (4GB RAM), protective case, official power supply, and a 32GB SD card pre-configured with the trading software. It arrives ready to trade out of the box.',
  },
];

const PricingCard = ({ plan, includeHardware, onHardwareToggle }) => {
  const { name, price, description, features, popular, buttonText, buttonVariant } = plan;
  const totalPrice = includeHardware ? price + 150 : price;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: popular ? `2px solid ${colors.accent.primary}` : undefined,
        transform: popular ? 'scale(1.05)' : 'none',
        zIndex: popular ? 1 : 0,
        backgroundColor: popular ? alpha(colors.accent.primary, 0.05) : colors.background.paper,
      }}
    >
      {popular && (
        <Chip
          icon={<StarIcon sx={{ fontSize: 16 }} />}
          label="MOST POPULAR"
          size="small"
          sx={{
            position: 'absolute',
            top: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: colors.accent.primary,
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.7rem',
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, p: 4 }}>
        <Typography variant="h4" sx={{ mb: 1, color: colors.text.primary }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: colors.text.secondary }}>
          {description}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography
            component="span"
            sx={{ fontSize: '3rem', fontWeight: 700, color: colors.text.primary }}
          >
            €{totalPrice}
          </Typography>
          <Typography
            component="span"
            sx={{ fontSize: '1rem', color: colors.text.secondary, ml: 1 }}
          >
            /year
          </Typography>
        </Box>

        {/* Hardware ID Protected Badge */}
        <Chip
          icon={<SecurityIcon sx={{ fontSize: 14 }} />}
          label="Hardware ID Protected"
          size="small"
          sx={{
            mb: 3,
            backgroundColor: alpha(colors.trading.buy, 0.15),
            color: colors.trading.buy,
            fontWeight: 500,
            fontSize: '0.7rem',
          }}
        />

        <Stack spacing={1.5} sx={{ mb: 3 }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <CheckIcon sx={{ fontSize: 18, color: colors.trading.buy }} />
              <Typography variant="body2" sx={{ color: colors.text.primary }}>
                {feature}
              </Typography>
            </Box>
          ))}
        </Stack>

        {/* Raspberry Pi Hardware Add-on */}
        <Box
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 1,
            backgroundColor: alpha(colors.accent.secondary || '#9c27b0', 0.08),
            border: `1px solid ${alpha(colors.accent.secondary || '#9c27b0', 0.3)}`,
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={includeHardware}
                onChange={onHardwareToggle}
                sx={{
                  color: colors.accent.secondary || '#9c27b0',
                  '&.Mui-checked': {
                    color: colors.accent.secondary || '#9c27b0',
                  },
                }}
              />
            }
            label={
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MemoryIcon sx={{ fontSize: 18, color: colors.accent.secondary || '#9c27b0' }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: colors.text.primary }}>
                    +€150 - Raspberry Pi 4 Package
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: colors.text.secondary, display: 'block', mt: 0.5 }}>
                  Pre-configured, ready to trade
                </Typography>
              </Box>
            }
          />
          <Typography variant="caption" sx={{ color: colors.text.muted, display: 'block', mt: 1, ml: 4 }}>
            Includes: Pi 4 (4GB), case, power supply, 32GB SD card
          </Typography>
        </Box>

        <Button
          fullWidth
          variant={buttonVariant}
          color="primary"
          size="large"
          sx={{
            py: 1.5,
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

const PricingPage = () => {
  const [expanded, setExpanded] = useState(false);
  const [hardwareSelections, setHardwareSelections] = useState({
    Trader: false,
    'Pro Trader': false,
    Enterprise: false,
  });

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleHardwareToggle = (planName) => () => {
    setHardwareSelections((prev) => ({
      ...prev,
      [planName]: !prev[planName],
    }));
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
            Simple, Transparent Pricing
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
            Choose the plan that fits your trading needs. All plans include core features with no hidden fees.
          </Typography>
          <Chip
            icon={<SecurityIcon sx={{ fontSize: 16 }} />}
            label="All licenses are Hardware ID Protected"
            sx={{
              backgroundColor: alpha(colors.trading.buy, 0.1),
              color: colors.trading.buy,
              fontWeight: 500,
            }}
          />
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={3} sx={{ mb: 10 }} justifyContent="center" alignItems="stretch">
          {pricingPlans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.name}>
              <PricingCard
                plan={plan}
                includeHardware={hardwareSelections[plan.name]}
                onHardwareToggle={handleHardwareToggle(plan.name)}
              />
            </Grid>
          ))}
        </Grid>

        {/* Feature Comparison Table */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', mb: 4, color: colors.text.primary }}
          >
            Feature Comparison
          </Typography>
          <TableContainer component={Paper} sx={{ backgroundColor: colors.background.paper }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: '40%' }}>Feature</TableCell>
                  <TableCell align="center">Trader</TableCell>
                  <TableCell align="center" sx={{ backgroundColor: alpha(colors.accent.primary, 0.1) }}>
                    Pro Trader
                  </TableCell>
                  <TableCell align="center">Enterprise</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: colors.text.primary, fontWeight: 600 }}>
                      Annual Price
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body2" sx={{ fontWeight: 600, color: colors.text.primary }}>
                      €180/year
                    </Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ backgroundColor: alpha(colors.accent.primary, 0.05) }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: colors.accent.primary }}>
                      €250/year
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body2" sx={{ fontWeight: 600, color: colors.text.primary }}>
                      €800/year
                    </Typography>
                  </TableCell>
                </TableRow>
                {featureComparison.map((row) => (
                  <TableRow key={row.feature}>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: colors.text.primary }}>
                        {row.feature}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <FeatureValue value={row.trader} />
                    </TableCell>
                    <TableCell align="center" sx={{ backgroundColor: alpha(colors.accent.primary, 0.05) }}>
                      <FeatureValue value={row.proTrader} />
                    </TableCell>
                    <TableCell align="center">
                      <FeatureValue value={row.enterprise} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Raspberry Pi Hardware Package Section */}
        <Box
          sx={{
            mb: 10,
            p: 4,
            borderRadius: 2,
            backgroundColor: alpha(colors.accent.secondary || '#9c27b0', 0.08),
            border: `1px solid ${alpha(colors.accent.secondary || '#9c27b0', 0.3)}`,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <MemoryIcon sx={{ fontSize: 40, color: colors.accent.secondary || '#9c27b0' }} />
                <Typography variant="h3" sx={{ color: colors.text.primary }}>
                  Raspberry Pi 4 Package
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ color: colors.accent.secondary || '#9c27b0', mb: 2 }}>
                +€150
              </Typography>
              <Typography variant="body1" sx={{ color: colors.text.secondary, mb: 2 }}>
                Pre-configured, ready to trade. Add this to any plan for a dedicated trading device.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ color: colors.text.primary, mb: 2 }}>
                Package Includes:
              </Typography>
              <Stack spacing={1.5}>
                {[
                  'Raspberry Pi 4 (4GB RAM)',
                  'Protective case',
                  'Official power supply',
                  '32GB SD card with pre-installed software',
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <CheckIcon sx={{ fontSize: 18, color: colors.trading.buy }} />
                    <Typography variant="body2" sx={{ color: colors.text.primary }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
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
            Professional Tool - Not Financial Advice
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: colors.text.secondary, maxWidth: 600, mx: 'auto', mb: 1 }}
          >
            AlekosTrader is a trading tool for experienced traders. You define your own strategies,
            set your parameters, and are fully responsible for all trading decisions and outcomes.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: colors.text.secondary, maxWidth: 600, mx: 'auto' }}
          >
            Always use our backtesting and simulation features to test your strategies before trading with real funds.
            Past performance does not guarantee future results.
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
            30-Day Money-Back Guarantee
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: colors.text.secondary, maxWidth: 500, mx: 'auto' }}
          >
            Not satisfied with the tool? Get a full refund within 30 days.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingPage;
