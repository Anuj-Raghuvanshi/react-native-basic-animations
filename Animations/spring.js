import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
	Animated,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

	let value = new Animated.Value(0)

	const makeSpring = () => {
		value.setValue(0)
		Animated.spring(
			value,
			{
				toValue: 1,
				friction: 1,
				useNativeDriver: true
			},
		).start(() => makeSpring())
	}

	makeSpring();

  return (
    <SafeAreaView style={{backgroundStyle, ...styles.container}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<View>
				<Animated.Image
					style={{
						width: 227,
						height: 200,
						transform: [{scale: value}] }}
						source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
				/>
			</View>
    </SafeAreaView>
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
