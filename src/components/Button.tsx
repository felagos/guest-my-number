import { ReactNode } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
	children: ReactNode | ReactNode[];
}

export const Button = ({ children }: Props) => {

	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} android_ripple={styles.ripple}>
				<Text style={styles.btnText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: 'hidden'
	},
	buttonInnerContainer: {
		backgroundColor: '#72063c',
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,

	},
	btnText: {
		color: '#ffffffff',
		textAlign: 'center'
	},
	ripple: {
		color: '#640233'
	},
	pressed: {
		opacity: 0.75,
	}
})