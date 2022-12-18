import { useState } from 'react'
import { View, Text, StyleSheet } from "react-native";
import { NumberContainer } from '../components/game/NumberContainer';
import { Title } from "../components/ui/Title";
import { generateRandomBetween } from '../utils/random.util';

interface Props {
	userNumber: number;
}

export const GameScreen = ({ userNumber }: Props) => {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess)

	return (
		<View style={styles.container}>
			<Title title="Opponent's Guess" />
			<NumberContainer>
				{currentGuess}
			</NumberContainer>
			<View>
				<Text>Higher or lower ?</Text>
			</View>
			<View>
				<Text>LOG ROUNDS</Text>
			</View>
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24
	}
})