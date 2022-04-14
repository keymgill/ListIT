import React, {useState} from 'react';
import { AsyncStorage } from 'react-native';

const STORAGE_KEY = '@ListIT_storage/'
const TASKS_KEY = 'tasks'

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(STORAGE_KEY + key, jsonValue);
  } catch (error) {
    // Error saving data
  }
};

const retrieveData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY + key);
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (error) {
    // Error retrieving data
  }
};

const storeTasks = (tasks) => {
  storeData(TASKS_KEY, tasks);
}

const retrieveTasks = () => {
  return retrieveData(TASKS_KEY);
}

// const storeTask = (task) => {
//   tasks = getTasks();
//   tasks.push(task);
//   setTasks(tasks);
// }

// const removeTask = (task) => {
//   tasks = getTasks();
//   tasks = tasks.filter((item) => {item != task});
//   setTasks(tasks);
// }

storeData(TASKS_KEY, [])

export {storeTasks, retrieveTasks};