import React from "react";
import { Text, View } from "react-native";

//const rowH = 40;

export default class ScoreListItem extends React.Component {
  constructor(props) {
    super(props);
    this.rowH = 40;
  }
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: this.rowH + 5,
          borderWidth: 2,
          borderColor: "#757575",
          backgroundColor: "#262628"
        }}
      >
        <View
          style={{
            height: this.rowH,
            width: 30,
            justifyContent: "center",
            paddingLeft: 2
          }}
        >
          <Text style={{ color: "#757575" }}>3Q</Text>
        </View>
        <View style={{ flex: 1, height: this.rowH }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 18, color: "#d1d1d1" }}>
              New Orleans Pelicans
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 18, color: "#d1d1d1" }}>
              Houston Rockets
            </Text>
          </View>
        </View>
        <View style={{ height: this.rowH, width: 30, marginRight: 5 }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 18, color: "#f7aa10" }}>
              112
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 18, color: "#f7aa10" }}>
              96
            </Text>
          </View>
        </View>
        <View
          style={{
            height: this.rowH,
            width: 15,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 20, color: "#686868" }}>{">"}</Text>
        </View>
      </View>
    );
  }
}
