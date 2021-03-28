/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
	 SafeAreaView,
	 StatusBar,
	 StyleSheet,
	 useColorScheme,
	 View,
	 Animated,
	 Easing
 } from 'react-native';
 
 import {
	 Colors,
 } from 'react-native/Libraries/NewAppScreen';
 
 const App: () => Node = () => {
	 const isDarkMode = useColorScheme() === 'dark';
 
	 const backgroundStyle = {
		 backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	 };
 
	 let spinValue = new Animated.Value(0)
 
	 const spinImg = () => {
		 spinValue.setValue(0)
		 Animated.timing(
			 spinValue,
			 {
				 toValue: 1,
				 duration: 4000,
				 easing: Easing.linear,
				 useNativeDriver: true
			 },
		 ).start(() => spinImg())
	 }
 
	 spinImg();
	 const spin = spinValue.interpolate({
		 inputRange: [0, 1],
		 outputRange: ['0deg', '360deg']
	 })
 
	 return (
		 <SafeAreaView style={{backgroundStyle, ...styles.container}}>
			 <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			 <View>
				 <Animated.Image
					 style={{
						 width: 227,
						 height: 200,
						 transform: [{rotate: spin}] }}
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
 