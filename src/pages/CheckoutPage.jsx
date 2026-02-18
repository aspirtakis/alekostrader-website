import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Divider,
  CircularProgress,
  Alert,
  Checkbox,
  FormControlLabel,
  Chip
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const API_BASE = import.meta.env.VITE_API_URL || 'https://alekosauth.devsoundfusion.com';

const TIER_INFO = {
  trader: {
    name: 'Trader',
    price: 180,
    features: ['2 concurrent algorithms', '1 exchange integration', 'Core indicators']
  },
  pro: {
    name: 'Pro Trader',
    price: 250,
    features: ['5 concurrent algorithms', '3 exchange integrations', 'Visual strategy builder', 'Priority support']
  },
  enterprise: {
    name: 'Enterprise',
    price: 800,
    features: ['Unlimited algorithms', 'Unlimited exchanges', 'Custom development', 'Dedicated manager']
  }
};

const HARDWARE_PRICE = 150;

export default function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const tier = searchParams.get('tier') || 'pro';
  const includeHardwareParam = searchParams.get('hardware') === 'true';

  const [includeHardware, setIncludeHardware] = useState(includeHardwareParam);
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(null);
  const [copied, setCopied] = useState(false);

  const tierInfo = TIER_INFO[tier] || TIER_INFO.pro;
  const totalPrice = tierInfo.price + (includeHardware ? HARDWARE_PRICE : 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Use test-purchase endpoint (will work without PayPal configured)
      const response = await fetch(`${API_BASE}/api/checkout/test-purchase`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier,
          includeHardware,
          customerEmail,
          customerName
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Purchase failed');
      }

      setSuccess(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const copyLicenseKey = () => {
    if (success?.licenseKey) {
      navigator.clipboard.writeText(success.licenseKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Success screen
  if (success) {
    return (
      <Box sx={{ minHeight: '100vh', py: 8, background: 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 100%)' }}>
        <Container maxWidth="sm">
          <Paper sx={{ p: 4, textAlign: 'center', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <CheckCircleIcon sx={{ fontSize: 80, color: '#4CAF50', mb: 2 }} />
            <Typography variant="h4" sx={{ color: '#fff', mb: 1 }}>
              Purchase Complete!
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 4 }}>
              Your AlekosTrader {tierInfo.name} license is ready.
            </Typography>

            <Paper sx={{ p: 3, mb: 3, background: 'rgba(0,212,255,0.1)', border: '2px solid #00d4ff' }}>
              <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 1, fontSize: 14 }}>
                Your License Key
              </Typography>
              <Typography sx={{ fontFamily: 'monospace', fontSize: 24, color: '#00d4ff', letterSpacing: 2 }}>
                {success.licenseKey}
              </Typography>
              <Button
                startIcon={<ContentCopyIcon />}
                onClick={copyLicenseKey}
                sx={{ mt: 2, color: '#00d4ff' }}
              >
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </Button>
            </Paper>

            <Alert severity="info" sx={{ mb: 3, textAlign: 'left' }}>
              <Typography variant="body2">
                <strong>Order ID:</strong> {success.orderId}<br />
                <strong>Valid Until:</strong> {new Date(success.expiresAt).toLocaleDateString()}<br />
                <strong>Email Sent:</strong> {success.emailSent ? 'Yes' : 'Check spam folder'}
              </Typography>
            </Alert>

            <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 3, fontSize: 14 }}>
              We've sent the license details to <strong>{success.customerEmail}</strong>
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button variant="outlined" onClick={() => navigate('/')}>
                Back to Home
              </Button>
              <Button variant="contained" onClick={() => navigate('/docs')}>
                Getting Started Guide
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', py: 8, background: 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 100%)' }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ color: '#fff', textAlign: 'center', mb: 1 }}>
          Checkout
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', mb: 4 }}>
          Complete your purchase to get started with AlekosTrader
        </Typography>

        <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
          {/* Order Summary */}
          <Paper sx={{ flex: 1, p: 3, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
              Order Summary
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography sx={{ color: '#fff' }}>
                  {tierInfo.name} License
                  <Chip label="1 Year" size="small" sx={{ ml: 1, fontSize: 10 }} />
                </Typography>
                <Typography sx={{ color: '#fff', fontWeight: 600 }}>
                  €{tierInfo.price}
                </Typography>
              </Box>
              <Box sx={{ pl: 2 }}>
                {tierInfo.features.map((f, i) => (
                  <Typography key={i} sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
                    • {f}
                  </Typography>
                ))}
              </Box>
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  checked={includeHardware}
                  onChange={(e) => setIncludeHardware(e.target.checked)}
                  sx={{ color: '#00d4ff' }}
                />
              }
              label={
                <Box>
                  <Typography sx={{ color: '#fff' }}>
                    Add Raspberry Pi 4 Kit
                    <Typography component="span" sx={{ color: '#00d4ff', ml: 1 }}>
                      +€{HARDWARE_PRICE}
                    </Typography>
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>
                    Pre-configured trading hardware
                  </Typography>
                </Box>
              }
              sx={{ mb: 2, alignItems: 'flex-start' }}
            />

            <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.1)' }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" sx={{ color: '#fff' }}>Total</Typography>
              <Typography variant="h5" sx={{ color: '#00d4ff', fontWeight: 700 }}>
                €{totalPrice}
              </Typography>
            </Box>

            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, mt: 1 }}>
              One-time payment • No recurring charges
            </Typography>
          </Paper>

          {/* Checkout Form */}
          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{ flex: 1, p: 3, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <Typography variant="h6" sx={{ color: '#fff', mb: 3 }}>
              Your Details
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <TextField
              fullWidth
              required
              label="Email Address"
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              sx={{ mb: 2 }}
              placeholder="your@email.com"
              helperText="License will be sent to this email"
            />

            <TextField
              fullWidth
              label="Full Name (optional)"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              sx={{ mb: 3 }}
              placeholder="John Doe"
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={loading || !customerEmail}
              sx={{
                py: 1.5,
                fontSize: 18,
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                '&:hover': { background: 'linear-gradient(135deg, #00e5ff 0%, #00aadd 100%)' }
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: '#fff' }} />
              ) : (
                `Pay €${totalPrice}`
              )}
            </Button>

            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, mt: 2, textAlign: 'center' }}>
              By completing this purchase you agree to our Terms of Service
            </Typography>

            <Box sx={{ mt: 3, p: 2, background: 'rgba(76,175,80,0.1)', borderRadius: 1, border: '1px solid rgba(76,175,80,0.3)' }}>
              <Typography sx={{ color: '#4CAF50', fontSize: 13 }}>
                ✓ 30-day satisfaction guarantee<br />
                ✓ Instant license delivery<br />
                ✓ Secure payment
              </Typography>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button onClick={() => navigate('/pricing')} sx={{ color: 'rgba(255,255,255,0.6)' }}>
            ← Back to Pricing
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
