import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './Home';
import Profile from './Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Cog6ToothIcon,
  HomeIcon,
  IdentificationIcon,
} from 'react-native-heroicons/outline';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: '#098CE3',
        tabBarActiveTintColor: '#fff',
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          marginBottom: 10,
          marginHorizontal: 8,
          borderColor: '#098ce3',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({focused}) => {
            return (
              <View 
              style={{
                backgroundColor: focused? '#098ce3' : '#fff',
                borderColor: focused? '#fff' : '#098ce3',
              }}
              className="bg-red-300 mt-5 ml-9 h-14 border w-40 flex items-center rounded-bl-3xl justify-center">
                <IdentificationIcon
                  color={focused ? '#fff' : '#098ce3'}
                  size={30}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Home2"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({focused}) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? '#098ce3' : '#fff',
                  borderColor: focused ? '#fff' : '#098ce3',
                }}
                className="-top-4 flex items-center justify-center border h-16 w-16 rounded-full">
                <HomeIcon stroke={focused ? '#fff' : '#098ce3'} size={30} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          tabBarIcon: ({focused}) => {
            return (
              <View 
              style={{
                backgroundColor: focused? '#098ce3' : '#fff',
                borderColor: focused? '#fff' : '#098ce3',
              }}
              className="bg-red-300 mt-5 mr-7 h-14 border w-40 flex items-center rounded-br-3xl justify-center">
                <Cog6ToothIcon
                  color={focused ? '#fff' : '#098ce3'}
                  size={30}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
