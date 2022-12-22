import { useState } from "react";
import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Title } from "../components/ui/Title";
import { Colors } from "../constants/color";

interface Props {
	onPickNumber: (_number: number) => void;
}

export const StartGameScreen = ({ onPickNumber }: Props) => {
	const [enteredNumber, setEnteredNumber] = useState("");

	const onChange = (input: string) => setEnteredNumber(input);

	const confirmInput = () => {
		const number = parseInt(enteredNumber);

		if (!/[0-9]{1,2}/.test(enteredNumber))
			return Alert.alert("Invalid number !", "Enter a valid number");
		if (number <= 0 || number > 99)
			return Alert.alert("Invalid number !", "Enter a number between 1 and 99");

		onPickNumber(number);
	}

	const resetInput = () => {
		setEnteredNumber("");
	}

	return (
		<View style={styles.rootContainer}>
			<Title title="Guess My Number" />
			<Card>
				<Text style={styles.titleInput}>Enter a number</Text>
				<TextInput
					style={styles.input}
					keyboardType='number-pad'
					maxLength={2}
					value={enteredNumber}
					onChangeText={onChange}
				/>
				<View style={styles.btnContainer}>
					<View style={styles.btn}>
						<Button onPress={resetInput}>Reset</Button>
					</View>
					<View style={styles.btn}>
						<Button onPress={confirmInput}>Confirm</Button>
					</View>
				</View>
			</Card>
		</View>
	);

}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: "center"
	},
	input: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		textAlign: 'center'
	},
	btnContainer: {
		flexDirection: 'row',
	},
	btn: {
		flex: 1
	},
	titleInput: {
		color: Colors.white,
		fontSize: 24
	}
})