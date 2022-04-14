import React, {useState, useContext} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import { Calendar } from 'react-native-calendars';

import TaskContext from '../context';
import {js_to_calendar} from '../date';
import TaskList from '../components/TaskList';
import AddTask from '../components/AddTask.js';

const Home = () => {

  const {tasks} = useContext(TaskContext);

  const today = js_to_calendar(new Date());

  // console.log(today);

  const [date, setDate] = useState(today);

  const isDateMatch = (task) => {
    return task.date == date;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Calendar
        style={styles.calendar}
        onDayPress={day => {
          setDate(day.dateString);
        }}
        markedDates={{[date]: {selected: true, disableTouchEvent: true, selectedColor: 'orange'}}}
      />
      <TaskList
        style={styles.tasklist}
        value={tasks.filter(isDateMatch)}
      />
      <AddTask
        style={styles.addtask}
        date={date}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#3292fa',
  },
  calendar: {
    //borderTopWidth: 1,
    //paddingTop: 0,
    //borderBottomWidth: 2,
    //borderLeftWidth: 3,
    //borderRightWidth: 3,
    //borderColor: '#6ad1d9',
    //height: 350
  },
  tasklist: {
    paddingVertical: 5
  },
  addtask: {
    backgroundColor: '#eee',
    paddingBottom: 5
  }
});

export default Home;