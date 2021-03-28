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
	let opacity = new Animated.Value(0)

	const makeAnimations = () => {
		Animated.timing(opacity, {

			toValue: 1,
			duration: 1000,
			useNativeDriver: true
		}).start(() => {
			Animated.timing(opacity, {
				toValue: 0.2,
				duration: 1000,
				useNativeDriver: true
			}).start(makeAnimations)
		})
		
	}
	
	makeAnimations()

  return (
    <View style={[styles.container]}>
			<Animated.View 
				style={{ opacity, height: 200, width: 200, backgroundColor: 'green', borderRadius: 5  }}>
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
