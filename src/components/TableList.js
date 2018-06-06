import React from 'react';
import {View} from 'react-native';
import {List, ListItem} from 'native-base';
import TableListItem from './TableListItem';

export default class TableList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View>
        <List dataArray={this.props.tableData}
          renderRow={item =>
            <ListItem noBorder style={{height: 30,  marginLeft: 0, paddingRight: 0}}>
              <TableListItem
                bgc={(item.rank % 2 == 0) ? '#323233' : '#262628'}
                rank={item.rank}
                team={item.team}
                P={item.P}
                SD={item.SD}
                PER={item.PER}
              />
            </ListItem>
          }
          />
      </View>
    )
  }
};
