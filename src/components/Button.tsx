import { ReactNode } from "react";
import { View, Text } from "react-native";

interface Props {
	children: ReactNode | ReactNode[];
}

export const Button = ({ children }: Props) => {
	return (
		<View>
			<Text>{children}</Text>
		</View>
	);	
}