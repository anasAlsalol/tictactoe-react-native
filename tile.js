import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class Tile extends Component {

  render() {
    return (
      <View style={styles.tile}>
      <Text style={{color: '#FFFFFF'}}>here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: '#000000'
  }
});