/**
 * WhitepaperPage - ALK Token Whitepaper
 */

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Chip,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  AccountTree as ArchIcon,
  Security as SecurityIcon,
  TrendingUp as TrendingIcon,
  Token as TokenIcon,
  Gavel as GavelIcon,
  Rocket as RocketIcon,
} from '@mui/icons-material';
import { colors } from '../theme/tradingTheme';

const solanaColors = {
  purple: '#9945FF',
  green: '#14F195',
};

const Section = ({ id, icon: Icon, title, children }) => (
  <Box id={id} sx={{ mb: 8, scrollMarginTop: '100px' }}>
    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
      {Icon && (
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            background: `linear-gradient(135deg, ${alpha(solanaColors.purple, 0.2)} 0%, ${alpha(solanaColors.green, 0.2)} 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon sx={{ color: solanaColors.purple, fontSize: 24 }} />
        </Box>
      )}
      <Typography variant="h4" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
    </Stack>
    {children}
  </Box>
);

const WhitepaperPage = () => {
  return (
    <Box sx={{ bgcolor: colors.background.primary, minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip
            label="Version 1.0 - February 2025"
            sx={{
              mb: 3,
              bgcolor: alpha(solanaColors.purple, 0.2),
              color: solanaColors.purple,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              background: `linear-gradient(135deg, ${solanaColors.purple} 0%, ${solanaColors.green} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ALK Token Whitepaper
          </Typography>
          <Typography variant="h6" sx={{ color: colors.text.secondary }}>
            The Native Utility Token of AlekosTrader
          </Typography>
        </Box>

        {/* Table of Contents */}
        <Paper sx={{ p: 4, mb: 8, bgcolor: alpha(colors.background.paper, 0.6) }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            Table of Contents
          </Typography>
          <Stack spacing={1}>
            {[
              { id: 'abstract', label: '1. Abstract' },
              { id: 'introduction', label: '2. Introduction' },
              { id: 'tokenomics', label: '3. Tokenomics' },
              { id: 'utility', label: '4. Token Utility' },
              { id: 'technical', label: '5. Technical Specifications' },
              { id: 'governance', label: '6. Governance' },
              { id: 'roadmap', label: '7. Roadmap' },
              { id: 'security', label: '8. Security' },
              { id: 'legal', label: '9. Legal Disclaimer' },
            ].map((item) => (
              <Typography
                key={item.id}
                component="a"
                href={`#${item.id}`}
                sx={{
                  color: colors.text.secondary,
                  textDecoration: 'none',
                  '&:hover': { color: solanaColors.purple },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Stack>
        </Paper>

        <Divider sx={{ mb: 8 }} />

        {/* Abstract */}
        <Section id="abstract" icon={TokenIcon} title="1. Abstract">
          <Typography variant="body1" sx={{ color: colors.text.secondary, lineHeight: 1.8 }}>
            ALK is the native utility token of the AlekosTrader ecosystem, a professional-grade
            cryptocurrency trading platform. Built on the Solana blockchain, ALK provides holders
            with tangible benefits including reduced trading fees, access to advanced algorithmic
            trading tools, and participation in protocol governance. This whitepaper outlines the
            token's economic model, utility mechanisms, and technical implementation.
          </Typography>
        </Section>

        {/* Introduction */}
        <Section id="introduction" icon={RocketIcon} title="2. Introduction">
          <Typography variant="body1" sx={{ color: colors.text.secondary, lineHeight: 1.8, mb: 3 }}>
            AlekosTrader is a comprehensive trading platform designed for both retail and
            institutional cryptocurrency traders. The platform offers advanced features including:
          </Typography>
          <Stack spacing={2} sx={{ mb: 3 }}>
            {[
              'Multi-exchange connectivity (Coinbase, Binance, Bitvavo, KuCoin)',
              'Automated trading bots with customizable strategies',
              'Real-time market analysis and technical indicators',
              'Portfolio management and risk assessment tools',
              'DCA (Dollar Cost Averaging) automation',
              'Grid trading capabilities',
            ].map((item, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: solanaColors.green, mt: 1 }} />
                <Typography sx={{ color: colors.text.secondary }}>{item}</Typography>
              </Box>
            ))}
          </Stack>
          <Typography variant="body1" sx={{ color: colors.text.secondary, lineHeight: 1.8 }}>
            The ALK token serves as the economic backbone of this ecosystem, aligning incentives
            between the platform and its users while providing a mechanism for decentralized governance.
          </Typography>
        </Section>

        {/* Tokenomics */}
        <Section id="tokenomics" icon={TrendingIcon} title="3. Tokenomics">
          <Typography variant="body1" sx={{ color: colors.text.secondary, lineHeight: 1.8, mb: 4 }}>
            ALK has a fixed supply with no ability to mint additional tokens, ensuring a
            deflationary economic model.
          </Typography>

          <TableContainer component={Paper} sx={{ mb: 4, bgcolor: alpha(colors.background.paper, 0.6) }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Metric</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  ['Total Supply', '1,000,000,000 ALK'],
                  ['Circulating Supply', '939,000,000 ALK (93.9%)'],
                  ['Liquidity Locked', '61,000,000 ALK (6.1%)'],
                  ['Mint Authority', 'Permanently Revoked'],
                  ['Decimals', '6'],
                ].map(([metric, value]) => (
                  <TableRow key={metric}>
                    <TableCell sx={{ color: colors.text.secondary }}>{metric}</TableCell>
                    <TableCell sx={{ color: solanaColors.green, fontWeight: 600 }}>{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            Distribution
          </Typography>
          <TableContainer component={Paper} sx={{ bgcolor: alpha(colors.background.paper, 0.6) }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Allocation</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Percentage</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Purpose</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  ['Public Circulation', '93.9%', 'Trading on DEX platforms'],
                  ['Liquidity Pools', '6.1%', 'SOL/ALK and USDC/ALK pools on Raydium'],
                ].map(([alloc, pct, purpose]) => (
                  <TableRow key={alloc}>
                    <TableCell sx={{ color: colors.text.secondary }}>{alloc}</TableCell>
                    <TableCell sx={{ color: solanaColors.purple, fontWeight: 600 }}>{pct}</TableCell>
                    <TableCell sx={{ color: colors.text.secondary }}>{purpose}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Section>

        {/* Utility */}
        <Section id="utility" icon={ArchIcon} title="4. Token Utility">
          <Stack spacing={4}>
            {[
              {
                title: 'Fee Reduction',
                desc: 'ALK holders receive tiered discounts on platform trading fees. Holding thresholds unlock progressively larger discounts, up to 50% reduction for significant holders.',
              },
              {
                title: 'Premium Bot Access',
                desc: 'Staking ALK unlocks access to institutional-grade algorithmic trading strategies, advanced backtesting suites, and priority execution on automated trades.',
              },
              {
                title: 'Governance Rights',
                desc: 'Token holders can participate in protocol governance, voting on development priorities, fee structures, and ecosystem fund allocations.',
              },
              {
                title: 'Yield Generation',
                desc: 'Liquidity providers to ALK/SOL and ALK/USDC pools earn a share of trading fees proportional to their contribution.',
              },
              {
                title: 'Deflationary Burns',
                desc: '1% of platform revenue is allocated to buying back and burning ALK tokens, systematically reducing supply over time.',
              },
            ].map((item, i) => (
              <Paper key={i} sx={{ p: 3, bgcolor: alpha(colors.background.paper, 0.6) }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: solanaColors.purple }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: colors.text.secondary }}>{item.desc}</Typography>
              </Paper>
            ))}
          </Stack>
        </Section>

        {/* Technical */}
        <Section id="technical" icon={SecurityIcon} title="5. Technical Specifications">
          <TableContainer component={Paper} sx={{ bgcolor: alpha(colors.background.paper, 0.6) }}>
            <Table>
              <TableBody>
                {[
                  ['Blockchain', 'Solana'],
                  ['Token Standard', 'SPL Token'],
                  ['Contract Address', 'FD2imiDmjYDrh4A66JWKLvrrSLXvZh5Jep1Kx67Z6WXu'],
                  ['Decimals', '6'],
                  ['Mint Authority', 'Revoked (Immutable)'],
                  ['Freeze Authority', 'Revoked'],
                  ['Primary DEX', 'Raydium'],
                  ['Secondary DEX', 'Jupiter Aggregator'],
                ].map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell sx={{ fontWeight: 600, width: '40%' }}>{key}</TableCell>
                    <TableCell sx={{ color: colors.text.secondary, fontFamily: key === 'Contract Address' ? 'monospace' : 'inherit', fontSize: key === 'Contract Address' ? '0.85rem' : 'inherit' }}>
                      {value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Section>

        {/* Governance */}
        <Section id="governance" icon={GavelIcon} title="6. Governance">
          <Typography variant="body1" sx={{ color: colors.text.secondary, lineHeight: 1.8, mb: 3 }}>
            ALK implements a progressive decentralization model. Initially, core development
            decisions are made by the founding team to ensure rapid iteration and security.
            As the protocol matures, governance will transition to a fully on-chain DAO structure.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            Governance Phases
          </Typography>
          <Stack spacing={2}>
            {[
              { phase: 'Phase 1 (Current)', desc: 'Community feedback via proposals, team execution' },
              { phase: 'Phase 2 (Q3 2025)', desc: 'Snapshot voting for non-critical decisions' },
              { phase: 'Phase 3 (Q4 2025)', desc: 'Full on-chain governance via Realms DAO' },
            ].map((item, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 2 }}>
                <Chip label={item.phase} size="small" sx={{ bgcolor: alpha(solanaColors.purple, 0.2), color: solanaColors.purple }} />
                <Typography sx={{ color: colors.text.secondary }}>{item.desc}</Typography>
              </Box>
            ))}
          </Stack>
        </Section>

        {/* Roadmap */}
        <Section id="roadmap" icon={RocketIcon} title="7. Roadmap">
          <Stack spacing={3}>
            {[
              { q: 'Q1 2025', items: ['Token Launch on Solana', 'Raydium AMM Pool', 'Liquidity Provision', 'Website Launch'], done: true },
              { q: 'Q2 2025', items: ['CoinGecko Listing', 'Fee Discount Integration', 'Phantom Wallet Integration', 'Community Airdrop'], done: false },
              { q: 'Q3 2025', items: ['CEX Listing Applications', 'Staking Launch', 'Governance Module', 'Mobile App'], done: false },
              { q: 'Q4 2025', items: ['Cross-chain Bridge', 'NFT Membership Passes', 'Full DAO Transition', 'Institutional Partnerships'], done: false },
            ].map((phase, i) => (
              <Paper
                key={i}
                sx={{
                  p: 3,
                  bgcolor: phase.done ? alpha(solanaColors.green, 0.1) : alpha(colors.background.paper, 0.6),
                  border: `1px solid ${phase.done ? solanaColors.green : colors.border.default}`,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, color: phase.done ? solanaColors.green : solanaColors.purple, mb: 2 }}>
                  {phase.q} {phase.done && '✓'}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {phase.items.map((item, j) => (
                    <Chip
                      key={j}
                      label={item}
                      size="small"
                      sx={{
                        bgcolor: alpha(phase.done ? solanaColors.green : solanaColors.purple, 0.1),
                        color: phase.done ? solanaColors.green : colors.text.secondary,
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Section>

        {/* Security */}
        <Section id="security" icon={SecurityIcon} title="8. Security">
          <Typography variant="body1" sx={{ color: colors.text.secondary, lineHeight: 1.8, mb: 3 }}>
            Security is paramount in the ALK token design:
          </Typography>
          <Stack spacing={2}>
            {[
              'Mint authority permanently revoked - no additional tokens can ever be created',
              'Freeze authority revoked - tokens cannot be frozen or seized',
              'Open-source smart contract code',
              'Liquidity locked in Raydium pools',
              'No admin keys or backdoors',
            ].map((item, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <SecurityIcon sx={{ color: solanaColors.green, fontSize: 20 }} />
                <Typography sx={{ color: colors.text.secondary }}>{item}</Typography>
              </Box>
            ))}
          </Stack>
        </Section>

        {/* Legal */}
        <Section id="legal" icon={GavelIcon} title="9. Legal Disclaimer">
          <Paper sx={{ p: 4, bgcolor: alpha(colors.background.paper, 0.6) }}>
            <Typography variant="body2" sx={{ color: colors.text.secondary, lineHeight: 1.8 }}>
              This whitepaper is for informational purposes only and does not constitute financial,
              investment, legal, or tax advice. ALK tokens are utility tokens designed for use within
              the AlekosTrader ecosystem and should not be considered securities or investment contracts.
              <br /><br />
              Cryptocurrency investments carry significant risk. The value of ALK tokens may fluctuate
              and holders may lose some or all of their investment. Past performance is not indicative
              of future results.
              <br /><br />
              Users are responsible for compliance with applicable laws in their jurisdiction. The
              AlekosTrader team makes no representations regarding the legality of ALK tokens in any
              particular jurisdiction.
              <br /><br />
              This document may be updated from time to time. The most current version will always be
              available at alekosbot.com/whitepaper.
            </Typography>
          </Paper>
        </Section>

        {/* Footer */}
        <Divider sx={{ my: 8 }} />
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: colors.text.secondary }}>
            © 2025 AlekosTrader. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: colors.text.secondary, mt: 1 }}>
            Contact: team@alekosbot.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WhitepaperPage;
