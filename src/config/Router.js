import React from 'react';
import {createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Scores from '../screens/MainFeed';
import {Icon} from 'native-base';

const ScoresRoute = createStackNavigator(
  {
    Home: Scores
  },
  {
    initialRouteName: 'Home',
    navigationOptions:{
      header: null
    }
  }
)

export const Router = createBottomTabNavigator(
  {
    Scores: ScoresRoute,
    Live: ScoresRoute,
    Menu: ScoresRoute
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Scores') {
          iconName = `ios-basketball${focused ? '' : '-outline'}`;
        } else if (routeName === 'Live') {
          iconName = `ios-stopwatch${focused ? '' : '-outline'}`;
        } else if (routeName === 'Menu') {
          iconName = `ios-menu${focused ? '' : '-outline'}`;
        }

        return <Icon name={iconName} style={{color: tintColor}} />
      }
    }),

    tabBarOptions: {
      activeTintColor: '#f7aa10',
      inactiveTintColor: '#e2e2e2',
      style: {
        backgroundColor: '#262628',
      },
    },
    
  }
)