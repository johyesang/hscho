import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatted = `${year}년 ${month}월 ${day}일`;
  console.log(`${year}-${month}-${day}`);
  console.log(formatted);

  return (
    <>
      <StatusBar backgroundColor={styles.block.backgroundColor} />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#cfd8dc',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
