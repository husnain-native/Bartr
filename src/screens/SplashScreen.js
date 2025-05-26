import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bartr</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#4c68d7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    // width: 274,
    // height: 192,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#4c68d7',
    fontSize: 92,
    fontWeight: 'bold',
    fontFamily: 'Borel-Regular',
  },
});

export default SplashScreen;
