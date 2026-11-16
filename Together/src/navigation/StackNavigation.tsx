import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Login } from '../screens/Login'

export type RootStackParamList = {
    Login : undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const StackNavigator = () => {
    return(
        <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{headerShown: false}}>
            <Stack.Screen name = 'Login' component={Login}/>
        </Stack.Navigator>

    )

}