import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Link,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  Email as EmailIcon,
} from '@mui/icons-material';
import { colors } from '../theme/tradingTheme';

const ContactPage = () => {
  return (
    <Box sx={{ py: 12, minHeight: '80vh', bgcolor: colors.background.primary }}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: colors.accent.primary,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: 'block',
            }}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: colors.text.secondary,
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            Have questions about AlekosTrader? Reach out and we'll get back to you.
          </Typography>
        </Box>

        <Stack spacing={3}>
          <Paper
            sx={{
              p: 4,
              bgcolor: alpha(colors.background.paper, 0.6),
              backdropFilter: 'blur(10px)',
              textAlign: 'center',
            }}
          >
            <EmailIcon sx={{ fontSize: 40, color: colors.accent.primary, mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Email
            </Typography>
            <Link
              href="mailto:info@alekosbot.com"
              sx={{ color: colors.accent.primary, fontSize: '1.1rem' }}
            >
              info@alekosbot.com
            </Link>
          </Paper>

          {/* <Paper
            sx={{
              p: 4,
              bgcolor: alpha(colors.background.paper, 0.6),
              backdropFilter: 'blur(10px)',
              textAlign: 'center',
            }}
          >
            <TelegramIcon sx={{ fontSize: 40, color: colors.accent.primary, mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Telegram
            </Typography>
            <Link
              href="https://t.me/alekostrader"
              target="_blank"
              rel="noopener"
              sx={{ color: colors.accent.primary, fontSize: '1.1rem' }}
            >
              @alekostrader
            </Link>
          </Paper> */}
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactPage;
