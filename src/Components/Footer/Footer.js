import React from 'react';
// import { styled } from '@mui/material/styles';
import { Container, Box, Grid, Link, Typography } from '@mui/material';

const textColor = {
  color: 'white',
};

const linkStyle = {
  color: 'white',
  marginRight: '10px',
};

export default function Footer(props) {
  // const links = [
  //   { label: 'Contact', href: '/' },
  //   { label: 'Privacy', href: '/' },
  //   { label: 'Support', href: '/' }
  // ];

  const links = {
    help: [
      { label: 'Contact', href: '/' },
      { label: 'Privacy', href: '/' },
      { label: 'Support', href: '/' },
    ],
    socials: [
      { label: 'Facebook', href: '/' },
      { label: 'Instagram', href: '/' },
      { label: 'TikTok', href: '/' },
    ],
  };

  const helpLinks = links.help.map((link) => {
    return (
      <Link href={link.href} sx={linkStyle}>
        {link.label}
      </Link>
    );
  });

  const socialLinks = links.socials.map((link) => {
    return (
      <Link href={link.href} sx={linkStyle}>
        {link.label}
      </Link>
    );
  });

  return (
    <footer>
      <Box px={{ xs: 3, sm: 10 }} py={{ xs: 3, sm: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} sx={textColor}>
                Help
              </Box>
              <Box>{helpLinks}</Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} sx={textColor}>
                Socials
              </Box>
              <Box>{socialLinks}</Box>
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
            sx={textColor}
          >
            Next In Line &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
