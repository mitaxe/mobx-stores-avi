import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react'
import { useStore } from '../stores';

const PlaygroundScene = () => {
  const store = useStore();

  return (
    <View style={styles.container}>
      <Button title="Press me" onPress={() => store.user.increaseCounter()} />
      <Text>{store.user.name}</Text>
    </View>
  );
}

export default observer(PlaygroundScene);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
