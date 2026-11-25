import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemeColors, useTheme } from '../../src/contexts/ThemeContext'
import CustomButton from '../../src/components/CustomButton'
import CustomInput from '../components/CustomInput'
import { useState } from 'react'

export const Register = () => {

    const { colors } = useTheme()
    const styles = getStyles(colors)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')


    return (
        <SafeAreaView style={styles.screen} edges={['top', 'bottom']}>

            {/* Title */}
            <View style={styles.textBlock}>
                <Text style={styles.title}>
                    Registrate
                </Text>
            </View>

            {/* Email */}
            <View style={styles.inputs}>

                <Text style={styles.subtitle}>
                    Nombre:
                </Text>
                <CustomInput
                    placeholder='Pedro Picapiedra'
                    onChangeText={setName}
                    variant='email'
                    value={name}
                />

                {/* Email */}
                <Text style={styles.subtitle}>
                    Correo:
                </Text>
                <CustomInput
                    placeholder='example@email.com'
                    onChangeText={setEmail}
                    variant='email'
                    value={email}
                />
                {/* Password */}
                <Text style={styles.subtitle}>
                    Contrasena:
                </Text>
                <CustomInput
                    placeholder='Ingresa tu contrasena'
                    onChangeText={setPassword}
                    variant='password'
                    value={password}
                />
            </View>
            <View style={styles.button}>
                <CustomButton
                    title="Registrarse"
                    variant="primary"
                    onPressButton={() => { navigation.navigate('Welcome') }}
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

        textBlock: {
            marginTop: 60,
            marginBottom: 32,
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

        inputs: {
            gap: 8,
        },

        button: {
            marginTop: 24,
            paddingBottom: 12,
        },
    })
