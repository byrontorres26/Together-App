import { StyleSheet, Text, View } from 'react-native'
import { ThemeProvider } from './src/contexts/ThemeContext'
import { StackNavigator } from './src/navigation/StackNavigation'
import { NavigationContainer } from '@react-navigation/native'

import { YoungSerif_400Regular } from '@expo-google-fonts/young-serif'

import {
  Figtree_400Regular,
  Figtree_500Medium,
  Figtree_600SemiBold,
  Figtree_700Bold,
  Figtree_800ExtraBold,
} from '@expo-google-fonts/figtree'

import {
  DMMono_300Light,
  DMMono_400Regular,
  DMMono_500Medium,
} from '@expo-google-fonts/dm-mono'

import { useFonts } from 'expo-font'
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { AirmailStripe } from './src/components/Airmail'

export default function App() {
  const [loaded, error] = useFonts({
    YoungSerif_400Regular,

    Figtree_400Regular,
    Figtree_500Medium,
    Figtree_600SemiBold,
    Figtree_700Bold,
    Figtree_800ExtraBold,

    DMMono_300Light,
    DMMono_400Regular,
    DMMono_500Medium,
  })

  if (!loaded && !error) {
    return null
  }

return (
  <ThemeProvider>
    <SafeAreaProvider> 
            <AirmailStripe></AirmailStripe>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>

    </SafeAreaProvider>
  </ThemeProvider>
)
}
