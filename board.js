import Tile from './tile';
import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View } from 'react-native';
window.navigator.userAgent = "react-native";
export default class Board extends Component {

  constructor(props){
    super(props);
    this.state = {
		gameBoard: [
	        ['','',''],
	        ['','',''],
	        ['','','']
      ],
      gameCode: props.gameCode,
      socket: props.socket,
      playerTurn : '1'
    }
    this._renderBoard = this._renderBoard.bind(this);
  }

  componentDidMount(){
  	this.state.socket.on("board update", (data) => {
  		console.log(data);
		this.setState({
  			gameBoard: data.gameBoard,
  			playerTurn: data.playerTurn
  		})
  	})

  	this.state.socket.on("game end", (data) =>{
  		//change the playerturn to 0 when game ended
  		this.setState({
  			playerTurn: 0,
  			message: data
  		})
  	})
  }

  _renderBoard(){
	return this.state.gameBoard.map((rows, rowIndex) => {
		
		let row = rows.map((value, colIndex) => {
			let coord = colIndex.toString() + rowIndex.toString();
			return (
			<Tile 
				key={coord} 
				socket={this.state.socket} 
				row={rowIndex} 
				col={colIndex} 
				gameCode={this.state.gameCode}
				playerValue={this.props.playerValue} 
				value={value}
				playerNum = {this.props.playerNum}
				playerTurn={this.state.playerTurn}
			/>
			);
		});

		return <View key={rowIndex} style={styles.rowContainer}>{row}</View>
	});
}


  render() {
    return (
		<View style={styles.container}>
		<Text>
			Room Code: {this.state.gameCode}
		</Text>
		<Text>
			{this.state.message}
		</Text>
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