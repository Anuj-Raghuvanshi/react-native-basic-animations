import React from 'react';
import type {Node} from 'react';
import {
  Easing,
  StyleSheet,
  useColorScheme,
  View,
	Animated,
	Text,
	TouchableHighlight
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
	let value1 = new Animated.Value(0)
	let value2 = new Animated.Value(0)
	let value3 = new Animated.Value(0)
	let value4 = new Animated.Value(0)

	const makeAnimations = () => {
		value1.setValue(0)
		value2.setValue(0)
		value3.setValue(0)
		value4.setValue(0)
		const createAnimation = function (value, duration, easing, delay = 0) {
			return Animated.timing(
				value,
				{
					toValue: 1,
					duration,
					easing,
					delay,
					useNativeDriver: false
				},
			)
		}
		Animated.parallel([
			createAnimation(value1, 2000, Easing.ease),
			createAnimation(value2, 1000, Easing.ease, 1000),
			createAnimation(value3, 1000, Easing.ease, 2000),
			createAnimation(value4, 1000, Easing.ease, 1000)        
		]).start()
	}

	makeAnimations();
	
	const scaleText = value1.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 2]
  })
  const spinText = value2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '3600deg']
  })
  const introButton = value3.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 500]
  })
	const leftOfWelcome = value4.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200]
  })

  return (
    <View style={[styles.container]}>
			<Animated.View 
				style={{ transform: [{scale: scaleText}], left: leftOfWelcome }}>
				<Text>Welcome</Text>
			</Animated.View>
			<Animated.View
				style={{ marginTop: 20, transform: [{rotate: spinText}] }}>
				<Text
					style={{fontSize: 20}}>
					to the App!
				</Text>
			</Animated.View>
			<Animated.View
				style={{top: introButton, position: 'absolute'}}>
				<TouchableHighlight
					onPress={() => makeAnimations()}
					style={styles.button}>
					<Text
						style={{color: 'red', fontSize: 20}}>
						Click Here To Start
					</Text>
				</TouchableHighlight>
			</Animated.View>
		</View>
  );
};

const styles = StyleSheet.create({
  container: {
		flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
