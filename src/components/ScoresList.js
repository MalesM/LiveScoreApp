import React from 'react';
import {View, Dimensions} from 'react-native'
import {List, ListItem} from 'native-base';
import ScoreListItem from './ScoreListItem';

export default class ScoreList extends React.Component{
  constructor(props){
    super(props);
    
  }

  render(){
    var {height, width} = Dimensions.get('window');
    return(
      <View style={{flex: 1}}>
        <List dataArray={this.props.gameList}
          renderRow={(item) => 
          <ListItem style={{height: 45,  marginLeft: 0, paddingRight: 0}}>
            <ScoreListItem 
              gameTime={item.time}
              homeTeam={item.homeTeam}
              awayTeam={item.awayTeam}  
              homeScore={item.homeScore}  
              awayScore={item.awayScore}    
              starts={(item.homeScore === '') ? false : true}
            />
          </ListItem>
          }>
        </List>
      </View>
    );
  }
}