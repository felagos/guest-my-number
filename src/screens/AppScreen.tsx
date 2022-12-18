import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameScreen } from './GameScreen';
import { StartGameScreen } from './StartGameScreen';
import { Colors } from '../constants/color';

export const AppScreen = () => {

	const [userNumber, setUserNumber] = useState<number | null>(null);

	const pickedNumberHandler = (numberPicked: number) => {
		setUserNumber(numberPicked);
	}

	const renderScreen = () => {
		if (userNumber) return <GameScreen userNumber={userNumber} />

		return <StartGameScreen onPickNumber={pickedNumberHandler} />
	}

	return (
		<>
			<StatusBar style="auto" />
			<LinearGradient
				colors={[Colors.primary800, Colors.accent500]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={styles.container}>

				<ImageBackground source={require('../assets/images/background.png')}
					resizeMode="cover"
					style={styles.container}
					imageStyle={styles.backgroundImage}
				>
					<SafeAreaView style={[styles.container]}>
						{renderScreen()}
					</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15
	}
});
