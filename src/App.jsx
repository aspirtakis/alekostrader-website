import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import tradingTheme from './theme/tradingTheme';

// Layout
import PublicLayout from './components/layout/PublicLayout';

// Pages
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import DocsPage from './pages/DocsPage';
import AlkCoinPage from './pages/AlkCoinPage';
import ArchitecturePage from './pages/ArchitecturePage';

function App() {
  return (
    <ThemeProvider theme={tradingTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/alk" element={<AlkCoinPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
