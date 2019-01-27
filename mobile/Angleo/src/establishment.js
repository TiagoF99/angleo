import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  FlatList,
  View,
  Button,
  Modal,
  Alert
} from 'react-native';

import { Avatar, Header,  List, ListItem } from 'react-native-elements';

const data = [{
      english: 's',
      french: 'No'
    }]

class Establishment extends Component {
  state = {
    data: {},
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  updateVote() {

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

      <View>
        <View >
          <Button onPress={() => {
            this.updateVote();
          }}
           title="Upvote"
           color="blue"
          />
        </View>
        <View>
          <Button onPress={() => {
            this.updateVote();
          }}
          title="Downvote"
          color="black"
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <List>
        {
          data.map((item) => (
            <ListItem
            title={"English: "+ item.english + " = French: " + item.french}
            />
          ))
        }
        </List>
            <View>
            <Button
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              title = 'Close Info'
            />
          </View>
      </Modal>

      <Button
        onPress={() => {
          this.setModalVisible(true);
        }}
        title = 'Extra Information'
      />
    </View>
    )
  }
  renderItem(item) {

  }
}



export default Establishment;
