import * as React from 'react';
import { AppProvider, SignInPage } from '@toolpad/core'; // Import core components
import { useTheme } from '@mui/material/styles'; // Import MUI theme

// Authentication providers (GitHub and Google)
const providers = [
  { id: 'github', name: 'GitHub' },
  { id: 'google', name: 'Google' },
];

// Branding for the sign-in page
const BRANDING = {
  logo: (
    <img
      src="https://mui.com/static/logo.svg" // MUI logo for branding
      alt="MUI logo"
      style={{ height: 24 }}
    />
  ),
  title: 'MUI', // Branding title
};

// Function to handle sign-in logic
const signIn = async (provider) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`); // Logging provider's ID
      resolve();
    }, 500); // Simulates a 500ms delay
  });
  return promise;
};

// Main component for branding sign-in page
export default function BrandingSignInPage() {
  const theme = useTheme(); // Retrieves the current MUI theme
  return (
    // AppProvider wraps the sign-in page with branding and theme
    <AppProvider branding={BRANDING} theme={theme}>
      <SignInPage signIn={signIn} providers={providers} /> {/* Renders sign-in page */}
    </AppProvider>
  );
}