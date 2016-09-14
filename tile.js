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
      playerValue: props.playerValue,
      col:  props.col,
      row: props.row,
      gameCode: props.gameCode,
    
    }
    this._clickTile = this._clickTile.bind(this);
  }

  componentDidMount(){
    this.setState({
      value: this.props.value
    })
  }

  _clickTile(){
    
    console.log("player num ", this.props.playerNum);
    console.log("player turn ", this.props.playerTurn);

    if (this.props.playerNum == this.props.playerTurn){
      this.setState({
       value: this.state.playerValue
      })

      this.state.socket.emit("click", { 
        gameCode: this.state.gameCode, 
        row: this.state.row, 
        col: this.state.col,
        value: this.state.playerValue
      }); 
    }else{
      console.log("cannot press la dey")
    }
  }

  render() {
    return (
      <TouchableHighlight style={styles.tile} onPress={this._clickTile}>
        <View>
          <Text style={{color: '#FFFFFF', fontSize:40}}>{this.props.value}</Text>
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