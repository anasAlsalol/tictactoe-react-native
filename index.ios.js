import Board from './board'
import React, { Component } from 'react';
window.navigator.userAgent = "react-native";
let io = require('socket.io-client/socket.io');
let socket;
let playerValue;
let gameCode;

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';


class SimpleNavigationApp extends Component {
  render() {
    return (
    <Navigator style={styles.navigator}
      initialRoute={{id:1}}
      renderScene={(route, nav) =>
        {return this.renderScene(route, nav)}}
      />
    )
  }

  renderScene(route,nav) {
   switch (route.id) {
      case 1:
        return <TicTacToeApp navigator={nav} />
      case 2:
        return <Board navigator={nav} playerValue={playerValue} gameCode={gameCode}/>
    }
  }
}

class TicTacToeApp extends Component {

  constructor(props){
    super(props);
    this.state ={
      createCode : '',
      joinCode: '',
      player: 0,
      navigator : props.navigator
    }
    this._createRoom = this._createRoom.bind(this);
    this._joinRoom = this._joinRoom.bind(this);
    this.changeScene = this.changeScene.bind(this);
  }

  componentWillMount(){
    //Must specifiy 'jsonp: false' since react native doesn't provide the dom
    //and thus wouldn't support creating an iframe/script tag
    socket = io('http://localhost:3000',{jsonp: false});
  }

  componentDidMount(){
      socket.on("game start", (data) => {
      this.props.navigator.push({
        id: 2
      })
    });
  }

  leftPad(str, length) {
      str = str == null ? '' : String(str);
      length = ~~length;
      pad = '';
      padLength = length - str.length;

      while(padLength--) {
          pad += '0';
      }

      return pad + str;
  }

  changeScene(){
    gameCode = this.state.createCode
    this.state.navigator.push({
      id: 2
    })
  }

  _createRoom(){
    let codeOne = parseInt(Math.random() * (9 - 1) + 1);
    let codeTwo = parseInt(Math.random() * (9 - 1) + 1);
    let codeThree = parseInt(Math.random() * (9 - 1) + 1);
    let codeFour = parseInt(Math.random() * (9 - 1) + 1);
    let roomCode = "" + codeOne + codeTwo + codeThree + codeFour;
    this.setState({ 
      createCode: roomCode,
      player: 1,
    });
    playerValue = 'X'
    socket.emit("create room", roomCode);
  }

  _joinRoom(){
    socket.emit("join room", this.state.joinCode);
    this.setState({ 
      player: 2,
      createCode: this.state.joinCode,
    });
    playerValue = 'O';
  }

  render() {
    let showRoom;


    if(this.state.createCode !== ''){
     
      showRoom = <View>
      <Text style={{fontSize:30,textAlign:'center'}}>{this.state.createCode}</Text>
      <Text style={{textAlign:'center'}}>Waiting for challenger...</Text>
      </View>
    }
    return (
      <View style={styles.container}>
       <TouchableHighlight onPress={this.changeScene} style={styles.innerContainer}>
        <View>
          <Text>Change Scene</Text>
        </View>
      </TouchableHighlight>
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
      onChangeText={(joinCode) => this.setState({joinCode})}
      keyboardType="numeric"
      />
      </View>
      <TouchableHighlight style={styles.joinGameContainer} onPress={this._joinRoom}>
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
    backgroundColor: '#FFFFFF',
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

AppRegistry.registerComponent('tictactoe', () => SimpleNavigationApp);
