import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameScreen } from './GameScreen';
import { StartGameScreen } from './StartGameScreen';
import { Colors } from '../constants/color';
import { GameOverScreen } from './GameOverScreen';

export const AppScreen = () => {

	const [userNumber, setUserNumber] = useState<number | null>(null);
	const [gameIsOver, setGameIsOver] = useState(false);
	const [guessRounds, setGuessRounds] = useState(0);

	const pickedNumberHandler = (numberPicked: number) => {
		setUserNumber(numberPicked);
		setGameIsOver(false);
	}

	const gameOverHandler = (numberRounds: number) => {
		setGameIsOver(true);
		setGuessRounds(numberRounds);
	}

	const startNewGame = () => {
		setGuessRounds(0);
		setUserNumber(null);
	}

	const renderScreen = () => {
		let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
		if (userNumber) screen = <GameScreen userNumber={userNumber || 0} onGameOver={gameOverHandler} />
		if (gameIsOver && userNumber) screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={startNewGame} />

		return screen;
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
