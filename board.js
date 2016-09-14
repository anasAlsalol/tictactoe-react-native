import Tile from './tile';
import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View } from 'react-native';
window.navigator.userAgent = "react-native";
let io = require('socket.io-client/socket.io');
let socket;
export default class Board extends Component {

  constructor(props){
    super(props);
    this.state = {
		gameboard: [
	        [0,0,0],
	        [0,0,0],
	        [0,0,0]
      ],
    }
    this._renderBoard = this._renderBoard.bind(this);
  }

  componentWillMount(){
    socket = io('http://localhost:3000',{jsonp: false});
  }

  _renderBoard(){
	return this.state.gameboard.map((rows, rowIndex) => {
		
		let row = rows.map((value, colIndex) => {
			let coord = colIndex.toString() + rowIndex.toString();
			return (
			<Tile 
				key={coord} 
				socket={socket} 
				row={rowIndex} 
				col={colIndex} 
				playerValue={this.props.playerValue} 
			/>
			);
		});

		return <View key={rowIndex} style={styles.rowContainer}>{row}</View>
	});
  }

  render() {
    return (
		<View style={styles.container}>
			{this._renderBoard()}
		</View>
    )
  }
}

const styles= {
	container: {
		flex: 1, 
		alignItems: 'center',
		marginTop: 150
	},
	rowContainer:{
		flexDirection: 'row',
		alignItems: 'center',
	}
}