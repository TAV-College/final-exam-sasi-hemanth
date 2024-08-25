import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the new component created by Sasi!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'blue',
  },
});

export default NewComponent;
