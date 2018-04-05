import React from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import {Container, Header, Body, Content, Left, Right, Title, Button, Icon} from 'native-base';
import GameList from '../components/ScoresList';

export default class MainFeed extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      data: [],
    }
  }

  componentDidMount = () => {
    fetch('https://ad7c8f67.ngrok.io/basketball')
      .then(response => response.json())
      .then(responseJson => this.setState({data: responseJson, isLoading: false}))
      .catch(err => console.log(err))
  };
  

  render(){
    return(
      <Container>
        <Header style={{backgroundColor: '#262628'}}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body >
            <Title style={{color: '#f7aa10'}}>Basketball Scores</Title>
          </Body>
        </Header>
        <Content style={{backgroundColor: '#262628'}} >
          <View style={styles.basketballTitle}>
            <Text style={{color: '#e2e2e2'}} >Basketball</Text>
          </View>
          {this.state.isLoading ? <ActivityIndicator size="large" color="#f7aa10"/> :
            <GameList gameList={this.state.data} />
          }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  basketballTitle: {
    flex: 1,
    height: 25,
    paddingLeft: 5,
    justifyContent: 'center',
    backgroundColor: '#595959',
    borderBottomWidth: 1,
    borderColor: "#757575"
  }
})