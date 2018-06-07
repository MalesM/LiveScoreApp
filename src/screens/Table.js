import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {Container, Header, Body, Content, Left, Right, Title, Button, Icon} from 'native-base';
import {connect} from 'react-redux';
import {fetchTable} from '../actions/scoresAction';
import TableList from '../components/TableList';
import HeaderItem from '../components/TableListItem';

class Table extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchTable();
  };
  

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#262628'}}>
          <Left>
            <Button transparent onPress={() => {this.props.navigation.openDrawer();}}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body >
            <Title style={{color: '#f7aa10'}}>Basketball \ Table</Title>
          </Body>
        </Header>
        <Content style={{backgroundColor: '#262628'}} >
          <HeaderItem bgc='#595959' rank='#' team='' P='P' SD='SD' PER='PER' />
          <View style={{flex: 1, backgroundColor: '#262628'}}>
            {this.props.isLoading ? <ActivityIndicator size="large" color="#f7aa10"/> : <TableList tableData={this.props.data} />}
          </View>
        </Content>
      </Container>

    )
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
  data: state.scores.table,
  isLoading: state.scores.isLoadingTable
});

export default connect(mapStateToProps, {fetchTable})(Table)