// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const SignInScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const maxLength = 64;

  // Update the character count
  const charCount = name.length;

  // Handle text change and enforce max length
  const handleTextChange = (text) => {
    if (text.length <= maxLength) {
      setName(text);
    }
  }

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>

        {/* Sign-In Form */}
        <View style={styles.form}>
          {/* /////////////// Name container /////////////// */}
          <View style={styles.nameContainer}>
      <Text style={styles.nameText}>First And Last Name</Text>
      <View style={{paddingHorizontal: 10}}>
      <View style={styles.counterContainer}>
        {name.length === 0 && (
                <Text style={styles.placeholder}>Your first and last name</Text>
              )}
        <Text style={styles.counter}>{`${charCount}/${maxLength}`}</Text>
      </View>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={handleTextChange}
        // placeholder="Your first and last name"
        autoCapitalize="words"
        maxLength={maxLength}
      />
      </View>
    </View>
    <View>
      <Text style={styles.nameText}>Email</Text>
      <View style={{paddingHorizontal: 10}}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          </View>
           </View>
          <View>
      <Text style={styles.nameText}>Password</Text>
      <View style={{paddingHorizontal: 10}}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            keyboardType="password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          </View>
           </View>
          <View>
      <Text style={styles.nameText}>Confirm Password</Text>
      <View style={{paddingHorizontal: 10}}>
          <TextInput
            style={styles.input}
            placeholder="Re-enter password"
            keyboardType="password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          </View>
           </View>
           <View>
            <Text style={{marginVertical: 10, fontWeight: 500, fontSize: 16}}>Location</Text>
              <TouchableOpacity
            style={styles.shareLocationButton}
            onPress={() => alert('Location sharing not implemented')}
            accessibilityLabel="Share your location"
            accessibilityRole="button"
          >
            <Text style={styles.buttonText}>Share Location</Text>
          </TouchableOpacity>
           </View>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => navigation.navigate('Home')} // Adjust navigation as needed
            accessibilityLabel="Sign in to your account"
            accessibilityRole="button"
          >
            <Text style={styles.SignInButtonText}>Sign Up</Text>
          </TouchableOpacity>
        
        </View>

        {/* Chat Button (Floating Action Button)
        <TouchableOpacity
          style={styles.chatButton}
          onPress={() => navigation.navigate('Chat')} // Adjust navigation as needed
          accessibilityLabel="Open chat"
          accessibilityRole="button"
        >
          <Text style={styles.chatIcon}>💬</Text>
        </TouchableOpacity> */}
      </View>
   </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer:{
  },
  nameText:{
    fontWeight: 500,
    fontSize: 16,
    marginBottom: 26,
    marginTop: 14
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: -25,
   
  },
  placeholder: {
    fontSize: 14,
    color: '#666',
  },
  counter: {
    fontSize: 14,
    position: 'absolute',
    right: 10,
    color: '#666',
  },
  input: {
    // borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
    position: 'absolute',
    paddingBottom: 10,
    fontSize: 16,
    color: '#000',
  },
  logo: {
    fontSize: 50,
    color: '#6081EC',
    fontFamily: 'Borel-Regular', // Ensure this font is added
    marginBottom: 40,
  },
  form: {
    width: '100%',
    maxWidth: 350,
    flexGrow: 1,
    marginTop: 128,
    // justifyContent: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#D1D5DB',
    marginBottom: 20,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
  },
  linkContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  link: {
    color: '#6081EC',
    fontSize: 14,
    textAlign: 'center',
  },
 signInButton: {
    paddingVertical: 18,
    paddingHorizontal: 19,
    marginHorizontal: 70,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#7B6F72',
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 60
  },
  shareLocationButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#6081EC',
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  SignInButtonText: {
    color: '#7B6F72',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonText:{
     color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  chatButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#6081EC',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  chatIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default SignInScreen;