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
    //    fetch
    console.log(this.props.item);
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
      centerComponent={{ text: 'Detail Info', style: { color: '#fff' } }}
      />
      <View>
      <Avatar
      width={200}
      source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Flag_of_Quebec_%281-2%29.svg/2000px-Flag_of_Quebec_%281-2%29.svg.png"}}
      activeOpacity={0.7}
      style={{ paddingVertical: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      />
      </View>

      <View>
      <Text>Name: {this.props.item.name}</Text>
      <Text>Address: {this.props.item.address}</Text>
      <Text>Votes: {this.props.item.votes}</Text>
      <Text>Cultural Info: {this.props.item.cultural}</Text>
      </View>

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
          this.props.item.translations.map((word) => (
            <ListItem
            title={"English: "+ word.english + " = French: " + word.french}
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
