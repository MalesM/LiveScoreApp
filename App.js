import React from 'react';
import { Text, View } from 'react-native';
import MainFeed from './src/screens/MainFeed';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <MainFeed />
    );
  }
}

