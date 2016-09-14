import Tile from './tile';
import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View } from 'react-native';

export default class Board extends Component {

  constructor(props){
    super(props);
    this._clickTile = this._clickTile.bind(this);
  }

  _clickTile(){
    console.log("tile clicked");
  }

  render() {
    return (
		<View style={styles.container}>
			<View style={styles.rowContainer}>
				<Tile onPress={this._clickTile}/>
				<Tile />
				<Tile />
			</View>
			<View style={styles.rowContainer}>
				<Tile/>
				<Tile />
				<Tile />
			</View>
			<View style={styles.rowContainer}>
				<Tile />
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
		marginTop: 200
	},
	rowContainer:{
		flexDirection: 'row',
		alignItems: 'center',
	}
}