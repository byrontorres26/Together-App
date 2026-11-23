import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemeColors, useTheme } from '../../src/contexts/ThemeContext'
import CustomButton from '../../src/components/CustomButton'
import { WelcomeIllustration } from '../../src/components/WelcomeIllustration'


export default function Welcome() {
  const { colors } = useTheme()
  const styles = getStyles(colors)

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>
      <View style={styles.topRow}>
        <Text style={styles.mono}>POR AVIÓN</Text>

        <Text style={styles.stamp}>N.º 001</Text>
      </View>

      {/* Illustration */}
      <WelcomeIllustration
        ink={colors.primaryblue}
        soft={colors.primarydark}
        blue={colors.primarydark}
        red={colors.primaryred}
      />

      {/* Text */}
      <View style={styles.textBlock}>
        <Text style={styles.title}>
          Lejos, pero juntos.
        </Text>

        <Text style={styles.subtitle}>
          Un espacio para dos: tu foto del día, la hora de allá y los
          días que faltan para verse.
        </Text>
      </View>

      {/* Botones */}
      <View style={styles.buttons}>
        <CustomButton
          title="Crear cuenta"
          variant="primary"
          onPressButton={() => {}}
        />

        <CustomButton
          title="Ya tengo cuenta"
          variant="secondary"
          onPressButton={() => {}}
        />
      </View>
    </SafeAreaView>
  )
}

const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 28,
    },

    topRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 16,
    },

    mono: {
      fontFamily: 'DMMono_400Regular',
      fontSize: 12,
      letterSpacing: 2,
      color: colors.primarydark,
      opacity: 0.7,
    },

    stamp: {
      fontFamily: 'DMMono_400Regular',
      fontSize: 12,
      letterSpacing: 1.5,
      color: colors.primaryred,
      borderWidth: 1.5,
      borderColor: colors.primaryred,
      paddingVertical: 4,
      paddingHorizontal: 8,
    },

    textBlock: {
      gap: 14,
      marginTop: 8,
    },

    title: {
      fontFamily: 'YoungSerif_400Regular',
      fontSize: 46,
      lineHeight: 48,
      color: colors.primarydark,
    },

    subtitle: {
      fontFamily: 'Figtree_400Regular',
      fontSize: 17,
      lineHeight: 25,
      color: colors.primarydark,
      opacity: 0.75,
    },

    buttons: {
      marginTop: 'auto',
      gap: 12,
      paddingBottom: 12,
    },
  })
