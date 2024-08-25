import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterButton: React.FC = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, count > 10 ? styles.highCount : styles.lowCount]}>
        Count: {count}
      </Text>
      <Button title="Increase" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  highCount: {
    color: 'red',
    fontSize: 36,
  },
  lowCount: {
    color: 'blue',
    fontSize: 24,
  },
});

export default CounterButton;
