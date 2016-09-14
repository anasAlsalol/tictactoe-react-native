import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
window.navigator.userAgent = "react-native";
let io = require('socket.io-client/socket.io');
let socket;

export default class Tile extends Component {
  constructor(props){
    super(props);
    this.state = {
      socket : props.socket,
      playerValue: '',
      col:  props.row,
      row: props.col
    }
    this._clickTile = this._clickTile.bind(this);
  }

  _clickTile(){
    console.log(this.state.row, " ", this.state.col)
    this.state.socket.emit("click", { row: this.state.row, col: this.state.col });
    this.setState({
      playerValue: this.props.playerValue
    })
  }

  render() {
    return (
      <TouchableHighlight style={styles.tile} onPress={this._clickTile}>
      <View >
      <Text style={{color: '#FFFFFF', fontSize:40}}>{this.state.playerValue}</Text>
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