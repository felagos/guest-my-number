import { StyleSheet, TextInput, View } from "react-native";
import { Button } from "../components/Button";

export const StartGameScreen = () => {

	return (
		<View style={styles.container}>
			<TextInput style={styles.input} keyboardType='number-pad' maxLength={2} />
			<Button>Reset</Button>
			<Button>Confirm</Button>
		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		marginTop: 100,
		marginHorizontal: 24,
		backgroundColor: '#72063c',
		borderRadius: 8,
		shadowColor: "#000",
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
		borderBottomColor: '#ddb52f',
		borderBottomWidth: 2,
		color: '#ddb52f',
		marginVertical: 8,
		textAlign: 'center'
	}
})