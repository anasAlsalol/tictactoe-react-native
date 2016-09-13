import Tile from './tile';
import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View } from 'react-native';

export default class Board extends Component {
  render() {
    return (
		<View>
		<Tile /><Tile /><Tile />
		</View>
    )
  }
}