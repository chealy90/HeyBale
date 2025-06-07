import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Slot, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator, Text} from "react-native"
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useRef, useEffect} from "react"
import 'react-native-reanimated';
import '../firebase' //called app




import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();


  /*
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  */

  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
      async function checkToken() {
        try {
          const token = await AsyncStorage.getItem('userToken');
          setIsLoggedIn(!!token);
        } catch {
          setIsLoggedIn(false);
        } finally {
          setIsLoading(false);
        }
      }
      checkToken();
    }, []);


  if (isLoading) {
    return (<View><Text>Loading...</Text></View>)
  }


  return (
    <GestureHandlerRootView style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}
        initialRouteName={isLoggedIn ? "/" : "Login"}
        />
    </GestureHandlerRootView>
  );
}

// <Stack.Screen name="(tabs)" options={{ headerShown: false }} />



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
