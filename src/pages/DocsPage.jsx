import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Chip,
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
  alpha,
} from '@mui/material';
import {
  ExpandMore as ExpandIcon,
  RocketLaunch as GettingStartedIcon,
  Key as ExchangeIcon,
  SmartToy as BotsIcon,
  Psychology as StrategiesIcon,
  ShowChart as IndicatorsIcon,
  Help as FAQIcon,
  CheckCircle as CheckIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  Security as SecurityIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { colors } from '../theme/tradingTheme';

// Sidebar categories
const categories = [
  { id: 'getting-started', label: 'Getting Started', icon: <GettingStartedIcon /> },
  { id: 'exchange-setup', label: 'Exchange Setup', icon: <ExchangeIcon /> },
  { id: 'trading-bots', label: 'Trading Bots', icon: <BotsIcon /> },
  { id: 'strategies', label: 'Strategies', icon: <StrategiesIcon /> },
  { id: 'indicators', label: 'Technical Indicators', icon: <IndicatorsIcon /> },
  { id: 'faq', label: 'FAQ', icon: <FAQIcon /> },
];

// Content sections
const DocsPage = () => {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const renderGettingStarted = () => (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: colors.accent.primary }}>
        Getting Started
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">System Requirements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Component</TableCell>
                  <TableCell>Minimum</TableCell>
                  <TableCell>Recommended</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Node.js</TableCell>
                  <TableCell>v16.x</TableCell>
                  <TableCell>v18.x or later</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>RAM</TableCell>
                  <TableCell>2 GB</TableCell>
                  <TableCell>4 GB or more</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Storage</TableCell>
                  <TableCell>500 MB</TableCell>
                  <TableCell>1 GB (for logs/data)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Browser</TableCell>
                  <TableCell>Chrome, Firefox, Safari</TableCell>
                  <TableCell>Latest version</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Installation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Follow these steps to install and run the trading application:
          </Typography>

          <Paper sx={{ p: 2, bgcolor: colors.background.tertiary, mb: 2 }}>
            <Typography variant="body2" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
{`# Clone the repository
git clone <repository-url>
cd coinbase-local-app

# Install dependencies
npm install

# Start the development server
npm start`}
            </Typography>
          </Paper>

          <Alert severity="info" sx={{ mb: 2 }}>
            The application will open at <strong>http://localhost:3000</strong> in your browser.
          </Alert>

          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Backend Server:</strong> The backend runs on port 3001 by default.
          </Typography>
          <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
            <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
{`# Start the backend server (in a separate terminal)
cd backend
npm start`}
            </Typography>
          </Paper>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">First Login</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 2 }}>
            When you first access the application:
          </Typography>
          <Box component="ol" sx={{ pl: 3 }}>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Enter your credentials on the login page
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Navigate to <strong>Settings</strong> to configure your exchange API keys
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Select your preferred exchange from the exchange selector in the header
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Start trading on the Trading dashboard
              </Typography>
            </li>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  const renderExchangeSetup = () => (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: colors.accent.primary }}>
        Exchange Setup
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">How to Get API Keys</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>
            Coinbase Advanced
          </Typography>
          <Box component="ol" sx={{ pl: 3, mb: 3 }}>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Log in to your Coinbase account</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Go to Settings &gt; API</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Click "New API Key"</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Select permissions: <Chip size="small" label="View" sx={{ mx: 0.5 }} /> <Chip size="small" label="Trade" sx={{ mx: 0.5 }} /></Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Complete 2FA verification</Typography></li>
            <li><Typography variant="body2">Copy your API Key and Secret</Typography></li>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>
            Binance
          </Typography>
          <Box component="ol" sx={{ pl: 3, mb: 3 }}>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Log in to Binance and go to API Management</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Create a new API key with a label</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Enable "Spot Trading" permission</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Optionally restrict to your IP address</Typography></li>
            <li><Typography variant="body2">Save your API Key and Secret securely</Typography></li>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>
            Bitvavo
          </Typography>
          <Box component="ol" sx={{ pl: 3 }}>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Log in to Bitvavo</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Navigate to Account &gt; API</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Generate new API credentials</Typography></li>
            <li><Typography variant="body2">Enable trading permissions as needed</Typography></li>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SecurityIcon color="warning" />
            <Typography variant="h6">Security Best Practices</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Alert severity="warning" sx={{ mb: 2 }}>
            Your API keys provide access to your exchange account. Handle them with care.
          </Alert>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <CheckIcon color="success" sx={{ mt: 0.5 }} />
              <Box>
                <Typography variant="body2" fontWeight={600}>Never share your API secret</Typography>
                <Typography variant="body2" color="text.secondary">
                  Keep your secret key confidential and never expose it in code or screenshots
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <CheckIcon color="success" sx={{ mt: 0.5 }} />
              <Box>
                <Typography variant="body2" fontWeight={600}>Use IP whitelisting</Typography>
                <Typography variant="body2" color="text.secondary">
                  Restrict API access to your specific IP address when possible
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <CheckIcon color="success" sx={{ mt: 0.5 }} />
              <Box>
                <Typography variant="body2" fontWeight={600}>Disable withdrawal permissions</Typography>
                <Typography variant="body2" color="text.secondary">
                  Only enable trade permissions; never enable withdrawals via API
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <CheckIcon color="success" sx={{ mt: 0.5 }} />
              <Box>
                <Typography variant="body2" fontWeight={600}>Rotate keys periodically</Typography>
                <Typography variant="body2" color="text.secondary">
                  Create new API keys every few months and revoke old ones
                </Typography>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Testing Connection</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 2 }}>
            After adding your API credentials in Settings:
          </Typography>
          <Box component="ol" sx={{ pl: 3 }}>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Click the <strong>Refresh</strong> icon next to your credentials to test the connection
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                A green "Connected" badge indicates successful authentication
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                If verification fails, check your API key permissions and try again
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Use "Sandbox" mode to test with paper trading before using real funds
              </Typography>
            </li>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  const renderTradingBots = () => (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: colors.accent.primary }}>
        Trading Bots
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Available Bots</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="h6" sx={{ color: colors.trading.buy, mb: 1 }}>
                DCA Bot (Dollar Cost Averaging)
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Automatically buys a fixed amount of cryptocurrency at regular intervals,
                reducing the impact of volatility over time.
              </Typography>
              <Chip size="small" label="Low Risk" color="success" sx={{ mr: 1 }} />
              <Chip size="small" label="Long-term" variant="outlined" />
            </Paper>

            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="h6" sx={{ color: colors.accent.primary, mb: 1 }}>
                Grid Bot
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Places buy and sell orders at predetermined price levels, profiting from
                price oscillations within a defined range.
              </Typography>
              <Chip size="small" label="Medium Risk" color="warning" sx={{ mr: 1 }} />
              <Chip size="small" label="Sideways Markets" variant="outlined" />
            </Paper>

            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="h6" sx={{ color: colors.accent.warning, mb: 1 }}>
                Bump Detector Bot
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Detects sudden price movements and volume spikes to identify potential
                breakout opportunities.
              </Typography>
              <Chip size="small" label="Higher Risk" color="error" sx={{ mr: 1 }} />
              <Chip size="small" label="Active Trading" variant="outlined" />
            </Paper>

            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="h6" sx={{ color: colors.accent.secondary, mb: 1 }}>
                Closer Bot
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Monitors open positions and automatically closes them based on profit targets
                or stop-loss conditions.
              </Typography>
              <Chip size="small" label="Risk Management" color="info" sx={{ mr: 1 }} />
              <Chip size="small" label="Position Management" variant="outlined" />
            </Paper>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">When to Use Which Bot</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Market Condition</TableCell>
                  <TableCell>Recommended Bot</TableCell>
                  <TableCell>Why</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Bull Market</TableCell>
                  <TableCell>DCA Bot</TableCell>
                  <TableCell>Consistent accumulation captures uptrend</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sideways/Ranging</TableCell>
                  <TableCell>Grid Bot</TableCell>
                  <TableCell>Profits from price oscillations</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>High Volatility</TableCell>
                  <TableCell>Bump Detector</TableCell>
                  <TableCell>Catches momentum moves</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Any (with positions)</TableCell>
                  <TableCell>Closer Bot</TableCell>
                  <TableCell>Protects profits and limits losses</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WarningIcon color="warning" />
            <Typography variant="h6">Risk Management Tips</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Alert severity="error" sx={{ mb: 2 }}>
            Trading involves risk. Never invest more than you can afford to lose.
          </Alert>

          <Box component="ul" sx={{ pl: 3 }}>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Start small:</strong> Test bots with minimal amounts before scaling up
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Use stop losses:</strong> Configure the Closer Bot to limit potential losses
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Diversify:</strong> Don't put all funds into a single bot or strategy
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Monitor regularly:</strong> Check bot performance and adjust settings
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Backtest first:</strong> Use the Backtest feature to validate strategies
              </Typography>
            </li>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  const renderStrategies = () => (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: colors.accent.primary }}>
        Strategies
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">How to Create a Strategy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Navigate to <strong>Automated Trading &gt; Strategies</strong> to create custom trading strategies:
          </Typography>
          <Box component="ol" sx={{ pl: 3 }}>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Click <strong>"New Strategy"</strong> to open the strategy builder
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Give your strategy a descriptive name
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Add <strong>entry conditions</strong> (when to buy)
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Add <strong>exit conditions</strong> (when to sell)
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Configure position sizing and risk parameters
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Save and optionally backtest before enabling
              </Typography>
            </li>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Condition Types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="subtitle2" sx={{ color: colors.accent.primary, mb: 1 }}>
                Price Conditions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price above/below a value, crosses moving average, breaks support/resistance
              </Typography>
            </Paper>

            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="subtitle2" sx={{ color: colors.accent.primary, mb: 1 }}>
                Indicator Conditions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                RSI overbought/oversold, MACD crossover, Bollinger Band touch, volume spike
              </Typography>
            </Paper>

            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="subtitle2" sx={{ color: colors.accent.primary, mb: 1 }}>
                Time Conditions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Trade only during specific hours, days of week, or avoid news events
              </Typography>
            </Paper>

            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="subtitle2" sx={{ color: colors.accent.primary, mb: 1 }}>
                Compound Conditions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Combine multiple conditions with AND/OR logic for complex strategies
              </Typography>
            </Paper>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Backtesting Guide</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Backtesting simulates your strategy against historical data:
          </Typography>

          <Box component="ol" sx={{ pl: 3, mb: 2 }}>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Go to <strong>Automated Trading &gt; Backtest</strong>
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Select the strategy to test
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Choose the trading pair and timeframe
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Set the historical date range
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Configure initial capital and fees
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Click "Run Backtest" and analyze results
              </Typography>
            </li>
          </Box>

          <Alert severity="info">
            Past performance does not guarantee future results. Always use proper risk management.
          </Alert>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  const renderIndicators = () => (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: colors.accent.primary }}>
        Technical Indicators
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Trend Indicators</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant="subtitle2" sx={{ color: colors.trading.buy }}>
                Moving Averages (SMA/EMA)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Smooth price data to identify trend direction. EMA responds faster to recent changes.
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="subtitle2" sx={{ color: colors.trading.buy }}>
                MACD (Moving Average Convergence Divergence)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Shows relationship between two EMAs. Signal line crossovers indicate momentum shifts.
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="subtitle2" sx={{ color: colors.trading.buy }}>
                ADX (Average Directional Index)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Measures trend strength (not direction). Values above 25 indicate a strong trend.
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Momentum Indicators</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant="subtitle2" sx={{ color: colors.accent.warning }}>
                RSI (Relative Strength Index)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Oscillates 0-100. Above 70 = overbought, below 30 = oversold.
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="subtitle2" sx={{ color: colors.accent.warning }}>
                Stochastic Oscillator
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Compares closing price to price range. %K and %D crossovers signal reversals.
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="subtitle2" sx={{ color: colors.accent.warning }}>
                CCI (Commodity Channel Index)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Identifies cyclical trends. Above +100 = overbought, below -100 = oversold.
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Volatility Indicators</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant="subtitle2" sx={{ color: colors.accent.secondary }}>
                Bollinger Bands
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price channels based on standard deviation. Bands widen in volatile markets.
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="subtitle2" sx={{ color: colors.accent.secondary }}>
                ATR (Average True Range)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Measures market volatility. Useful for setting stop-loss distances.
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="subtitle2" sx={{ color: colors.accent.secondary }}>
                Keltner Channels
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Similar to Bollinger Bands but uses ATR instead of standard deviation.
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Volume Indicators</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography variant="subtitle2" sx={{ color: colors.accent.info }}>
                Volume
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Number of units traded. High volume confirms price movements.
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="subtitle2" sx={{ color: colors.accent.info }}>
                OBV (On-Balance Volume)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cumulative volume indicator. Divergence from price signals potential reversals.
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography variant="subtitle2" sx={{ color: colors.accent.info }}>
                VWAP (Volume Weighted Average Price)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Average price weighted by volume. Institutional traders use as benchmark.
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  const renderFAQ = () => (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: colors.accent.primary }}>
        Frequently Asked Questions
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            How do I start trading?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            First, add your exchange API credentials in Settings. Then select your exchange
            from the dropdown in the header. Navigate to the Trading page to view markets
            and place orders, or set up automated bots under Automated Trading.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            Are my API keys secure?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            API keys are encrypted before storage using AES-256 encryption. They are never
            transmitted in plain text. For maximum security, use API keys with trade-only
            permissions (no withdrawals) and consider IP whitelisting on your exchange.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            Can I use multiple exchanges?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Yes! Add credentials for multiple exchanges in Settings. Use the exchange
            selector in the header to switch between them. Each exchange can have multiple
            API key sets (e.g., for different accounts or sandbox testing).
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            What is Sandbox mode?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Sandbox (or Testnet) mode allows you to test trading strategies with fake money.
            This is useful for learning the platform and testing bots without risking real
            funds. Enable it when adding API credentials in Settings.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            How do I stop a running bot?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Go to Automated Trading &gt; Bots and click the stop button on the active bot.
            The bot will finish any pending operations and stop accepting new trades.
            Open positions are not automatically closed - manage them manually or use
            the Closer Bot.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            Why did my order fail?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Common reasons for order failures:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 0 }}>
            <li><Typography variant="body2">Insufficient balance</Typography></li>
            <li><Typography variant="body2">Order size below minimum</Typography></li>
            <li><Typography variant="body2">API key lacks trading permission</Typography></li>
            <li><Typography variant="body2">Rate limiting from exchange</Typography></li>
            <li><Typography variant="body2">Network connectivity issues</Typography></li>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            How can I get support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Check the Logs page for detailed error messages. Review this documentation
            for common solutions. For technical issues, check the console logs in
            your browser developer tools (F12) for additional debugging information.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  const renderContent = () => {
    switch (activeCategory) {
      case 'getting-started':
        return renderGettingStarted();
      case 'exchange-setup':
        return renderExchangeSetup();
      case 'trading-bots':
        return renderTradingBots();
      case 'strategies':
        return renderStrategies();
      case 'indicators':
        return renderIndicators();
      case 'faq':
        return renderFAQ();
      default:
        return renderGettingStarted();
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: 'calc(100vh - 64px)' }}>
      {/* Sidebar */}
      <Paper
        sx={{
          width: 260,
          flexShrink: 0,
          bgcolor: colors.background.secondary,
          borderRight: `1px solid ${colors.border.default}`,
          borderRadius: 0,
        }}
      >
        <Box sx={{ p: 2, borderBottom: `1px solid ${colors.border.default}` }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Documentation
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Learn how to use the platform
          </Typography>
        </Box>
        <List sx={{ p: 1 }}>
          {categories.map((category) => (
            <ListItemButton
              key={category.id}
              selected={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                '&.Mui-selected': {
                  bgcolor: alpha(colors.accent.primary, 0.15),
                  '&:hover': {
                    bgcolor: alpha(colors.accent.primary, 0.2),
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: activeCategory === category.id ? colors.accent.primary : 'inherit' }}>
                {category.icon}
              </ListItemIcon>
              <ListItemText
                primary={category.label}
                primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: activeCategory === category.id ? 600 : 400,
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Paper>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 4, maxWidth: 900 }}>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default DocsPage;
