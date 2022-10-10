import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function Empty() {
  return (
    <View style={styles.block}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.descriptionTitle}>할일이 없습니다.</Text>
      <Text style={styles.description}>오늘 할일을 추가해 보세요!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionTitle: {
    fontSize: 22,
    color: '#9e9e9e',
  },
  description: {
    padding: 10,
    fontSize: 16,
    color: '#9e9e9e',
  },
  image: {
    width: 300,
    height: 200,
  },
});

export default Empty;
