import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  View
} from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements';

class Home extends Component {

  state = {
    data: [
    ],
    search: []
  }

  componentDidMount() {
    fetch('http://angleo.tech/get/nearby/45.58389770/-73.6500000/10')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson[0]._id)
      this.setState({
        data:responseJson,
        search:this.state.search
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  renderItem(item) {
    var color = ''
    if (item.votes >= 0) {
      color = '#5ae024'
    } else {
      color = '#d60202'
    }
    return (
      <ListItem
        badge={{ value: item.votes, textStyle: { color: '#000' }, containerStyle:{backgroundColor: color} }}
        key={item._id}
        title={item.name}
        subtitle= {item.subtitle}
        avatar={{uri:item.avatar_url}}
        onPress={this.enterPlace}
      />
    )
  }

  enterPlace(item) {
    console.log("hi")
    this.props.navigation.navigate('establishment', item)
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
        <ScrollView
          style={{
            flexGrow: 1,
            backgroundColor:'#eee',
            borderColor:'#eee'
          }}
        >
          {
            this.state.data.slice(0,20).map(this.renderItem.bind(this))
          }
        </ScrollView>
      </View>
    )
  }

  search(text) {
    fetch('http://angleo.tech/get/search/' + text)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        data: this.state.data,
        search: responseJson
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

export default Home;
