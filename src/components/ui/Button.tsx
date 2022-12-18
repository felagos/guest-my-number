import { ReactNode } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/color";

interface Props {
	children: ReactNode | ReactNode[];
	onPress?: () => void;
}

export const Button = ({ children, onPress }: Props) => {

	const getRipple = (pressed: boolean) => {
		if (pressed) return [styles.buttonInnerContainer, styles.pressed]
		return styles.buttonInnerContainer
	}


	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={onPress}
				style={({ pressed }) => getRipple(pressed)}
				android_ripple={styles.ripple}>
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
		backgroundColor: Colors.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,

	},
	btnText: {
		color: Colors.white,
		textAlign: 'center'
	},
	ripple: {
		color: Colors.primary600
	},
	pressed: {
		opacity: 0.75,
	}
})