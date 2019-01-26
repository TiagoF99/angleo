import React, {Component} from 'react';
import {
  Platform, StyleSheet, Text, View
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './src/home';

export default class App extends Component {
  render() {
    return (<MainNavigator/>);
  }
  const HomeStack = StackNavigator({
    Home: { screen: Home },
  },
  {
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      }
  })

  const MainNavigator = TabNavigator({
    Home: {
      screen: HomeStack,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = 'home';
          return <Icon name={iconName}/>;
      }
    }),
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true
  });
}
