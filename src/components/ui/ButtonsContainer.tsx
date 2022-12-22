import { ReactNode } from "react"
import { StyleSheet, View } from "react-native"

interface Props {
	children: ReactNode[],
	style?: { [key: string]: any }
}

export const ButtonsContainer = ({ children, style }: Props) => (
	<View style={[styles.btnContainer, style]}>
		{
			children.map((btn, idx) => (
				<View key={idx} style={styles.btn}>
					{btn}
				</View>
			))
		}
	</View>
)

const styles = StyleSheet.create({
	btnContainer: {
		flexDirection: "row"
	},
	btn: {
		flex: 1
	}
})