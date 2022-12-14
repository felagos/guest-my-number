import { ReactNode } from "react"
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/color";

interface Props {
	children: ReactNode | ReactNode[]
}

export const NumberContainer = ({ children }: Props) => (
	<View style={styles.container}>
		<Text style={styles.numberText}>{children}</Text>
	</View>
)

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.accent500,
		padding: 24,
		margin: 24,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberText: {
		fontFamily: 'open-sans-bold',
		color: Colors.accent500,
		fontSize: 36,
	}
})