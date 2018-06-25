import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
	{ text: 'Welcome to Polviks Jobs', color: '#03A9F4' },
	{ text: 'Set your location', color: '#009688' },
	{ text: 'Polviks will take care of the rest', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
	state = { token: null }

	async componentWillMount() {
		let token = await AsyncStorage.getItem('fb_token');

		if (token) {
			this.props.navigation.navigate('Map');
			this.setState({ token });
		} else {
			this.setState({ token: false });
		}
	}

	onSlidesComplete = () => {
		this.props.navigation.navigate('Auth');
	}

	render() {
		if (_.isNull(this.state.token)) {
			return <AppLoading />
		}

		return (
			<Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
		);
	}
}

export default WelcomeScreen;
