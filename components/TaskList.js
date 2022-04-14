import React, {useContext} from 'react';
import {StyleSheet, FlatList, Pressable} from 'react-native';

import TaskContext from '../context'
import Task from './Task.js';

const TaskList = ({style, value}) => {

  const {tasks, setTasks} = useContext(TaskContext);

  const renderItem = ({item}) => {
    const toggleComplete = (task) => {
      const newTasks = tasks.map((t) => t.id == item.id ? {...t, complete: !t.complete} : t);
      setTasks(newTasks);
    };

    return (
      <Pressable onPress={toggleComplete}>
        <Task {...item} />
      </Pressable>
    );
  };

  return (
    <FlatList
      style={style}
      data={value}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1
  }
});

export default TaskList;