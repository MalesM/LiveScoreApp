import React from "react";
import { View, Text } from "react-native";

export default class TableListItem extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          height: 30,
          alignItems: "center",
          flexDirection: "row",
        
          backgroundColor: this.props.bgc
        }}
      >
        <View style={{ padding: 5 }}>
          <Text style={{ color: "#d1d1d1" }}>{this.props.rank}</Text>
        </View>
        <View style={{ flex: 1, paddingLeft: 5 }}>
          <Text style={{ color: "#d1d1d1" }}>{this.props.team}</Text>
        </View>
        <View style={{ padding: 15 }}>
          <Text style={{ color: "#d1d1d1" }}>{this.props.P}</Text>
        </View>
        <View style={{ padding: 5 }}>
          <Text style={{ color: "#d1d1d1" }}>{this.props.SD}</Text>
        </View>
        <View style={{ padding: 5 }}>
          <Text style={{ color: "#d1d1d1" }}>{this.props.PER}</Text>
        </View>
      </View>
    );
  }
}
