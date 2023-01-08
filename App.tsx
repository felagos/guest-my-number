import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppScreen } from './src/screens/AppScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {

	const [isLoadedFonts] = useFonts({
		'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
	});

	useEffect(() => {
		if (isLoadedFonts) SplashScreen.hideAsync();
	}, [isLoadedFonts])

	if (!isLoadedFonts) return null;

	return (
		<SafeAreaProvider>
			<AppScreen />
		</SafeAreaProvider>
	);

}