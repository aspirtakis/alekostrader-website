// Admin API for license management
const API_BASE = import.meta.env.PROD
  ? 'https://alekosauth.devsoundfusion.com'
  : 'http://localhost:3002';

// Get stored admin token
const getAuthHeader = () => {
  const token = localStorage.getItem('admin_jwt');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Admin login
export const adminLogin = async (username, password) => {
  const response = await fetch(`${API_BASE}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Login failed' }));
    throw new Error(error.message || error.error || 'Login failed');
  }

  const data = await response.json();
  if (data.token) {
    localStorage.setItem('admin_jwt', data.token);
  }
  return data;
};

// Admin logout
export const adminLogout = () => {
  localStorage.removeItem('admin_jwt');
};

// Check if admin is logged in
export const isAdminLoggedIn = () => {
  return !!localStorage.getItem('admin_jwt');
};

// Create a new license
export const createLicense = async (tier, ownerEmail, durationMonths) => {
  // Calculate expiry date
  const expiresAt = new Date();
  expiresAt.setMonth(expiresAt.getMonth() + parseInt(durationMonths));

  const response = await fetch(`${API_BASE}/api/license/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
    },
    body: JSON.stringify({
      tier,
      ownerEmail,
      expiresAt: expiresAt.toISOString()
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Failed to create license' }));
    throw new Error(error.message || error.error || 'Failed to create license');
  }

  return response.json();
};

// Get all licenses
export const getAllLicenses = async () => {
  const response = await fetch(`${API_BASE}/api/license/list`, {
    method: 'GET',
    headers: {
      ...getAuthHeader(),
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Failed to fetch licenses' }));
    throw new Error(error.message || error.error || 'Failed to fetch licenses');
  }

  return response.json();
};

// Deactivate a license
export const deactivateLicense = async (licenseKey) => {
  const response = await fetch(`${API_BASE}/api/license/deactivate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
    },
    body: JSON.stringify({ licenseKey }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Failed to deactivate license' }));
    throw new Error(error.message || error.error || 'Failed to deactivate license');
  }

  return response.json();
};

// Activate a license
export const activateLicense = async (licenseKey) => {
  const response = await fetch(`${API_BASE}/api/license/activate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
    },
    body: JSON.stringify({ licenseKey }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Failed to activate license' }));
    throw new Error(error.message || error.error || 'Failed to activate license');
  }

  return response.json();
};

// Reset hardware binding
export const resetHardwareBinding = async (licenseKey) => {
  const response = await fetch(`${API_BASE}/api/license/reset-hardware`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
    },
    body: JSON.stringify({ licenseKey }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Failed to reset hardware binding' }));
    throw new Error(error.message || error.error || 'Failed to reset hardware binding');
  }

  return response.json();
};
