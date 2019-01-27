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
    search: [],
    location:[],
    searching: false
  }

  componentDidMount() {
    navigator.geolocation.setRNConfiguration({});
    navigator.geolocation.getCurrentPosition(this.updateLocation.bind(this))
    navigator.geolocation.watchPosition(this.updateLocation.bind(this))
  }

  nearby() {
    fetch('http://angleo.tech/get/nearby/'+this.state.location[0]+'/'+this.state.location[1]+'/1')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson[0]._id)
      this.state.data = responseJson
      this.setState(this.state)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  updateLocation(position) {
    this.state.location = [position.coords.latitude, position.coords.longitude]
    if (!this.state.searching) {
      this.nearby.bind(this)()
    }
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
        onPress={this.enterPlace.bind(this)}
      />
    )
  }

  enterPlace(item) {
    this.props.navigation.navigate('Establishment', {item:item})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SearchBar
          lightTheme
          round
          noIcon
          onChangeText={this.search.bind(this)}
          onClearText={() => {
            this.state.searching = false
            nearby.bind(this)()
          }}
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
    if (text!='') {
      console.log(text)
      this.state.searching = true
      fetch('http://angleo.tech/get/search/query/name/' + text)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
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
}

export default Home;
