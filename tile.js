import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
window.navigator.userAgent = "react-native";
let io = require('socket.io-client/socket.io');
let socket;

export default class Tile extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: props.value,
      socket : props.socket,
      value: ''
    }
    this._clickTile = this._clickTile.bind(this);
  }

  _clickTile(){
    console.log("tile clicked");
    console.log(this.state.value)
    // console.log(this.state.socket)
    this.state.socket.emit("click", this.state.value);
    this.setState({
      value: 'X'
    })
  }

  render() {
    return (
      <TouchableHighlight style={styles.tile} onPress={this._clickTile}>
      <View >
      <Text style={{color: '#FFFFFF', fontSize:40}}>{this.state.value}</Text>
      </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: '#000000',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
     justifyContent: 'center',
    height:120,
    borderWidth: 1,
    borderColor: '#FFFFFF'
  },
  tileText: {
    color: '#FFFFFF',
    fontSize : 40,
  }
});