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
    description: 'Core automation for active market participants seeking systematic execution',
    features: [
      '2 concurrent trading algorithms',
      '1 exchange API integration',
      'Core technical indicators (RSI, MACD, Bollinger)',
      'Standard support response',
      'Single hardware-bound license',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outlined',
  },
  {
    name: 'Pro Trader',
    price: 250,
    description: 'Advanced toolkit for traders requiring multi-exchange diversification and custom logic',
    popular: true,
    features: [
      '5 concurrent trading algorithms',
      '3 exchange API integrations',
      'Full indicator suite + custom formulas',
      'Visual strategy builder',
      'Priority 24h support response',
      'Single hardware-bound license',
    ],
    buttonText: 'Start Pro Trial',
    buttonVariant: 'contained',
  },
  {
    name: 'Enterprise',
    price: 800,
    description: 'Institutional-grade infrastructure for professional trading desks and fund operations',
    features: [
      'Unlimited concurrent algorithms',
      'Unlimited exchange integrations',
      'Custom strategy development',
      'Full REST/WebSocket API access',
      'Dedicated account manager',
      '3 hardware-bound licenses',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outlined',
  },
];

const featureComparison = [
  { feature: 'Exchange API Integrations', trader: '1', proTrader: '3', enterprise: 'Unlimited' },
  { feature: 'Concurrent Algorithms', trader: '2', proTrader: '5', enterprise: 'Unlimited' },
  { feature: 'Core Technical Indicators', trader: true, proTrader: true, enterprise: true },
  { feature: 'Full Indicator Suite', trader: false, proTrader: true, enterprise: true },
  { feature: 'Visual Strategy Builder', trader: false, proTrader: true, enterprise: true },
  { feature: 'Custom Strategy Development', trader: false, proTrader: false, enterprise: true },
  { feature: 'REST/WebSocket API Access', trader: false, proTrader: false, enterprise: true },
  { feature: 'Standard Support', trader: true, proTrader: true, enterprise: true },
  { feature: 'Priority 24h Response', trader: false, proTrader: true, enterprise: true },
  { feature: 'Dedicated Account Manager', trader: false, proTrader: false, enterprise: true },
  { feature: 'Hardware-Bound Licenses', trader: '1', proTrader: '1', enterprise: '3' },
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

const PricingCard = ({ plan, includeHardware, onHardwareToggle, onBuy }) => {
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
          onClick={onBuy}
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

// Map plan names to tier slugs
const TIER_SLUGS = {
  'Trader': 'trader',
  'Pro Trader': 'pro',
  'Enterprise': 'enterprise'
};

const PricingPage = () => {
  const navigate = useNavigate();
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

  const handleBuy = (planName) => () => {
    const tier = TIER_SLUGS[planName];
    const hardware = hardwareSelections[planName];
    navigate(`/checkout?tier=${tier}&hardware=${hardware}`);
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
        <Grid container spacing={3} sx={{ mb: 10 }} justifyContent="center" alignItems="stretch">
          {pricingPlans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.name}>
              <PricingCard
                plan={plan}
                includeHardware={hardwareSelections[plan.name]}
                onHardwareToggle={handleHardwareToggle(plan.name)}
                onBuy={handleBuy(plan.name)}
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
                  Dedicated Hardware Package
                </Typography>
              </Box>
              <Typography variant="h4" sx={{ color: colors.accent.secondary || '#9c27b0', mb: 2 }}>
                +€150
              </Typography>
              <Typography variant="body1" sx={{ color: colors.text.secondary, mb: 2 }}>
                Purpose-built trading appliance. Low-power, 24/7 operation. Pre-configured for immediate deployment.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ color: colors.text.primary, mb: 2 }}>
                Hardware Specifications:
              </Typography>
              <Stack spacing={1.5}>
                {[
                  'Raspberry Pi 4 (4GB RAM) - ARM Cortex-A72',
                  'Industrial-grade aluminum enclosure',
                  'Official 15W USB-C power supply',
                  '32GB industrial SD card with pre-configured environment',
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
