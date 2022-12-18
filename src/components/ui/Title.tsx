import { StyleSheet, Text } from "react-native"
import { Colors } from "../../constants/color";

interface Props {
	title: string;
}

export const Title = ({ title }: Props) => (
	<Text style={styles.title}>{title}</Text>
)

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.white,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: Colors.white,
		borderRadius: 10,
		padding: 10,
	}
})