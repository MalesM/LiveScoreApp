import React from 'react';
import {createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Scores from '../screens/MainFeed';
import ScoreDetails from '../screens/ScoreDetails';
import Live from '../screens/LiveFeed';
import Table from '../screens/Table';
//import Table from '../components/TableListItem';
import {Icon} from 'native-base';
import {CustomDrawerContentComponent} from '../components/CustomDrawer';

const ScoresRoute = createStackNavigator(
  {
    Home: Scores,
    Details: ScoreDetails
  },
  {
    initialRouteName: 'Home',
    navigationOptions:{
      header: null
    }
  }
);

const LiveScoresRoute = createStackNavigator(
  {
    Home: Live,
    Details: ScoreDetails
  },
  {
    initialRouteName: 'Home',
    navigationOptions:{
      header: null
    }
  }
);

const TabRouter = createBottomTabNavigator(
  {
    Scores: ScoresRoute,
    Live: LiveScoresRoute,
    Table: Table
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
        } else if (routeName === 'Table') {
          iconName = `ios-list-box${focused ? '' : '-outline'}`;
        }

        return <Icon name={iconName} style={{color: tintColor}} />
      },
      
    }),

    tabBarOptions: {
      activeTintColor: '#f7aa10',
      inactiveTintColor: '#e2e2e2',
      style: {
        backgroundColor: '#262628',
      },
    }, 
  }
);

export const Router = createDrawerNavigator({
  Basketball: TabRouter, 
},{
  contentComponent: CustomDrawerContentComponent,
  contentOptions:{
    labelStyle: {color: '#e2e2e2'}
  }
})