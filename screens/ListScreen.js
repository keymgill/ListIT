import React, {useContext} from 'react';
import {SafeAreaView, SectionList, Text, Pressable, StyleSheet} from 'react-native';
import {add} from 'date-fns';

import TaskContext from '../context';
import {js_to_calendar} from '../date';
import TaskList from '../components/TaskList';
import Task from '../components/Task';

const ListScreen = () => {
  
  const {tasks, setTasks} = useContext(TaskContext);

  const today = new Date();
  const weekDates = [0, 1 , 2, 3, 4, 5, 6].map(i => add(today, {days: i}));
  const weekTasks = weekDates.map(day => tasks.filter(task => task.date == js_to_calendar(day)));
  const week = [0, 1, 2, 3, 4, 5, 6].map(i => ({title: weekDates[i].toDateString(), data: weekTasks[i]}));

  //console.log(weekDates);
  //console.log(weekTasks);
  
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
    <SafeAreaView style={styles.screen}>
      <SectionList
        sections={week}
        renderItem={renderItem}
        renderSectionHeader={({section: {title}}) => <Text style={styles.textStyle}>{title}</Text>}
      />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#3292fa',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // paddingVertical: 50,
    // paddingHorizontal: 30
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 30,
    flex: 1,
    borderColor: '#bbb',
    paddingTop: 20,
    paddingRight: 25,
    paddingBottom: 20,
    backgroundColor: '#3292fa'
  },
});

export default ListScreen;