/**
 * Root Layout — _layout.tsx
 *
 * This is the root layout for Expo Router. It wraps the entire app and is
 * the first component that renders. It sets up the navigation stack and any
 * global providers (fonts, themes, etc.) that the app needs.
 *
 * Expo Router reads this file automatically as the root of the app navigation.
 */

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      {/* StatusBar controls the appearance of the device status bar */}
      <StatusBar style="light" />

      {/*
       * Stack defines a stack-based navigation structure.
       * Each screen in the app/ directory becomes a route automatically.
       */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0F172A', // deplo.ai dark navy brand color
          },
          headerTintColor: '#F8FAFC',
          headerTitleStyle: {
            fontWeight: '700',
          },
          contentStyle: {
            backgroundColor: '#0F172A',
          },
        }}
      />
    </>
  );
}
