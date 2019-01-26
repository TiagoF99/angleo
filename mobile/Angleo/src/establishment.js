import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  FlatList,
  View
} from 'react-native';

class Establishment extends Component {

  state = {
    data: {},
  }

  componentDidMount() {
//    fetch()
  }

  render() {
    return (
      <View>
      <Text>{this.state.data.name}</Text>
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
      />
      </View>
    )
  }

  renderItem(item) {

  }
}

export default Establishment;
