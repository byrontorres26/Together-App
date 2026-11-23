import Stripe from '../../assets/airmail-stripe.svg';
import { ThemeColors, useTheme } from '../contexts/ThemeContext';
import { StyleSheet } from 'react-native';

export function AirmailStripe() {
  const { colors } = useTheme()
  const styles = getStyles(colors)
  return <Stripe width="100%" height={10} style = {styles.background}  />;
}


const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    background: {
      backgroundColor: colors.background,
    },
  })

