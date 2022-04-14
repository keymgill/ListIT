import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import SplashScreen from './screens/SplashScreen';
import Home from './screens/Home';
import ListScreen from './screens/ListScreen';
import {storeTasks, retrieveTasks} from './store';
import TaskContext from './context';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const init = retrieveTasks();

  //console.log(init);

  const [tasks, innerSetTasks] = useState(Array.isArray(init) ? init : []);

  const setTasks = (t) => {
    innerSetTasks(t);
    storeTasks(tasks);
  }

  //console.log(tasks);

  return (
    <TaskContext.Provider value={{tasks, setTasks}}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          //activeColor="#fff"
          screenOptions={{
            tabBarActiveTintColor: 'e91e63',
            tabBarInactiveTintColor: 'green'
          }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }}
          />

          <Tab.Screen
            name="List"
            component={ListScreen}
            options={{
              tabBarLabel: 'List',
              tabBarIcon: ({ color }) => (
                <Icon name="list" color={color} size={26} />
              ),
            }}
          />

          {/*<Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: 'Settings',
              tabBarColor: '#32C30A',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-settings" color={color} size={26} />
              ),
            }}
          /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </TaskContext.Provider>
  );
}

export default App;

