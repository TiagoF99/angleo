import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  FlatList,
  View
} from 'react-native';

import { Rating } from 'react-native-elements';
import { Avatar } from 'react-native-elements';

const {width} = Dimensions.get('window')

class Establishment extends Component {
  state = {
    data: {},
  }

  ratingCompleted(rating) {
  console.log("Rating is: " + rating)
  }

  componentDidMount() {
//    fetch()
  }

  render() {
    const { rating } = this.props;
    return (
      <View>
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
      />
      <Avatar
      width={width}
      source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
      activeOpacity={0.7}
      overlayContainerStyle={{flex: 0.4}}
      imageProps={{resizeMode: 'cover'}}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
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
