import React from 'react';
import { Text, View } from 'react-native';
//import ScoreListItem from './src/components/ScoreListItem'
import ScoresList from './src/components/ScoresList';
import games from './src/raw/games';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      games: games
    }
  }
  render() {
    return (
      <ScoresList gameList={this.state.games} />
    );
  }
}

