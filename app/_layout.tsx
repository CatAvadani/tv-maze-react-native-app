import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import FavoritesContextProvider from '@/store/Favorites-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <FavoritesContextProvider>
          <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />

            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen
              name='details'
              options={{
                title: 'Show Details',
                headerStyle: { backgroundColor: '#221642' },
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen name='+not-found' />
          </Stack>
        </FavoritesContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
