import React from 'react';
import {View, Button, Text} from 'reactiv-native';

function DetailScreen({navigation}) {
  return (
    <View>
      <Text>Detail</Text>
      <Button title="Detail 열기" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default DetailScreen;
