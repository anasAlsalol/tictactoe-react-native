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
  TouchableHighlight,
  State
} from 'react-native';

class TicTacToeApp extends Component {

  constructor(props){
    super(props);
    this.state ={
      roomKey : ''
    }
    this._createRoom = this._createRoom.bind(this)
  }

  _createRoom(){
    this.setState({ roomKey: "0423" });
    console.log("creating room...");
  }

  render() {
    let showRoom;

    if(this.state.roomKey !== ''){
      showRoom = <Text style={{fontSize:30}}>{this.state.roomKey}</Text>
    }
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={this._createRoom} style={styles.innerContainer}>
        <View>
          <Text>Create Game Room</Text>
        </View>
      </TouchableHighlight>
      {showRoom}
      <View style={styles.bottomInnerContainer}>
      <Text>Join Game</Text>
      <TextInput
      style={styles.input}
      />
      </View>
      <TouchableHighlight style={styles.joinGameContainer}>
        <View >
          <Text>Join Game</Text>
        </View>
      </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00FFFF',
    padding:10,
    paddingTop: 150
  },
  innerContainer: {
    justifyContent: 'center',
    paddingLeft:10,
    paddingRight:10,
    borderWidth:1,
    height:70
  },
  bottomInnerContainer: {
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
    marginTop: 70
  },
  input: {
    height:40,
    borderWidth: 1,
    width: 150,
    padding:10,
    marginBottom:20
  },
  joinGame: {
    paddingLeft:10,
    paddingRight:10,
    borderWidth:1
  },
  joinGameContainer: {
    justifyContent: 'center',
    paddingLeft:10,
    paddingRight:10,
    borderWidth:1,
    height:50
  },
});

AppRegistry.registerComponent('tictactoe', () => TicTacToeApp);
