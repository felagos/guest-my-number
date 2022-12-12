import { ReactNode } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
	children: ReactNode | ReactNode[];
}

export const Button = ({ children }: Props) => {
	return (
		<Pressable>
			<View style={styles.container}>
				<Text style={styles.btnText}>{children}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#72063c',
		borderRadius: 28,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
		margin: 4
	}, 
	btnText: {
		color: '#ffffffff',
		textAlign: 'center'
	}
})