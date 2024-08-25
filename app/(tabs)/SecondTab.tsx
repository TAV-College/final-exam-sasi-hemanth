import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import EditScreenInfo from 'components/EditScreenInfo';
import { Text } from 'components/Themed';

export default function SecondTab() {
  const handlePress = () => {
    alert('Button pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});
