/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Board from './board'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

class TicTacToeApp extends Component {

  constructor(){
    super();
  }

  _createRoom(){
    console.log("creating room...");
  }

  render() {
    let showRoom;

    if(this.state.roomKey){
      showRoom = <Text>this.state.roomKey</Text>
    }else{

    }
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={this._createRoom}>
        <View style={styles.innerContainer}>
          <Text>Create Game Room</Text>
        </View>
      </TouchableHighlight>
      {showRoom}
      <Text>Join Game</Text>
      <TextInput
      style={styles.input}
      placeholder="Type here to translate!"
      onChangeText={(text) => this.setState({text})}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FFFF',
    padding:10
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:10,
    paddingRight:10,
    borderWidth:1,
    height:70
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height:40,
    borderWidth: 1
  }
});

AppRegistry.registerComponent('tictactoe', () => TicTacToeApp);
