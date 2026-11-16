import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from './src/contexts/ThemeContext';
import CustomButton from './src/components/CustomButton';
import { StackNavigator } from './src/navigation/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer>
    </ThemeProvider>
  );
}

