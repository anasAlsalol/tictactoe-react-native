import Tile from './tile';
import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View } from 'react-native';

export default class Board extends Component {
  render() {
    return (
		<View style={styles.container}>
			<View style={styles.rowContainer}>
				<Tile style={{height:70}}/>
				<Tile />
				<Tile />
			</View>
		</View>
    )
  }
}

const styles= {
	container: {
		flex: 1, 
		alignItems: 'center',
		height: 500,
	},
	rowContainer:{
		flex: 1, 
		flexDirection: 'row',
		alignItems: 'center',
	}
}