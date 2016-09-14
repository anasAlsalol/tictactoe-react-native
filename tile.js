import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class Tile extends Component {

  constructor(props){
    super(props);
    this._clickTile = this._clickTile.bind(this);
  }

  _clickTile(){
    console.log("tile clicked");
  }

  render() {
    return (
      <View style={styles.tile} onPress={this._clickTile}>
      <Text style={{color: '#FFFFFF'}}>here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: '#000000',
    flex: 1,
    alignItems: 'center',
    height:100,
    borderWidth: 1,
    borderColor: '#FFFFFF'
  }
});