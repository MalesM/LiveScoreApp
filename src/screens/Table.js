import React from 'react';
import {View, Text, Button} from 'react-native';


export default class Table extends React.Component{
  render() {
    return (
      <View>
        <Button title='TABLE' onPress={() => this.props.navigation.openDrawer()} />
      </View>
    )
  };
}