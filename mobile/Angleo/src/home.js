import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  FlatList,
  View
} from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements';

class Home extends Component {

  state = {
    data: []
  }

  componentDidMount() {
//    fetch()
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SearchBar
          lightTheme
          round
          noIcon
          onChangeText={this.search}
          onClearText={this.search}
          placeholder='Explore Quebec!'
          placeholderTextColor='#112Fa7'
          containerStyle={{
            backgroundColor:'#d5d5d5'
          }}
          inputStyle={{
            backgroundColor:'#bbb',
            color:'#001F97'
          }}
        />
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor:'#eee',
            borderColor:'#eee'
          }}
          data={this.state.data}
          renderItem={this.renderItem}
        />
      </View>
    )
  }

  renderItem(item) {
    return (
      <View>
      </View>
    )
  }

  search(text) {

  }
}

export default Home;
