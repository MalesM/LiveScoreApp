import React from 'react';
import {View, ActivityIndicator, Text, StyleSheet} from 'react-native';
import {Container, Header, Body, Content, Left, Right, Title, Button, Icon} from 'native-base';
import {connect} from 'react-redux';
import {fetchLive} from '../actions/scoresAction';
import GameList from '../components/ScoresList';

class LiveFeed extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchLive();
  };
  
  render(){
    //console.log(this.props.data.length);
    return(
      <Container>
        <Header style={{backgroundColor: '#262628'}}>
          <Left>
            <Button transparent onPress={() => {this.props.navigation.openDrawer();}}>
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
          {this.props.isLoading ? <ActivityIndicator size="large" color="#f7aa10"/> :
            <GameList gameList={this.props.data} />
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
});

const mapStateToProps = state => ({
  data: state.scores.liveData,
  isLoading: state.scores.isLoadingLive
});

export default connect(mapStateToProps, {fetchLive})(LiveFeed)