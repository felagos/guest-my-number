import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppScreen } from './src/screens/AppScreen';

export default function App() {

	return (
		<SafeAreaProvider>
			<AppScreen />
		</SafeAreaProvider>
	);

}