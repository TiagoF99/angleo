import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View
} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Home from './src/home';
import Establishment from './src/establishment';

const HomeStack = createStackNavigator({
  Home: Home,
});

const TranslationStack = createStackNavigator({
  Translation: Home
});

const MainNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Translation: TranslationStack
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Translation') {
          iconName = 'language';
        }
        return <Icon name={iconName} size={30} color="#900"/>;
    }
  }),
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});
const AppNavigator = createAppContainer(MainNavigator)
export default  class App extends Component {
  render() {
    return <AppNavigator/>
  }
}
