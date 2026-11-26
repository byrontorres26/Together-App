import {Pressable, View, Text, StyleSheet} from "react-native";
import {ButtonProps, CustomButtonVariant} from "../utils/types/ButtonProps";
import { ThemeColors, useTheme } from "../contexts/ThemeContext";


export default function CustomButton({title, onPressButton, variant = "primary", disable= false}: ButtonProps){

    const {colors} = useTheme();
    const styles = getStyles(variant, colors);
    return(
        

        <Pressable onPress = {onPressButton} disabled= {disable} style = {styles.button}>
            <View >
                <Text style = {styles.text}>{title}</Text>
            </View>

        </Pressable>
        

    )
}


    const getStyles = (variant:CustomButtonVariant, colors: ThemeColors) => 
        
        StyleSheet.create({
            button:{
                backgroundColor: variant === 'primary' ? colors.primarydark : variant === 'secondary' ? 
                colors.background : colors.primaryred,
                height: 48,
                paddingHorizontal:20,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center',
                
            },
            text:{
                color: variant === 'primary' ? colors.card: variant === 'secondary' ? 
                colors.primarydark : colors.primaryred,
                fontFamily: 'Figtree_700Bold',
            }

        })