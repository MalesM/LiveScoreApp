import React from "react";
import { Text, View } from "react-native";

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
          borderBottomWidth: 1,
          borderTopWidth: 0,
          borderColor: "#757575",
          backgroundColor: "#262628",
          flex: 1
        }}
      >
        <View
          style={{
            height: this.rowH,
            width: 50,
            justifyContent: "center",
            paddingLeft: 4
          }}
        >
          <Text style={{ color: "#757575" }}>{this.props.gameTime}</Text>
        </View>
        <View style={{ flex: 1, height: this.rowH }}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 18, color: "#d1d1d1" }}>
              {this.props.homeTeam}
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 18, color: "#d1d1d1" }}>
              {this.props.awayTeam}
            </Text>
          </View>
        </View>
        <View style={{ height: this.rowH, width: 30, marginRight: 5 }}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 18, color: "#f7aa10" }}>
              {this.props.homeScore}
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center", alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 18, color: "#f7aa10" }}>
              {this.props.awayScore}
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
          {this.props.starts ? <Text style={{ fontSize: 20, color: "#686868" }}>{">"}</Text> : null}
        </View>
      </View>
    );
  }
}
