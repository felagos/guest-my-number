import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import { Button } from "../components/ui/Button";
import { Colors } from "../constants/color";

interface Props {
	onPickNumber: (_number: number) => void;
}

export const StartGameScreen = ({ onPickNumber }: Props) => {
	const [enteredNumber, setEnteredNumber] = useState("");

	const onChange = (input: string) => setEnteredNumber(input);

	const confirmInput = () => {
		const number = parseInt(enteredNumber);

		if(!/[0-9]{1,2}/.test(enteredNumber)) 
			return Alert.alert("Invalid number !", "Enter a valid number");
		if(number <= 0 || number > 99) 
			return Alert.alert("Invalid number !", "Enter a number between 1 and 99");

		onPickNumber(number);
	}

	const resetInput = () => {
		setEnteredNumber("");
	}
	
	return (
		<View style={styles.container}>
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
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		marginTop: 100,
		marginHorizontal: 24,
		backgroundColor: Colors.primary800,
		borderRadius: 8,
		shadowColor: Colors.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 6,
		elevation: 5,
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
	}
})