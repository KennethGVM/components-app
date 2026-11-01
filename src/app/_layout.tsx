import { allRoutes } from '@/constants/Routes';
import { useThemeColor } from '@/hooks/use-theme';
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../../global.css';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background');
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  });
  useEffect(() => {
    if (loaded || error) {
      if (error) {
        console.error('No se pudieron cargar las fuentes:', error);
      }
      void SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgroundColor, flex: 1 }}
    >
      <ThemeChangerProvider>
        {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            },
            headerStyle: {
              backgroundColor: backgroundColor,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: '',
            }}
          />

          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{
                title: route.title,
                headerShown: !route.title.includes('Slides'),
              }}
            />
          ))}
        </Stack>
        {/* </ThemeProvider> */}
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
