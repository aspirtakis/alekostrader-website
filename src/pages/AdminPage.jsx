import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Alert,
  Snackbar,
  CircularProgress,
  Tooltip,
  Divider,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import {
  adminLogin,
  adminLogout,
  isAdminLoggedIn,
  createLicense,
  getAllLicenses,
  deactivateLicense,
  activateLicense,
  resetHardwareBinding,
} from '../api/admin.api';

// Mask license key for display (show first 8 and last 4 chars)
const maskLicenseKey = (key) => {
  if (!key || key.length < 16) return key;
  return `${key.slice(0, 8)}...${key.slice(-4)}`;
};

// Format date for display
const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Get license status
const getLicenseStatus = (license) => {
  if (!license.isActive) return 'revoked';
  if (license.expiresAt && new Date(license.expiresAt) < new Date()) return 'expired';
  return 'active';
};

// Get status chip color
const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case 'active':
      return 'success';
    case 'expired':
      return 'error';
    case 'revoked':
      return 'error';
    default:
      return 'default';
  }
};

// Get tier chip color
const getTierColor = (tier) => {
  switch (tier?.toLowerCase()) {
    case 'enterprise':
      return 'secondary';
    case 'pro':
      return 'primary';
    case 'trader':
      return 'info';
    default:
      return 'default';
  }
};

function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(isAdminLoggedIn());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Login form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Create license form state
  const [newLicenseTier, setNewLicenseTier] = useState('trader');
  const [newLicenseEmail, setNewLicenseEmail] = useState('');
  const [newLicenseDuration, setNewLicenseDuration] = useState(12);
  const [creating, setCreating] = useState(false);

  // Licenses list
  const [licenses, setLicenses] = useState([]);
  const [loadingLicenses, setLoadingLicenses] = useState(false);

  // Load licenses on login
  useEffect(() => {
    if (isLoggedIn) {
      fetchLicenses();
    }
  }, [isLoggedIn]);

  const fetchLicenses = async () => {
    setLoadingLicenses(true);
    try {
      const data = await getAllLicenses();
      setLicenses(data.licenses || data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingLicenses(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await adminLogin(username, password);
      setIsLoggedIn(true);
      setUsername('');
      setPassword('');
      setSuccess('Logged in successfully');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    adminLogout();
    setIsLoggedIn(false);
    setLicenses([]);
    setSuccess('Logged out successfully');
  };

  const handleCreateLicense = async (e) => {
    e.preventDefault();
    setCreating(true);
    setError('');

    try {
      const result = await createLicense(newLicenseTier, newLicenseEmail, newLicenseDuration);
      setSuccess(`License created: ${result.licenseKey || result.key || 'Success'}`);
      setNewLicenseEmail('');
      setNewLicenseTier('trader');
      setNewLicenseDuration(12);
      fetchLicenses(); // Refresh list
    } catch (err) {
      setError(err.message);
    } finally {
      setCreating(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setSuccess('Copied to clipboard');
    } catch (err) {
      setError('Failed to copy');
    }
  };

  // Login Form
  if (!isLoggedIn) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
        }}
      >
        <Container maxWidth="xs">
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Admin Login
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 3 }}>
              AlekosTrader License Management
            </Typography>

            <form onSubmit={handleLogin}>
              <TextField
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                required
                autoComplete="username"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Login'}
              </Button>
            </form>
          </Paper>
        </Container>

        <Snackbar
          open={!!error}
          autoHideDuration={4000}
          onClose={() => setError('')}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="error" onClose={() => setError('')}>
            {error}
          </Alert>
        </Snackbar>
      </Box>
    );
  }

  // Admin Dashboard
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4">License Management</Typography>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Box>

        {/* Create License Form */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Create New License
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <form onSubmit={handleCreateLicense}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel>Tier</InputLabel>
                <Select
                  value={newLicenseTier}
                  label="Tier"
                  onChange={(e) => setNewLicenseTier(e.target.value)}
                >
                  <MenuItem value="trader">Trader</MenuItem>
                  <MenuItem value="pro">Pro</MenuItem>
                  <MenuItem value="enterprise">Enterprise</MenuItem>
                </Select>
              </FormControl>

              <TextField
                label="Email"
                type="email"
                value={newLicenseEmail}
                onChange={(e) => setNewLicenseEmail(e.target.value)}
                required
                sx={{ minWidth: 250 }}
              />

              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel>Duration</InputLabel>
                <Select
                  value={newLicenseDuration}
                  label="Duration"
                  onChange={(e) => setNewLicenseDuration(e.target.value)}
                >
                  <MenuItem value={1}>1 month</MenuItem>
                  <MenuItem value={3}>3 months</MenuItem>
                  <MenuItem value={6}>6 months</MenuItem>
                  <MenuItem value={12}>12 months</MenuItem>
                  <MenuItem value={24}>24 months</MenuItem>
                  <MenuItem value={36}>Lifetime (36m)</MenuItem>
                </Select>
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                startIcon={creating ? <CircularProgress size={18} /> : <AddIcon />}
                disabled={creating}
              >
                Create License
              </Button>
            </Box>
          </form>
        </Paper>

        {/* Licenses Table */}
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">All Licenses</Typography>
            <IconButton onClick={fetchLicenses} disabled={loadingLicenses}>
              <RefreshIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />

          {loadingLicenses ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>License Key</TableCell>
                    <TableCell>Tier</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Expires</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {licenses.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} align="center">
                        <Typography color="text.secondary">No licenses found</Typography>
                      </TableCell>
                    </TableRow>
                  ) : (
                    licenses.map((license) => {
                      const status = getLicenseStatus(license);
                      return (
                        <TableRow key={license.licenseKey || license.id}>
                          <TableCell>
                            <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                              {maskLicenseKey(license.licenseKey)}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={license.tier}
                              size="small"
                              color={getTierColor(license.tier)}
                            />
                          </TableCell>
                          <TableCell>{license.ownerEmail || 'N/A'}</TableCell>
                          <TableCell>
                            <Chip
                              label={status}
                              size="small"
                              color={getStatusColor(status)}
                            />
                          </TableCell>
                          <TableCell>{formatDate(license.expiresAt)}</TableCell>
                          <TableCell align="center">
                            <Tooltip title="Copy full license key">
                              <IconButton
                                size="small"
                                onClick={() => copyToClipboard(license.licenseKey)}
                              >
                                <ContentCopyIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </Container>

      {/* Notifications */}
      <Snackbar
        open={!!error}
        autoHideDuration={4000}
        onClose={() => setError('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => setError('')}>
          {error}
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!success}
        autoHideDuration={3000}
        onClose={() => setSuccess('')}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setSuccess('')}>
          {success}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default AdminPage;
