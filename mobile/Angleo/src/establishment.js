import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  FlatList,
  View
} from 'react-native';

import { Button, Avatar, Header, } from 'react-native-elements';

class Establishment extends Component {
  state = {
    data: {},
  }

  componentDidMount() {
    //    fetch()
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
      },
      buttonContainer: {
        flex: 1,
      }
    });

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

      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Upvote"
          backgroundColor= '#8B0000'
          color='#fffcfc'
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Downvote"
           backgroundColor= '#070707'
           color='#fffcfc'
          />
        </View>
      </View>

    </View>
    )
  }

  renderItem(item) {

  }
}



export default Establishment;
