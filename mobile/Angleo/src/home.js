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
    data:  [
      {
        name: 'Nearby Place #1',
        avatar_url: 'https://static.thenounproject.com/png/6564-200.png',
        address: 'Address #1',
        vote: -10
      },
      {
        name: 'Nearby Place #2',
        avatar_url: 'https://static.thenounproject.com/png/37358-200.png',
        address: 'Address #2',
        vote: 10
      },]
  }

  componentDidMount() {
    fetch(http://angleo.tech/get/nearby/45.58389770/-73.6500000/1)
    .then(data) {
      this.setState({data:data})
    }
  }

  checkVote(item) {
          if (item.vote >= 0) {
              return <ListItem
                badge={{ value: item.vote, textStyle: { color: 'black' }, containerStyle:{backgroundColor: '#5ae024'} }}
                key={item.name}
                title={item.name}
                subtitle= {item.subtitle}
                avatar={{uri:item.avatar_url}}
              />
          } else {
              return <ListItem
                badge={{ value: item.vote, textStyle: { color: 'black' }, containerStyle:{backgroundColor: '#d60202'} }}
                key={item.name}
                title={item.name}
                subtitle= {item.subtitle}
                avatar={{uri:item.avatar_url}}
              />
            }
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

        <List>
          {
            this.state.data.map((item) => (
              this.checkVote(item)
            ))
          }
        </List>

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
