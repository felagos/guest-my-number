import { useEffect, useMemo, useState } from 'react'
import { View, Text, StyleSheet, Alert } from "react-native";
import { NumberContainer } from '../components/game/NumberContainer';
import { Title } from "../components/ui/Title";
import { generateRandomBetween } from '../utils/random.util';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Colors } from '../constants/color';
import { ButtonsContainer } from '../components/ui/ButtonsContainer';

interface Props {
	userNumber: number;
	onGameOver: () => void;
}

type Direction = "lower" | "greater";

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber, onGameOver }: Props) => {
	const initialGuess = useMemo(() => generateRandomBetween(1, 100, userNumber), [userNumber, generateRandomBetween]);
	const [currentGuess, setCurrentGuess] = useState(initialGuess)

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver();
		}
	}, [currentGuess, userNumber, onGameOver])

	const nextGuess = (direction: Direction) => () => {

		if ((direction === "lower" && currentGuess < userNumber) ||
			(direction === "greater" && currentGuess > userNumber)) {
			Alert.alert("Don't lie !", "You know that this is wrong ...");
			return;
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		const newRdnNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);

		setCurrentGuess(newRdnNumber);
	}

	return (
		<View style={styles.container}>
			<Title title="Opponent's Guess" />
			<NumberContainer>
				{currentGuess}
			</NumberContainer>
			<Card>
				<Text style={styles.instruction}>Higher or lower ?</Text>
				<ButtonsContainer style={styles.btnContainer}>
					<Button onPress={nextGuess("lower")}>-</Button>
					<Button onPress={nextGuess("greater")}>+</Button>
				</ButtonsContainer>
			</Card>
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
	},
	instruction: {
		color: Colors.white,
		fontSize: 24
	},
	btnContainer: {
		marginTop: 20
	}
})