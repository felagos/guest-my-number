import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/color";

interface Props {
	children: ReactNode | ReactNode[]
}

export const Card = ({ children }: Props) => (
	<View style={styles.cardContainer}>
		{children}
	</View>
);

const styles = StyleSheet.create({
	cardContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		marginTop: 36,
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
	}
})