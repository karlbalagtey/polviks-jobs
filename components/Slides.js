import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

	renderLastSlide(index) {
		if (index === this.props.data.length - 1) {
			return (
				<Button
					title="Lets Begin!"
					raised
					buttonStyle={styles.buttonStyle}
					onPress={this.props.onComplete}
				/>
			);
		}
	}

	renderSlides() {
		return this.props.data.map((slide, index) => {
			return (
				<View 
					key={slide.text} 
					style={[styles.slideStyle, { backgroundColor: slide.color }]}
				>
					<Text style={styles.textStyle}>{slide.text}</Text>
					{this.renderLastSlide(index)}
				</View>
			);
		});
	}

	render() {
		return (
			<ScrollView 
				horizontal
				pagingEnabled
				style={{ flex: 1 }}
			>
				{this.renderSlides()}
			</ScrollView>
		);
	}
}

const styles = {
	slideStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: SCREEN_WIDTH,
		padding: 10
	},
	textStyle: {
		fontSize: 30,
		color: 'white',
		marginBottom: 50
	},
	buttonStyle: {
		backgroundColor: '#0288D1'
	}
};

export default Slides;