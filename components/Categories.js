import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Task from './Task.js';
import {Picker} from '@react-native-picker/picker';

const colors = {none: 'black', homework: 'blue', work: 'green', personal: 'red', pets: 'purple', misc: 'orange'}

const Categories = ({style}) => {

  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <View style={styles.container}>
      <Text>What Category is your task?</Text>
      <Picker
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
      >
        <Picker.Item label="None" value="none" color={colors['none']} />
        <Picker.Item label="Homework" value="homework" color={colors['homework']} />
        <Picker.Item label="Work" value="work" color={colors['work']}/>
        <Picker.Item label="Personal" value="personal" color={colors['personal']}/>
        <Picker.Item label="Pets" value="pets" color={colors['pets']}/>
        <Picker.Item label="Miscellaneous" value="misc" color={colors['misc']}/>
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    paddingTop: 10,
    alignItems: "Left"
  }
});

export default Categories;
export {colors};