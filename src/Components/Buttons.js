import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const Button = ({ title, onPress, type = 'primary', disabled = false, loading = false, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[type], disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {/* {loading ? (
        <ActivityIndicator size="small" color="#FFFFFF" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )} */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 26, // Matches your Figma design's rounded corners
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#6081EC', // Blue from your design
  },
  secondary: {
    backgroundColor: '#FFFFFF', // White for secondary actions like "Sign Up"
    borderWidth: 1,
    borderColor: '#6081EC',
  },
  disabled: {
    backgroundColor: '#9CA3AF',
    opacity: 0.6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Button;