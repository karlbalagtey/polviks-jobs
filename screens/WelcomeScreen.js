import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
	{ text: 'Welcome to Polviks Jobs', color: '#03A9F4' },
	{ text: 'Set your location', color: '#009688' },
	{ text: 'Polviks will take care of the rest', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
	onSlidesComplete = () => {
		this.props.navigation.navigate('Auth');
	}

	render() {
		return (
			<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
		);
	}
}

export default WelcomeScreen;
