import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from './Categories';

const Task = ({style, id, memo, date, category, complete}) => {
  
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
          <View style={{backgroundColor: colors[category], ...styles.square}}></View>
          <Text style={styles.memo}>{memo}</Text>
      </View>
      <View style={complete ? styles.filled : styles.hollow}></View>
    </View>
  );
}

const ColorSquare = ({category}) => {
  return (
    <View style={styles.square.compose(colorStyles.category)}></View>
  )
}

const colorStyles = StyleSheet.create({colors})

const styles = {
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    //backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  memo: {
    maxWidth: '80%',
  },
  hollow: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  filled: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 6,
    borderRadius: 5,
  }
};

export default Task;
