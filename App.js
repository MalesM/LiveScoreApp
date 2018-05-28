import React from "react";
import { Text, View } from "react-native";
import MainFeed from "./src/screens/MainFeed";
import { Provider } from "react-redux";
import store from './src/store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <MainFeed />
      </Provider>
    );
  }
}
