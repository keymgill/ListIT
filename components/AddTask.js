import React, {useContext, useState} from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity,View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';

import TaskContext from '../context'
import Task from './Task.js';
import {colors} from './Categories'

const AddTask = ({style, date}) => {
  const { tasks, setTasks } = useContext(TaskContext);

  const [id, setId] = useState(0)
  const [memo, setMemo] = useState(memo || '');
  const [category, setCategory] = useState('none');

  const onSubmitEditing = (event) => {
    const newTask = {id, memo, date, category, complete: false};
    setTasks(tasks.concat(newTask));

    setId(id + 1);
    setMemo('');
  }

  return (
    <KeyboardAvoidingView
      style={style}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput
        style={styles.memo}
        placeholder={'Write a task'}
        value={memo}
        onChangeText={setMemo}
        onSubmitEditing={onSubmitEditing}
      />
      <RNPickerSelect 
        onValueChange={setCategory}
        style={styles.category}
        placeholder={{label: 'Select a category', value: null, color: 'black'}}
        borderColor= {'#bbb'}
        items={[
                { label:'None', value:'none', color:colors['none'] },
                { label: 'Homework', value: 'homework', color:colors['homework']},
                { label: 'Work', value: 'work', color:colors['work'] },
                { label: 'Personal', value: 'personal', color:colors['personal'] },
                { label: 'Pets', value: 'pets', color:colors['pets'] },
                { label: 'Miscellaneous', value: 'misc', color:colors['misc'] },
            ]}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  category: {
    //flex: 1
    marginVertical: 2,
    paddingVertical: 10,
    textAlign: 'left',
    //align: 'center',
    borderColor: '#bbb',
    borderWidth: 2,
  },
  memo: {
    //flex: 2,
    marginVertical: 2,
    paddingVertical: 5,
    paddingLeft: 5,
    textAlign: 'left',
    //borderWidth: 2,
    //bordercolor: 'black',
  }
});
export default AddTask