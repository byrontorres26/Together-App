import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { CustomInputProps, InputVariant } from '../utils/types/InputProps'
import { ThemeColors, useTheme } from '../contexts/ThemeContext';


export default function CustomInput({ placeholder,
    isSecurityText = false,
    onChangeText,
    variant = 'normal',
    value }: CustomInputProps) {

    const { colors } = useTheme();
    const styles = getStyles(colors);
    return (

            <View>
                <TextInput
                    style = {styles.input}
                    onChangeText={onChangeText}
                    value={value}
                    secureTextEntry={isSecurityText}
                    placeholder= {placeholder}
                />
            </View>
    )
}

const getStyles = (colors: ThemeColors) =>

    StyleSheet.create({
        input: {
            backgroundColor: colors.background,
            height: 48,
            paddingHorizontal: 20,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: colors.border,
            fontFamily: 'Figtree_700Bold',
            color: colors.textSecondary,
            borderWidth: 1
        },

    })
