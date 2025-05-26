import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bartr</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.SignInText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20}}>
            <Text style={{color: 'grey', fontSize: 16, fontWeight: 500}}>I already have an account</Text>
        </TouchableOpacity>
      </View>
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
    color: '#6081EC',
    fontSize: 92,
    fontWeight: 'bold',
    fontFamily: 'Borel-Regular',
  },
buttonContainer: {
    position: 'absolute', // Positions the button container absolutely
    bottom: 90, // Distance from the bottom of the screen
    //width: '100%', // Full width for horizontal centering
    alignItems: 'center', // Centers the button horizontally
  },
  button:{
    paddingHorizontal: 40,
    paddingVertical: 15,
    backgroundColor: '#6081EC',
    width: 283.44,
    height: 64,
    marginTop: 76.86,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
    
    
  },
  SignInText:{
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 500,

  }
});

export default SplashScreen;
