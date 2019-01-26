import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  FlatList,
  View
} from 'react-native';

import { Rating, Avatar, Header } from 'react-native-elements';

class Establishment extends Component {
  state = {
    data: {},
  }

  componentDidMount() {
    //    fetch()
  }

  ratingCompleted(rating) {
  console.log("Rating is: " + rating)
  }

  render() {
    const { rating } = this.props;
    return (
      <View>
      <Header
      backgroundColor= '#001F97'
      centerComponent={{ text: 'Name of the place', style: { color: '#fff' } }}
      />
      <View>
      <Avatar
      width={425}
      source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
      activeOpacity={0.7}
      style={{ paddingVertical: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      />
      </View>

      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
      />

      <Rating
      showRating
      imageSize={20}
      onFinishRating={this.ratingCompleted}
      style={{ paddingVertical: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      />
      </View>
    )
  }

  renderItem(item) {

  }
}


export default Establishment;
