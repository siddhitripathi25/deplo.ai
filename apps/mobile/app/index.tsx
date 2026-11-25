/**
 * Home Screen — index.tsx
 *
 * This is the entry point screen of the app, mapped to the "/" route by
 * Expo Router. It is the first screen users see when the app launches.
 *
 * In Phase 1 this is a placeholder screen that confirms the app is running.
 * Future phases will replace this with the deployment dashboard.
 */

import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Logo / Brand area */}
      <View style={styles.brandContainer}>
        <Text style={styles.logo}>⚡</Text>
        <Text style={styles.appName}>deplo.ai</Text>
        <Text style={styles.tagline}>Mobile Control Center for Developers</Text>
      </View>

      {/* Status indicator */}
      <View style={styles.statusContainer}>
        <View style={styles.statusDot} />
        <Text style={styles.statusText}>App Initialized Successfully</Text>
      </View>

      {/* Phase indicator */}
      <Text style={styles.phaseText}>Phase 1 — Project Setup</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  brandContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logo: {
    fontSize: 56,
    marginBottom: 12,
  },
  appName: {
    fontSize: 36,
    fontWeight: '800',
    color: '#F8FAFC',
    letterSpacing: -1,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 100,
    marginBottom: 16,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22C55E',
    marginRight: 8,
  },
  statusText: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '500',
  },
  phaseText: {
    fontSize: 12,
    color: '#475569',
    letterSpacing: 0.5,
  },
});
