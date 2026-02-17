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
  { id: 'api-reference', label: 'API Reference', icon: <CodeIcon /> },
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

      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
        Welcome to AlekosTrader, a professional-grade multi-exchange trading platform designed for serious traders.
        This guide will walk you through the initial setup and configuration process to get your trading environment
        operational within minutes.
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">System Requirements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 2 }}>
            AlekosTrader is engineered to run efficiently on a wide range of hardware configurations,
            from dedicated servers to low-power devices like Raspberry Pi. Ensure your environment meets
            the following specifications for optimal performance.
          </Typography>
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
                  <TableCell>Node.js Runtime</TableCell>
                  <TableCell>v16.x LTS</TableCell>
                  <TableCell>v18.x LTS or later</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>System Memory (RAM)</TableCell>
                  <TableCell>2 GB</TableCell>
                  <TableCell>4 GB or more</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Storage Capacity</TableCell>
                  <TableCell>500 MB</TableCell>
                  <TableCell>1 GB+ (for historical data and logs)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Supported Browsers</TableCell>
                  <TableCell>Chrome 90+, Firefox 88+, Safari 14+</TableCell>
                  <TableCell>Latest stable release</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Network</TableCell>
                  <TableCell>Stable internet connection</TableCell>
                  <TableCell>Low-latency connection for live trading</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Alert severity="info" sx={{ mt: 2 }}>
            <strong>Raspberry Pi Users:</strong> AlekosTrader is fully compatible with Raspberry Pi 4 (4GB+ model)
            for 24/7 unattended operation with minimal power consumption.
          </Alert>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Installation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 2 }}>
            AlekosTrader uses a client-server architecture with a React frontend and Node.js backend.
            Follow these steps to deploy the complete trading infrastructure on your local machine or server.
          </Typography>

          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            Step 1: Clone and Install Dependencies
          </Typography>
          <Paper sx={{ p: 2, bgcolor: colors.background.tertiary, mb: 2 }}>
            <Typography variant="body2" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
{`# Clone the repository
git clone <repository-url>
cd alekostrader

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend && npm install`}
            </Typography>
          </Paper>

          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            Step 2: Configure Environment Variables
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Create a <code>.env</code> file in the backend directory with your encryption key for secure API credential storage.
            A strong 32-character key is automatically generated on first run if not provided.
          </Typography>

          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
            Step 3: Launch the Application
          </Typography>
          <Paper sx={{ p: 2, bgcolor: colors.background.tertiary, mb: 2 }}>
            <Typography variant="body2" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
{`# Terminal 1: Start the backend trading engine
cd backend
npm start

# Terminal 2: Start the frontend dashboard
npm start`}
            </Typography>
          </Paper>

          <Alert severity="info" sx={{ mb: 2 }}>
            The dashboard will be accessible at <strong>http://localhost:3000</strong>. The backend API
            runs on port <strong>3001</strong> and handles all exchange communications and bot execution.
          </Alert>

          <Alert severity="success">
            <strong>Production Deployment:</strong> For 24/7 operation, use a process manager like PM2
            to ensure automatic restarts and system resilience.
          </Alert>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Initial Configuration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 2 }}>
            After launching AlekosTrader for the first time, complete the following configuration steps
            to establish secure connections with your cryptocurrency exchanges.
          </Typography>
          <Box component="ol" sx={{ pl: 3 }}>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Access the Dashboard:</strong> Open your browser and navigate to the application URL.
                The default credentials are displayed on the login screen for first-time setup.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Configure Exchange Credentials:</strong> Navigate to <strong>Settings</strong> and add your
                exchange API keys. All credentials are encrypted using AES-256 before storage.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Select Active Exchange:</strong> Use the exchange selector in the application header to choose
                which exchange to operate on. You can switch between exchanges seamlessly.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Verify Connection:</strong> Test your API connection using the verification button in Settings.
                A successful connection will display your account balance information.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Begin Trading:</strong> Access the Trading Dashboard to view live market data, execute trades,
                or configure automated trading bots.
              </Typography>
            </li>
          </Box>
          <Alert severity="warning" sx={{ mt: 2 }}>
            <strong>Security Recommendation:</strong> Before using real funds, test all configurations using Sandbox/Testnet
            mode to familiarize yourself with the platform functionality.
          </Alert>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  const renderExchangeSetup = () => (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: colors.accent.primary }}>
        Exchange Setup
      </Typography>

      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
        AlekosTrader integrates with major cryptocurrency exchanges through their official REST and WebSocket APIs.
        This section provides detailed instructions for obtaining and configuring API credentials for each supported exchange.
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">API Key Generation Guide</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>
            Coinbase Advanced Trade
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Coinbase Advanced Trade (formerly Coinbase Pro) provides institutional-grade trading with competitive fees.
          </Typography>
          <Box component="ol" sx={{ pl: 3, mb: 3 }}>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Sign in to your Coinbase account at <strong>coinbase.com</strong></Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Navigate to <strong>Settings &gt; API</strong> in your account menu</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Click <strong>"New API Key"</strong> to generate credentials</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Configure permissions: <Chip size="small" label="View" sx={{ mx: 0.5 }} /> <Chip size="small" label="Trade" sx={{ mx: 0.5 }} /> (Never enable Withdraw)</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Complete two-factor authentication verification</Typography></li>
            <li><Typography variant="body2">Securely store your <strong>API Key</strong> and <strong>API Secret</strong> - the secret is only shown once</Typography></li>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>
            Binance
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Binance is the world's largest cryptocurrency exchange by trading volume, offering extensive market pairs.
          </Typography>
          <Box component="ol" sx={{ pl: 3, mb: 3 }}>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Access your Binance account and navigate to <strong>API Management</strong> under Account Settings</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Create a new API key with a descriptive label (e.g., "AlekosTrader Production")</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Enable <strong>"Enable Spot & Margin Trading"</strong> permission only</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}><strong>Recommended:</strong> Configure IP access restrictions to your server's static IP address</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Complete security verification (email, SMS, or authenticator)</Typography></li>
            <li><Typography variant="body2">Record your API Key and Secret Key in a secure password manager</Typography></li>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>
            Bitvavo
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Bitvavo is a European exchange known for competitive fees and regulatory compliance under Dutch law.
          </Typography>
          <Box component="ol" sx={{ pl: 3, mb: 3 }}>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Sign in to your Bitvavo account</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Navigate to <strong>Account &gt; API Access</strong></Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Click <strong>"Generate new API key"</strong></Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Enable <strong>View</strong> and <strong>Trade</strong> permissions</Typography></li>
            <li><Typography variant="body2">Copy and securely store your API Key and Secret</Typography></li>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" sx={{ mb: 2, fontSize: '1rem' }}>
            KuCoin
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            KuCoin offers extensive altcoin selection and advanced trading features for experienced traders.
          </Typography>
          <Box component="ol" sx={{ pl: 3 }}>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Log in to KuCoin and navigate to <strong>API Management</strong></Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Click <strong>"Create API"</strong> and set a passphrase (required for KuCoin)</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Enable <strong>General</strong> and <strong>Spot Trading</strong> permissions</Typography></li>
            <li><Typography variant="body2" sx={{ mb: 1 }}>Configure IP restrictions for enhanced security</Typography></li>
            <li><Typography variant="body2">Store your API Key, Secret, and Passphrase - all three are required for authentication</Typography></li>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SecurityIcon color="warning" />
            <Typography variant="h6">API Security Best Practices</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Alert severity="warning" sx={{ mb: 2 }}>
            <strong>Critical Security Notice:</strong> API credentials grant programmatic access to your exchange account.
            Following these security protocols is essential to protect your assets.
          </Alert>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <CheckIcon color="success" sx={{ mt: 0.5 }} />
              <Box>
                <Typography variant="body2" fontWeight={600}>Protect Your API Secret</Typography>
                <Typography variant="body2" color="text.secondary">
                  Treat your API secret like a password. Never share it, commit it to version control,
                  include it in screenshots, or transmit it over unencrypted channels.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <CheckIcon color="success" sx={{ mt: 0.5 }} />
              <Box>
                <Typography variant="body2" fontWeight={600}>Implement IP Whitelisting</Typography>
                <Typography variant="body2" color="text.secondary">
                  Configure your API keys to only accept requests from your server's IP address.
                  This prevents unauthorized access even if credentials are compromised.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <CheckIcon color="success" sx={{ mt: 0.5 }} />
              <Box>
                <Typography variant="body2" fontWeight={600}>Principle of Least Privilege</Typography>
                <Typography variant="body2" color="text.secondary">
                  Enable only the minimum required permissions. AlekosTrader requires View and Trade access only.
                  <strong> Never enable withdrawal permissions</strong> - this creates an unnecessary security risk.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <CheckIcon color="success" sx={{ mt: 0.5 }} />
              <Box>
                <Typography variant="body2" fontWeight={600}>Regular Key Rotation</Typography>
                <Typography variant="body2" color="text.secondary">
                  Rotate your API credentials every 90 days as a security best practice.
                  Immediately revoke and regenerate keys if you suspect any compromise.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <CheckIcon color="success" sx={{ mt: 0.5 }} />
              <Box>
                <Typography variant="body2" fontWeight={600}>Local Encryption</Typography>
                <Typography variant="body2" color="text.secondary">
                  AlekosTrader encrypts all API credentials using AES-256 encryption before storing them locally.
                  Your credentials never leave your server and are never transmitted to external services.
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

      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
        AlekosTrader includes a suite of automated trading bots designed for different market conditions and trading styles.
        All bots support multi-pair execution, allowing you to run simultaneous strategies across multiple trading pairs.
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Bot Overview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="h6" sx={{ color: colors.trading.buy, mb: 1 }}>
                DCA Bot (Dollar Cost Averaging)
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Implements systematic investment strategies by executing fixed-amount purchases at configurable intervals.
                This time-tested approach reduces the impact of volatility through cost averaging, making it ideal for
                long-term accumulation strategies. Supports multiple time intervals from minutes to monthly purchases.
              </Typography>
              <Chip size="small" label="Low Risk" color="success" sx={{ mr: 1 }} />
              <Chip size="small" label="Long-term Accumulation" variant="outlined" sx={{ mr: 1 }} />
              <Chip size="small" label="Set-and-Forget" variant="outlined" />
            </Paper>

            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="h6" sx={{ color: colors.accent.primary, mb: 1 }}>
                Grid Trading Bot
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Deploys a grid of limit orders at predefined price intervals, automatically capturing profits from
                natural market oscillations. The bot continuously replaces filled orders to maintain the grid structure.
                Optimal for ranging markets with defined support and resistance levels.
              </Typography>
              <Chip size="small" label="Medium Risk" color="warning" sx={{ mr: 1 }} />
              <Chip size="small" label="Range-Bound Markets" variant="outlined" sx={{ mr: 1 }} />
              <Chip size="small" label="Automated Rebalancing" variant="outlined" />
            </Paper>

            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="h6" sx={{ color: colors.accent.warning, mb: 1 }}>
                Bumper Bot (Momentum Detector)
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Monitors real-time price action and volume data to detect sudden momentum shifts and potential breakouts.
                Uses configurable thresholds for price change percentage and volume multipliers. Includes automatic
                position exit strategies based on trailing stops or fixed targets.
              </Typography>
              <Chip size="small" label="Higher Risk" color="error" sx={{ mr: 1 }} />
              <Chip size="small" label="Active Trading" variant="outlined" sx={{ mr: 1 }} />
              <Chip size="small" label="Momentum Strategy" variant="outlined" />
            </Paper>

            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="h6" sx={{ color: colors.accent.secondary, mb: 1 }}>
                Closer Bot (Position Manager)
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Provides intelligent position management by monitoring unrealized P/L and executing exits based on
                configurable profit targets or stop-loss thresholds. Supports tiered take-profit strategies for
                scaling out of positions gradually. Essential for disciplined risk management.
              </Typography>
              <Chip size="small" label="Risk Management" color="info" sx={{ mr: 1 }} />
              <Chip size="small" label="Position Management" variant="outlined" sx={{ mr: 1 }} />
              <Chip size="small" label="Automated Exits" variant="outlined" />
            </Paper>

            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="h6" sx={{ color: '#9C27B0', mb: 1 }}>
                Strateger Bot (Custom Strategy Builder)
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Build custom trading strategies using a combination of technical indicators, price conditions,
                and timing rules. Features a visual strategy builder with backtesting capabilities.
                Supports compound conditions using AND/OR logic for sophisticated entry and exit rules.
              </Typography>
              <Chip size="small" label="Customizable" color="secondary" sx={{ mr: 1 }} />
              <Chip size="small" label="Technical Analysis" variant="outlined" sx={{ mr: 1 }} />
              <Chip size="small" label="Backtesting" variant="outlined" />
            </Paper>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Bot Selection Guide</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Selecting the appropriate bot depends on current market conditions, your risk tolerance, and investment timeline.
            Use this reference to match bots with market environments.
          </Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Market Condition</strong></TableCell>
                  <TableCell><strong>Recommended Bot</strong></TableCell>
                  <TableCell><strong>Rationale</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Uptrend / Bull Market</TableCell>
                  <TableCell>DCA Bot</TableCell>
                  <TableCell>Systematic accumulation benefits from overall price appreciation</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Consolidation / Range-Bound</TableCell>
                  <TableCell>Grid Bot</TableCell>
                  <TableCell>Extracts profits from repetitive price oscillations within defined boundaries</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>High Volatility / Breakouts</TableCell>
                  <TableCell>Bumper Bot</TableCell>
                  <TableCell>Capitalizes on sudden momentum shifts and volume spikes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Active Positions</TableCell>
                  <TableCell>Closer Bot</TableCell>
                  <TableCell>Enforces disciplined exits based on profit targets or stop-loss levels</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Custom Conditions</TableCell>
                  <TableCell>Strateger Bot</TableCell>
                  <TableCell>Implements personalized strategies using technical indicator combinations</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Alert severity="info" sx={{ mt: 2 }}>
            <strong>Pro Tip:</strong> Run multiple bots simultaneously - use DCA for long-term accumulation,
            Grid for range trading, and Closer for risk management on all active positions.
          </Alert>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WarningIcon color="warning" />
            <Typography variant="h6">Risk Management Framework</Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Alert severity="error" sx={{ mb: 2 }}>
            <strong>Important Risk Disclosure:</strong> Cryptocurrency trading involves substantial risk of loss.
            Past performance does not guarantee future results. Never trade with capital you cannot afford to lose.
          </Alert>

          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
            Essential Risk Management Practices:
          </Typography>

          <Box component="ul" sx={{ pl: 3 }}>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Position Sizing:</strong> Limit individual trade exposure to 1-2% of total portfolio value.
                This ensures no single trade can cause catastrophic losses.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Paper Trading First:</strong> Validate all bot configurations in Sandbox mode before deploying real capital.
                Run strategies for at least 2 weeks to assess performance.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Implement Stop-Losses:</strong> Configure the Closer Bot on all active positions to enforce
                maximum loss thresholds. A common guideline is limiting losses to 5-10% per position.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Diversification:</strong> Distribute capital across multiple assets and strategies.
                Avoid concentrating all funds in a single trading pair or bot.
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>Regular Monitoring:</strong> Review bot performance daily during initial deployment.
                Adjust parameters based on changing market conditions.
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                <strong>Historical Validation:</strong> Use the backtesting module to simulate strategy performance
                against historical data before live deployment.
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

      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
        Find answers to common questions about AlekosTrader setup, security, and operation.
      </Typography>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            How do I begin trading on AlekosTrader?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Getting started involves three steps: First, configure your exchange API credentials in the Settings panel.
            Second, select your active exchange from the dropdown menu in the application header.
            Third, navigate to the Trading Dashboard to access real-time market data and order placement,
            or configure automated trading bots under the Automated Trading section.
            We recommend starting with Sandbox mode to familiarize yourself with the interface before trading with real funds.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            How are my API credentials protected?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 1 }}>
            AlekosTrader implements industry-standard security measures for credential protection:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 0 }}>
            <li><Typography variant="body2"><strong>AES-256 Encryption:</strong> All API credentials are encrypted at rest using the Advanced Encryption Standard with 256-bit keys</Typography></li>
            <li><Typography variant="body2"><strong>Local Storage Only:</strong> Credentials are stored exclusively on your local server - they are never transmitted to external services</Typography></li>
            <li><Typography variant="body2"><strong>Memory Security:</strong> Credentials are decrypted only when needed for API calls and cleared from memory afterward</Typography></li>
            <li><Typography variant="body2"><strong>No Cloud Dependency:</strong> Unlike cloud-based platforms, your keys never leave your infrastructure</Typography></li>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            Does AlekosTrader support multiple exchanges simultaneously?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            AlekosTrader supports concurrent connections to multiple cryptocurrency exchanges.
            Configure credentials for Coinbase, Binance, Bitvavo, and KuCoin in the Settings panel.
            Use the exchange selector to switch your active trading context. Each exchange can have
            multiple credential sets for different accounts or to separate production and sandbox environments.
            Bots can be configured to operate on specific exchanges, allowing diversified strategies across platforms.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            What is Sandbox/Testnet mode and how should I use it?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Sandbox mode connects to exchange testnet environments that simulate real trading with virtual funds.
            This is essential for validating bot configurations, testing new strategies, and learning platform
            functionality without financial risk. Most major exchanges provide sandbox environments -
            you will need to generate separate API credentials specifically for the testnet.
            Enable sandbox mode when adding credentials to route all orders to the test environment.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            How do I safely stop a running bot?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Navigate to <strong>Automated Trading &gt; Bots</strong> and click the stop button on the active bot.
            The bot will gracefully complete any pending order operations before halting.
            <strong> Important:</strong> Stopping a bot does not automatically close open positions.
            You have two options: manually close positions through the Trading Dashboard, or configure the
            Closer Bot to manage position exits based on your profit/loss criteria.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            What causes order execution failures?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Order failures typically result from one of the following conditions:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 1 }}>
            <li><Typography variant="body2"><strong>Insufficient Balance:</strong> Available funds are less than the order value plus fees</Typography></li>
            <li><Typography variant="body2"><strong>Minimum Order Size:</strong> Order amount falls below the exchange's minimum trade requirements</Typography></li>
            <li><Typography variant="body2"><strong>API Permission:</strong> The API key lacks trading authorization</Typography></li>
            <li><Typography variant="body2"><strong>Rate Limiting:</strong> Too many requests triggered exchange rate limits</Typography></li>
            <li><Typography variant="body2"><strong>Price Precision:</strong> Order price exceeds the allowed decimal precision for the trading pair</Typography></li>
            <li><Typography variant="body2"><strong>Market Conditions:</strong> Limit orders placed outside valid price ranges or during maintenance</Typography></li>
          </Box>
          <Typography variant="body2">
            Check the Logs page for detailed error codes and messages from the exchange API.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            How can I troubleshoot issues and get technical support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 1 }}>
            AlekosTrader provides comprehensive logging for troubleshooting:
          </Typography>
          <Box component="ul" sx={{ pl: 3, mb: 1 }}>
            <li><Typography variant="body2"><strong>Application Logs:</strong> Access the Logs page in the dashboard for trading activity and error records</Typography></li>
            <li><Typography variant="body2"><strong>Browser Console:</strong> Press F12 to open developer tools for frontend debugging</Typography></li>
            <li><Typography variant="body2"><strong>Backend Logs:</strong> Check terminal output from the backend server for API and execution logs</Typography></li>
          </Box>
          <Typography variant="body2">
            Review this documentation for configuration guidance. For unresolved technical issues,
            include relevant log excerpts when seeking community support.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="subtitle1" fontWeight={500}>
            Can I run AlekosTrader on a Raspberry Pi?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            AlekosTrader is fully compatible with Raspberry Pi 4 (4GB or 8GB models recommended).
            The lightweight Node.js backend runs efficiently on ARM architecture, making it ideal for
            24/7 unattended operation with minimal power consumption (approximately 5W).
            This is the most popular deployment option for traders seeking always-on bot execution
            without the recurring costs of cloud hosting.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  const renderApiReference = () => (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: colors.accent.primary }}>
        API Reference
      </Typography>

      <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
        AlekosTrader exposes a local REST API for programmatic access to trading functions, bot management,
        and portfolio data. All endpoints are accessible at <code>http://localhost:3001/api</code>.
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        <strong>Authentication:</strong> The local API does not require authentication by default since it runs
        on your private infrastructure. For production deployments, consider adding an API key middleware.
      </Alert>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Exchange Endpoints</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip label="GET" size="small" sx={{ bgcolor: colors.trading.buy, color: '#fff', fontWeight: 600 }} />
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>/api/exchange/balances</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Retrieves all asset balances from the currently active exchange. Returns available and locked amounts.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip label="GET" size="small" sx={{ bgcolor: colors.trading.buy, color: '#fff', fontWeight: 600 }} />
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>/api/exchange/markets</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Returns available trading pairs with current price, 24h volume, and price change data.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip label="POST" size="small" sx={{ bgcolor: colors.accent.warning, color: '#fff', fontWeight: 600 }} />
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>/api/exchange/order</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Places a new order on the active exchange.
              </Typography>
              <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
                <Typography variant="body2" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
{`{
  "symbol": "BTC-USD",
  "side": "buy",
  "type": "limit",
  "quantity": "0.001",
  "price": "45000.00"
}`}
                </Typography>
              </Paper>
            </Box>

            <Divider />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip label="GET" size="small" sx={{ bgcolor: colors.trading.buy, color: '#fff', fontWeight: 600 }} />
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>/api/exchange/orders</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Returns all open orders on the active exchange. Supports optional <code>symbol</code> query parameter.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip label="DELETE" size="small" sx={{ bgcolor: colors.trading.sell, color: '#fff', fontWeight: 600 }} />
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>/api/exchange/order/:orderId</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Cancels an open order by its exchange-assigned order ID.
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Bot Management Endpoints</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip label="GET" size="small" sx={{ bgcolor: colors.trading.buy, color: '#fff', fontWeight: 600 }} />
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>/api/bots</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Returns configuration and status for all trading bots (DCA, Grid, Bumper, Closer, Strateger).
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip label="GET" size="small" sx={{ bgcolor: colors.trading.buy, color: '#fff', fontWeight: 600 }} />
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>/api/bots/:botType/status</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Returns detailed status for a specific bot. Valid types: <code>dca</code>, <code>grid</code>, <code>bumper</code>, <code>closer</code>, <code>strateger</code>.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip label="POST" size="small" sx={{ bgcolor: colors.accent.warning, color: '#fff', fontWeight: 600 }} />
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>/api/bots/:botType/start</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Starts the specified bot with current configuration. Bot must be configured before starting.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip label="POST" size="small" sx={{ bgcolor: colors.accent.warning, color: '#fff', fontWeight: 600 }} />
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>/api/bots/:botType/stop</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Gracefully stops the specified bot. Completes any pending operations before stopping.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip label="PUT" size="small" sx={{ bgcolor: colors.accent.primary, color: '#fff', fontWeight: 600 }} />
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>/api/bots/:botType/config</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Updates bot configuration. Configuration schema varies by bot type.
              </Typography>
              <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
                <Typography variant="body2" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
{`// Example: DCA Bot Configuration
{
  "symbol": "BTC-USD",
  "amount": 50,
  "interval": "daily",
  "enabled": true
}`}
                </Typography>
              </Paper>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Portfolio Endpoints</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip label="GET" size="small" sx={{ bgcolor: colors.trading.buy, color: '#fff', fontWeight: 600 }} />
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>/api/portfolio/positions</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Returns all open positions with entry price, current price, quantity, and unrealized P/L.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip label="GET" size="small" sx={{ bgcolor: colors.trading.buy, color: '#fff', fontWeight: 600 }} />
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>/api/portfolio/history</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Returns trade history with realized P/L. Supports <code>startDate</code> and <code>endDate</code> query parameters.
              </Typography>
            </Box>

            <Divider />

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Chip label="GET" size="small" sx={{ bgcolor: colors.trading.buy, color: '#fff', fontWeight: 600 }} />
                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>/api/portfolio/metrics</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Returns portfolio performance metrics: total P/L, win rate, average trade duration, Sharpe ratio.
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">WebSocket Streams</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" sx={{ mb: 2 }}>
            AlekosTrader provides WebSocket connections for real-time data streaming. Connect to <code>ws://localhost:3001/ws</code>.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="subtitle2" sx={{ color: colors.accent.primary, mb: 1 }}>
                Price Ticker Stream
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Subscribe to real-time price updates for specific trading pairs.
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                {`{ "action": "subscribe", "channel": "ticker", "symbol": "BTC-USD" }`}
              </Typography>
            </Paper>

            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="subtitle2" sx={{ color: colors.accent.primary, mb: 1 }}>
                Order Updates Stream
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Receive real-time notifications when orders are filled, cancelled, or modified.
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                {`{ "action": "subscribe", "channel": "orders" }`}
              </Typography>
            </Paper>

            <Paper sx={{ p: 2, bgcolor: colors.background.tertiary }}>
              <Typography variant="subtitle2" sx={{ color: colors.accent.primary, mb: 1 }}>
                Bot Activity Stream
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Monitor bot actions, trades, and status changes in real-time.
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                {`{ "action": "subscribe", "channel": "bots" }`}
              </Typography>
            </Paper>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandIcon />}>
          <Typography variant="h6">Response Codes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Code</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                  <TableCell><strong>Description</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell><Chip label="200" size="small" sx={{ bgcolor: colors.trading.buy, color: '#fff' }} /></TableCell>
                  <TableCell>OK</TableCell>
                  <TableCell>Request completed successfully</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Chip label="201" size="small" sx={{ bgcolor: colors.trading.buy, color: '#fff' }} /></TableCell>
                  <TableCell>Created</TableCell>
                  <TableCell>Resource created successfully (e.g., new order placed)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Chip label="400" size="small" sx={{ bgcolor: colors.accent.warning, color: '#fff' }} /></TableCell>
                  <TableCell>Bad Request</TableCell>
                  <TableCell>Invalid parameters or malformed request body</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Chip label="404" size="small" sx={{ bgcolor: colors.accent.warning, color: '#fff' }} /></TableCell>
                  <TableCell>Not Found</TableCell>
                  <TableCell>Requested resource does not exist</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Chip label="500" size="small" sx={{ bgcolor: colors.trading.sell, color: '#fff' }} /></TableCell>
                  <TableCell>Server Error</TableCell>
                  <TableCell>Internal error - check server logs for details</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Chip label="502" size="small" sx={{ bgcolor: colors.trading.sell, color: '#fff' }} /></TableCell>
                  <TableCell>Bad Gateway</TableCell>
                  <TableCell>Exchange API is unreachable or returned an error</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
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
      case 'api-reference':
        return renderApiReference();
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
