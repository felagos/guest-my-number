import { View, Image, StyleSheet, Text } from "react-native";
import { Button } from "../components/ui/Button";
import { Title } from "../components/ui/Title";
import { Colors } from "../constants/color";

interface Props {
	roundsNumber: number | null;
	userNumber: number | null;
	onRestart: () => void;
}

export const GameOverScreen = ({ roundsNumber, userNumber, onRestart }: Props) => (
	<View style={styles.container}>
		<Title title="Game Over" />
		<View style={styles.imageContainer}>
			<Image style={styles.image} source={require('../assets/images/success.png')} />
		</View>
		<Text style={styles.summeryText}>
			Your phone needed {' '}
			<Text style={styles.highlight}>{roundsNumber}</Text> {' '}
			rounds to guess the number {' '}
			<Text style={styles.highlight}>{userNumber}</Text>.
		</Text>
		<Button onPress={onRestart}>Start New Game</Button>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: 'hidden',
		margin: 36,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	summeryText: {
		fontFamily: 'open-sans',
		fontSize: 23,
		textAlign: 'center',
		marginBottom: 24,
	},
	highlight: {
		fontFamily: 'open-sans-bold',
		color: Colors.primary500,
	}
})