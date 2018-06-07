import React from 'react';
import { View, ScrollView, Text } from "react-native";
import { DrawerItems } from "react-navigation";

export const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor:'#262628' }}>
    <ScrollView>
      <View style={{ height: 50, justifyContent:'center', paddingLeft: 20, backgroundColor:'#757575' }}>
        <Text style={{fontSize: 18, color: '#d1d1d1'}}>Sport Scores</Text>
      </View>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
);
